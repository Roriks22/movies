import React, { useState } from "react";

const Form = ({ onSearch, onSortChange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue); // Envoie le terme au parent
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            onChange={handleChange}
            value={inputValue}
          />
          <input type="submit" defaultValue="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div id="goodToBad" onClick={() => onSortChange("top")}>
            Top
            <span>
              <i className="fa-solid fa-right-long"></i>
            </span>
          </div>
          <div id="badToGood" onClick={() => onSortChange("flop")}>
            Flop
            <span>
              <i className="fa-solid fa-right-long"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
