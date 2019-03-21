import React from "react";
import { css, StyleSheet } from "aphrodite/no-important";

/**
 *  Custom Loader in UI to show loading feature
 */

const keyFrame = {
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
};

const styles = StyleSheet.create({
  loadingStyle: {
    borderRadius: "50%",
    border: "5px solid #f3f3f3",
    "border-top": "5px solid #6a62c1",
    width: "30px",
    height: "30px",
    animation: "spin 1s linear infinite",
    margin: "120px auto 0",
    animationName: keyFrame
  }
});

const Loader = () => {
  return <div className={css(styles.loadingStyle)} />;
};

export default Loader;
