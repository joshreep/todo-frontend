import { FC, PropsWithChildren } from 'react';

const Pill: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="bg-light-gray text-white text-xs font-bold flex items-center px-2 rounded-full leading-3">
      {children}
    </span>
  );
};

export default Pill;
