import React, { useState, useEffect, useCallback } from "react";
import { api } from "./Api";
import Loader from "./Loader";
import Masonry from "react-responsive-masonry";
import Photo from "./Photo";
import { css } from "aphrodite";
import navStyle from "./Styles/NavbarStyle";
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const getPhotos = (page) => {
  
  return {
    data,
    nextCursor: 2
  };
  // fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=30`).then(response => {
  //   if(response) {
  //     return response.json()
  //   }
  // })
}



  // const dd = async ({ page = 0 }) => {
  //   return await (await (fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=30`))).json()
  //   return res.json()
  // }

const Photos = () => {
    const [pageNumber, setPageNumber] = useState(1)

   const {
     data,
     status,
     isFetching,
     isFetchingMore,
     fetchMore,
     canFetchMore,
     error,
   } = useInfiniteQuery('phtos', (key) => {
    return axios.get(`https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=30`)
    .then((res) => res.data)
   }, {
    getNextPageParam: (lastPage, pages) => true,
   })
   
  

  
   const isLoading  = status === 'loading'
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const handleScroll = () => {
    console.log("isLoading", isLoading)
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading
     ) {

        setPageNumber(old => old + 1);
        fetchMore()
      
    }
  };


  let listData = data?.pages?.[0].data
  let loader;
  if (listData?.length < 0 || status === 'loading' || isFetching) {
    loader = <Loader />;
  }


  if(error) {
    return <div>Please report a issue in the issue template</div>;
  }

  return (
    <div className="photos-layout">
      {listData?.length > 0  && listData?.map(e =>{
        return <li>{e.name}</li>
      })}
            
      {/* <div className={css(navStyle.marginPhotos)}>
        <Masonry columnsCount={3} gutter="20px">
          {data?.length &&
            data?.map((photo, i) => (
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
      </div> */}
      {loader}
    </div>
  );
};

export default Photos;
