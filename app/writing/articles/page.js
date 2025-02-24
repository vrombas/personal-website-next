import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default async function Writing() {
  // Resolve the path to my_speech.md
  const filePath = path.join(process.cwd(), "content", "eng210_essay.md");
  const speechContent = await fs.readFile(filePath, "utf8");

  const RelatedLinks = [
    { title: "The Future of Tech", url: "https://example.com/tech" },
    { title: "Thoughts on AI", url: "https://example.com/ai" },
  ];

  return (
    <section id="writing">
      <ReactMarkdown>{speechContent}</ReactMarkdown>
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
