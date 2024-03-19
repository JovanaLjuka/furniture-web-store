import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { myFetch } from '../utils';
import { Link, useSearchParams } from 'react-router-dom';

export const loader = async ({ params }) => {
  const response = await myFetch(`/${params._id}`);
  console.log(response);
  const product = response.data.product;
  return { product };
};

const SingleProductPage = () => {
  const { product } = useLoaderData();
  console.log(product);
  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
