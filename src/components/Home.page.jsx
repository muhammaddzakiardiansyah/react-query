import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home Page</Link>
            </li>
            <li>
              <Link to={"/super-heroes"}>Super Heroes Page</Link>
            </li>
            <li>
              <Link to={"/rq-super-heroes"}>RQ Super Heroes Page</Link>
            </li>
            <li>
              <Link to={"/buatan-saya"}>Buatan saya Page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>Home Page</div>
    </>
  );
};
