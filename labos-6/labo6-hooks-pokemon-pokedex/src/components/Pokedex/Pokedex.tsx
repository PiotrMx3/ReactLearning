import {useEffect, useState} from "react";
import {RotatingLines} from "react-loader-spinner";

interface PokedexProps {
  limit: number;
}
interface Pokemon {
  name: string;
  url: string;
}

interface Results {
  results: Pokemon[];
}

const Pokedex = ({limit}: PokedexProps) => {
  const [results, setResults] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // https://pokeapi.co/api/v2/pokemon?limit={limit}

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const timeId = setTimeout(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
          );

          if (!response.ok) throw new Error("Fetch failed");
          const jsonData: Results = await response.json();

          if (!ignore) {
            setResults(jsonData.results);
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          if (!ignore) {
            ignore = true;
          }
        } finally {
          if (!ignore) {
            setIsLoading(false);
          }
        }
      }
      fetchData();
    }, 1000);

    return () => {
      ignore = true;
      clearTimeout(timeId);
    };
  }, [limit]);

  if (isLoading) {
    return (
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  } else {
    return (
      <ul>
        {results.map((el, i) => (
          <li key={el.name + "-" + i}>{el.name}</li>
        ))}
      </ul>
    );
  }
};

export default Pokedex;
