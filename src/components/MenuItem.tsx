import { Link } from "react-router-dom";

export interface MenuItemProps {
  text: string;
  path: string;
  toggle?: (value: boolean) => void;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      to={props.path}
      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white hover:bg-opacity-50"
    >
      {props.text}
    </Link>
  );
}

export type MenuItemModel = {
  id: number;
  text: string;
  path: string;
};
