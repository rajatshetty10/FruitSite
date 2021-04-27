import Data from '../data/data';
import '../styles/Cards.scss';
import Card from './Card';

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
