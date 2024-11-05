import { getIconSrc } from '../utility';

export default function BuiltWith() {
  return (
    <div className="fixed bottom-0 right-0 text-left m-5">
      <div className="relative">
        <div className="justify-center inline-flex items-center gap-2 rounded-md bg-gray-900 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-white/10 bg-opacity-100">
          Built with
          <img alt="React" title="React" className="h-4 ml-1" src={getIconSrc('react')} />
          <img
            alt="Tailwind" title="Tailwind"
            className="h-4 ml-1"
            src={getIconSrc('tailwindcss', '06B6D4')}
          />
          <img alt="Spline" title="Spline" className="h-4 ml-1" src="./spline.webp" />
        </div>
      </div>
    </div>
  );
}
