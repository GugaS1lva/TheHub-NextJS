"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "typescript" }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
