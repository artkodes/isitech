import React, { useRef, useEffect } from "react";

//scss
import "./loader.scss";

//logo
import logo from "../../assets/img/logo_artkodes.svg";

//gsap
import { TweenMax, Expo, Power3, TimelineMax } from "gsap";

import { useDispatch } from "react-redux";

function Index(props) {
  let t1 = new TimelineMax();
  const dispatch = useDispatch();
  useEffect(() => {
    t1.from("._loader", 2, {
      opacity: 0,
      delay: 1,
      ease: Power3.easeInOut
    })
      .to("._container", 2, {
        opacity: 0,
        x: "-100%",
        delay: 1,
        ease: Power3.easeInOut
      })
      .then(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, []);

  return (
    <div className='_container'>
      <div className='_loader'>
        <div className='_logo'>
          <img src={logo} alt='logo' />
          <h3>k o d e s</h3>
        </div>

        <p>
          Stop getting angry when people don’t support you. Most of them can’t
          even support themselves.
        </p>
      </div>
    </div>
  );
}

export default Index;
