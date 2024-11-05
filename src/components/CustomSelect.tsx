import { Field, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: Option[];
  onChange: (option: string) => void;
  className?: string;
}

export default function CustomSelect(props: CustomSelectProps) {
  return (
    <div className={clsx('w-full max-w-md', props.className)}>
      <Field>
        <div className="relative">
          <Select
            className={clsx(
              'block w-full appearance-none rounded-md border-none bg-gray-900/90 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              '*:text-black capitalize'
            )}
            onChange={(e) => props.onChange(e.target.value)}
          >
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
}
