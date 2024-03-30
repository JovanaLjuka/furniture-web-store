import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { myFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartSlice';

export const loader = async ({ request, params }) => {
  const response = await myFetch(`/single/${params.title}`);
  // console.log(response);
  const product = response.data.product;
  return { product };
};

const SingleProductPage = () => {
  const { product } = useLoaderData();
  const { title, type, image, designer, description, company, price, color, _id, amount } = product;

  // const imagePathFromServer = product.image;

  // const finalImagePath = imagePathFromServer.startsWith('/')
  //   ? imagePathFromServer
  //   : '/' + imagePathFromServer;

  const [productColor, setProductColor] = useState('');

  const cartProduct = {
    cartId: _id + productColor,
    productId: _id,
    image,
    title,
    price,
    company,
    color,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <img src="" alt="" />
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-full lg:flex-row mt-6">
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
          <img src={image} alt={title} className="object-cover rounded-xl w-[500px] h-[480px]" />
        </div>

        <div className="grid flex-grow w-[40%] h-32 card bg-base-300 rounded-box my-10">
          <h2 className="my-2">
            {title} / <span className="text-md">{company}</span>
          </h2>
          <h3 className="text-md capitalize">{type}</h3>
          <p className="my-5">{description}</p>

          <h4 className="my-2">
            Designed by <span className="font-semibold">{designer}</span>
          </h4>
          <h4 className="mt-2">
            Price: <span className="font-semibold">${price}</span>
          </h4>
          <div className="mt-5">
            <h4 className="text-md font-medium tracking-wider capitalize">colors:</h4>
            <div className="mt-2">
              {color.map(color => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row">
            <button
              onClick={addToCart}
              className="border-2 w-[200px] p-3 my-5 shadow-md hover:shadow-xl hover:outline-offset-4 mr-4 float-right mx-0"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
