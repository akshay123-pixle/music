import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="bc">
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </div>
    </div>
  );
}
export default App;
