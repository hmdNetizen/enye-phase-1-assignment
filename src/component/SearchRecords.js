import React, { useContext } from "react";
import { recordsContext } from "../context/records/RecordsContext";

const SearchRecords = ({ setCurrentPage }) => {
  const { searchRecords, textInput } = useContext(recordsContext);

  const handleSearch = (e) => {
    searchRecords(e.target.value);
    setCurrentPage(1);
  };
  return (
    <form autoComplete="off" className="search">
      <input
        type="text"
        value={textInput}
        onChange={handleSearch}
        placeholder="Search patient's Name or Email for records"
        className="search__form"
      />
    </form>
  );
};

export default SearchRecords;
