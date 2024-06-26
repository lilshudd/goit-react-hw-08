import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/contacts/selectors";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <p>
            {name}: {number}
          </p>
          <button
            onClick={() => handleDelete(id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
