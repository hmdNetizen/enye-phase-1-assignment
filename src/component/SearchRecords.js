import React, { useRef, useContext } from "react";
import { recordsContext } from "../context/records/RecordsContext";

const SearchRecords = ({ filtered }) => {
  const { searchRecords, getPatientRecords } = useContext(recordsContext);

  const text = useRef("");

  const handleSearch = (e) => {
    if (text.current.value === "") {
      return getPatientRecords();
    } else {
      searchRecords(e.target.value);
    }
  };
  return (
    <form autoComplete="off" className="search">
      <input
        type="text"
        ref={text}
        onChange={handleSearch}
        placeholder="Search patient name for records"
        className="search__form"
      />
    </form>
  );
};

export default SearchRecords;
