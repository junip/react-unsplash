import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import buttonStyle from "./Styles/ButtonStyle";
import download from "./images/download_icon.png";

const phtoStyle = StyleSheet.create({
  unsplashPhotoDiv: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    ":hover": {
      cursor: "zoom-in"
    }
  },
  likesDiv: {
    display: "flex",
    "justify-content": "flex-end",
    position: "absolute",
    right: "20px",
    top: "20px"
  },
  heartIcon: {
    color: "#f54b48"
  },
  imageStyle: {
    width: "100%",
    display: "block",
    borderRadius: "2px"
  },
  footerDiv: {
    display: "flex",
    position: "absolute",
    bottom: "20px",
    left: "20px"
  },
  buttonMargin: {
    "margin-left": "8px"
  },
  fullNameCss: {
    color: "white",
    position: "relative",
    top: "5px"
  },
  userIcon: {
    "border-radius": "18px"
  },
  downloadPhoto: {
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
  }
});
const photo = props => {
  const { photoUrl, likes, profilePhoto, fullName, downloadUrl } = props;
  return (
    <div className={css(phtoStyle.unsplashPhotoDiv)}>
      <div className={css(phtoStyle.likesDiv)}>
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
      <div className={css(phtoStyle.footerDiv)}>
        <img src={profilePhoto} className={css(phtoStyle.userIcon)} />
        <div className={css(phtoStyle.buttonMargin)}>
          <span className={css(phtoStyle.fullNameCss)}>{fullName}</span>
        </div>
      </div>
      <div className={css(phtoStyle.downloadPhoto)}>
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
