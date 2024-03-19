import Products from '../components/Products';
import { myFetch } from '../utils';
const url = '/';

export const loader = async () => {
  const response = await myFetch(url);
  const products = response.data.products;
  return { products };
};

const Productspage = () => {
  return <Products />;
};

export default Productspage;
