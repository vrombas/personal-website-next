import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";


export default async function Writing() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'app', 'writing', 'japanese', 'page.md');
  const fileContent = await fs.readFile(filePath, 'utf8');

  const newWritings = [
    { title: 'The Future of Tech', url: 'https://example.com/tech' },
    { title: 'Thoughts on AI', url: 'https://example.com/ai' },
  ];

  return (
    <section id="writing">
      <ReactMarkdown>{fileContent}</ReactMarkdown>

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