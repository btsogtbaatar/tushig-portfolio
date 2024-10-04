import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import Button from './Button';
import { MenuProps } from './Menu';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuProps extends MenuProps {
  show: boolean;
  toggle: (value: boolean) => void;
}

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <div className={`${props.show ? 'sm:hidden' : 'hidden'}`} id="mobile-menu">
      <div className="space-y-2 px-6 pb-3 pt-3">
        {props.menus.map((menu) => (
          <MobileMenuItem
            key={menu.id}
            text={menu.text}
            path={menu.path}
            toggle={props.toggle}
          />
        ))}
        <a
          href="./Tushig Tsogtbaatar.docx"
          onClick={() => props.toggle(false)}
        >
          <Button className="w-full pr-4 mt-3">
            <ArrowDownTrayIcon height={16} width={16} />
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}
