import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import styles from './styles2.module.css';

type Post = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category: string;
  author?: string;
  readingTime?: string;
  slug?: string;
};

const LatestBlog: React.FC = () => {
  const globalData = useGlobalData();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Get posts from global data (plugin)
        const blogPosts = (globalData as any).blogPosts as Post[];
        if (blogPosts && Array.isArray(blogPosts) && blogPosts.length > 0) {
          // Take the latest 3 posts
          setPosts(blogPosts.slice(0, 3));
        } else {
          // Fallback to empty array
          setPosts([]);
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, [globalData]);

  const isNewPost = (pubDate: string) => {
    const postDate = new Date(pubDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'community': return 'linear-gradient(135deg, #4ea4df 0%, #2d7dd2 100%)';
      case 'changelog': return 'linear-gradient(135deg, #98ce86 0%, #6bbf6b 100%)';
      case 'announcement': return 'linear-gradient(135deg, #f16aec 0%, #d63384 100%)';
      default: return 'linear-gradient(135deg, #a1a7f6 0%, #7c82f0 100%)';
    }
  };

  if (loading) {
    return (
      <div className={styles.blogContainer}>
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading latest updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
      {posts.length > 0 ? (
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {formatDate(post.pubDate)}
                  </span>
                  <span className={styles.postCategory}>
                    <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    {post.category}
                  </span>
                </div>
                {isNewPost(post.pubDate) && (
                  <div className={styles.newBadge}>
                    <span className={styles.newBadgeText}>🔥 New</span>
                  </div>
                )}
              </div>
              
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>
                  <Link to={`/blogs?post=${post.slug || post.link.replace('/blog/', '')}`} className={styles.postLink}>
                    {post.title}
                  </Link>
                </h3>
                <p className={styles.postDescription}>{post.description}</p>
              </div>
              
              <div className={styles.postFooter}>
                <Link to={`/blogs?post=${post.slug || post.link.replace('/blog/', '')}`} className={styles.readMoreButton}>
                  <span>Read More</span>
                  <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              <div className={styles.cardGlow} style={{ background: getCategoryColor(post.category) }}></div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.errorState}>
          <div className={styles.errorIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h3>No posts available</h3>
          <p>No blog posts found. Check back later for updates!</p>
        </div>
      )}
    </div>
  );
};

export default LatestBlog;