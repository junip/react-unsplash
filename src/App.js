import React from "react";
import ReactDOM from "react-dom";
import unsplash from "./Api";
import { toJson } from "unsplash-js";
import Loader from "./Loader";
import Masonry from "react-responsive-masonry";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { photos: [] };
  }

  componentDidMount() {
    unsplash.photos
      .listPhotos(1, 50)
      .then(toJson)
      .then(data => {
        if (data) {
          this.setState({ photos: data });
        }
      });
  }

  render() {
    const { photos } = this.state;
    let loader;
    if (!photos.length) {
      loader = <Loader />;
    }

    return (
      <div>
        {loader}
        <Masonry columnsCount={3} gutter="10px">
          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo.urls.small}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
