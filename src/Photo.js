import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

const phtoStyle = StyleSheet.create({
  imageStyle: {
    width: "100%",
    display: "block",
    borderRadius: "2px"
  },
  imageDiv: {
    ":hover": {
      cursor: "zoom-in"
    }
  },
  collectButton: {
    "font-size": "14px",
    "line-height": "30px",
    cursor: "pointer !important",
    "border-radius": "4px",
    color: "#777",
    "background-color": "#ddd!important",
    border: "1px solid transparent",
    height: "32px",
    padding: "0 11px",
    "font-size": "14px",
    "line-height": "30px"
  },
  upperDiv: {
    display: "inline"
  },
  heartIcon: {
    color: "#f54b48"
  },
  buttonMargin: {
    "margin-left": "8px"
  },
  toRight: {
    float: "right"
  }
});
const photo = props => {
  const { photo_url } = props;
  return (
    <div className={css(phtoStyle.imageDiv)}>
      <img src={photo_url} className={css(phtoStyle.imageStyle)} />
      <div className={css(phtoStyle.upperDiv, phtoStyle.toRight)}>
        <button className={css(phtoStyle.collectButton)}>
          <span className={css(phtoStyle.heartIcon)}>
            <i class="fas fa-heart" />
          </span>
        </button>
        <button
          className={css(phtoStyle.collectButton, phtoStyle.buttonMargin)}
        >
          <i class="fas fa-plus" /> Collect
        </button>
      </div>
      <div className />
    </div>
  );
};

export default photo;
