import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () =>
  <footer className="footer">
    <div className="row">
      <div>
        <ul className="social-links">
          <li><SocialIcon url="http://linkedin.com/in/jaketrent"/></li>
          <li><SocialIcon url="http://facebook.com/in/jaketrent"/></li>
          <li><SocialIcon url="http://twitter.com/in/jaketrent"/></li>
          <li><SocialIcon url="http://instagram.com/in/jaketrent"/></li>
        </ul>
      </div>
    </div>
    <div className="copyright row">
      <p>
        Copyright &copy; 2019 by Minkee Sung. All rights reserved
      </p>
    </div>
  </footer>
export default Footer
