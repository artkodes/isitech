import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Models } from "../../data/ModelData";

import { Power3, TimelineMax } from "gsap";

import "./model.scss";

function Index() {
  let { id } = useParams();
  const pics = Models[id].pics;

  let t1 = new TimelineMax();

  useEffect(() => {
    t1.from(".left", 2, {
      opacity: 0,
      y: "20%",
      ease: Power3.easeInOut
    })
      .from(".midle_1", 1, {
        opacity: 0,
        y: "20%",
        ease: Power3.easeInOut
      })
      .from(".midle_2", 1, {
        opacity: 0,
        y: "20%",
        ease: Power3.easeInOut
      })
      .from(".right", 1, {
        opacity: 0,
        x: "20%",
        ease: Power3.easeInOut
      });
  }, []);

  return (
    <div className='show_model'>
      <div className='left'>
        <img
          src={pics[Math.floor(Math.random() * pics.length) + 0]}
          alt=''
        />
        <h1>{Models[id].name} </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam
          optio impedit. Et eaque laborum iure quisquam ad qui
        </p>
      </div>
      <div className='midle_1'>
        <div className='info'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam
            optio impedit. Et eaque laborum iure quisquam ad qui illum, eius
            quae
          </p>
        </div>
        <img
          src={pics[Math.floor(Math.random() * pics.length) + 0]}
          alt=''
        />
      </div>
      <div className='midle_2'>
        <img
          src={pics[Math.floor(Math.random() * pics.length) + 0]}
          alt=''
        />
        <Link to={"/book-model/" + id}>
          <button className='btn'>book model</button>
        </Link>
      </div>
      <div className='right'>
        <img
          src={pics[Math.floor(Math.random() * pics.length) + 0]}
          alt=''
        />
      </div>
    </div>
  );
}

export default Index;
