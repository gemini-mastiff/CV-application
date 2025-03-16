import accountSvg from "./assets/account.svg";
import schoolSvg from "./assets/school.svg";
import briefcaseSvg from "./assets/briefcase.svg";
import "./App.css";
import EditCard from "./components/EditCard.jsx";
import Input from "./components/Input.jsx";
import PersonalDisplay from "./components/PersonalDisplay.jsx";
import EducationInputList from "./components/EducationInputList.jsx";
// import NewListItemBtn from "./components/NewListItem.jsx";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  // const [educationArr, setEducationArr] = useState([]);
  // const [experienceArr, setExperienceArr] = useState([]);

  const nameOnChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      name: e.target.value,
    });
  };

  const emailOnChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      email: e.target.value,
    });
  };

  const numberOnChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      number: e.target.value,
    });
  };

  return (
    <>
      <section className="edit-tab">
        <div className="edit-container">
          <EditCard title="Personal Info" symbol={accountSvg}>
            <Input
              name={"name"}
              value={personalInfo.name}
              onChange={nameOnChange}
            />
            <Input
              name={"email"}
              type="email"
              value={personalInfo.email}
              onChange={emailOnChange}
            />
            <Input
              name={"phone"}
              type="phone"
              value={personalInfo.number}
              onChange={numberOnChange}
            />
          </EditCard>
          <EditCard title="Education" symbol={schoolSvg}>
            {/* <EducationInputList educationArr={educationArr} /> */}
            {/* <Input name={"institution"} value={}/> */}
          </EditCard>
          <EditCard title="Experience" symbol={briefcaseSvg}>
            <h1>Test 1</h1>
          </EditCard>
        </div>
      </section>

      <section className="doc-tab">
        <div className="doc-display">
          <PersonalDisplay personalInfo={personalInfo} />
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
