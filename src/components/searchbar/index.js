import React, { useEffect } from "react";
import "./search.scss";

import { Link } from "react-router-dom";

import { TweenMax, Expo, Power3, TimelineMax } from "gsap";

//data
import { Models } from "../../data/ModelData";
function Index() {
  let t1 = new TimelineMax();

  useEffect(() => {
    t1.from(".search", 4, {
      opacity: 0,
      delay: 0.5,
      x: "100%",
      ease: Power3.easeInOut
    })
      .from(".grid_models", 2, {
        opacity: 0,
        y: "20%",
        ease: Power3.easeInOut
      })
      .from(".model_title", 2, {
        opacity: 0,
        y: "20%",
        ease: Power3.easeInOut
      });
  }, []);

  return (
    <div className=''>
      <div className='search'>
        <input
          className='input'
          type='text'
          placeholder='search model by city, age..'
        />
        <button className='btn'>find</button>
      </div>

      <Link to='/models'>
        <span className='model_title'>show all models</span>
      </Link>
      <div className='grid_models'>
        {Models.map((model, key) => (
          <Link to={"/model/" + key} className='model'>
            <img
              src={
                model.pics[Math.floor(Math.random() * model.pics.length) + 0]
              }
              alt=''
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;
