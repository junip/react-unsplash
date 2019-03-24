import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import buttonStyle from "./Styles/ButtonStyle";
import download from "./images/download_icon.png";

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
  inlineDiv: {
    display: "flex",
    position: "absolute",
    bottom: "20px",
    left: "20px"
  },
  heartIcon: {
    color: "#f54b48"
  },
  buttonMargin: {
    "margin-left": "8px"
  },
  toRight: {
    right: "45px"
  },

  lowerDiv: {},

  fullNameCss: {
    color: "white",
    position: "relative",
    top: "5px"
  },
  userIcon: {
    "border-radius": "18px"
  },
  upperDiv: {
    display: "flex",
    "justify-content": "flex-end",
    position: "absolute",
    right: "20px",
    top: "20px"
  },
  placeRight: {
    float: "right"
  },

  downloadDiv: {
    display: "flex",
    "justify-content": "flex-end",
    position: "absolute",
    bottom: "20px",
    right: "20px"
  },
  downloadIcon: {
    width: "20px",
    height: "18px",
    "border-radius": "4px",
    "padding-top": "7px",
    "justify-content": "center"
  },
  photoRenderDiv: {
    width: "100%",
    overflow: "hidden",
    position: "relative"
  }
});
const photo = props => {
  const { photoUrl, likes, profilePhoto, fullName, downloadUrl } = props;
  return (
    <div className={css(phtoStyle.photoRenderDiv)}>
      <div className={css(phtoStyle.upperDiv)}>
        <div className={css(buttonStyle.button)}>
          <span className={css(phtoStyle.heartIcon)}>
            <i className="fas fa-heart" />
          </span>{" "}
          {likes}
        </div>
        <div className={css(buttonStyle.button, phtoStyle.buttonMargin)}>
          <i className="fas fa-plus" /> Collect
        </div>
      </div>
      <img src={photoUrl} className={css(phtoStyle.imageStyle)} />
      <div className={css(phtoStyle.inlineDiv)}>
        <img src={profilePhoto} className={css(phtoStyle.userIcon)} />
        <div className={css(phtoStyle.buttonMargin)}>
          <span className={css(phtoStyle.fullNameCss)}>{fullName}</span>
        </div>
      </div>
      <div className={css(phtoStyle.downloadDiv)}>
        <a
          className={css(buttonStyle.button)}
          href={`${downloadUrl}?force=true`}
          target="_blank"
        >
          <img src={download} className={css(phtoStyle.downloadIcon)} />
        </a>
      </div>
    </div>
  );
};
export default photo;
