import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((c) => c !== "");
  console.log(crumbs);
  return (
    <div>
      {crumbs.map((c) => (
        <Link to={`/${c}`}>{`${c}|`}</Link>
      ))}
    </div>
  );
}
