import React from "react";
import { sortData } from "../util/SortFunction";

const TableData = ({ country }) => {
  return (
    <div className="TableData__table">
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Countries</strong>
            </td>
            <td>
              <strong>Infection rate</strong>
            </td>
          </tr>
          {sortData(country).map((countrydata) => {
            return (
              <tr key={countrydata.country}>
                <td> {countrydata.country}</td>
                <td>
                  <strong>{countrydata.cases}</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
