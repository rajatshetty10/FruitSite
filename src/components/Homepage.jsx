import React from 'react';
import Cards from './Cards';
import DownArrow from './DownArrow';
import '../css/Homepage.scss';

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="column-left">
          <h3>Want to know how many Categories of Fruits are there?</h3>
        </div>
        <div className="column-right">
          <img src="/images/fruits.png" alt="" />
        </div>
        <div className="arrow">
          <DownArrow />
        </div>
      </div>
      <div className="categories">
        <Cards />
      </div>
    </>
  );
}
export default Homepage;
