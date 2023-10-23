import { Contact } from 'components/Contact/Contact';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleateContact }) => {
  return (
    <ContactListWrapper>
      {contacts.length === 0 && 'Nothing Found'}
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleateContact={onDeleateContact}
        />
      ))}
    </ContactListWrapper>
  );
};
