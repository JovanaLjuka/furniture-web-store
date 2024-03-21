import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const FilterOptions = ({ handleFilter }) => {
  const { materials } = useLoaderData();
  const [priceRange, setPriceRange] = useState('');
  const [materialset, setMaterial] = useState('');

  const handlePriceChange = e => {
    setPriceRange(e.target.value);
  };
  const handleMaterialChange = e => {
    setMaterial(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFilter(priceRange);
  };

  return (
    <Form onSubmit={handleSubmit} className="grid grid-row-1 grid-flow-col gap-x-4">
      <div>
        <label htmlFor="materials" className="capitalize">
          filter by material:
        </label>
        <select
          name="materials"
          id="materials"
          className="select select-ghost w-full max-w-xs  border-brown-800"
          value={materialset}
          onChange={handleMaterialChange}
        >
          {materials.map((material, index) => {
            return (
              <option value={material} key={index}>
                {material}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="priceRange" className="capitalize">
          Filter by price:
        </label>
        <select
          name="priceRange"
          id="priceRange"
          className="select border-brown-800 w-full max-w-xs"
          value={priceRange}
          onChange={handlePriceChange}
        >
          <option value="0,500">$0 - $500</option>
          <option value="500,1000">$500 - $1000</option>
        </select>
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
