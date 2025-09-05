const path = require('path');
const fs = require('fs').promises;
const yaml = require('js-yaml');

// helpers
async function readYamlFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return yaml.load(content) || {};
  } catch {
    return {};
  }
}

async function readDirRecursive(dir) {
  const files = [];
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        const subFiles = await readDirRecursive(fullPath);
        files.push(...subFiles);
      } else if (item.isFile() && /\.(md|mdx)$/.test(item.name)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error('Error reading directory:', dir, error);
  }
  return files;
}

function extractFrontMatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return {};

  const frontMatter = match[1];
  const metadata = {};
  frontMatter.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // array values e.g. authors: [themelon]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim());
      } else {
        // remove quotes if present
        value = value.replace(/^["']|["']$/g, '');
      }
      
      metadata[key] = value;
    }
  });
  return metadata;
}

function getCategoryFromPath(relativePath, metadata) {
  // 1. Explicit category/tag in frontmatter wins
  if (metadata && typeof metadata.category === 'string') {
    return metadata.category.toLowerCase();
  }
  if (metadata && Array.isArray(metadata.tags)) {
    const tagLower = metadata.tags.map((t) => String(t).toLowerCase());
    if (tagLower.includes('changelog')) return 'changelog';
    if (tagLower.includes('community')) return 'community';
    if (tagLower.includes('announcement')) return 'announcement';
  } else if (metadata && typeof metadata.tags === 'string') {
    const tagLower = metadata.tags.toLowerCase();
    if (tagLower.includes('changelog')) return 'changelog';
    if (tagLower.includes('community')) return 'community';
    if (tagLower.includes('announcement')) return 'announcement';
  }

  // 2. path-based heuristics
  const rel = `/${relativePath}`.toLowerCase();
  if (rel.includes('/changelogs/')) return 'changelog';
  if (rel.includes('/community/')) return 'community';
  if (rel.includes('/announcement') || rel.includes('/announcements/')) return 'announcement';

  // 3. default
  return 'general';
}

function calculateReadingTime(content) {
  const words = content.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

// normalize & resolve image URL based on relative post path
function resolveImageUrl(src, relativePath) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith('/')) return src;
  if (src.startsWith('../../static/')) {
    return '/' + src.replace('../../static/', '');
  }
  const postDir = path.posix.dirname(relativePath).replace(/\\/g, '/');
  const joined = path.posix.join('/blog', postDir, src).replace(/\\/g, '/');
  return joined;
}

// markdown to HTML converter
function markdownToHtml(markdown, relativePath) {
  let html = markdown;

  // fenced code blocks ```lang\n...```
  html = html.replace(/```([a-zA-Z0-9]*)\n([\s\S]*?)```/g, (m, lang, code) => {
    const language = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${language}>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  html = html
    .replace(/^###### (.*)$/gim, '<h6>$1</h6>')
    .replace(/^##### (.*)$/gim, '<h5>$1</h5>')
    .replace(/^#### (.*)$/gim, '<h4>$1</h4>')
    .replace(/^### (.*)$/gim, '<h3>$1</h3>')
    .replace(/^## (.*)$/gim, '<h2>$1</h2>')
    .replace(/^# (.*)$/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^>\s?(.*)$/gim, '<blockquote>$1</blockquote>');

  // Images ![alt](src) with resolution
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (m, alt, src) => {
    const resolved = resolveImageUrl(src, relativePath);
    return `<img alt="${alt}" src="${resolved}" />`;
  });

  // Links [text](href)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Bold/Italic
  html = html
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/_([^_]+)_/g, '<em>$1</em>');

  // Ordered lists
  html = html.replace(/^(\d+)\.\s+(.+)$/gim, '<ol><li>$2</li></ol>');
  // Unordered lists
  html = html.replace(/^[-*+]\s+(.+)$/gim, '<ul><li>$1</li></ul>');
  // Merge adjacent list containers
  html = html.replace(/<\/(ul|ol)>\s*<\1>/g, '');

  // Admonitions :::type[Title]\n...\n::: (supports ::: or ::::), allow leading spaces
  html = html.replace(/^\s*:{3,}(info|note|tip|success|caution|warning|danger)(?:\[([^\]]+)\])?\s*[\r\n]+([\s\S]*?)^\s*:{3,}\s*$/gim, (m, type, title, body) => {
    const heading = (title && title.trim()) || type.toUpperCase();
    return `<div class=\"admonition admonition-${type}\"><div class=\"admonition-title\">${heading}</div><div class=\"admonition-content\">${body.trim()}</div></div>`;
  });

  // Horizontal line
  html = html.replace(/^---\s*$/gim, '<hr />');

  // Paragraphs
  html = html
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/^(?!<(h\d|ul|ol|li|pre|blockquote|img|p|table|code|div|details|summary)).+$/gim, '<p>$&</p>')
    .replace(/<p>\s*<\/(h\d|li|ul|ol|pre|blockquote|img|table|code|div|details|summary)>/g, '</$1>')
    .replace(/<p><\/p>/g, '');

  return html;
}

function extractFirstImage(markdown, relativePath) {
  const match = markdown.match(/!\[[^\]]*\]\(([^)]+)\)/);
  if (!match) return undefined;
  return resolveImageUrl(match[1], relativePath);
}

// --- plugin ---
module.exports = function blogRssPlugin(context, options) {
  return {
    name: 'blog-rss-plugin',
    getPathsToWatch() {
      const blogDir = path.join(context.siteDir, 'blog');
      return [
        path.join(blogDir, '**', '*.md'),
        path.join(blogDir, '**', '*.mdx'),
        path.join(blogDir, '**', '*.yml'),
        path.join(blogDir, '**', '*.yaml'),
      ];
    },
    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      const posts = [];
      let authors = {};
      let tags = {};

      try {
        // authors.yml & tags.yml
        authors = await readYamlFile(path.join(blogDir, 'authors.yml'));
        tags = await readYamlFile(path.join(blogDir, 'tags.yml'));

        // get blog posts
        const allFiles = await readDirRecursive(blogDir);

        for (const filePath of allFiles) {
          const content = await fs.readFile(filePath, 'utf-8');
          const metadata = extractFrontMatter(content);
          if (!Object.keys(metadata).length) continue;

          const relativePath = path
            .relative(blogDir, filePath)
            .replace(/\.(md|mdx)$/, '');

          const category = getCategoryFromPath(relativePath, metadata);
          const authorKey = Array.isArray(metadata.authors) ? metadata.authors[0] : metadata.author || 'team';
          const authorInfo = authors[authorKey] || { name: 'EasySystems Team' };
          const contentWithoutFrontMatter = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
          const readingTime = calculateReadingTime(contentWithoutFrontMatter);

          // markdown > HTML
          const htmlContent = markdownToHtml(contentWithoutFrontMatter, relativePath);
          const coverImage = metadata.cover ? resolveImageUrl(String(metadata.cover), relativePath) : extractFirstImage(contentWithoutFrontMatter, relativePath);

          posts.push({
            title: metadata.title || 'Untitled',
            description: metadata.description || 'No description available',
            link: `/blog/${relativePath}`,
            pubDate: metadata.date || new Date().toISOString(),
            category,
            author: authorInfo.name,
            authorKey,
            authorAvatar: authorInfo.image_url || authorInfo.imageUrl || undefined,
            authorTitle: authorInfo.title || undefined,
            readingTime,
            tags: Array.isArray(metadata.tags) ? metadata.tags : (metadata.tags ? metadata.tags.split(',').map((t) => t.trim()) : []),
            slug: relativePath,
            content: htmlContent,
            coverImage,
            rawContent: content,
          });
        }

        // newest first
        posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      } catch (err) {
        console.error('Blog RSS Plugin error:', err);
      }

      return { posts, authors, tags };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({
        blogPosts: content.posts,
        blogAuthors: content.authors,
        blogTags: content.tags,
      });
    },
  };
};