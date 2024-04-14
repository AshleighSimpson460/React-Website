import React from "react";
import useGenres from "../assets/useHooks/useGenres.tsx";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
