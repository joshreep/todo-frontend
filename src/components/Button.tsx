import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

const Button: FC<ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'bg-primary-dark hover:bg-primary active:bg-primary-dark w-full font-bold text-sm p-4 rounded-lg flex items-center justify-center gap-2',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
