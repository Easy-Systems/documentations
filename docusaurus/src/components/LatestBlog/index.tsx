import React, { useEffect, useState } from 'react';
import styles from './styles2.module.css';

type Post = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category: string;
};

const LatestBlog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('http://localhost:5000/rss');
        const text = await response.text();
        console.log("Fetched RSS feed:", text);
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        console.log(xml);

        const items = Array.from(xml.querySelectorAll('item')).slice(0, 3);

        const latestPosts = items.map(item => ({
          title: item.querySelector('title')?.textContent || 'No title',
            description: item.querySelector('description')?.textContent || 'No description',
          link: item.querySelector('link')?.textContent || '#',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          category: item.querySelector('category')?.textContent || 'Unlisted',
        }));

        setPosts(latestPosts);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSS();
  }, []);

  const isNewPost = (pubDate: string) => {
    const postDate = new Date(pubDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <div className={styles.latestBlogContainer}>
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post, index) => (
            <li key={index} className={styles.postItem}>
              <a href={post.link} className={styles.postLink}>
                {post.title}
              </a>
                <p className={styles.postDescription}>{post.description}</p>
              <p className={styles.postDate}>{new Date(post.pubDate).toLocaleDateString()}</p>
              <a href={`/blog/tags/${post.category}`} className={styles.postCategory}>
                {post.category}
              </a>
              {isNewPost(post.pubDate) && (
                <span className={styles.newBadge}>
                  🔥 New
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noPostsMessage}>
          No posts available. This could be due to a technical error! Try again later, if this issue persists <a href="https://ezsys.link/support">contact us</a>.
        </p>
      )}
    </div>
  );
};

export default LatestBlog;