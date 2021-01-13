import React, { useRef, useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { recordsContext } from "../context/records/RecordsContext";

const SearchRecords = ({ filtered }) => {
  const { searchRecords } = useContext(recordsContext);

  const text = useRef("");

  const handleSearch = (e) => {
    if (text.current.value === "") {
      return filtered();
    } else {
      searchRecords(e.target.value);
    }
  };
  return (
    <form autoComplete="off" className="search">
      <TextField
        id="standard-basic"
        ref={text}
        onChange={handleSearch}
        label="Standard"
        placeholder="Search patient name for records"
        style={{ width: 600 }}
        className="search__form"
      />
    </form>
  );
};

export default SearchRecords;
