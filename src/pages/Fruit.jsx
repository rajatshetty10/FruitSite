import { useParams } from 'react-router-dom';
import Data from '../data/data';

const Fruit = () => {
  const { slug } = useParams();

  const fruitData = Data.find((fruit) => fruit.id === slug);

  console.log(fruitData);

  return (
    <div className="fruit" style={{ marginTop: '5rem' }}>
      <h1>{fruitData.title}</h1>
      <h3>{fruitData.description}</h3>
      {fruitData.images.map((fruitImg, i) => {
        return <img key={i} src={fruitImg.image} alt="fruit" />;
      })}
    </div>
  );
};

export default Fruit;
