import { useHistory } from 'react-router-dom';
import '../css/Card.scss';

const Card = ({ id, title, image }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/fruit/${id}`);
  };

  return (
    <div className="card" onClick={handleRoute}>
      <img src={image} alt="" />
      <div className="text">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
