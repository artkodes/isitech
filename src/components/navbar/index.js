import React, { useEffect } from "react";
import "./navbar.scss";
import { useSelector } from "react-redux";

//logo
import logo from "../../assets/img/logo_artkodes.svg";

import { Link } from "react-router-dom";

import { TweenMax, Expo, Power3, TimelineMax } from "gsap";

function Index() {
  const loading = useSelector(state => state.ui);
  let t1 = new TimelineMax();
  let links = [];
  useEffect(() => {
    t1.from(".nav_item", 4, {
      opacity: 0,
      x: "100%",
      ease: Power3.easeInOut
    }).then(() => {
      links = document.querySelectorAll("a");
      let mouseCursor = document.querySelector(".cursor");

      links.forEach(link => {
        link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
        });
      });
    });
  }, [links]);

  return (
    <div className='nav_bar'>
      {loading.isLoading ? null : (
        <div className='nav_item'>
          <Link className='_link' to='/'>
            <img className='img' src={logo} alt='logo' />
          </Link>
          <Link className='_link' to='/'>
            becam model
          </Link>
        </div>
      )}
    </div>
  );
}

export default Index;
