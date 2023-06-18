import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBone,
  faPaw,
  faFeatherPointed,
  faCarrot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="main-footer">
        <div className="logoinfo" data-aos="fade-up">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <Link to="tel:+213990669090">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="icon-list">(+213) 990 66 90 90</span>
                </Link>
              </li>
              <li>
                <Link to="mailto:contact@PUPPYLAND.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="icon-list">contact@puppyland.com</span>
                </Link>
              </li>
              <li>
                <Link to="mailto:contact@PUPPYLAND.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="icon-list">
                    21 Rue Didouche Mourad, Algiers
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column links">
          <h1>Browse</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/puppies">Puppies</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h1>Breeds</h1>
          <ul>
            <li className="menu-item">
              <Link to="/breed/cavalier-king-charles">
                <span className="footer-breeds">Cavalier King Charles</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/cocker-spaniel">
                <span className="footer-breeds">Cocker Spaniel</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/german-shepherd">
                <span className="footer-breeds">German Shepherd</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/golden-retriever">
                <span className="footer-breeds">Golden Retriever</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/australian-shepherd">
                <span className="footer-breeds">Australian Shepherd</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/doberman">
                <span className="footer-breeds">Doberman</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/border-collie">
                <span className="footer-breeds">Border Collie</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/rottweiler">
                <span className="footer-breeds">Rottweiler</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/french-bulldog">
                <span className="footer-breeds">French Bulldog</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/breed/pug">
                <span className="footer-breeds">Pug</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <h1>Follow us</h1>
          <div className="sociallogos">
            <div className="logobox">
              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="icon-list">Instagram</span>
              </Link>

              <Link to="#">
                <FontAwesomeIcon icon={faYoutube} />
                <span className="icon-list">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Made with by Noor © Copyright 2021, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
