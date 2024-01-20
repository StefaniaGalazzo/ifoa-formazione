// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const ChartComponent = ({
  forecastData,
  getDateFromSeconds,
  convertKelvinToCelsius,
}) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Variazioni di temperatura",
        data: [],
        borderColor: "rgb(255, 255, 255)",
        fill: false,
      },
    ],
  });

  console.log(forecastData, "forecast");

  useEffect(() => {
    if (forecastData && forecastData.length > 0) {
      const labels = forecastData.map((day) => getDateFromSeconds(day.dt));
      const temperatureData = forecastData.map((day) =>
        convertKelvinToCelsius(day.main.temp)
      );

      setData({
        labels: labels,
        datasets: [
          {
            label: "Variazioni di temperatura",
            data: temperatureData,
            borderColor: "rgb(255, 255, 255)",
            fill: false,
          },
        ],
      });
    }
  }, [forecastData]);

  return (
    <>
      <Line id="your-chart-id" data={data} />;
    </>
  );
};

export default ChartComponent;
