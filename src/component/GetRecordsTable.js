import React, { useContext, useEffect, useState, Fragment } from "react";
import { recordsContext } from "./../context/records/RecordsContext";

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

const GetRecordsTable = ({ currentPage, recordsPerPage }) => {
  const { records, getPatientRecords, loading, error } = useContext(
    recordsContext
  );

  useEffect(() => {
    getPatientRecords();
  }, []);

  const indexOfLastRecords = currentPage * recordsPerPage;
  const indexOfFirstRecords = indexOfLastRecords - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecords, indexOfLastRecords);

  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>Unknown Server Error</h2>
      ) : (
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
              currentRecords.map((record, index) => (
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
      )}
    </Fragment>
  );
};

export default GetRecordsTable;
