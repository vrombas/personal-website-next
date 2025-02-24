import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default async function Writing() {
  // Resolve the path to my_speech.md
  const filePath = path.join(process.cwd(), 'content', 'my_speech.md');
  const speechContent = await fs.readFile(filePath, 'utf8');

  const newWritings = [
    { title: 'The Future of Tech', url: 'https://example.com/tech' },
    { title: 'Thoughts on AI', url: 'https://example.com/ai' },
  ];

  return (
    <section id="writing">
      <h2>Writing</h2>
      <p>Links or snippets of my writing are showcased here.</p>
      
      <h3>My Speech</h3>
      <ReactMarkdown>{speechContent}</ReactMarkdown>

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