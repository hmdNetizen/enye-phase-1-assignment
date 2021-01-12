import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import GetRecordsTable from "./GetRecordsTable";
import Pagination from "./Pagination";
import { recordsContext } from "../context/records/RecordsContext";

const MainSection = () => {
  const { records } = useContext(recordsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  return (
    <Grid container direction="column">
      <Grid item>
        <GetRecordsTable
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
        />
        <Pagination
          recordsPerPage={recordsPerPage}
          totalRecords={records.length}
        />
      </Grid>
    </Grid>
  );
};

export default MainSection;
