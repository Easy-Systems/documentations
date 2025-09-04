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
      
      // Handle array values like authors: [themelon]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim());
      } else {
        // Remove quotes if present
        value = value.replace(/^["']|["']$/g, '');
      }
      
      metadata[key] = value;
    }
  });
  return metadata;
}

function getCategoryFromPath(relativePath) {
  if (relativePath.includes('/changelogs/')) return 'changelog';
  if (relativePath.includes('/community/')) return 'community';
  return 'general';
}

function calculateReadingTime(content) {
  const words = content.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

// markdown to HTML converter
function markdownToHtml(markdown) {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p><h1>/g, '<h1>')
    .replace(/<p><h2>/g, '<h2>')
    .replace(/<p><h3>/g, '<h3>')
    .replace(/<\/h1><\/p>/g, '</h1>')
    .replace(/<\/h2><\/p>/g, '</h2>')
    .replace(/<\/h3><\/p>/g, '</h3>');
}

// --- plugin ---
module.exports = function blogRssPlugin(context, options) {
  return {
    name: 'blog-rss-plugin',
    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      const posts = [];
      let authors = {};
      let tags = {};

      try {
        // Load authors.yml & tags.yml
        authors = await readYamlFile(path.join(blogDir, 'authors.yml'));
        tags = await readYamlFile(path.join(blogDir, 'tags.yml'));

        // Collect blog posts
        const allFiles = await readDirRecursive(blogDir);

        for (const filePath of allFiles) {
          const content = await fs.readFile(filePath, 'utf-8');
          const metadata = extractFrontMatter(content);
          if (!Object.keys(metadata).length) continue;

          const relativePath = path
            .relative(blogDir, filePath)
            .replace(/\.(md|mdx)$/, '');

          const category = getCategoryFromPath(relativePath);
          const authorKey = Array.isArray(metadata.authors) ? metadata.authors[0] : metadata.author || 'team';
          const authorInfo = authors[authorKey] || { name: 'EasySystems Team' };
          const contentWithoutFrontMatter = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
          const readingTime = calculateReadingTime(contentWithoutFrontMatter);

          // Convert markdown to HTML for rendering
          const htmlContent = markdownToHtml(contentWithoutFrontMatter);

          posts.push({
            title: metadata.title || 'Untitled',
            description: metadata.description || 'No description available',
            link: `/blog/${relativePath}`,
            pubDate: metadata.date || new Date().toISOString(),
            category,
            author: authorInfo.name,
            authorKey,
            readingTime,
            tags: Array.isArray(metadata.tags) ? metadata.tags : (metadata.tags ? metadata.tags.split(',').map((t) => t.trim()) : []),
            slug: relativePath,
            content: htmlContent,
            rawContent: content, // Keep original content with frontmatter
          });
        }

        // Sort newest first
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