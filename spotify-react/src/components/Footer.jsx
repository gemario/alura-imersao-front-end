import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={`${styles.text}  ${styles.footerTitle}`}>
          Testar o Premium de graça
        </span>
        <span className={`${styles.text}  ${styles.footerParagraph}`}>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </span>
      </div>
      <button className={styles.footerButton}>
        <span>Inscreva-se grátis</span>
      </button>
    </footer>
  );
}
