'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from './Form/FormGroup';
import TextInput from './Form/TextInput';
import debounce from 'lodash.debounce';
import { Task } from '@/types';

interface SearchBarProps {
  onUpdate: (tasks: Task[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const submitSearch = useCallback(
    () =>
      debounce(async () => {
        const data = await fetch(`/search/${searchTerm}`);

        onUpdate(await data.json());
      }, 500),
    [searchTerm, onUpdate],
  );

  useEffect(() => {
    submitSearch();
  }, [submitSearch]);

  return (
    <FormGroup id="search" label="Search">
      <TextInput onChange={setSearchTerm} value={searchTerm} />
    </FormGroup>
  );
};

export default SearchBar;
