import FilterOptions from './FilterOptions';
import SearchInput from './SearchInput';

const FiltersSection = () => {
  return (
    <div className="md:flex md:flex-col sm:gap-y-3 lg:grid lg:grid-row-1 lg:grid-flow-col lg:justify-between align-elements w-[85%] text-brown-900 mb-5">
      <div className="md:flex md:flex-col lg:grid lg:grid-row-1 lg:grid-flow-col max-w-[600px] gap-2">
        <FilterOptions />
      </div>

      <div className="mt-3">
        <SearchInput />
      </div>
    </div>
  );
};

export default FiltersSection;
