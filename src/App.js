import React, { Fragment } from "react";
import "./scss/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import RecordsState from "./context/records/RecordsState";
import MainSection from "./component/MainSection";

function App() {
  return (
    <Fragment>
      <Header />
      <RecordsState>
        <MainSection />
      </RecordsState>
    </Fragment>
  );
}

export default App;
