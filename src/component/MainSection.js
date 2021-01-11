import React, { useEffect, useContext } from "react";
import { recordsContext } from "./../context/records/RecordsContext";
import Grid from "@material-ui/core/Grid";
import RecordsTable from "./RecordsTable";

const MainSection = () => {
  //   const { getPatientRecords, records } = useContext(recordsContext);
  //   console.log(records);
  return (
    <Grid container direction="column">
      <Grid item>
        <RecordsTable />
      </Grid>
    </Grid>
  );
};

export default MainSection;
