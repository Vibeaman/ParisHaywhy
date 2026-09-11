export function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{index}</span>
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  );
}
