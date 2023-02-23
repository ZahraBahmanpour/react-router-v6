import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((c) => c !== "");
  return (
    <div>
      {crumbs.map((c) => (
        <Link to={`/${c}`}>{`${c}|`}</Link>
      ))}
    </div>
  );
}
