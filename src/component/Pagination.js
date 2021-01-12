import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { recordsPerPage, totalRecords, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(totalRecords / recordsPerPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              href="!#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
