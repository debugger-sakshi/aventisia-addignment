import React, { useState } from "react";
import Arrow from './assets/images/bluearrow.png';

const Pagination = ({
  recordPerPage,
  table
}) => {
  const [value] = useState(recordPerPage);
  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const maxVisiblePages = 5;

  const calculatePageNumbers = () => {
    const pages = [];

    if (totalPages <= maxVisiblePages + 2) {
     
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1); 

      if (currentPage > 4) {
        pages.push("..."); 
      }

      const start = Math.max(2, currentPage - 3); 
      const end = Math.min(totalPages - 1, currentPage + 2); 

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages); 
    }

    return pages;
  };

  const pages = calculatePageNumbers();

  return (
    <div className="flex justify-between mt-6">
      <p className="text-sm">
        Showing  {((currentPage-1) *10) +1 } to {table.getPageCount() * (currentPage)} of {" "}  
        {table.getRowCount()} results 
      </p>
      <ul className="flex gap-1 items-center">
        <li >
          <button
            className="size-6 rounded-full bg-indigo-200 flex items-center justify-center"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <img src={Arrow} className="size-2" />
          </button>
        </li>
        {pages?.map((page, index) =>
          page === "..." ? (
            <li key={index}>
              <span className="page-link">...</span>
            </li>
          ) : (
            <li className="cursor-pointer" key={index}>
              <p
                className={`flex text-xs justify-center items-center size-6 rounded-full ${
                  currentPage === page ? "bg-indigo-400 text-white" : ""
                }`}
                onClick={() => table.setPageIndex(page - 1)}
              >
                {page}
              </p>
            </li>
          )
        )}
        <li className="ms-2">
          <button
            className="size-6 rounded-full bg-indigo-200 flex items-center justify-center"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <img src={Arrow} className="size-2 rotate-180" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
