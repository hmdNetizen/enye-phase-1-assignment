import React, { useContext, useMemo, useEffect } from "react";
import { recordsContext } from "../context/records/RecordsContext";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

const RecordsTable = () => {
  const { records, getPatientRecords } = useContext(recordsContext);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => records, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  useEffect(() => {
    getPatientRecords();
  }, [records, getPatientRecords]);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th>S/N</th>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.length > 0 &&
          rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                <td>{(index += 1)}</td>
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default RecordsTable;
