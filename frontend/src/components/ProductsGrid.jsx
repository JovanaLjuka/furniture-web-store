import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="p-5 sm:p-8 w-[1500px] min-h-fit align-elements">
      <div className="grid grid-cols-1 w-full h-full gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 overflow-visible">
        {products.map(product => {
          const { name, price, image, _id } = product;
          return (
            <Link
              to={`/${_id}`}
              key={_id}
              className="card p-4 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <img src={image} alt={name} className="rounded-md w-full object-hover h-[400px]" />
              <div className="card-body items-center text-center pt-5 pb-0 pl-0 pr-0">
                <h2 className=" capitalize tracking-wider p-0">{name}</h2>
                <span className="text-secondary">${price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;

{
  /* <Link
                key={_id}
                to={`products/${_id}`}
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              ></Link> */
}
