import React from "react";
import ReactDOM from "react-dom";
import unplash from "./Api";
import { css, StyleSheet } from "aphrodite";
import { toJson } from "unsplash-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { photos: [] };
  }

  componentDidMount() {
    unplash.search
      .photos("dog", 1, 15)
      .then(toJson)
      .then(data => {
        if (data) {
          this.setState({ photos: data.results });
          console.log("-----", this.state.photos);
        }
      });
  }

  render() {
    const { photos } = this.state;

    return (
      <div className={css(styles.photo_grid)}>
        <div className={css(styles.phto_grid_column)}>
          {photos.map(photo => {
            const imageStyle = {
              backgroundImage: `url(${photo.urls.small})`
            };
            return <div style={imageStyle} />;
          })}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  photo_grid: {
    display: "flex",
    "justify-content": "center"
  },
  phto_grid_column: {
    width: "32%"
  }
});

ReactDOM.render(React.createElement(App), document.getElementById("root"));
