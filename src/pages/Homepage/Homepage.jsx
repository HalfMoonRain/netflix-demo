import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import React from "react";

// 1. 배너 => popular 영화를 들고와서 첫번 째 아이템을 보여주자.
// 2. popular movie
// 3. top rated movie
// 4.upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  );
};

export default Homepage;
