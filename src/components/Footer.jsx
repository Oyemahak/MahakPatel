import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <p>
          Connect with me on{' '}
          <a href="https://www.linkedin.com/in/mahak-patel-167640150/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          ,{' '}
          <a href="https://www.instagram.com/oyemahak/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          , or{' '}
          <a href="mailto:mahakpateluux@gmail.com">Email</a> me at mahakpateluux@gmail.com.
        </p>
      </div>
      <p className="copyright">© 2024 Mahak Patel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;