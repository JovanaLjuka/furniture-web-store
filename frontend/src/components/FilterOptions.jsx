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
    <Form className="md:flex md:flex-col lg:grid lg:grid-row-1 lg:grid-flow-col gap-x-4">
      <div>
        <label
          htmlFor="material"
          className="capitalize text-sm sm:mr-7 lg:text-l font-semibold mb-2"
        >
          filter by material:
        </label>
        <select
          name="material"
          id="material"
          className="select select-ghost w-[50%] lg:w-[80%] mt-2 border-brown-800"
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
        <label
          htmlFor="price"
          className="capitalize font-semibold flex justify-center text-sm lg:text-l"
        >
          Filter by price:
        </label>
        <input
          type="range"
          name="price"
          id="price"
          className="[--range-shdw:grey] range mt-2"
          value={maxPrice}
          onChange={handleChange}
          min="0"
          max="2000"
          step="50"
        />
        <span className="flex justify-center">$0 - ${maxPrice}</span>
      </div>
      <div className="flex flex-col ml-3">
        <button
          type="submit"
          className="btn btn-sm w-[40%] lg:w-[100%] p-1 mb-2 hover:shadow-md hover:cursor-pointer"
        >
          Apply
        </button>
        <Link
          to="/products"
          className="btn btn-sm w-[40%] lg:w-[100%] hover:shadow-md hover:cursor-pointer"
        >
          Reset
        </Link>
      </div>
    </Form>
  );
};

export default FilterOptions;
