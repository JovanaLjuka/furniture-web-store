import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartSlice';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  // console.log(products);

  const dispatch = useDispatch();

  return (
    <div className="p-5 sm:p-8 w-screen min-h-fit align-elements">
      <div className="grid grid-cols-1 w-full h-full gap-5  lg:gap-8 lg:grid-cols-3  overflow-visible">
        {products.map(product => {
          const { title, price, image, _id, company, amount, color } = product;
          const [productColor, setProductColor] = useState('');
          const [newAmount, setNewAmount] = useState(amount);
          const cartProduct = {
            cartId: _id + productColor,
            productId: _id,
            image,
            title,
            price,
            company,
            color: productColor,
            amount: newAmount,
          };
          const addToCart = () => {
            dispatch(addItem({ product: cartProduct }));
          };

          // const increaseAmount = () => {
          //   dispatch(increase({ _id }));
          // };
          // const decreaseAmount = () => {
          //   dispatch(decrease({ _id }));
          // };
          // const removeFromCart = () => {
          //   dispatch(removeItem({ cartId }));
          // };

          // const imagePathFromServer = image;
          // const finalImagePath = imagePathFromServer.startsWith('/')
          //   ? imagePathFromServer
          //   : '/' + imagePathFromServer;
          return (
            <article
              key={_id}
              className="card w-auto h-auto p-4 shadow-xl hover:shadow-2xl transition duration-300 group"
            >
              <Link to={`/single/${title}`}>
                <img
                  src={image}
                  alt={title}
                  className="rounded-md w-full object-hover h-[400px] group-hover:scale-105"
                />
              </Link>
              <div className="card-body items-center text-center pt-5 pb-0 pl-0 pr-0">
                <h2 className=" capitalize tracking-wider p-0">{title}</h2>
                <span className="text-secondary">${price}</span>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button
                  onClick={() => {
                    setNewAmount(newAmount - 1);
                  }}
                  className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  {newAmount}
                </div>
                <button
                  onClick={() => {
                    setNewAmount(newAmount + 1);
                  }}
                  className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                {color.map((color, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>

              <button
                onClick={addToCart}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-3 w-full flex items-center justify-center"
              >
                Add to cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
