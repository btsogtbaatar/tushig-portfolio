import { useState } from 'react';
import { getIconSrc } from '../utility';
import Button from './Button';
import Paragraph from './Paragraph';

export default function AboutMe() {
  const [show, toggle] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 text-left m-5">
      {show && (
        <div className="rounded-md bg-gray-900 bg-opacity-90 p-4 py-6 max-w-[30em] text-left mb-2">
          <div className="flex flex-col sm:flex-row items-center">
            <img className="w-32 rounded-full" src="./me.png" />
            <div className="flex flex-col mt-2 sm:ml-6 sm:mt-0">
              <h4 className="text-lg">Tushig Tsogtbaatar</h4>
              <Paragraph className="text-sm mt-2 font-thin">
                I'm a <strong>full stack developer</strong> from <strong>Mongolia</strong> 🇲🇳 with{' '}
                <strong>7 years</strong> of expertise in designing and developing{' '}
                <strong>web and mobile applications</strong>.
              </Paragraph>
              <div className="flex space-x-4 mt-4 content-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/battushigtso/"
                >
                  <img className="h-5" src={getIconSrc('linkedin', 'e0e0e0')} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/battushig.ts/"
                >
                  <img
                    className="h-5"
                    src={getIconSrc('instagram', 'e0e0e0')}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/ts.battushig/"
                >
                  <img className="h-5" src={getIconSrc('facebook', 'e0e0e0')} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Button onClick={() => toggle((show) => !show)}>Learn about me</Button>
    </div>
  );
}
