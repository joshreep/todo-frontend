import { createContext, FC, PropsWithChildren } from 'react';

interface FormGroupProps {
  error?: string;
  id: string;
  label: string;
}

export const FormGroupContext = createContext({ id: '' });

const FormGroup: FC<PropsWithChildren<FormGroupProps>> = ({
  children,
  error,
  label,
  id,
}) => {
  return (
    <FormGroupContext.Provider value={{ id }}>
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-bold text-primary">
          {label}
        </label>
        {children}
        {error && <p className="text-red">{error}</p>}
      </div>
    </FormGroupContext.Provider>
  );
};

export default FormGroup;
