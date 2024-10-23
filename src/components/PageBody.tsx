import React from 'react';

export interface PageBodyProps {
  children: React.ReactNode;
}

export default function PageBody(props: PageBodyProps) {
  return (
    <div className="max-w-5xl mx-auto bg-black px-5 sm:px-0 text-left mb-10">
      {props.children}
    </div>
  );
}
