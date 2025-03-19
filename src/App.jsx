import AddItemBtn from "./components/AddItemBtn.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import List from "./components/List.jsx";
import "./styles/App.css";

function App() {
  const initEdu = [
    {
      key: crypto.randomUUID(),
      place: "Clown College",
      topic: "B.S Goofing Around",
      start: "2001-06",
      end: "2004-09",
      present: false,
      desc: "- What a silly boy!",
    },
  ];

  const initExp = [
    {
      key: crypto.randomUUID(),
      place: "Big Top Circus",
      topic: "Senior Goofball",
      start: "2005-08",
      end: "2025-03",
      present: true,
      desc: "- I've seen too many things.",
    },
  ];

  return (
    <>
      <h1 className="app-title">CV Maker</h1>
      <main className="cv-app">
        <PersonalInfo />
        <hr className="section-divider" />
        <div className="education-container">
          <List title="Education" arr={initEdu} />
        </div>
        <hr className="section-divider" />
        <div className="experience-container">
          <List title="Experience" arr={initExp} />
        </div>
      </main>
    </>
  );
}

export default App;
