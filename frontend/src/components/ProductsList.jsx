import { Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="p-5 sm:p-8 w-screen min-h-fit align-elements">
      <div className="grid mt-10 gap-y-8">
        {products.map(product => {
          const { title, price, image, _id, company } = product;
          return (
            <Link
              to={`/single/${title}`}
              key={_id}
              className="p-8 shadow-xl hover:shadow-2xl rounded-md flex flex-col sm:flex-row gap-y-4 flex-wrap transition duration-300 group"
            >
              <img
                src={image}
                alt={title}
                className="h-[200px] w-[200px] rounded-lg  object-cover group-hover:scale-105 duration-300"
              />
              <div className="ml-0 sm:ml-16">
                <h2 className="capitalize tracking-wider font-medium p-0">{title}</h2>
                <h2 className="capitalize text-sm tracking-wider my-2 text-neutral-content">
                  {company}
                </h2>
                <span className="font-medium ml-0 sm:ml-auto text-lg">${price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
