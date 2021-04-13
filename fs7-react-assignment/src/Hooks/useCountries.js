//import React from 'react'
import { useState, useEffect } from "react";

// this is  custom Hook, I tried other sintax to fetch but didn't work
export default function useCountries(keyword) {
  //check if it is working with console.log
  //console.log(keyword, "it is working");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  // I need to create another useState in order to filter the date with the keyword, so I don't use the original data
  // If you don't create the filter state you always will be setting the original data of the APi and you will need to refresh the site to get it original

  const [filterCountries, setFilterCountries] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
      // we need to add to our API call the new state
      setFilterCountries(data);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  //Now we have the keyword in the custom Hook so we need to connect it with our API
  //I need to set another useEffect to work with the new data (keyword)
  useEffect(() => {
    // in order to get acces to the filterData we create a variable, this filter Data will be the setFilterCountries
    let filterData = countries.filter((country) => {
      //In order to find countries by their name we need to target with the following logic.
      // If we want to search from other value we can add it here, I add native name too
      return (
        country.name.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.nativeName.toLowerCase().search(keyword.toLowerCase()) !== -1
      );
    });
    //I console.log to check if it is working
    //Now we can search by country and the console is showing all the objects (countries) contains the lettters I am writting in the input
    // if I am typing back it is showing me again the countris that match, that is why we create the new state and working with the filterData
    //console.log(filterData)
    //then we need to call the function and fill the array of our useEffect with the 2 parametres we need
    setFilterCountries(filterData);
  }, [countries, keyword]);

  return [error, filterCountries];
}
