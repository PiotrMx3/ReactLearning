import {useEffect, useState, useCallback} from "react";

const options = {
  headers: {
    Accept: "application/json",
  },
};

interface DadJoke {
  id: string;
  joke: string;
  status: number;
}

const DadJoke = () => {
  const [joke, setJoke] = useState("");
  const [favoriteJoke, setFavoriteJoke] = useState(
    localStorage.getItem("favoriteJoke") ?? "",
  );

  const loadJoke = useCallback(async function (controller?: AbortController) {
    try {
      const respone = await fetch("https://icanhazdadjoke.com/", {
        ...options,
        signal: controller?.signal,
      });

      if (!respone.ok) throw new Error("Fetch Error");

      const data: DadJoke = await respone.json();
      setJoke(data.joke);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }, []);

  const setFavorite = () => {
    setFavoriteJoke(joke);
  };

  useEffect(() => {
    const controller = new AbortController();
    loadJoke(controller);

    return () => {
      console.log("abort");
      return controller.abort();
    };
  }, [loadJoke]);

  useEffect(() => {
    localStorage.setItem("favoriteJoke", favoriteJoke);
  }, [favoriteJoke]);

  return (
    <>
      <h2 style={{textAlign: "left"}}>Random Joke:</h2>
      <div>
        <p>{joke}</p>
        <button onClick={() => loadJoke()}>New Joke</button>
        <button onClick={setFavorite} style={{marginLeft: "1rem"}}>
          Set As Favorite
        </button>
      </div>

      {favoriteJoke && (
        <>
          <h2 style={{textAlign: "left"}}>Favorite joke:</h2>
          <div>
            <p>{favoriteJoke}</p>
          </div>
        </>
      )}
    </>
  );
};

export default DadJoke;
