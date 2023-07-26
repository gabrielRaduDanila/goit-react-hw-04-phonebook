import './ContactList.css';

const findFilteredContacts = (contacts, filter) => {
  const typedName = filter.toLowerCase();
  const filterdContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(typedName);
  });
  return filterdContact;
};

const ContactList = ({ filter, contacts, setContacts }) => {
  console.log(filter);
  const contactsToDisplay = filter
    ? findFilteredContacts(contacts, filter)
    : contacts;
  function handleClick(e) {
    if (filter) {
      const otherContact = contacts.filter(
        contact => !contactsToDisplay.some(cont => contact.id === cont.id)
      );
      const clickedBtn = e.target;
      const id = clickedBtn.id;
      const newContacts = contactsToDisplay.filter(
        contact => contact.id !== id
      );
      const toSetContacts = [...otherContact, ...newContacts];
      setContacts(toSetContacts);
      return;
    }

    const clickedBtn = e.target;
    const id = clickedBtn.id;
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }

  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contactsToDisplay.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                <span>{capitalizeName(contact.name)}: </span>
                {contact.number}
              </p>
              <button
                type="button"
                id={contact.id}
                className="remove-button"
                onClick={handleClick}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

function capitalizeName(name) {
  const words = name.split(/[ -]/);
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedName = capitalizedWords.join(' ');
  return capitalizedName;
}
