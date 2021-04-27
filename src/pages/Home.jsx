import React from 'react';
import Cards from '../components/Cards';
import DownArrow from '../components/DownArrow';
import '../styles/Home.scss';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="column-left">
          <h2>Want to know how many Types of Fruits are there?</h2>
        </div>
        <div className="column-right">
          <img src="/images/fruits.png" alt="" />
        </div>
        <div className="arrow">
          <h6>Scroll</h6>
          <DownArrow />
        </div>
      </div>
      <div className="cards">
        <Cards />
      </div>
    </>
  );
}
export default Home;
