import axios from "axios";
import { useQuery } from "react-query";


const fetchData = () => {
    return axios({
        method: 'GET',
        url: `http://localhost:4000/superHeroes`
    });
}

export const RQSuperHeroesPage = () => {

    const { isLoading, data, isError, error } = useQuery('super-heroes', fetchData)

    if(isLoading) {
        return <h2>Loadingg</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            RQ Super Heroes Page
            {data.data.map((item) => {
                return (
                    <ul key={item.name}>
                        <li>{item.name}</li>
                    </ul>
                )
            })}
        </div>
    );
}