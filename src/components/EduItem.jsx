export default function EduItem({ eduObj }) {
  const institution = eduObj.institution;
  const subject = eduObj.subject;
  const start = eduObj.start;
  const end = eduObj.end;
  const desc = eduObj.desc;

  const itemExists = institution || subject;

  if (!itemExists) return null;

  return (
    <div className="education-item">
      <h3>{institution + (subject && ` - ${subject}`)}</h3>
      <p>{`${start} - ${end}`}</p>
      <p>{desc}</p>
    </div>
  );
}

// Clean this up
