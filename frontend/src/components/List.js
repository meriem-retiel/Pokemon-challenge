import React from "react";
import Pokemon from "./Pokemon";
export const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Pokemon
          key={item.id}
          id={item.id}
          name={item.name}
          stats={item.stats}
          weight={item.weight}
          types={item.types}
          species={item.species}
          moves={item.moves}
        />
      ))}
    </div>
  );
};
