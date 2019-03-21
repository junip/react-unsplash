import React from "react";
import ReactDOM from "react-dom";
import unsplash from "./Api";
import { toJson } from "unsplash-js";
import Loader from "./Loader";
import Masonry from "react-responsive-masonry";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      photos: [],
      page: 1,
      per_page: 50,
      isLoading: false
    };
    
  }

  fetchPhotos() {
    unsplash.photos
      .listPhotos(this.state.page, this.state.per_page)
      .then(toJson)
      .then(data => {
        if (data) {
          if(this.state.photos.length) {
            let photos = this.state.photos;
            data = photos.concat(data);
            this.setState({ photos: data, isLoading: false });
          } else {
            this.setState({ photos: data, isLoading: false });
          }
        }
      });
  }

  componentDidMount() {
    this.fetchPhotos();
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  
  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight-300) && !this.state.isLoading) {
      let currentPage = this.state.page;
      currentPage= currentPage + 1;
      this.setState({ page: currentPage, isLoading: true });
      this.fetchPhotos();
    }
  }


  render() {
    const { photos, isLoading } = this.state;
    let loader;
    if (!photos.length || isLoading) {
      loader = <Loader />;
    }

    return (
      <div>
        <Navbar />
        <Masonry columnsCount={3} gutter="10px">
          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo.urls.small}
              style={{ width: "100%", display: "block" , borderRadius: "2px"}}
            />
          ))}
        </Masonry>
        {loader}
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
