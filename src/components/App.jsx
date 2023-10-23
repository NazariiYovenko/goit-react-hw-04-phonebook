import { Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = newContact => {
    if (
      contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      window.alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const onDeleateContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const getFiltredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

  const onChangeFilterValue = event => setFilter(event.currentTarget.value);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={onAddContact} />

      <Title>Contacts</Title>
      <Filter filterValue={filter} onChangeFilterValue={onChangeFilterValue} />
      <ContactList
        contacts={getFiltredContacts()}
        onDeleateContact={onDeleateContact}
      />
    </Section>
  );
};

export default App;
