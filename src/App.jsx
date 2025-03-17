import PersonalInfo from "./components/PersonalInfo.jsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1 className="app-title">CV Maker</h1>
      <main className="cv-app">
        <PersonalInfo />
        <hr />
        <div className="education-container">
          <h2>Education</h2>
          <button>Add Item</button>
          <div className="education-item">
            <h3>Institution Name</h3>
            <h3>Degree</h3>
            <p>Jan 2025</p>
            <p>Mar 2025</p>
            <p>Optional Description</p>
          </div>
          <hr />
        </div>
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
