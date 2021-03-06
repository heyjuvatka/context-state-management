import { props } from "bluebird";
import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: "23124",
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: "2566124",
    },
    {
      name: "Friends",
      price: "$10",
      id: "23524",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
