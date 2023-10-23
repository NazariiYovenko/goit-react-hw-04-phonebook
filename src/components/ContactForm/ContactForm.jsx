import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button, FormContainer } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const data = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onAddContact(data);

    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChangeInputValue}
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="text"
          name="number"
          value={number}
          onChange={onChangeInputValue}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

export default ContactForm;
