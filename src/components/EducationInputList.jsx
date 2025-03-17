import EducationInputItem from "./EducationInputItem.jsx";

export default function EducationInputList({ educationArr }) {
  const listItems = educationArr.map((eduObj) => (
    <li className="education-input-item" key={eduObj.key}>
      <h3>{eduObj.degree}</h3>
      <h4>{eduObj.institution}</h4>
      <p>{`${eduObj.start} - ${eduObj.end}`}</p>
    </li>
  ));

  return <ul className="education-list">{listItems}</ul>;
}
