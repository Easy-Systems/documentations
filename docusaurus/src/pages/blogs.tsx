import React, { useEffect, useState } from 'react';
import CustomLayout from '@site/src/components/CustomLayout';
import Head from '@docusaurus/Head';
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
  authorAvatar?: string;
  authorTitle?: string;
  readingTime?: string;
  slug?: string;
  tags?: string[];
  content?: string;
  coverImage?: string;
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
        
        // Get posts from global data provided by the custom plugin namespace
        const pluginData = (globalData as any)['blog-rss-plugin']?.default;
        const blogPosts = (pluginData?.blogPosts || []) as BlogPost[];
        
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
        <Head>
          <title>{`${selectedPost.title} | ${siteConfig.title}`}</title>
          <meta name="description" content={selectedPost.description} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={selectedPost.title} />
          <meta property="og:description" content={selectedPost.description} />
          <meta property="og:url" content={`${siteConfig.url}/blogs?post=${selectedPost.slug || ''}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={selectedPost.title} />
          <meta name="twitter:description" content={selectedPost.description} />
        </Head>
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
                    {Array.isArray(selectedPost.tags) && selectedPost.tags.length > 0 && (
                      <div className={styles.tagList}>
                        {selectedPost.tags.map((tag) => (
                          <span key={tag} className={styles.tagItem}>#{tag}</span>
                        ))}
                      </div>
                    )}
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
                  
                  {selectedPost.coverImage && (
                    <div className={styles.coverImageWrapper}>
                      <img src={selectedPost.coverImage} alt={selectedPost.title} className={styles.coverImage} />
                    </div>
                  )}

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
                  <div className={styles.shareButtons}>
                    <a
                      className={styles.shareButton}
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(siteConfig.url + '/blogs?post=' + (selectedPost.slug || ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 0 0 1.86-2.34 8.49 8.49 0 0 1-2.69 1.03 4.23 4.23 0 0 0-7.2 3.86A12 12 0 0 1 3.15 4.6a4.22 4.22 0 0 0 1.31 5.64 4.2 4.2 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.39 4.15 4.25 4.25 0 0 1-1.91.07 4.23 4.23 0 0 0 3.95 2.94A8.49 8.49 0 0 1 2 19.54a12 12 0 0 0 6.49 1.9c7.79 0 12.06-6.45 12.06-12.05 0-.18-.01-.35-.02-.53A8.62 8.62 0 0 0 22.46 6z"/></svg>
                      <span>Share</span>
                    </a>
                    <a
                      className={styles.shareButton}
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteConfig.url + '/blogs?post=' + (selectedPost.slug || ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.05c.53-1 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.16c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/></svg>
                      <span>Share</span>
                    </a>
                    <button
                      className={styles.shareButton}
                      onClick={() => navigator.clipboard.writeText(`${siteConfig.url}/blogs?post=${selectedPost.slug || ''}`)}
                      aria-label="Copy link"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5zm7-3h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V9z"/></svg>
                      <span>Copy</span>
                    </button>
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
                  placeholder="Search posts... e.g. 'Staff applications'"
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
                    {post.coverImage && (
                      <div className={styles.cardCover}>
                        <img src={post.coverImage} alt={post.title} />
                      </div>
                    )}
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
                        {post.authorAvatar && (
                          <img className={styles.authorAvatar} src={post.authorAvatar} alt={post.author || 'Author'} />
                        )}
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