import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";


export const RQSuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log('data success get', data);
  }

  const onError = (error) => {
    console.log('data failed get', error.message);
  }

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetchData,
  //   {
  //   //   staleTime: 30000,
  //   //   refetchInterval: 20000
  //   //   refetchOnMount: true,
  //   //   refetchOnWindowFocus: true
  //   //   refetchIntervalInBackground: true,
  //   //   enabled: false
  //       onSuccess,
  //       onError
  //   }
  // );

  const { isLoading, data, isFetching, isError, error } = useSuperHeroesData(onSuccess, onError);



  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loadingg</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
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
      RQ Super Heroes Page
      {/* <button onClick={refetch}>Dapatkan data</button> */}
      {/* {data?.data.map((item) => {
        return (
          <ul key={item.name}>
            <li>{item.name}</li>
          </ul>
        );
      })} */}
      {
        data.map((heroName) => {
          return (
            <div key={heroName}>{heroName}</div>
          )
        })
      }
    </div>
  );
};
