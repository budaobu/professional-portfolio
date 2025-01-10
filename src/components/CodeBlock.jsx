import React from 'react';
import { CopyButton } from './CopyButton';

export function CodeBlock({ children, className }) {
  return (
    <div className="group relative">
      <pre className={className}>{children}</pre>
      <CopyButton text={children.props.children} />
    </div>
  );
}