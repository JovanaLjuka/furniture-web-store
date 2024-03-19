import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { myFetch } from '../utils';
import { Link } from 'react-router-dom';

export const loader = async ({ URLSearchParams }) => {
  const response = await myFetch(`/singleProduct/${URLSearchParams.name}`);
  return { product: response.data.data };
};
