import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: ["Data1", "Data2", "Data3"], // Sostituisci con le tue date
    datasets: [
      {
        label: "Variazioni di temperatura",
        data: ["temp1", "temperatura2", "temperatura3"], // Sostituisci con le tue temperature
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        min: 0, // Sostituisci con il tuo valore minimo di temperatura
        max: 100, // Sostituisci con il tuo valore massimo di temperatura
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
