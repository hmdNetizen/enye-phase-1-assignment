import React, { useContext, useEffect, Fragment } from "react";
import { recordsContext } from "./../context/records/RecordsContext";
import Pagination from "./Pagination";
import { paginate } from "./utils/paginate";
import Spinner from "./utils/Spinner";

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

const GetRecordsTable = (props) => {
  const { currentPage, recordsPerPage, setCurrentPage } = props;
  const {
    records,
    getPatientRecords,
    loading,
    error,
    selectedGender,
    moneyOrderChecked,
    payPalChecked,
    checkChecked,
    creditCardChecked,
  } = useContext(recordsContext);

  useEffect(() => {
    getPatientRecords();
    //eslint-disable-next-line
  }, []);

  const filtered =
    Object.keys(selectedGender).length > 0 && selectedGender.id !== 1
      ? records.filter((record) => record.Gender === selectedGender.type)
      : records;

  const allRecords = paginate(filterSwitch(), currentPage, recordsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  function filterSwitch() {
    const moneyOrderOption = records.filter((record) =>
      moneyOrderChecked ? record.PaymentMethod === "money order" : null
    );

    const payPalOption = records.filter((record) =>
      payPalChecked ? record.PaymentMethod === "paypal" : null
    );

    const checkOption = records.filter((record) =>
      checkChecked ? record.PaymentMethod === "check" : null
    );

    const ccOption = records.filter((record) =>
      creditCardChecked ? record.PaymentMethod === "cc" : null
    );

    if (
      !moneyOrderChecked &&
      !payPalChecked &&
      !checkChecked &&
      !creditCardChecked
    ) {
      return filtered;
    } else {
      const newRecords = moneyOrderOption.concat(
        payPalOption,
        checkOption,
        ccOption
      );
      return newRecords;
    }
  }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h2 className="error">Unknown Server Error</h2>
      ) : (
        <Fragment>
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                {tableHeadTitle.map((title, index) => (
                  <th key={index} className="table__header">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table__body">
              {records.length > 0 &&
                allRecords.map((record, index) => (
                  <tr className="table__row" key={index}>
                    <td className="table__data">{(index += 1)}</td>
                    <td className="table__data">{`${record.FirstName} ${record.LastName}`}</td>
                    <td className="table__data">{record.UserName} </td>
                    <td className="table__data">{record.Email} </td>
                    <td className="table__data">{record.Gender} </td>
                    <td className="table__data">{record.CreditCardNumber} </td>
                    <td className="table__data">{record.CreditCardType} </td>
                    <td className="table__data">{record.PaymentMethod} </td>
                    <td className="table__data">{record.PhoneNumber} </td>
                    <td className="table__data">{record.MacAddress} </td>
                  </tr>
                ))}
            </tbody>
            <tfoot className="table__footer">
              <tr className="table__row">
                {tableHeadTitle.map((title, index) => (
                  <td className="table__data" key={index}>
                    {title}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
          <Pagination
            recordsPerPage={recordsPerPage}
            totalRecords={filterSwitch().length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default GetRecordsTable;
