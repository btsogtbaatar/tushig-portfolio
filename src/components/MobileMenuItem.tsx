import { Link } from 'react-router-dom';
import { MenuItemProps } from './MenuItem';

export default function MobileMenuItem(props: MenuItemProps) {
  return (
    <Link
      onClick={() => props.toggle && props.toggle(false)}
      to={props.path}
      className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white hover:bg-opacity-50"
    >
      {props.text}
    </Link>
  );
}
