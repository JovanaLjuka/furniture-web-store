import { Link } from 'react-router-dom';
import FilterOptions from './FilterOptions';
import SearchInput from './SearchInput';

const FiltersSection = () => {
  return (
    <div className="flex justify-between align-elements w-[85%] text-brown-900 mb-5">
      <div className=" w-[600px] grid grid-rows-1 grid-flow-col gap-2">
        <FilterOptions />
      </div>

      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default FiltersSection;
