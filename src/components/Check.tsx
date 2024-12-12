import classNames from 'classnames';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';

interface CheckProps {
  checked: boolean;
  className?: string;
  onClick: (checked: boolean) => void;
}

const Check: FC<CheckProps> = ({ checked, className, onClick }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    onClick(!checked);
  };

  return (
    <button
      type="button"
      className={classNames(
        'flex items-center justify-center w-4 h-4  rounded-full',
        {
          'bg-secondary hover:bg-secondary-dark active:bg-secondary': checked,
          'border-primary hover:border-primary-dark active:border-primary border-2':
            !checked,
        },
        className,
      )}
      onClick={handleClick}
    >
      {checked && (
        <Image src="/check.svg" alt="check icon" height={7} width={10} />
      )}
    </button>
  );
};

export default Check;
