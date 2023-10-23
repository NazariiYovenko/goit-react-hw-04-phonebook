import { Label, Input } from './Filter.styled';

export const Filter = ({ filterValue, onChangeFilterValue }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChangeFilterValue}
      />
    </Label>
  );
};
