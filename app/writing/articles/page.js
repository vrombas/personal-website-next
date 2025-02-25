import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import RadarChart from '../../components/RadarChart'; // New client component


export default async function Writing() {
  // Resolve the path to my_speech.md
  const filePath = path.join(process.cwd(), "content", "eng210_essay.md");
  const speechContent = await fs.readFile(filePath, "utf8");


  // change these to API calls later, although chartLabels are static
  const chartLabels = ['Creativity', 'Clarity', 'Depth', 'Engagement', 'Structure'];
  const chartData = [85, 90, 75, 80, 70]; // Values from 0-100

  const RelatedLinks = [
    { title: "The Future of Tech", url: "https://example.com/tech" },
    { title: "Thoughts on AI", url: "https://example.com/ai" },
  ];

  return (
    <section id="writing">
      {/* <ReactMarkdown>{speechContent}</ReactMarkdown> */}

      <h3>Sentiment Score of this blog</h3>
      <div style={{ maxWidth: '400px', margin: '20px 0' }}>
      <RadarChart labels={chartLabels} data={chartData} />
      </div>

      <h3>Related Readings</h3>
      <ul>
        {RelatedLinks.map((writing, index) => (
          <li key={index}>
            <a href={writing.url} target="_blank" rel="noopener noreferrer">
              {writing.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
