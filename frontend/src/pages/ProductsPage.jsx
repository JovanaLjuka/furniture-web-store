import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import { myFetch } from '../utils';
const url = '/';

export const loader = async ({ request }) => {
  const response = await myFetch(url);
  console.log(response);
  const products = response.data.products;
  const totalPages = response.data.totalPages;
  const currentPage = response.data.currentPage;
  const totalProducts = response.data.totalProducts;
  return { products, totalPages, currentPage, totalProducts };
};

const Productspage = () => {
  return (
    <>
      <Filters />
      <Products />
      <Pagination />
    </>
  );
};

export default Productspage;
