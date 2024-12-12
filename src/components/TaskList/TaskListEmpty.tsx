import Image from 'next/image';
import { FC } from 'react';

const TaskListEmpty: FC = () => {
  return (
    <div className="flex flex-col p-20 items-center gap-7">
      <Image src="/clipboard.svg" alt="clipboard icon" width={56} height={56} />
      <p className="text-base font-bold text-secondary-text">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-base text-secondary-text">
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default TaskListEmpty;
