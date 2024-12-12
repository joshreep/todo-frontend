'use client';

import { Color, Task } from '@/types';
import { FC, FormEventHandler, useState } from 'react';
import FormGroup from './FormGroup';
import TextInput from './TextInput';
import ColorPicker from './ColorPicker';
import Button from '../Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { hydrateTask } from '@/utils';

interface FormProps {
  httpMethod: 'POST' | 'PUT';
  task?: Task;
}

const TaskForm: FC<FormProps> = ({ httpMethod, task }) => {
  const [title, setTitle] = useState(task?.title ?? '');
  const [titleError, setTitleError] = useState<string>();
  const [color, setColor] = useState(task?.color);
  const [colorError, setColorError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const router = useRouter();

  const validateTitle = (title: string) => {
    if (!title) {
      setTitleError('Required');
      return false;
    }
    if (title.length < 2) {
      setTitleError('Title must be at least two characters');
      return false;
    }
    setTitleError(undefined);
    return true;
  };

  const validateColor = (color?: Color): color is Color => {
    if (!color) {
      setColorError('Must pick a color');
      return false;
    }
    setColorError(undefined);
    return true;
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const titleValid = validateTitle(title);
    const colorValid = validateColor(color);

    if (titleValid && colorValid) {
      setSubmitting(true);

      try {
        const updatedTask = hydrateTask(title, color, task);
        await fetch(`/api`, {
          method: httpMethod,
          body: JSON.stringify(updatedTask),
        });

        setSubmitting(false);
        setSubmitError(false);
        router.push('/');
      } catch {
        setSubmitError(true);
      }
    }
  };

  return (
    <form className="flex flex-col gap-6 mt-20" onSubmit={handleSubmit}>
      <button type="button" onClick={router.back} className="mb-10">
        <Image
          src="/left-arrow.svg"
          alt="back arrow icon"
          height={16}
          width={16}
        />
      </button>
      <FormGroup id="title" label="Title" error={titleError}>
        <TextInput
          value={title}
          onChange={setTitle}
          placeholder="Ex. Brush your teeth"
        />
      </FormGroup>
      <FormGroup id="color" label="Color" error={colorError}>
        <ColorPicker value={color} onChange={setColor} />
      </FormGroup>
      <Button
        type="submit"
        className="mt-5 flex items-center"
        disabled={submitting}
      >
        {httpMethod === 'POST' ? 'Add Task' : 'Save'}
        <Image
          src={httpMethod === 'POST' ? '/plus.svg' : '/check.svg'}
          alt="plus icon"
          width={16}
          height={16}
        />
      </Button>
      {submitError && (
        <p className="text-red">
          There was an issue submitting the form. Please try again.
        </p>
      )}
    </form>
  );
};

export default TaskForm;
