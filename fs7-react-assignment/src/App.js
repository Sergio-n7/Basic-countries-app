import "./App.css";
import MainTable from "./components/MainTable";
import { SearchBar } from "./components/SearchBar";
import useCountries from "./Hooks/useCountries";
import React, { useState, useEffect } from "react";

function App() {
  // create the custom Hook and all it here
  // once I get the keyword (the value in the input I need to pass the keyword (prop) to my custom Hook so I can do it all from it
  //It is very important the order of the state to be able to pass it as a prop, first declare it and then pass it
  const [keyword, setKeyword] = useState("");
  const [error, countries] = useCountries(keyword);
  // to implement the search bar I need to create a state and remember to import it
  
  //console.log(countries); just to check if  it is working
  //create the event to take the value with a function
  // I need to execute the event function (onChange) with the useState, the setKeyword
  //This function event let get acces to the user value in the input is why I need to use the setKeyword
  const handleChange = (event) => {
    setKeyword(event.target.value);
    //we can console.log to see if there is any bugg
    console.log(event.target.value);
  };
  return (
    // add parend components inside a div
    // I need to pass props from parend to child, these propa are 'keyword' and handleChange.
    <>
      <SearchBar keyword={keyword} handleChange={handleChange} />
      <MainTable countries={countries} />
    </>
  );
}

export default App;
