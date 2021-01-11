import "./scss/index.css";
import RecordsState from "./context/records/RecordsState";
import MainSection from "./component/MainSection";

function App() {
  return (
    <RecordsState>
      <MainSection />
    </RecordsState>
  );
}

export default App;
