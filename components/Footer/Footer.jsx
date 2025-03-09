import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
