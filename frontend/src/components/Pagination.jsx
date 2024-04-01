import { useLoaderData, useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const handlePageChange = pageNumber => {
    setSearchParams({ ...searchParams, page: parseInt(pageNumber) });
  };

  return (
    <div className="w-[85%] mt-5 ml-20 align-elements">
      <div className="join grid grid-cols-2 w-[30%]">
        <button
          className="join-item btn btn-outline btn-sm xl:btn-md"
          onClick={() => {
            let prevPage = currentPage - 1;

            handlePageChange(prevPage);
          }}
        >
          Previous
        </button>

        <button
          className="join-item btn btn-outline btn-sm xl:btn-md mb-10"
          onClick={() => {
            let nextPage = currentPage + 1;

            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
