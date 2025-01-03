'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from './Form/FormGroup';
import TextInput from './Form/TextInput';
import debounce from 'lodash.debounce';
import { Task } from '@/types';

type FuseResponse<T> = {
  item: T;
  refIndex: number;
  score: number;
}[];

interface SearchBarProps {
  onUpdate: (tasks: Task[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchAllTasks = useCallback(async () => {
    const res = await fetch(`/api`);
    const tasksData = await res.json();

    onUpdate(tasksData);
  }, [onUpdate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const submitSearch = useCallback(
    debounce(async () => {
      const data = await fetch(`/api/search/${searchTerm}`);

      const fuseArray = (await data.json()) as FuseResponse<Task>;

      const tasks = fuseArray
        .sort((a, b) => a.score - b.score)
        .map((item) => item.item);

      onUpdate(tasks);
    }, 500),
    [onUpdate, searchTerm],
  );

  useEffect(() => {
    if (searchTerm) submitSearch();
    else fetchAllTasks();

    return submitSearch.cancel;
  }, [fetchAllTasks, searchTerm, submitSearch]);

  return (
    <FormGroup id="search" label="Search">
      <TextInput onChange={setSearchTerm} value={searchTerm} />
    </FormGroup>
  );
};

export default SearchBar;
