import React from "react";
import "./Styles/Cover.css";
import { css, StyleSheet } from "aphrodite/no-important";
import commonStyle from "./Styles/CommonStyle";

const coverStyle = StyleSheet.create({
  applyMargin: {
    "margin-left": "10px"
  },
  hideDiv: {
    visibility: "hidden"
  },
  title: {
    fontWeight: "700",
    "font-size": "46px",
    "line-height": "1.2",
    color: "#fff"
  },
  textMargin: {
    color: "#fff",
    marginBottom: "25px",
    "font-size": "15px",
    "font-weight": "500"
  },
  trendingText: {
    color: "#decdcd;"
  },
  searchButton: {
    border: "none",
    padding: 0,
    "font-size": "18px",
    color: "#999",
    "background-color": "transparent",
    "text-align": "inherit",
    cursor: "pointer",
    position: "absolute",
    left: "20px",
    bottom: "42px",
    ":focus": {
      outline: "none",
      top: "17px",
      right: "71px"
    }
  }
});

// have used hardcoded image source as unplash doesnot provide the apis for the photo of the day
// you can use what ever you like.

const imagesrc = "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae";

const Cover = () => {
  return (
    <div className="cover-photo">
      <img src={imagesrc} className="random" />
      <div className="cover-content">
        <div className="cover-heading">
          <div className={css(coverStyle.title)}>Unsplash</div>
          <div className={css(commonStyle.textColor, commonStyle.fontWeight)}>
            Beautiful, free photos.
          </div>
          <div className={css(coverStyle.textMargin)}>
            Gifted by the world’s most generous community of photographers. 🎁
          </div>
        </div>
        <div className="asd">
          <button className={css(coverStyle.searchButton)}>
            <i className="fas fa-search" />
          </button>
          <input
            className="coverSearchBox"
            type="text"
            placeholder="Search free high-resolution photos"
          />
        </div>

        <div className="trending-search">
          <span className={css(commonStyle.textColor)}>
            Trending searches:{" "}
          </span>
          <span className={css(coverStyle.trendingText)}>business, </span>
          <span className={css(coverStyle.trendingText)}>computer, </span>
          <span className={css(coverStyle.trendingText)}>nature, </span>
          <span className={css(coverStyle.trendingText)}>love, </span>
          <span className={css(coverStyle.trendingText)}>house </span>
        </div>
      </div>
      <div className="footer-div">
        <div className="left-div">
          <span
            className={css(commonStyle.highlightText, coverStyle.applyMargin)}
          >
            Photo of the day by
          </span>{" "}
          <a className={css(commonStyle.linkDecoration)} href="/@spenas88">
            Gabriel
          </a>
        </div>
        <div className="center-div">
          <span className={css(commonStyle.highlightText)}>
            Read more about the{" "}
          </span>
          <span>
            <a
              className={css(commonStyle.linkDecoration)}
              href="https://unsplash.com/license"
              target="blank"
            >
              {" "}
              Unsplash License
            </a>
          </span>
        </div>
        <div className={css(coverStyle.hideDiv)}>
          Extream Right Div No Content Displayed
        </div>
      </div>
    </div>
  );
};

export default Cover;
