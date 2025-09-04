import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src="/img/brand/easysystems_logo.png" 
            alt="EasySystems Logo" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>EasySystems</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <Link 
              to="/docs/intro" 
              className={`${styles.navLink} ${isActive('/docs/intro') ? styles.active : ''}`}
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Documentation
            </Link>
            
            <Link 
              to="/blogs" 
              className={`${styles.navLink} ${isActive('/blogs') ? styles.active : ''}`}
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Blog
            </Link>

            <div className={styles.dropdown}>
              <button className={`${styles.navLink} ${styles.dropdownToggle}`}>
                <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                Apps
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <Link to="/docs/easythreads/intro" className={styles.dropdownItem}>
                  <img src="/img/brand/easythreads_logo.png" alt="EasyThreads" className={styles.appIcon} />
                  <div>
                    <span className={styles.appName}>EasyThreads</span>
                    <span className={styles.appDesc}>Thread Management</span>
                  </div>
                </Link>
                <Link to="/docs/easyvoice/intro" className={styles.dropdownItem}>
                  <img src="/img/brand/easyvoice_logo.png" alt="EasyVoice" className={styles.appIcon} />
                  <div>
                    <span className={styles.appName}>EasyVoice</span>
                    <span className={styles.appDesc}>Voice Channels</span>
                  </div>
                </Link>
                <Link to="/docs/easyyaudab/intro" className={styles.dropdownItem}>
                  <img src="/img/brand/easyyaudab_logo.png" alt="EasyYaudab" className={styles.appIcon} />
                  <div>
                    <span className={styles.appName}>EasyYaudab</span>
                    <span className={styles.appDesc}>AI Assistant</span>
                  </div>
                </Link>
                <Link to="/docs/easylevel/intro" className={styles.dropdownItem}>
                  <img src="/img/brand/easylevel_logo.png" alt="EasyLevel" className={styles.appIcon} />
                  <div>
                    <span className={styles.appName}>EasyLevel</span>
                    <span className={styles.appDesc}>Leveling System</span>
                  </div>
                </Link>
              </div>
            </div>

            <Link 
              to="/docs/opensource" 
              className={`${styles.navLink} ${isActive('/docs/opensource') ? styles.active : ''}`}
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Contribute
            </Link>
          </div>

          <div className={styles.navActions}>
            <a 
              href="https://ezsys.link/support" 
              className={styles.supportButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Support
            </a>
            
            <a 
              href="https://ezsys.link/premium" 
              className={styles.premiumButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Premium
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          <Link 
            to="/docs/intro" 
            className={`${styles.mobileNavLink} ${isActive('/docs/intro') ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Documentation
          </Link>
          
          <Link 
            to="/blogs" 
            className={`${styles.mobileNavLink} ${isActive('/blogs') ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Blog
          </Link>

          <div className={styles.mobileDropdown}>
            <div className={styles.mobileDropdownHeader}>
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Apps
            </div>
            <div className={styles.mobileDropdownItems}>
              <Link to="/docs/easythreads/intro" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                <img src="/img/brand/easythreads_logo.png" alt="EasyThreads" className={styles.appIcon} />
                <span>EasyThreads</span>
              </Link>
              <Link to="/docs/easyvoice/intro" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                <img src="/img/brand/easyvoice_logo.png" alt="EasyVoice" className={styles.appIcon} />
                <span>EasyVoice</span>
              </Link>
              <Link to="/docs/easyyaudab/intro" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                <img src="/img/brand/easyyaudab_logo.png" alt="EasyYaudab" className={styles.appIcon} />
                <span>EasyYaudab</span>
              </Link>
              <Link to="/docs/easylevel/intro" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                <img src="/img/brand/easylevel_logo.png" alt="EasyLevel" className={styles.appIcon} />
                <span>EasyLevel</span>
              </Link>
            </div>
          </div>

          <Link 
            to="/docs/opensource" 
            className={`${styles.mobileNavLink} ${isActive('/docs/opensource') ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            Contribute
          </Link>
        </div>

        <div className={styles.mobileNavActions}>
          <a 
            href="https://ezsys.link/support" 
            className={styles.mobileSupportButton}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Support Server
          </a>
          
          <a 
            href="https://ezsys.link/premium" 
            className={styles.mobilePremiumButton}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Premium
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
