import clsx from 'clsx';
import React from 'react';

export default function Paragraph(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return (
    <p className={clsx('block text-sm', props.className)}>
      {props.children}
    </p>
  );
}
