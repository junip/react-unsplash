import React from "react";
import { css } from "aphrodite/no-important";
import AvatarImg from "./images/avatar.jpg";
import navStyle from "./Styles/NavbarStyle";
import homeIcon from "./images/ms-icon.png";

const Navbar = () => {
  return (
    <nav className={css(navStyle.navbar)}>
      <div className={css(navStyle.homeElement)}>
        <a className={css(navStyle.anchorDiv)}>
          <img className={css(navStyle.homeIconImage)} src={homeIcon} />
        </a>
        <div className={css(navStyle.inputDiv)}>
          <button className={css(navStyle.searchButton)}>
            <i className="fas fa-search" />
          </button>
          <input
            className={css(navStyle.inputBox)}
            type="text"
            placeholder="Search free high-resolution photos"
          />
        </div>
      </div>
      <div className="clickable-element">
        <ul className="Link-Element">
          <li className={css(navStyle.listElement)}>
            <a href="" className={css(navStyle.anchorDiv)}>
              Home
            </a>
          </li>
          <li className={css(navStyle.listElement)}>
            <a href="" className={css(navStyle.anchorDiv)}>
              Collections
            </a>
          </li>
          <li className={css(navStyle.listElement)}>
            <a href="" className={css(navStyle.anchorDiv)}>
              Explore
            </a>
          </li>
          <li className={css(navStyle.listElement)}>
            <a href="" className={css(navStyle.anchorDiv)}>
              <i className="fas fa-ellipsis-h" />
            </a>
          </li>
        </ul>
      </div>
      <div className={css(navStyle.navElements)}>
        <div className={css(navStyle.submitPhoto)}>
          <button className={css(navStyle.submitButton)}>Submit a photo</button>
        </div>
        <div className={css(navStyle.bell)}>
          <a href="" className={css(navStyle.bellIcon)}>
            <i className="fas fa-bell fa-1x" />
          </a>
        </div>
        <div className={css(navStyle.avatar)}>
          <img src={AvatarImg} className={css(navStyle.avatarImg)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
