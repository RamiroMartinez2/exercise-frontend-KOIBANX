import React, { useState } from "react";

const baseURL = "https://api.koibanx.com/stores";

const Filters = () => {
  const [query, setQuery] = useState("");
  const [onlyActive, setOnlyActive] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const applySearch = () => {
    const inputParams = `{"$or": [{"id": {"$regex" :"${query}"}}, {"cuit": {"$regex" :"${query}"}}, {"comercio": {"$regex" :"${query}"}}]}`;
    const activeParams = `,{"active": ${onlyActive}}`;
    const url = `${baseURL}?q={"$and": [${inputParams}${
      onlyActive ? activeParams : ""
    }]}`;
    console.log(url);
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
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          name="only-active"
          onChange={(e) => setOnlyActive(e.target.checked)}
        />
        Solo activos
      </label>
      <br />
      <button onClick={applySearch} disabled={!query}>
        Aplicar busqueda
      </button>
    </form>
  );
};

export default Filters;
