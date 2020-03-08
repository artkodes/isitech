import React from "react";
import "./book.scss";
import { useParams } from "react-router-dom";

//ant
import Calendar from "../../components/calendar";

//data
import { Models } from "../../data/ModelData";

function Index() {
  let { id } = useParams();
  const pics = Models[id].pics;
  console.log(pics);

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
      <div className='book'>
      <div className=''>
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
      <div className='midle'>
        <div className='midle_input'>
          <div className='group_input'>
            <span>agency :</span>
            <input className='input' type='text' placeholder='artkodes' />
          </div>
          <div className='group_input'>
            <span>email :</span>
            <input
              className='input'
              type='email'
              placeholder='hello@artkodes.com'
            />
          </div>
          <div className='group_input'>
            <span>phone :</span>
            <input
              className='input'
              type='number'
              placeholder='04 76 87 31 89'
            />
          </div>
          <div className='group_input'>
            <span>city :</span>
            <input className='input' type='text' placeholder='Lyon' />
          </div>
        </div>
        <div className='info'>
          <span>
            onsectetur adipiscing elit, sed do eiusmod tempor incididunt
          </span>
          <span>
            onsectetur adipiscing elit, sed do eiusmod tempor incididunt
          </span>
        </div>
      </div>
    </div>
  );
}

export default Index;
