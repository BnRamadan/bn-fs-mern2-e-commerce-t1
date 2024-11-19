//  ! 🔥 💪🏻 Bn Ramadan fullstack MERN project 2 ( E-commerce fullstack app )
//  ! " The end of this project is the completing of future successes and creativity , Just strive, be patient, commit and keep going. "
//  ! 🔥 💪🏻 Always forward ! 💪🏻 🔥
import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. it serves as a virtual marketplace where businesses and individuals
          showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their
          convenience accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (e.g, sizes, colors). Each product usually has it's
          own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
