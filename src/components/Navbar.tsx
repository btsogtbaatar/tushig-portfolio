import { ArrowDownTrayIcon, Bars3Icon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menus from '../menus.json';
import Button from './Button';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [showMobileMenu, toggleShowMobileMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();

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
        `fixed w-full top-0 py-2 z-40 bg-gradient-to-b z-100`,
        !isAtTop || showMobileMenu ? 'bg-black' : ''
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex sm:hidden items-center">
            <Button
              className="bg-transparent"
              onClick={() => toggleShowMobileMenu(!showMobileMenu)}
            >
              <Bars3Icon height={20} width={20} />
            </Button>
          </span>
          <div className="flex flex-1 justify-center items-center">
            <Logo onPress={() => {
              toggleShowMobileMenu(false);
              navigate('/');
            }} />
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
