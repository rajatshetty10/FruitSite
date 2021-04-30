import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <h3 className={styles.Footer}>
      Made with&nbsp;
      <FaHeart className={styles.heart} />
      &nbsp;in India
    </h3>
  );
};

export default Footer;
