import { Link } from 'react-router-dom';
import FilterOptions from './FilterOptions';
import SearchInput from './SearchInput';
import { useState } from 'react';

const FiltersSection = () => {
  const [filterOption, setFilterOption] = useState('');

  const handleFilter = option => {
    setFilterOption(option);
  };

  const handleSearch = query => {};

  return (
    <div className="flex justify-between gap-x-3 text-brown-900 mb-5">
      <div className=" w-[600px] grid grid-rows-1 grid-flow-col gap-2">
        <FilterOptions handleFilter={handleFilter} />
      </div>

      <div>
        <SearchInput handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default FiltersSection;
