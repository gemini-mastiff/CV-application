import accountSvg from "./assets/account.svg";
import schoolSvg from "./assets/school.svg";
import briefcaseSvg from "./assets/briefcase.svg";
import "./App.css";
import EditCard from "./components/EditCard.jsx";

function App() {
  return (
    <>
      <section className="edit-tab">
        <div className="edit-container">
          <EditCard title="Personal Info" symbol={accountSvg}>
            <h1>Test 1</h1>
          </EditCard>
          <EditCard title="Education" symbol={schoolSvg}>
            <h1>Test 1</h1>
          </EditCard>
          <EditCard title="Experience" symbol={briefcaseSvg}>
            <h1>Test 1</h1>
          </EditCard>
        </div>
      </section>

      <section className="doc-tab">
        <div className="doc-display">
          <h2>Personal Display</h2>
          <h2>Education Display</h2>
          <h2>Experience Display</h2>
        </div>
      </section>
      {/* <DocumentTab>
      <PersonalDisplay />
      <EducationDisplay />
      <ExperienceDisplay />
    </DocumentTab> */}
    </>
  );
}

export default App;
