import accountSvg from "./assets/account.svg";
import schoolSvg from "./assets/school.svg";
import briefcaseSvg from "./assets/briefcase.svg";
import "./App.css";
import EditCard from "./components/EditCard.jsx";
import Input from "./components/Input.jsx";
import PersonalDisplay from "./components/PersonalDisplay.jsx";
import { useState } from "react";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const nameOnChange = (e) => {
    setNameValue(e.target.value);
  };

  const emailOnChange = (e) => {
    setEmailValue(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhoneValue(e.target.value);
  };

  return (
    <>
      <section className="edit-tab">
        <div className="edit-container">
          <EditCard title="Personal Info" symbol={accountSvg}>
            <Input name={"name"} value={nameValue} onChange={nameOnChange} />
            <Input
              name={"email"}
              type="email"
              value={emailValue}
              onChange={emailOnChange}
            />
            <Input
              name={"phone"}
              type="phone"
              value={phoneValue}
              onChange={phoneOnChange}
            />
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
          <PersonalDisplay
            nameValue={nameValue}
            emailValue={emailValue}
            phoneValue={phoneValue}
          />
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
