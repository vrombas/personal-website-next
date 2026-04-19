import { notFound } from 'next/navigation';
import Image from 'next/image';
import BackToTimelineButton from './BackToTimelineButton';

const timelineDetails = {
  'apc-firmware': {
    date: 'July 2024 - Present',
    title: 'Embedded Firmware Engineer',
    company: 'American Power Conversion by Schneider Electric',
    logoSrc: '/Schneider-Electric-Emblem.png',
    logoAlt: 'Schneider Electric emblem',
    summary:
      'Built and integrated bare-metal UPS firmware on STM32H7/H5, improving fault handling and real-time reliability across battery, inverter, and PFC control paths.',
    fullSummary:
      'Built and integrated bare-metal UPS firmware for STM32H7/H5 platforms across battery management, PFC, and inverter control subsystems while improving startup sequencing, protection logic, and real-time stability under edge-case fault conditions; collaborated with hardware and validation teams to tune control loops and diagnostics, reducing recovery time and increasing system reliability in production-oriented test environments.',
  },
  'trellix-data-integration': {
    date: 'May 2024 - July 2024',
    title: 'Data Integration Intern',
    company: 'Trellix (previously McAfee), Remote',
    logoSrc: '/Trellix.jpg',
    logoAlt: 'Trellix logo',
    summary:
      'Migrated and rebuilt enterprise integration pipelines across Oracle Fusion, GCP, and SAP Ariba to automate cross-platform procurement data flow.',
    fullSummary:
      'Migrated and rebuilt enterprise integration pipelines between Oracle Fusion, GCP, and SAP Ariba to automate procurement and supplier data movement, then improved data validation and transformation steps to reduce manual reconciliation effort, increase consistency across systems, and speed up reporting workflows for internal business teams.',
  },
  'linde-full-stack': {
    date: 'July 2023 - August 2023',
    title: 'Full-Stack Developer Intern',
    company: 'Linde PLC',
    logoSrc: '/Linde_plc_logo.png',
    logoAlt: 'Linde PLC logo',
    summary:
      'Built a technician workflow app and modular form system that digitized on-site operations and streamlined maintenance form delivery.',
    fullSummary:
      'Built a full-stack technician workflow application and modular digital form system to replace paper-based maintenance processes, enabling easier field data entry, faster form delivery, and cleaner handoffs between technicians and back-office teams while improving usability for day-to-day site operations.',
  },
};

export default function TimelineDetailPage({ params }) {
  const detail = timelineDetails[params.slug];

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
        <span className="timeline-detail-date">{detail.date}</span>
      </p>
      <p>{detail.summary}</p>
      <p>{detail.fullSummary}</p>
    </section>
  );
}
