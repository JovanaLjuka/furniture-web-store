import React, { useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

const SearchInput = () => {
  const { params } = useLoaderData;

  return (
    <Form>
      <label className="input input-bordered shadow-md hover:shadow-xl outline-offset-0 flex items-center gap-2">
        <input type="search" className="grow" name="query" placeholder="Search" />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </Form>
  );
};

export default SearchInput;
