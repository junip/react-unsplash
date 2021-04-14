import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { api } from "./Api";
import Loader from "./Loader";
import Masonry from "react-responsive-masonry";
import Navbar from "./Navbar";
import Photo from "./Photo";
import { css } from "aphrodite";
import navStyle from "./Styles/NavbarStyle";
import Cover from "./Cover";

const App = () => {
  const [photosData, setPhotosData] = useState({
    photos: [],
    page: 1,
    perPage: 50,
    isLoading: false
  });

  const fetchPhotos = useCallback((page, perPage) => {
    api.photos.list({ page: page, perPage: perPage }).then(data => {
      if (data) {
        let paginatedData = data.response.results;
        setPhotosData(prev => ({
          ...prev,
          photos:
            page === 1
              ? [...paginatedData]
              : prev.photos.concat([...paginatedData]),
          isLoading: false
        }));
      }
    });
  }, []);

  useEffect(() => {
    fetchPhotos(1, 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [fetchPhotos]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !photosData.isLoading
    ) {
      setPhotosData(prev => ({
        ...prev,
        page: prev.page + 1,
        isLoading: true
      }));
      fetchPhotos(photosData.page + 1, 50);
    }
  };

  const { photos, isLoading } = photosData;
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
          {photos.length &&
            photos.map((photo, i) => (
              <Photo
                key={i}
                photoUrl={photo.urls.small}
                likes={photo.likes}
                firstName={photo.user.first_name}
                lastName={photo.user.last_name}
                downloadUrl={photo.links.download}
                profilePhoto={photo.user.profile_image.small}
              />
            ))}
        </Masonry>
      </div>
      {loader}
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
