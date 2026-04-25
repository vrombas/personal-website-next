import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import TimelineSection from './TimelineSection';
import { experienceTimelineItems, leadershipTimelineItems } from '../timelineData';

export default async function AboutSummary() {
  const filePath = path.join(process.cwd(), 'content', 'about-summary.md');
  const fileContent = await fs.readFile(filePath, 'utf8');

  return (
    <section id="home">
      <ReactMarkdown>{fileContent}</ReactMarkdown>
      <TimelineSection title="Experience" items={experienceTimelineItems} />
      <TimelineSection title="Leadership" items={leadershipTimelineItems} />
    </section>
  );
}

export const dynamic = 'force-static';
