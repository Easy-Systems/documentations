import type { BlogPost } from '../pages/blogs';

// extract front matter metadata
export function extractFrontMatter(content: string): Record<string, any> {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return {};

  const metadata: Record<string, any> = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      metadata[key] = value.replace(/^["']|["']$/g, '');
    }
  });
  return metadata;
}

// extract first paragraph as description
export function extractDescription(content: string): string {
  const body = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
  const lines = body.split('\n');
  for (const line of lines) {
    const clean = line.trim();
    if (clean && !clean.startsWith('#') && !clean.startsWith('!')) {
      return clean
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .substring(0, 150) + (clean.length > 150 ? '...' : '');
    }
  }
  return 'No description available';
}

// reading time (200 WPM)
export function calculateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

// category detection
export function getCategoryFromPath(path: string): string {
  if (path.includes('/changelogs/')) return 'changelog';
  if (path.includes('/community/')) return 'community';
  return 'general';
}

// date formatting
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// new posts -> 7 days
export function isNewPost(pubDate: string): boolean {
  const postDate = new Date(pubDate);
  const diff = Date.now() - postDate.getTime();
  return diff / (1000 * 60 * 60 * 24) <= 7;
}

// category colors
export function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case 'community': return 'linear-gradient(135deg, #4ea4df 0%, #2d7dd2 100%)';
    case 'changelog': return 'linear-gradient(135deg, #98ce86 0%, #6bbf6b 100%)';
    case 'announcement': return 'linear-gradient(135deg, #f16aec 0%, #d63384 100%)';
    default: return 'linear-gradient(135deg, #a1a7f6 0%, #7c82f0 100%)';
  }
}