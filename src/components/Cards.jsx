import Data from '../data/data';
import styles from '../styles/Cards.module.scss';
import Card from './Card';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {Data.map(({ id, title, image }) => (
        <Card key={id} title={title} image={image} id={id} />
      ))}
    </div>
  );
};

export default Cards;
