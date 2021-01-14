import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GetRecordsTable from "./GetRecordsTable";
import ListGroup from "./utils/ListGroup";
import SearchRecords from "./SearchRecords";
import SwitchFilter from "./SwitchFilter";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Footer from "./Footer";

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const matchesSM = useMediaQuery("(max-width: 960px");
  const matchesXS = useMediaQuery("(max-width: 600px");

  return (
    <Grid container direction="column" className="section">
      <Grid className="section__title__wrapper">
        <Typography variant="h3" className="section__title">
          Patients' Records
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify={matchesXS ? "center" : matchesSM ? "flex-start" : "center"}
        style={{ marginBottom: "2em" }}
      >
        <SearchRecords />
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems={matchesSM ? "center" : "center"}
        className="section__filter__wrapper"
      >
        <Grid item>
          <ListGroup setCurrentPage={setCurrentPage} />
        </Grid>
        <Grid item>
          <SwitchFilter setCurrentPage={setCurrentPage} />
        </Grid>
      </Grid>
      <Grid item style={{ maxWidth: "100%", overflowX: "auto" }}>
        <GetRecordsTable
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
      <Grid item container>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MainSection;
