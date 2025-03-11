import accountSvg from "./assets/account.svg";
import schoolSvg from "./assets/school.svg";
import briefcaseSvg from "./assets/briefcase.svg";
import "./App.css";
import EditCard from "./components/EditCard.jsx";

function App() {
  return (
    <>
      <section className="edit-tab">
        <EditCard title="Personal Info" symbol={accountSvg}>
          <h1>Test 1</h1>
        </EditCard>
        <EditCard title="Education" symbol={schoolSvg}>
          <h1>Test 1</h1>
        </EditCard>
        <EditCard title="Experience" symbol={briefcaseSvg}>
          <h1>Test 1</h1>
        </EditCard>
      </section>

      <section className="doc-tab">
        <h1>test 2</h1>
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
