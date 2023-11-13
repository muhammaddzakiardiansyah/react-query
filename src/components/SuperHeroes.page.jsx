import axios from "axios";
import { useEffect, useState } from "react";

export const SuperHeroesPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:4000/superHeroes'
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, []);

    return (
        <>
            {isLoading ? (
                <h2>Loading....</h2>
            ) : (
                data.map((item, index) => {
                    return (
                        <>
                            <ul key={index}>
                                <li>{item.name}</li>
                            </ul>
                        </>
                    )
                })
            )}
        </>
    )
}