import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="p-5 sm:p-8 w-screen min-h-fit align-elements">
      <div className="grid grid-cols-1 w-full h-full gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3  overflow-visible">
        {products.map(product => {
          const { title, price, image, _id, company } = product;
          return (
            <Link
              to={`/single/${title}`}
              key={_id}
              className="card p-4 shadow-xl hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={image}
                alt={title}
                className="rounded-md w-full object-hover h-[400px] group-hover:scale-105"
              />
              <div className="card-body items-center text-center pt-5 pb-0 pl-0 pr-0">
                <h2 className=" capitalize tracking-wider p-0">{title}</h2>
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
