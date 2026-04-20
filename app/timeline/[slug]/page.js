import { notFound } from 'next/navigation';
import Image from 'next/image';
import BackToTimelineButton from './BackToTimelineButton';
import { timelineDetails } from '../../timelineData';

export function generateStaticParams() {
  return Object.keys(timelineDetails).map((slug) => ({ slug }));
}

export default async function TimelineDetailPage({ params }) {
  const { slug } = await params;
  const detail = timelineDetails[slug];

  if (!detail) {
    notFound();
  }

  return (
    <section id="timeline-detail">
      <BackToTimelineButton />
      <div className="timeline-detail-header">
        <h2>{detail.title}</h2>
        <Image
          src={detail.logoSrc}
          alt={detail.logoAlt}
          width={64}
          height={64}
          className="timeline-detail-logo"
          priority
        />
      </div>
      <p className="timeline-detail-meta">
        <span className="timeline-company"><strong></strong> {detail.company}</span>
        {detail.date ? <span className="timeline-detail-date">{detail.date}</span> : null}
      </p>
      <p>{detail.summary}</p>
      <p>{detail.fullSummary}</p>
    </section>
  );
}
