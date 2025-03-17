import accountSvg from "./assets/account.svg";
import schoolSvg from "./assets/school.svg";
import briefcaseSvg from "./assets/briefcase.svg";
import "./App.css";
import EditCard from "./components/EditCard.jsx";
import Input from "./components/Input.jsx";
import PersonalDisplay from "./components/PersonalDisplay.jsx";
import EduItem from "./components/EduItem.jsx";
import EducationInputList from "./components/EducationInputList.jsx";
import NewListItemBtn from "./components/NewListItemBtn.jsx";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [currEdu, setCurrEdu] = useState({
    institution: "",
    subject: "",
    startDate: "",
    endDate: "",
    desc: "",
  });
  // const [educationArr, setEducationArr] = useState([]);
  // const [experienceArr, setExperienceArr] = useState([]);

  return (
    <>
      <section className="edit-tab">
        <div className="edit-container">
          <EditCard title="Personal Info" symbol={accountSvg}>
            <Input
              name={"name"}
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  name: e.target.value,
                })
              }
            />
            <Input
              name={"email"}
              type="email"
              value={personalInfo.email}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  email: e.target.value,
                });
              }}
            />
            <Input
              name={"phone"}
              type="phone"
              value={personalInfo.number}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  number: e.target.value,
                });
              }}
            />
          </EditCard>
          <EditCard title="Education" symbol={schoolSvg}>
            {/* <EducationInputList educationArr={educationArr} /> */}
            <Input
              name={"institution"}
              value={currEdu.institution}
              onChange={(e) =>
                setCurrEdu({ ...currEdu, institution: e.target.value })
              }
            />
            <Input
              name={"subject"}
              value={currEdu.subject}
              onChange={(e) =>
                setCurrEdu({ ...currEdu, subject: e.target.value })
              }
            />
            <Input
              name={"start"}
              type="date"
              value={currEdu.start}
              onChange={(e) =>
                setCurrEdu({ ...currEdu, start: e.target.value })
              }
            />
            <Input
              name={"end"}
              type="date"
              value={currEdu.end}
              onChange={(e) => setCurrEdu({ ...currEdu, end: e.target.value })}
            />
            <label htmlFor="eduDesc">DESCRIPTION:</label>
            <textarea
              name="eduDesc"
              id="eduDesc"
              onChange={(e) => setCurrEdu({ ...currEdu, desc: e.target.value })}
            ></textarea>
            <NewListItemBtn />
          </EditCard>
          <EditCard title="Experience" symbol={briefcaseSvg}>
            <h1>Test 1</h1>
          </EditCard>
        </div>
      </section>

      <section className="doc-tab">
        <div className="doc-display">
          <PersonalDisplay personalInfo={personalInfo} />
          {/* Generate this dynamically and format it to look nice */}
          <h2 className="education-header">EDUCATION</h2>
          <EduItem eduObj={currEdu} />
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
