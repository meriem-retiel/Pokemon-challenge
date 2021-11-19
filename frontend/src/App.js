import "./App.css";
import Search from "./components/Search";
import { List } from "./components/List";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Pagination from "./components/Pagination";

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("search", event.target.value);
  };
  const handlePreviousClick = (event) => {
    if (previousUrl !== null) {
      getPokemonsData(previousUrl);
    }
  };
  const handleNextClick = (event) => {
    if (nextUrl !== null) {
      getPokemonsData(nextUrl);
    }
  };
  const searchedPokemons = pokemons.filter(function (pokemon) {
    console.log(searchTerm)
    return pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  const getPokemonsData = (url) => {
    setIsLoading(true);
    var data = [];
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setNextUrl(result.next);
        setPreviousUrl(result.previous);
        result.results.forEach(async (pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((result) => data.push(result));
        });
        console.log(data)
        setPokemons(data);
        console.log(pokemons)
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  };

  useEffect(() => {
    getPokemonsData("https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0");
    
  }, []);
 

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <hr />
      {isError && <Typography>Something went wrong ...</Typography>}
      {isLoading ? (
        <Typography>Loading ...</Typography>
      ) : (
        <List data={searchedPokemons} />
      )}
      <Pagination
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
    </div>
  );
}

export default App;
