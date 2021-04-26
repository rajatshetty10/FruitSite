import Data from '../data/data';
import '../css/Cards.scss';
import Card from './Card';
import { useEffect, useState } from 'react';

const Cards = () => {
  return (
    <div className="cards">
      {Data.map(({ id, title, image }) => (
        <Card key={id} title={title} image={image} id={id} />
      ))}
    </div>
  );
};

export default Cards;
