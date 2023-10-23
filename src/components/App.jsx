import { Component } from 'react';
import { Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  onChangeFilterValue = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  onAddContact = newContact => {
    if (
      this.state.contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      window.alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  onDeleateContact = id => {
    console.log(id);
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    let filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.onAddContact} />

        <Title>Contacts</Title>
        <Filter
          filterValue={filter}
          onChangeFilterValue={this.onChangeFilterValue}
        />
        <ContactList
          contacts={filtredContacts}
          onDeleateContact={this.onDeleateContact}
        />
      </Section>
    );
  }
}
