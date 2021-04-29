import { useHistory } from 'react-router-dom';
import styles from '../styles/Card.module.scss';

const Card = ({ id, title, image }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/fruit/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleRoute}>
      <img src={image} alt="" />
      <div className={styles.text}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
