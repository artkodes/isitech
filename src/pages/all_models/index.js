import React, { useState, useEffect } from "react";

import { Power4, TimelineMax, TweenMax, Power3 } from "gsap";

//models data
import { Models } from "../../data/ModelData";

import Swiper from "swiper";

import "./all_models.scss";


function Animations() {
  let t1 = new TimelineMax();
  useEffect(() => {
    t1.from(".swiper-wrapper", 4, {
      opacity: 0,
      y: "20%",
      ease: Power3.easeInOut
    });

    console.log("w", window.innerWidth);

    var slider = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 150,
      centeredSlides: true,
      mousewheel: true
    });

    slider.on("slideChange", function() {
      TweenMax.to(".slide-text span", 0.2, {
        y: "-160px"
      });
      TweenMax.to(".slide-number span", 0.2, {
        x: "-160px"
      });
      TweenMax.to(".swiper-slide-active", 0.5, {
        scale: 0.85
      });
    });

    slider.on("slideChangeTransitionEnd", function() {
      TweenMax.to(".slide-text span", 0.2, {
        y: 0,
        delay: 0.5
      });
      TweenMax.to(".slide-text span", 0, {
        y: "160px"
      });

      TweenMax.to(".slide-number span", 0.2, {
        x: 0,
        delay: 0.7
      });
      TweenMax.to(".slide-number span", 0, {
        x: "160px"
      });

      TweenMax.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
      });

      TweenMax.to(".swiper-slide-active .slide-text", 0, {
        autoAlpha: 1
      });
      TweenMax.to(".swiper-slide-active .slide-number", 0, {
        autoAlpha: 1
      });

      TweenMax.to(".swiper-slide-next .slide-text", 0, {
        autoAlpha: 0
      });
      TweenMax.to(".swiper-slide-prev .slide-text", 0, {
        autoAlpha: 0
      });

      TweenMax.to(".swiper-slide-next .slide-number", 0, {
        autoAlpha: 0
      });
      TweenMax.to(".swiper-slide-prev .slide-number", 0, {
        autoAlpha: 0
      });
    });

    TweenMax.to(".swiper-slide-next .slide-text", 0, {
      autoAlpha: 0
    });
    TweenMax.to(".swiper-slide-prev .slide-text", 0, {
      autoAlpha: 0
    });

    TweenMax.to(".swiper-slide-next .slide-number", 0, {
      autoAlpha: 0
    });
    TweenMax.to(".swiper-slide-prev .slide-number", 0, {
      autoAlpha: 0
    });

    TweenMax.to(".swiper-slide", 0, {
      scale: 0.85
    });

    TweenMax.to(".swiper-slide-active", 0, {
      scale: 1
    });

    //scroll detection
    // document.addEventListener("scroll", trackScrolling);
    // trackScrolling();
    // window.addEventListener("scroll", e => handleNavigation(e));

    // console.log(document.body.clientWidth);

    // // returned function will be called on component unmount
    // return () => {
    //   document.removeEventListener("scroll", trackScrolling);
    // };
  }, []);
}
function Index() {
  Animations();
  //   const [numberDisplay, setDisplay] = useState(2);
  //   const [numberLoading, setNumberLoading] = useState(2);

  //   let prev = window.scrollY;

  //   //detect if scroll up or down
  //   const handleNavigation = e => {
  //detect if scroll up or down
  //     const window = e.currentTarget;

  //     if (prev > window.scrollY) {
  //       console.log("scrolling up", prev);
  //     } else if (prev < window.scrollY) {
  //       console.log("scrolling down", prev);
  //     }
  //     prev = window.scrollY;
  //   };

  //   const isBottom = el => {
  //detect if scroll is bottom
  //     return el.getBoundingClientRect().bottom <= window.innerHeight;
  //   };

  //   const trackScrolling = () => {
  //     const wrappedElement = document.getElementById("all_models");
  //     if (isBottom(wrappedElement) && Models.length > numberDisplay) {
  //       setDisplay(numberDisplay + numberLoading);
  //     }
  //   };

  return (
    <div className='swiper-container'>
      {/* {Models.slice(0, numberDisplay).map((model, key) => (
        <div
          style={{
            backgroundImage: `url(${
              model.pics[Math.floor(Math.random() * model.pics.length) + 0]
            })`
          }}
          className='_pics'
        ></div>
      ))} */}
      <div className='swiper-wrapper'>
        {Models.map((model, key) => (
          <div className='swiper-slide'>
            <div className='slide-number'>
              <p>
                <span> {(key + 1) * 0.001} </span>
              </p>
            </div>

            <div className='slide-text'>
              <h4>
                <span>{model.name} </span>
              </h4>
            </div>
            <div
              style={{
                backgroundImage: `url(${
                  model.pics[Math.floor(Math.random() * model.pics.length) + 0]
                })`
              }}
              className='slide-img'
            > </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
