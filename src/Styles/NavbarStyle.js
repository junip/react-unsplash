import { StyleSheet } from "aphrodite/no-important";

const navStyle = StyleSheet.create({
  navbar: {
    display: "flex",
    width: "100%",
    left: "0",
    top: "0",
    position: "fixed",
    "padding-right": "20px",
    "padding-left": "10px",
    "background-color": "#fff",
    "z-index": "1"
  },
  homeElement: {
    display: "flex"
  },
  inputBox: {
    "margin-top": "3px",
    width: "1022px",
    height: "40px",
    borderRadius: "20px",
    "box-sizing": "border-box",
    border: "1px solid #ccc",
    background: "none",
    "background-color": "#eee",
    border: "1px solid transparent",
    color: "#111",
    "align-items": "center",
    "padding-left": "42px",
    "font-size": "inherit",
    ":focus": {
      outline: "none"
    }
  },

  listElement: {
    "list-style": "none",
    display: "inline-block",
    "padding-left": "20px"
  },

  anchorDiv: {
    "text-decoration": "none",
    color: "#999"
  },
  navElements: {
    display: "flex",
    "align-items": "center"
  },
  inputDiv: {
    "padding-left": "16px",
    display: "flex"
  },
  searchButton: {
    border: "none",
    padding: 0,
    color: "#999",
    "background-color": "transparent",
    "text-align": "inherit",
    cursor: "pointer",
    position: "absolute",
    top: "18px",
    left: "75px",
    ":focus": {
      outline: "none",
      top: "17px",
      right: "71px"
    }
  },
  searchIcon: {
    "font-size": "1.4em",
    "font-style": "normal",
    content: "\f002"
  },
  submitPhoto: {
    "padding-left": "46px"
  },
  submitButton: {
    color: "#999",
    "background-color": "#fff",
    "border-color": "#ddd!important",
    display: "inline-block",
    height: "32px",
    padding: "0 11px",
    "font-size": "14px",
    "line-height": "30px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "1px solid transparent",
    "box-shadow": "0 1px 1px rgba(0,0,0,.04)",
    transition: "all .2s ease-in-out",
    "text-align": "center",
    ":hover": {
      color: " #111",
      "border-color": "#999!important"
    },
    ":focus": {
      outline: "none"
    }
  },
  bell: {
    "padding-left": "20px"
  },
  avatar: {
    "padding-left": "20px"
  },
  bellIcon: {
    "text-decoration": "none",
    "font-size": "1.5em",
    color: "#999"
  },
  homeIconImage: {
    width: "31px",
    height: "34px",
    "margin-top": "6px"
  },
  avatarImg: {
    height: "34px",
    width: "34px",
    borderRadius: "18px",
    "margin-top": "3px"
  },
  marginPhotos: {
    marginBottom: "20px",
    marginLeft: "50px",
    marginRight: "50px"
  }
});

export default navStyle;
