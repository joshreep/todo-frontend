import Image from 'next/image';
import { FC } from 'react';
import Anchor from './Anchor';

const CreateTaskButton: FC = () => {
  return (
    <Anchor href="/add" className="-translate-y-1/2">
      Create Task
      <Image src="/plus.svg" alt="plus icon" width={16} height={16} />
    </Anchor>
  );
};

export default CreateTaskButton;
