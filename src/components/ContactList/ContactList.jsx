import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
