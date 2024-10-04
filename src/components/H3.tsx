import clsx from 'clsx';
import React from 'react';

export default function H3(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h3 className={clsx("block text-3xl font-bold font-['Futura']", props.className)}>{props.children}</h3>;
}
