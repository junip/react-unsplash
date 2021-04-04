import React from "react";
import ReactDOM from "react-dom";
import { api } from "./Api";
import Loader from "./Loader";
import Masonry from "react-responsive-masonry";
import Navbar from "./Navbar";
import Photo from "./Photo";
import { css } from "aphrodite";
import navStyle from "./Styles/NavbarStyle";
import Cover from "./Cover";

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
    api.photos.list({page: this.state.page, perPage: this.state.per_page}).then(data=> {
      if (data) {
        let paginatedData = data.response.results
        console.log("paginated response", paginatedData)
        if (this.state.photos.length) {
          let photos = this.state.photos;
          this.setState({ photos: photos.concat(paginatedData), isLoading: false });
        } else {
          this.setState({ photos: paginatedData, isLoading: false });
        }
      }
    })
  }

  componentDidMount() {
    this.fetchPhotos();
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !this.state.isLoading
    ) {
      let currentPage = this.state.page;
      currentPage = currentPage + 1;
      this.setState({ page: currentPage, isLoading: true });
      this.fetchPhotos();
    }
  }
  /**
   *  Returns the Full Name Of the photographer for a specific Photo
   */
  fullName(first, last) {
    return `${first} ${last}`;
  }

  render() {
    const { photos, isLoading } = this.state;
    let loader;
    if (photos.length < 0 || isLoading) {
      loader = <Loader />;
    }

    return (
      <div className="app">
        <Navbar />
        <Cover />
        <div className={css(navStyle.marginPhotos)}>
          <Masonry columnsCount={3} gutter="20px">
            {photos.length && photos.map((photo, i) => (
              <Photo
                key={i}
                photoUrl={photo.urls.small}
                likes={photo.likes}
                fullName={this.fullName(
                  photo.user.first_name,
                  photo.user.last_name
                )}
                downloadUrl={photo.links.download}
                profilePhoto={photo.user.profile_image.small}
              />
            ))}
          </Masonry>
        </div>
        {loader}
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
