import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SuperHeroesPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:4000/superHeroes",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        data.map((item, index) => {
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
              <ul key={index}>
                <li>{item.name}</li>
              </ul>
            </>
          );
        })
      )}
    </>
  );
};
