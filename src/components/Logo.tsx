import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to={"/"} >
        <img className="h-16 w-auto" src="./logo.svg" alt="Tushig" />
      </Link>
    </div>
  );
}
