import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import SearchBox from "../components/SearchBox";
import styles from "./ContactsPage.module.css";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.contactsPage}>
      <h1>Contacts</h1>
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactForm />
      <Filter filter={filter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default ContactsPage;
