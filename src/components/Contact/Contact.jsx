import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './Contact.styled';

export const Contact = ({ id, name, number, onDeleateContact }) => {
  return (
    <ContactItem key={id}>
      <ContactName>{name} : </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => onDeleateContact(id)}>
        Deleate
      </Button>
    </ContactItem>
  );
};
