import Link from 'next/link';

const timelineItems = [
  {
    slug: 'apc-firmware',
    date: 'July 2024 - Present',
    title: 'Embedded Firmware Engineer',
    company: 'American Power Conversion by Schneider Electric',
    summary:
      'Built and integrated bare-metal UPS firmware on STM32H7/H5, improving fault handling and real-time reliability across battery, inverter, and PFC control paths.',
  },
  {
    slug: 'trellix-data-integration',
    date: 'May 2024 - July 2024',
    title: 'Data Integration Intern',
    company: 'Trellix (previously McAfee), Remote',
    summary:
      'Migrated and rebuilt enterprise integration pipelines across Oracle Fusion, GCP, and SAP Ariba to automate cross-platform procurement data flow.',
  },
  {
    slug: 'linde-full-stack',
    date: 'July 2023 - August 2023',
    title: 'Full-Stack Developer Intern',
    company: 'Linde PLC',
    summary:
      'Built a technician workflow app and modular form system that digitized on-site operations and streamlined maintenance form delivery.',
  },
];

export default function Home() {
  return (
    <section id="home">
      <h2>About</h2>
      <p>Power electronics firmware engineer with 2 years of hands-on experience in bare-metal embedded systems for UPS platforms — including PFC, inverter control, battery monitoring, and multi-chip power system integration. Seeking a customer-facing FAE role where deep technical expertise, lab instrumentation proficiency, and native Japanese fluency can support Renesas' global datacenter and AI power customers</p>
      <div className="timeline">
        {timelineItems.map((item) => (
          <div className="timeline-item" key={item.slug}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-company"><strong></strong> {item.company}</p>
              <p>{item.summary}</p>
              <Link className="timeline-link" href={`/timeline/${item.slug}`}>Read full summary</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}