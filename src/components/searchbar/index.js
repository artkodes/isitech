import React, { useEffect } from "react";
import "./search.scss";

import { TweenMax, Expo, Power3, TimelineMax } from "gsap";

function Index() {
  let t1 = new TimelineMax();

  const models = [
    {
      link:
        "https://images.unsplash.com/photo-1579984937907-0cefd1bbf00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1493809827277-90e70b516f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1574326216826-23b8e5075f7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1568253130222-5fc7d0173808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80"
    },
    {
      link:
        "https://images.unsplash.com/photo-1568252748074-f9c8d964e834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=696&q=80"
    },
    {
      link:
        "https://images.unsplash.com/photo-1572515468941-b0409e3254da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1579952880875-9fb85efa75d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      link:
        "https://images.unsplash.com/photo-1582312045465-89660bf8968b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
  ];

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

      <span className='model_title'>models</span>
      <div className='grid_models'>
        {models.map(model => (
          <div className='model'>
            <img src={model.link} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
