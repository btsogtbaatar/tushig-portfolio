import { ArrowDownTrayIcon, Bars3Icon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import menus from '../menus.json';
import Button from './Button';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [showMobileMenu, toggleShowMobileMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        `fixed w-full top-0 py-2 z-40 bg-gradient-to-b`,
        !isAtTop || showMobileMenu ? 'bg-black' : ''
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-y-0 inset-x-4 flex sm:hidden items-center">
            <Button
              className="bg-transparent"
              onClick={() => toggleShowMobileMenu(!showMobileMenu)}
            >
              <Bars3Icon height={20} width={20} />
            </Button>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <Logo />
            <Menu className="hidden sm:block" menus={menus} />
            <div className="hidden sm:block">
              <a href="./Tushig Tsogtbaatar.docx">
                <Button className="w-full">
                  <ArrowDownTrayIcon height={16} width={16} />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        menus={menus}
        show={showMobileMenu}
        toggle={toggleShowMobileMenu}
      />
    </nav>
  );
}
