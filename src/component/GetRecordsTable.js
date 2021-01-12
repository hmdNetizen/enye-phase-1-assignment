import React, { useContext, useEffect, Fragment } from "react";
import { recordsContext } from "./../context/records/RecordsContext";
import Pagination from "./Pagination";
import { paginate } from "./utils/paginate";

const tableHeadTitle = [
  "S/N",
  "Name",
  "Username",
  "email",
  "Gender",
  "Card Number",
  "Card Type",
  "Payment Method",
  "Phone",
  "Mac Address",
];

const GetRecordsTable = ({ currentPage, recordsPerPage, setCurrentPage }) => {
  const {
    records,
    getPatientRecords,
    loading,
    error,
    selectedGender,
  } = useContext(recordsContext);

  useEffect(() => {
    getPatientRecords();
  }, []);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const filtered =
    selectedGender && selectedGender.id !== 1
      ? records.filter((record) => record.Gender === selectedGender.type)
      : records;

  const allRecords = paginate(filtered, currentPage, recordsPerPage);

  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>Unknown Server Error</h2>
      ) : (
        <Fragment>
          <table className="table">
            <thead>
              <tr>
                {tableHeadTitle.map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.length > 0 &&
                allRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{(index += 1)}</td>
                    <td>{`${record.FirstName} ${record.LastName}`}</td>
                    <td>{record.UserName} </td>
                    <td>{record.Email} </td>
                    <td>{record.Gender} </td>
                    <td>{record.CreditCardNumber} </td>
                    <td>{record.CreditCardType} </td>
                    <td>{record.PaymentMethod} </td>
                    <td>{record.PhoneNumber} </td>
                    <td>{record.MacAddress} </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                {tableHeadTitle.map((title, index) => (
                  <td key={index}>{title}</td>
                ))}
              </tr>
            </tfoot>
          </table>
          <Pagination
            recordsPerPage={recordsPerPage}
            totalRecords={filtered.length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default GetRecordsTable;
