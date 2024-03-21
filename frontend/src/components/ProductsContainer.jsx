import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { BsGrid } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { useState } from 'react';
const ProductsContainer = () => {
  const { totalPages, currentPage, totalProducts } = useLoaderData();
  const total = totalProducts;
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = pattern => {
    return `text-md btn btn-outline border-none w-15 h-15 p-3 ${
      pattern === layout
        ? ' text-primary-content btn-md shadow-lg '
        : 'btn-ghost text-based-content'
    }`;
  };

  return (
    <div className="w-[85%] align-elements">
      <div className="flex justify-betweenitems-center border-1 outline-offset-4 shadow-2xl border-brown-800 pb-5">
        <h4 className="font-medium text-md w-full capitalize ml-8 mt-8">
          total products: <span className="text-md font-semibold">{totalProducts}</span>
        </h4>
        <div className="flex gap-x-2  mr-8 mt-5 ">
          <button
            type="button"
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsGrid />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-10">No products matching</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
};
export default ProductsContainer;
