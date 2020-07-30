import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Axios from "axios";

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [xAxis, setXaxix] = useState([]);
  const [yAxis, setYaxix] = useState([]);

  const fetchperdays = async () => {
    const response = await Axios(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
    );

    for (const dataObj in response.data.cases) {
      setXaxix(dataObj);
      setYaxix(response.data.cases[dataObj]);
    }
    setChartData({
      labels: xAxis,
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
          data: yAxis,
        },
      ],
    });
  };

  useEffect(() => {
    fetchperdays();
  }, []);

  return (
    <div className=" LineChart__div">
      <h5>Last 120days </h5>
      {chartData?.length > 0 && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      )}
      {/* <Line data={data1} /> */}
      {console.log(xAxis, yAxis)}
    </div>
  );
};

export default LineChart;
