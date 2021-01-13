import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GetRecordsTable from "./GetRecordsTable";
import ListGroup from "./utils/ListGroup";
import SearchRecords from "./SearchRecords";
import SwitchFilter from "./SwitchFilter";

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  // const [moneyOrderChecked, setMoneyOrderChecked] = useState(false);
  // const [payPalChecked, setPayPalChecked] = useState(false);
  // const [checkChecked, setCheckChecked] = useState(false);
  // const [creditCardChecked, setCreditCardChecked] = useState(false);

  return (
    <Grid container direction="column" className="section">
      <Grid className="section__title__wrapper">
        <Typography variant="h3" className="section__title">
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
