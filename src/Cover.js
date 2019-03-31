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
  }
});

const imagesrc = "https://images.unsplash.com/photo-1552264351-d89bb9c3ff8b";
class Cover extends React.Component {
  render() {
    return (
      <div>
        <img src={imagesrc} className="random" />
        <div className="cover-content">
          <input
            className="coverSearchBox"
            type="text"
            placeholder="Search free high-resolution photos"
          />
        </div>
        <div className="footer-div">
          <div class="left-div">
            <span
              className={css(commonStyle.highlightText, coverStyle.applyMargin)}
            >
              Photo of the day by
            </span>{" "}
            <a className={css(commonStyle.linkDecoration)} href="/@spenas88">
              Gabriel
            </a>
          </div>
          <div class="center-div">
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
  }
}

export default Cover;
