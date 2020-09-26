import React from 'react';

import './styles.css';

import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import youtubeIcon from '../../assets/youtube.svg';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="/" className="social-links__item">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="/" className="social-links__item">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="/" className="social-links__item">
        <img src={youtubeIcon} alt="Youtube" />
      </a>
    </div>
  );
}

export default SocialLinks;
