import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className="absolute right-4 top-4 z-20 h-7 w-7 rounded border border-gray-300 bg-white/50 p-1.5 backdrop-blur-sm hover:bg-white/80"
      onClick={copy}
    >
      {copied ? (
        <Check className="h-full w-full text-green-500" />
      ) : (
        <Copy className="h-full w-full text-gray-500" />
      )}
    </button>
  );
}
