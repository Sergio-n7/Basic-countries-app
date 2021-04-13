import React from "react";
import { Button } from "react-bootstrap";
import "./input.css";

// I need to pass the props as an arguments in the function
// I nned to get the value from the input and I do that passing the statat (keyword)
// Then I need to activate the other prop (event) using onChange in the input
export function SearchBar({ keyword, handleChange }) {
  return (
    <div>
      <input
        className="input"
        type="text"
        name="search"
        placeholder="Search a country..."
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}
