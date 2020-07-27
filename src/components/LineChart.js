import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import Axios from "axios";

const LineChart = () => {
  // const [data, setData] = useState([]);
  const [xAxis, setXaxix] = useState([]);
  const [yAxis, setYaxix] = useState([]);

  const fetchperdays = async () => {
    const response = await Axios(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
    );

    for (const dataObj in response.data.cases) {
      console.log(dataObj, response.data.cases[dataObj]);
      setXaxix(dataObj);
      setYaxix(response.data.cases[dataObj]);
    }
  };

  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const data = {
    labels: numeral(xAxis),
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: numeral(yAxis),
      },
    ],
  };

  console.log(data);
  useEffect(() => {
    fetchperdays();
  }, []);

  return (
    <div className="container">
      <h5>Last 120days </h5>
      {data?.length > 0 && <Line data={data} />}
      <Line data={data1} />
    </div>
  );
};

export default LineChart;
