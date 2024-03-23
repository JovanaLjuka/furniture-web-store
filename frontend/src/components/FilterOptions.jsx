import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const FilterOptions = () => {
  const { materials } = useLoaderData();
  const [maxPrice, setMaxPrice] = useState('');

  const handleChange = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <Form className="grid grid-row-1 grid-flow-col gap-x-4">
      <div>
        <label htmlFor="material" className="capitalize font-semibold">
          filter by material:
        </label>
        <select
          name="material"
          id="material"
          className="select select-ghost w-full max-w-xs  border-brown-800"
        >
          <option value="">none</option>
          {materials.map((material, index) => {
            return (
              <option value={material} key={index}>
                {material}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col justify-items-start ">
        <label htmlFor="price" className="capitalize font-semibold flex justify-center">
          Filter by price:
        </label>
        <input
          type="range"
          name="price"
          id="price"
          className="[--range-shdw:grey] range"
          value={maxPrice}
          onChange={handleChange}
          min="0"
          max="2000"
          step="50"
        />
        {/* <select name="price" id="price" className="select border-brown-800 w-full max-w-xs">
          <option value="0,500">$0 - $500</option>
          <option value="500,1000">$500 - $1000</option>
        </select> */}
        <span className="flex justify-center">$0 - ${maxPrice}</span>
      </div>
      <div className="flex flex-col ml-3">
        <button type="submit" className="btn btn-sm p-1 mb-2 hover:shadow-md hover:cursor-pointer">
          Apply
        </button>
        <Link to="/products" className="btn btn-sm hover:shadow-md hover:cursor-pointer">
          Reset
        </Link>
      </div>
    </Form>
  );
};

export default FilterOptions;
