export default function EducationInputItem({ eduObj }) {
  return (
    <div className="education-input-item">
      <h3>{eduObj.degree}</h3>
      <h4>{eduObj.institution}</h4>
      <p>{`${eduObj.start} - ${eduObj.end}`}</p>
    </div>
  );
}
