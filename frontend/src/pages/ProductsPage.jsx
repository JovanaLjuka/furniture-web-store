import { FiltersSection, Pagination, ProductsContainer } from '../components';
import { myFetch } from '../utils';
const url = '/';

export const loader = async ({ request }) => {
  const response = await myFetch(url);
  console.log(response);
  const products = response.data.products;
  const totalPages = response.data.totalPages;
  const currentPage = response.data.currentPage;
  const totalProducts = response.data.totalProducts;
  const materials = response.data.materials;
  console.log(materials);
  return { products, totalPages, currentPage, totalProducts, materials };
};

const Productspage = () => {
  return (
    <>
      <FiltersSection />
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Productspage;
