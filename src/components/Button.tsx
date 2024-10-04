import { ButtonProps, Button as HeadlessUIButton } from '@headlessui/react';
import clsx from 'clsx';

export default function Button(props: ButtonProps) {
  return (
    <HeadlessUIButton
      {...props}
      className={clsx(
        `justify-center inline-flex items-center gap-2 rounded-md bg-gray-900 bg-opacity-90 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-800 data-[open]:bg-gray-800 data-[focus]:outline-1 data-[focus]:outline-white hover:bg-opacity-50`,
        props.className
      )}
    />
  );
}
