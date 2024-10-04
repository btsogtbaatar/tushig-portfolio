import clsx from 'clsx';
import MenuItem, { MenuItemModel } from './MenuItem';

export interface MenuProps {
  className?: string;
  menus: MenuItemModel[];
}

export default function Menu(props: MenuProps) {
  return (
    <div className={clsx(`space-x-4 flex-1 ml-10`, props.className)}>
      {props.menus.map((menu: MenuItemModel) => (
        <MenuItem key={menu.id} text={menu.text} path={menu.path} />
      ))}
    </div>
  );
}
