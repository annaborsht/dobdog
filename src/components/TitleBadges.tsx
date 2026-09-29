export default function TitleBadges({
  header,
  titles,
  intro,
}: {
  header?: string;
  titles: string[];
  intro?: string;
}) {
  return (
    <div className="dog-titles-section">
      {header && <h2>{header}</h2>}
      {intro && <p>{intro}</p>}
      <div className="dog-titles-grid">
        {titles.map((title, index) => (
          <span
            key={index}
            className="dog-title-badge"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
