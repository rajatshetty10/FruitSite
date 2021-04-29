import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <h3 className={styles.Footer}>
      Made with <FaHeart style={{ color: 'red' }} /> in India
    </h3>
  );
};

export default Footer;
