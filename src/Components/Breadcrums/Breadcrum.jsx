//  ! 🔥 💪🏻 Bn Ramadan fullstack MERN project 2 ( E-commerce fullstack app )
//  ! " The end of this project is the completing of future successes and creativity , Just strive, be patient, commit and keep going. "
//  ! 🔥 💪🏻 Always forward ! 💪🏻 🔥
import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
