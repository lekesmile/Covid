import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Axios from "axios";

const LineDemo = () => {
  const [dataDate, setDataDate] = useState({});
  const getData = async () => {
    const resp = await Axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
    );
    setDataDate(resp.data.cases);
    console.log(resp.data.cases);
  };

  const data = {
    datasets: [
      {
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        data: { dataDate },
      },
    ],
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Line Demo</h2>
      {dataDate.length > 0 && (
        <Line
          width={80}
          height={500}
          options={{ maintainAspectRatio: false }}
          ref="chart"
          data={dataDate}
        />
      )}
    </div>
  );
};

export default LineDemo;
