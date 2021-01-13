import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GetRecordsTable from "./GetRecordsTable";
import ListGroup from "./utils/ListGroup";
import SearchRecords from "./SearchRecords";
import SwitchFilter from "./SwitchFilter";
import { recordsContext } from "../context/records/RecordsContext";

const MainSection = () => {
  const {
    moneyOrderChecked,
    payPalChecked,
    checkChecked,
    creditCardChecked,
    searchRecords,
  } = useContext(recordsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);

  useEffect(() => {
    if (
      moneyOrderChecked ||
      payPalChecked ||
      checkChecked ||
      creditCardChecked
    ) {
      setCurrentPage(1);
      searchRecords("");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Grid container direction="column" className="section">
      <Grid className="section__title__wrapper">
        <Typography
          variant="h3"
          className="section__title"
          style={{ marginTop: "5em" }}
        >
          Patients' Records
        </Typography>
      </Grid>
      <Grid item container justify="center" style={{ marginBottom: "2em" }}>
        <SearchRecords />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className="section__filter__wrapper"
      >
        <Grid item>
          <ListGroup />
        </Grid>
        <Grid item>
          <SwitchFilter />
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
