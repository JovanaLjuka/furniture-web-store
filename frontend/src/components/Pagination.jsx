import { useLoaderData, useSearchParams } from 'react-router-dom';

const Pagination = () => {
  // const { totalPages } = useLoaderData;
  // const pages = Array.from({ length: totalPages }, (_, index) => {
  //   return index + 1;
  // });
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const handlePageChange = pageNumber => {
    setSearchParams({ ...searchParams, page: parseInt(pageNumber) });
  };

  return (
    <div className="w-[85%] align-elements">
      <div className="join grid grid-rows-1 grid-flow-col w-[30%]">
        <button
          className="join-item btn btn-outline"
          onClick={() => {
            let prevPage = currentPage - 1;

            handlePageChange(prevPage);
          }}
        >
          Previous
        </button>
        {/* 
        {pages.map(pageNumber => {
          return (
            <button
              key={pageNumber}
              // onClick={() => handlePageChange(pageNumber)}
              className={`btn-outline btn-sm md:btn-md join-item ${
                pageNumber === currentPage ? 'bg-brown-600 border-brown-800' : ''
              } `}
            >
              {pageNumber}
            </button>
          );
        })} */}

        <button
          className="join-item btn btn-outline btn-sm md:btn-md"
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
