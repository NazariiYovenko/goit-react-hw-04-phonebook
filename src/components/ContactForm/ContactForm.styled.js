import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: #160b0f;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: #160b0f;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  border: 3px black solid;
  padding: 10px;
`;
