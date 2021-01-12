import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import GetRecordsTable from "./GetRecordsTable";
import Pagination from "./Pagination";
import { recordsContext } from "../context/records/RecordsContext";
import ListGroup from "./utils/ListGroup";
import SearchRecords from "./SearchRecords";

const MainSection = () => {
  // const { records, selectedGender } = useContext(recordsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item>
          <ListGroup />
        </Grid>
        <Grid item>
          <SearchRecords />
        </Grid>
      </Grid>
      <Grid item>
        <GetRecordsTable
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
    </Grid>
  );
};

export default MainSection;
