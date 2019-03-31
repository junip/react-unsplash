import { StyleSheet } from "aphrodite/no-important";

/**  BASE STYLES
 *   This stylesheet contain common style configuration across the project
 *   Some common styling for linktag, inout box, searchicon has implmented
 *   or we can refactor some styling to common base styles.
 */

const commonStyle = StyleSheet.create({
  linkDecoration: {
    "text-decoration": "none",
    color: "rgb(255, 255, 255)"
  },
  textColor: {
    color: "#fff"
  },
  textWeight: {
    "font-weight": "400"
  },
  highlightText: {
    color: "hsla(0,0%,100%,.55)",
    "text-shadow": "0 1px 8px rgba(0,0,0,.1)"
  }
});

export default commonStyle;
