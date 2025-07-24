"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ snippets }) => {
  return (
    <div className="space-y-8">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          <div className="text-neutral-light leading-relaxed pt-2">
            {snippet.explanation}
          </div>

          <div className="text-sm">
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "0.5rem",
                padding: "1rem",
                margin: 0,
              }}
              wrapLongLines={true}
            >
              {snippet.code.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeBlock;
