import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function useWatchlist() {
  return useContext(WatchlistContext);
}

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movieId, movieDetails) => {
    if (!watchlist.some((item) => item.id === movieId)) {
      setWatchlist([...watchlist, { id: movieId, details: movieDetails }]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((item) => item.id !== movieId));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
