import { Link } from "react-router-dom";
import { useSuperHeroesDataClick } from "../hooks/useSuperHeroesData";

const onSuccess = (data) => {
    console.log('success', data.data);
}

const onError = (error) => {
    console.log('error', error.message);
}

const BuatanSaya = () => {
    const { isLoading, data, error, isError, isRefetch, refetch } = useSuperHeroesDataClick(onSuccess, onError);

    if(isLoading || isRefetch) {
        return <h2>Loading.....</h2>
    }
    if(isError) {
        return <h2>{error.message}</h2>
    }

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
        <div>
            <button onClick={refetch}>GET Heroes</button>
            {
                data?.data.map((hero) => {
                    return (
                        <div key={hero.name}>{hero.name}</div>
                    )
                })
            }
        </div>
        </>
    );
};

export default BuatanSaya;
