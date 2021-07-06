import React, { useState } from "react";

const baseURL = "https://api.koibanx.com/stores";

const Filters = () => {
  const [query, setQuery] = useState("");
  const [onlyActive, setOnlyActive] = useState();
  const [sortBy, setSortBy] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortBy = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    if (checked) setSortBy((prev) => [...prev, name]);
    if (!checked) setSortBy((prev) => prev?.filter((i) => i !== name));
  };

  const applySearch = () => {
    const inputParams = `{"$or": [{"id": {"$regex" :"${query}"}}, {"cuit": {"$regex" :"${query}"}}, {"comercio": {"$regex" :"${query}"}}]}`;
    const activeParams = `,{"active": ${onlyActive}}`;
    const sortBy0 = sortBy?.length > 0 ? sortBy?.[0] : "";
    const sortBy1 = sortBy?.length > 1 ? sortBy?.[1] : "";
    const sortByParams =
      sortBy0 &&
      `&h={"$orderby": {"${sortBy0}": 1${sortBy1 ? `, "${sortBy1}": 1` : ""}}}`;
    const url = `${baseURL}?q={"$and": [${inputParams}${
      onlyActive ? activeParams : ""
    }]}${sortByParams}`;
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
      Ordenar por:
      <br />
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          name="comercios"
          onChange={(e) => handleSortBy(e)}
        />
        Comercios
      </label>
      <br />
      <label style={{ cursor: "pointer" }}>
        <input type="checkbox" name="cuit" onChange={(e) => handleSortBy(e)} />
        CUIT
      </label>
      <br />
      <button onClick={applySearch} disabled={!query}>
        Aplicar busqueda
      </button>
    </form>
  );
};

export default Filters;
