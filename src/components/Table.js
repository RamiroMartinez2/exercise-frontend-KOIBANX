import React from "react";

const Table = () => {
  const headers = [
    "id",
    "comercio",
    "cuit",
    "Concepto 1",
    "Concepto 2",
    "Concepto 3",
    "Concepto 4",
    "Concepto 5",
    "Concepto 6",
    "Balance Actual",
    "Activo,",
    "Ultima venta",
  ];
  const tableData = {
    data: [
      {
        id: "60df9c4bfc13ae698e0006a4",
        comercio: "Pixonyx",
        cuit: "2289370967",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "01/07/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006a5",
        comercio: "Quimba",
        cuit: "7039816547",
        concepto1: 3,
        concepto2: 5,
        concepto3: 7,
        concepto4: 9,
        concepto5: 2,
        concepto6: 1,
        balance_actual: 2,
        activo: true,
        ultima_venta: "01/06/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006a6",
        comercio: "Jazzy",
        cuit: "1601323883",
        concepto1: 1,
        concepto2: 4,
        concepto3: 6,
        concepto4: 8,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 3,
        activo: true,
        ultima_venta: "04/07/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006a7",
        comercio: "Browseblab",
        cuit: "3902393262",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "05/02/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006a8",
        comercio: "Photolist",
        cuit: "4793008909",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "06/07/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006a9",
        comercio: "Youspan",
        cuit: "0213471493",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "02/03/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006aa",
        comercio: "Livetube",
        cuit: "8221058998",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "30/06/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006ab",
        comercio: "Linkbuzz",
        cuit: "0387647864",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "13/06/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006ac",
        comercio: "Yata",
        cuit: "1277937907",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: false,
        ultima_venta: "25/06/2021",
      },
      {
        id: "60df9c4bfc13ae698e0006ad",
        comercio: "Skiptube",
        cuit: "8222342274",
        concepto1: 1,
        concepto2: 2,
        concepto3: 5,
        concepto4: 7,
        concepto5: 3,
        concepto6: 6,
        balance_actual: 1,
        activo: true,
        ultima_venta: "25/06/2021",
      },
    ],
    page: 1,
    pages: 100,
    rowsPerPage: 10,
    total: 1000,
  };

  return (
    <section>
      <table>
        <tbody>
          <tr>
            {headers.map((i,idx) => (
              <th key={idx}>{i}</th>
            ))}
          </tr>

          {tableData.data.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.comercio}</td>
              <td>{i.cuit}</td>
              <td>{i.concepto1}</td>
              <td>{i.concepto2}</td>
              <td>{i.concepto3}</td>
              <td>{i.concepto4}</td>
              <td>{i.concepto5}</td>
              <td>{i.concepto6}</td>
              <td>{i.balance_actual}</td>
              <td>{i.activo ? "Si" : "No"}</td>
              <td>{i.ultima_venta}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <b>{tableData.page}</b> 2 3 4 ... {tableData.pages} »
      </p>
    </section>
  );
};

export default Table;
