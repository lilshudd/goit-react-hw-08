import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";

const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
