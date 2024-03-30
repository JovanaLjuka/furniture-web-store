import { FiltersSection, Pagination, ProductsContainer } from '../components';
import { myFetch } from '../utils';

const url = '/all';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  // console.log(params);
  const response = await myFetch(url, { params });
  // const params = new URL(request.url).searchParams;
  // const query = params.get('query');
  // console.log(query);
  const products = response.data.products;
  const totalPages = response.data.totalPages;
  const currentPage = response.data.currentPage;
  const totalProducts = response.data.totalProducts;
  const materials = response.data.uniqueMaterials;
  return { products, totalPages, currentPage, totalProducts, materials, params };
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
