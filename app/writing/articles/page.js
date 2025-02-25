import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import RadarChart from '../../components/RadarChart'; // New client component


export default async function Writing() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'content', 'eng210_essay.md');
  const speechContent = await fs.readFile(filePath, 'utf8');

  const newWritings = [
    { title: 'The Future of Tech', url: 'https://example.com/tech' },
    { title: 'Thoughts on AI', url: 'https://example.com/ai' },
  ];

  // // Static chart labels
  // const chartLabels = ['Creativity', 'Clarity', 'Depth', 'Engagement', 'Structure'];

  // // Fetch NLU analysis
  // const apiKey = process.env.WATSON_NLU_API_KEY;
  // const apiUrl = process.env.WATSON_NLU_URL;

  // const response = await fetch(apiUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`,
  //   },
  //   body: JSON.stringify({
  //     text: speechContent, // Use the essay content as input
  //     features: {
  //       sentiment: {
  //         targets: ['apples', 'oranges', 'broccoli'], // Adjust targets if relevant
  //       },
  //       keywords: {
  //         emotion: true,
  //       },
  //     },
  //   }),
  // });

  // const nluData = await response.json();

  // // Map NLU response to chartData (0-100 scale)
  // const chartData = [
  //   // Creativity: Based on avg emotion (joy + surprise)
  //   Math.round(((nluData.keywords?.[0]?.emotion?.joy || 0) + (nluData.keywords?.[0]?.emotion?.surprise || 0)) * 50), // Scale 0-1 to 0-100
  //   // Clarity: Based on positive sentiment score
  //   Math.round(((nluData.sentiment?.document?.score || 0) + 1) * 50), // -1 to 1 -> 0-100
  //   // Depth: Based on avg emotion (sadness + fear)
  //   Math.round(((nluData.keywords?.[0]?.emotion?.sadness || 0) + (nluData.keywords?.[0]?.emotion?.fear || 0)) * 50),
  //   // Engagement: Based on anger emotion (as a proxy for intensity)
  //   Math.round((nluData.keywords?.[0]?.emotion?.anger || 0) * 100),
  //   // Structure: Placeholder (no direct NLU metric, using avg sentiment)
  //   Math.round(((nluData.sentiment?.document?.score || 0) + 1) * 50),
  // ];

  return (
    <section id="writing">
      <h2>Writing</h2>
      <p>Links or snippets of my writing are showcased here.</p>
      
      <h3>My Speech</h3>
      <ReactMarkdown>{speechContent}</ReactMarkdown>

      {/* <h3>Writing Stats</h3>
      <div style={{ maxWidth: '400px', margin: '20px 0' }}>
        <RadarChart labels={chartLabels} data={chartData} />
      </div> */}

      <h3>New Writings</h3>
      <ul>
        {newWritings.map((writing, index) => (
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

export const dynamic = 'force-static';