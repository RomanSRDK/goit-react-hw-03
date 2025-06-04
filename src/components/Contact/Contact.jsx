import styles from "./Contact.module.css";

function Contact({ name, number }) {
  return (
    <>
      <div className={styles.contactWrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button className={styles.button}>Delete</button>
    </>
  );
}

export default Contact;
