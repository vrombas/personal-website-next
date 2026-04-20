import TimelineSection from './components/TimelineSection';
import { experienceTimelineItems, leadershipTimelineItems } from './timelineData';

export default function Home() {
  return (
    <section id="home">
      <h2>About</h2>
      <p>Power electronics firmware engineer with 2 years of hands-on experience in bare-metal embedded systems for UPS platforms — including PFC, inverter control, battery monitoring, and multi-chip power system integration. </p>
      <TimelineSection title="Experience" items={experienceTimelineItems} />
      <TimelineSection title="Leadership" items={leadershipTimelineItems} />
    </section>
  );
}