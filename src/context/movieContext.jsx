import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  console.log("Loaded watchList from context:", watchList);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const apiUrl = "https://node-mongo-mv85.onrender.com/api/movies";

        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);

        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching random movies:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToWatchlist = (movieId, movieDetails) => {
    const isMovieInWatchlist = watchList.some((movie) => movie.id === movieId);

    if (!isMovieInWatchlist) {
      setWatchList((prevWatchList) => [
        ...prevWatchList,
        { id: movieId, details: movieDetails },
      ]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    // Remove the movie with the specified ID from the watchlist
    setWatchList((prevWatchList) =>
      prevWatchList.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        watchList,
        addToWatchlist,
        removeFromWatchlist, // Make sure this is included
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
