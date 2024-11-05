
export interface LogoProps {
  onPress: () => void;
}

export default function Logo(props: LogoProps) {

  return (
    <div className="select-none cursor-pointer">
      <img
        className="h-16 w-auto"
        src="./logo.svg"
        alt="Paper Plane Logo"
        onClick={props.onPress}
      />
    </div>
  );
}
