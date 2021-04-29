import React, { useRef } from 'react';
import Cards from '../components/Cards';
import DownArrow from '../components/DownArrow';
import styles from '../styles/Home.module.scss';

function Home() {
  const cardsRef = useRef();

  function handleClick() {
    cardsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className={styles.Home}>
        <div className={styles.columnLeft}>
          <h2>Want to know how many Types of Fruits are there?</h2>
        </div>
        <div className={styles.columnRight}>
          <img src="/images/fruits.png" alt="" />
        </div>
        <div onClick={handleClick} className={styles.arrow}>
          <DownArrow />
        </div>
      </div>
      <div ref={cardsRef} className={styles.cards}>
        <Cards />
      </div>
    </>
  );
}
export default Home;
