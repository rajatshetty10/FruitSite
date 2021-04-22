import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../css/homepage.scss';

function Homepage() {
  return (
    <div className="homepage">
      <div className="column-left">
        <h3>Want to know how many Categories of Fruits are there?</h3>
        <button className="btn">
          <FaAngleDoubleRight style={{ fontSize: '1.5rem' }} />
        </button>
      </div>
      <div className="column-right">
        <img src="/images/homepage.jpg" alt="" />
      </div>
    </div>
  );
}
export default Homepage;
