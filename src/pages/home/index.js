import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import Loader from "../../components/loader";

import { useSelector } from "react-redux";

//gsap
import { TweenMax, Expo, Power3, TimelineMax } from "gsap";

import Search from "../../components/searchbar";

function Index() {
  useEffect(() => {});

  const loading = useSelector(state => state.ui);

  console.log("redux", loading.isLoading);

  return (
    <div className='__container'>
      {loading.isLoading ? <Loader /> : <Search />}
    </div>
  );
}

export default Index;
