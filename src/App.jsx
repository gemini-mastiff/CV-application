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
      desc: "- What a silly boy",
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
          <h2>Experience</h2>
          <button>Add Item</button>
          <div className="education-item">
            <h3>Employer</h3>
            <h3>Role</h3>
            <p>Jan 2025</p>
            <p>Mar 2025</p>
            <p>Optional Description</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
