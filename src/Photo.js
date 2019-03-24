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
    position: "relative",
    ":hover": {
      cursor: "zoom-in"
    }
  },
  inlineDiv: {
    display: "flex"
  },
  heartIcon: {
    color: "#f54b48"
  },
  buttonMargin: {
    "margin-left": "8px"
  },
  toRight: {
    position: "absolute",
    right: "45px"
  },

  lowerDiv: {
    position: "relative",
    bottom: "54px",
    left: "21px"
  },

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
    position: "absolute",
    top: "20px",
    right: "24px"
  },
  downloadIcon: {
    width: "20px",
    height: "18px",
    "border-radius": "4px",
    "padding-top": "7px",
    "justify-content": "center"
  }
});
const photo = props => {
  const { photoUrl, likes, profilePhoto, fullName, downloadUrl } = props;
  return (
    <div className={css(phtoStyle.imageDiv)}>
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
      <div className={css(phtoStyle.inlineDiv, phtoStyle.lowerDiv)}>
        <img src={profilePhoto} className={css(phtoStyle.userIcon)} />
        <div className={css(phtoStyle.buttonMargin)}>
          <span className={css(phtoStyle.fullNameCss)}>{fullName}</span>
        </div>
        <a
          className={css(buttonStyle.button, phtoStyle.toRight)}
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
