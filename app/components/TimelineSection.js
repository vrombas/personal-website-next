import Link from 'next/link';

export default function TimelineSection({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="timeline">
        {items.map((item) => (
          <div className="timeline-item" key={item.slug}>
            {item.date ? <div className="timeline-date">{item.date}</div> : null}
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-company"><strong></strong> {item.company}</p>
              <p>{item.summary}</p>
              <Link className="timeline-link" href={`/timeline/${item.slug}`}>More</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
