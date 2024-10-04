import clsx from 'clsx';
import React from 'react';

export default function H2(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h2 className={clsx("block text-4xl font-bold font-['Futura']", props.className)}>
      {props.children}
    </h2>
  );
}
