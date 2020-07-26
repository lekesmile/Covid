import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import Axios from "axios";

const LineChart = ({ casesType = "cases" }) => {
  const [data, setData] = useState({});

  const options = {
    legend: {
      displace: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0, 0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          fridLines: {
            display: false,
          },
          ticks: {
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

  const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    for (data in data.cases) {
      // data.cases.forEach((element) => {
      if (lastDataPoint) {
        const newData = {
          x: data,
          y: data["casesType"][data] - lastDataPoint,
        };
        chartData.push(newData);
      }
      lastDataPoint = data["casesType"][data];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchperdays = async () => {
      const response = await Axios(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
      );

      const builtData = buildChartData(response.data.cases);
      setData(builtData);
      console.log(response.data.cases);
    };

    fetchperdays();
  }, [casesType]);

  return (
    <div>
      <h5>Last 120days </h5>
      {data?.length > 0 && (
        <Line
          options={options}
          width={80}
          height={500}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#cc1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default LineChart;
