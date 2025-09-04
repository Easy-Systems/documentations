import React, { useEffect, useState } from 'react';
import CustomLayout from '@site/src/components/CustomLayout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData';
import { useLocation } from '@docusaurus/router';
import styles from './blog.module.css';
import { 
  formatDate, 
  isNewPost, 
  getCategoryColor 
} from '../utils/blogUtils';

export type BlogPost = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category: string;
  author?: string;
  readingTime?: string;
  slug?: string;
  tags?: string[];
  content?: string;
};

const BlogPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const globalData = useGlobalData();
  const location = useLocation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Get posts from global data (plugin)
        const blogPosts = (globalData as any).blogPosts as BlogPost[];
        
        if (blogPosts && Array.isArray(blogPosts) && blogPosts.length > 0) {
          setPosts(blogPosts);
        } else {
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

  // Handle URL parameters for individual post viewing
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const postSlug = urlParams.get('post');
    
    if (postSlug && posts.length > 0) {
      const post = posts.find(p => p.slug === postSlug || p.link.includes(postSlug));
      if (post) {
        setSelectedPost(post);
      }
    } else {
      setSelectedPost(null);
    }
  }, [location.search, posts]);

  const categories = ['all', 'community', 'changelog', 'announcement'];
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Individual post view
  if (selectedPost) {
    return (
      <CustomLayout>
        <div className={styles.blogPage}>
          <div className="container">
            <div className={styles.postView}>
              <Link to="/blogs" className={styles.backButton}>
                <svg className={styles.backIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Blog
              </Link>
              
              <article className={styles.fullPost}>
                <header className={styles.postHeader}>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {formatDate(selectedPost.pubDate)}
                    </span>
                    <span className={styles.readingTime}>
                      <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      {selectedPost.readingTime}
                    </span>
                  </div>
                  
                  <div className={styles.badges}>
                    <span 
                      className={styles.categoryBadge}
                      style={{ background: getCategoryColor(selectedPost.category) }}
                    >
                      {selectedPost.category}
                    </span>
                    {isNewPost(selectedPost.pubDate) && (
                      <span className={styles.newBadge}>
                        🔥 New
                      </span>
                    )}
                  </div>
                </header>

                <div className={styles.postContent}>
                  <h1 className={styles.postTitle}>{selectedPost.title}</h1>
                  <p className={styles.postDescription}>{selectedPost.description}</p>
                  
                  <div className={styles.postBody}>
                    {selectedPost.content ? (
                      <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    ) : (
                      <p>Content not available for this post.</p>
                    )}
                  </div>
                </div>

                <footer className={styles.postFooter}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{selectedPost.author}</span>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </CustomLayout>
    );
  }

  // Blog list view
  return (
    <CustomLayout>
      <div className={styles.blogPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <Heading as="h1" className={styles.heroTitle}>
                EasySystems Blog
              </Heading>
              <p className={styles.heroSubtitle}>
                Stay updated with the latest news, features, and insights from our team
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className={styles.filtersSection}>
          <div className="container">
            <div className={styles.filtersContainer}>
              {/* Search */}
              <div className={styles.searchContainer}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              {/* Category Filters */}
              <div className={styles.categoryFilters}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonActive : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posts Section */}
        <section className={styles.postsSection}>
          <div className="container">
            {loading ? (
              <div className={styles.loadingState}>
                <div className={styles.loadingSpinner}></div>
                <p>Loading blog posts...</p>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className={styles.postsGrid}>
                {filteredPosts.map((post, index) => (
                  <article key={index} className={styles.blogCard}>
                    <div className={styles.cardHeader}>
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
                        <span className={styles.readingTime}>
                          <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                          </svg>
                          {post.readingTime}
                        </span>
                      </div>
                      <div className={styles.badges}>
                        <span 
                          className={styles.categoryBadge}
                          style={{ background: getCategoryColor(post.category) }}
                        >
                          {post.category}
                        </span>
                        {isNewPost(post.pubDate) && (
                          <span className={styles.newBadge}>
                            🔥 New
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.cardContent}>
                      <h2 className={styles.postTitle}>
                        <Link to={`/blogs?post=${post.slug || post.link.replace('/blog/', '')}`} className={styles.postLink}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className={styles.postDescription}>{post.description}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.authorInfo}>
                        <span className={styles.authorName}>{post.author}</span>
                      </div>
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
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h3>No posts found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </CustomLayout>
  );
};

export default BlogPage;