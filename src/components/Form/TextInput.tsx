import { FC, useContext } from 'react';
import { FormGroupContext } from './FormGroup';

interface TextInputProps {
  onChange: (text: string) => void;
  placeholder?: string;
  value: string;
}

const TextInput: FC<TextInputProps> = ({ onChange, placeholder, value }) => {
  const { id } = useContext(FormGroupContext);

  return (
    <input
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="text-sm text-primary-text bg-light-gray p-4 rounded-lg placeholder:text-secondary-text"
    />
  );
};

export default TextInput;
