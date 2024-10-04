import React from 'react';

export interface PageBodyProps {
  children: React.ReactNode;
}

export default function PageBody(props: PageBodyProps) {
  return (
    <div className="max-w-5xl mx-auto bg-black px-10 text-left mb-10">
      {props.children}
    </div>
  );
}
