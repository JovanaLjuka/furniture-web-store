import { myFetch } from '../utils';

export const loader = async ({ URLSearchParams }) => {
  const response = await myFetch(`/singleProduct/${URLSearchParams.name}`);
  return { product: response.data.data };
};
