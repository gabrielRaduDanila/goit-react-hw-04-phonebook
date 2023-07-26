import { useEffect, useState } from 'react';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import { getStorageItem, setStorageItem } from './local-storage/localStorage';

export const App = () => {
  // addContact = contact => {
  //   const tempContacs = [...this.state.contacts];
  //   tempContacs.push(contact);
  //   this.setState({
  //     contacts: tempContacs,
  //   });
  // };
  // addFilterValue = value => {
  //   this.setState({
  //     filter: value,
  //   });
  // };

  // removeContact = id => {
  //   const tempContact = [...this.state.contacts];
  //   const newContacts = tempContact.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts,
  //   });
  // };

  const [contacts, setContacts] = useState(getStorageItem('contacts'));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setStorageItem('contacts', contacts);
  }, [contacts]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <div>
        <h2>Contacts</h2>
        <ContactForm contacts={contacts} setContacts={setContacts} />
      </div>
      {contacts.length > 0 && <Filter setFilter={setFilter} />}
      {contacts.length > 0 && filter.length === 0 && (
        <ContactList contacts={contacts} setContacts={setContacts} />
      )}
      {filter.length > 0 && (
        <ContactList
          filter={filter}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
      {contacts.length === 0 && filter.length === 0 && (
        <h3>Add contacts to be displayed</h3>
      )}
    </div>
  );
};
