import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
    return axios({
      method: "GET",
      url: `http://localhost:4000/superHeroes`,
    });
  };

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        'super-heroes',
        fetchData,
        {
          refetchInterval: 20000,
          refetchIntervalInBackground: true,
          onSuccess,
          onError,
          select: (data) => {
            const dataHeroes = data.data.map(hero => hero.name);
            return dataHeroes
          }
        }
      )
}

export const useSuperHeroesDataClick = (onSuccess, onError) => {
    return useQuery(
        "data-heroes",
        fetchData,
        {
            enabled: false,
            onSuccess,
            onError
        }
    )
}