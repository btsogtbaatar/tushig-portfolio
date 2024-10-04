import clsx from 'clsx';
import React from 'react';

export interface ArticleProps {
  className?: string;
  children: React.ReactNode;
}

export default function Article(props: ArticleProps) {
  return (
    <div className={clsx(`my-12`, props.className)}>{props.children}</div>
  );
}
