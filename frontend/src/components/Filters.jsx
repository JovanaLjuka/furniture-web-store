import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';

const Filters = () => {
  return (
    <Form className="grid grid-rows-2 gap-y-5 sm:grid-cols-1">
      <div className="px-8 py-4 flex justify-between md:flex-wrap md:gap-y-4 sm:gap-y-6 items-center">
        <div>{/* dropdown */}</div>
        <div>
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
        </div>
      </div>
      <div>
        <Link to="/products" className="btn btn-sm">
          reset
        </Link>
      </div>
    </Form>
  );
};

export default Filters;
