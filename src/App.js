import React from "react";
import "./scss/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import RecordsState from "./context/records/RecordsState";
import MainSection from "./component/MainSection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <RecordsState>
        <MainSection />
      </RecordsState>
    </React.Fragment>
  );
}

export default App;
