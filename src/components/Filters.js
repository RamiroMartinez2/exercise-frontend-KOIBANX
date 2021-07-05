import React, { useState } from "react";

const baseURL = "https://api.koibanx.com/stores";

const Filters = () => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const applySearch = () => {
    const inputParams = `{"$or": [{"id": {"$regex" :"${query}"}}, {"cuit": {"$regex" :"${query}"}}, {"comercio": {"$regex" :"${query}"}}]}`;
    const url = `${baseURL}?q=${inputParams}`;
    console.log(url );
  };

  return (
    <form onSubmit={onSubmit}>
      Buscar:
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button onClick={applySearch} disabled={!query}>
      Aplicar busqueda
      </button>
    </form>
  );
};

export default Filters;
