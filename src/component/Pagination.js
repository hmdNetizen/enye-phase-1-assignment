import React from "react";

const Pagination = ({ recordsPerPage, totalRecords }) => {
  const recordsNumber = [];
  for (let i = 1; i < Math.ceil(totalRecords / recordsPerPage); i++) {
    recordsNumber.push(i);
  }
  return (
    <div>
      {recordsNumber.map((number) => (
        <button key={number}>{number}</button>
      ))}
    </div>
  );
};

export default Pagination;
