import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button, FormContainer } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInputValue = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({
      name: '',
      number: '',
    });

    const data = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(data);
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.onFormSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInputValue}
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            type="text"
            name="number"
            value={number}
            onChange={this.onChangeInputValue}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}
