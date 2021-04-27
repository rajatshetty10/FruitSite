import { useParams } from 'react-router-dom';
import Data from '../data/data';
import '../styles/Fruit.scss';

const Fruit = () => {
  const { slug } = useParams();

  const fruitData = Data.find((fruit) => fruit.id === slug);

  console.log(fruitData);

  return (
    <div className="fruit">
      <h1>{fruitData.title}</h1>
      <br></br>
      <br></br>
      <h4>{fruitData.description}</h4>
      <div className="img">
        {fruitData.images.map((fruitImg, i) => {
          return (
            <>
              <h3>{fruitImg.fruitName}</h3>
              <h5>{fruitImg.fruitDesc}</h5>
              <img
                key={i}
                src={fruitImg.image}
                alt={`${fruitData.title} fruit`}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fruit;
