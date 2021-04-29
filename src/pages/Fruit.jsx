import { useParams } from 'react-router-dom';
import Data from '../data/data';
import styles from '../styles/Fruit.module.scss';

const Fruit = () => {
  const { slug } = useParams();

  const fruitData = Data.find((fruit) => fruit.id === slug);

  return (
    // Category Data
    <div className={styles.category}>
      <h1>{fruitData.title}</h1>
      <h3>{fruitData.description}</h3>

      {/* Fruits under those Category */}
      <div className={styles.fruit}>
        {fruitData.images.map((fruitImg, i) => {
          return (
            // Each Fruit Card
            <div className={styles.fruitCard}>
              <img
                key={i}
                src={fruitImg.image}
                alt={`${fruitData.title} fruit`}
              />
              <div className={styles.fruitText}>
                <h3>{fruitImg.fruitName}</h3>
                <h5>{fruitImg.fruitDesc}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fruit;
