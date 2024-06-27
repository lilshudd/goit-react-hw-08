import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
