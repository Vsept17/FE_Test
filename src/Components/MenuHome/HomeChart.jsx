import React, { useEffect, useState } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import { getDataRuas } from "../../Utils/ApiData";

Chart.register(ChartDataLabels);

const colorChart = [
  "#4472C4",
  "#FFC000",
  "#264478",
  "#70AD47",
  "#A5A5A5",
  "#4472C4",
  "#DB7735",
  "#FFC000",
  "#D1CFD7",
  "#323E50",
  "#7030A0",
  "#FF0000",
];

const HomeChart = ({ dataRuas }) => {
  const datachart = [
    {
      unit: "Analist",
      total: 25,
    },
    {
      unit: "Facilitator",
      total: 12,
    },
    {
      unit: "Developer",
      total: 10,
    },
    {
      unit: "Engineer",
      total: 15,
    },
    {
      unit: "consultant",
      total: 5,
    },
  ];

  const dataToChart = {
    labels: datachart.map((e) => e.unit),
    datasets: [
      {
        label: "Total",
        backgroundColor: colorChart,
        borderColor: "black",
        borderWidth: 1,
        datalabels: {
          color: "black",
        },
        data: datachart.map((e, i) =>  e.total),
      },
    ],
  };

  return (
    <div className="w-full flex flex-row gap-3 mb-4">
      <div className="w-2/6 h-72 rounded-lg p-2 bg-slate-400">
        <Doughnut
          data={dataToChart}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
              labels: {
                fontColor: "red",
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="w-2/6 h-72 rounded-lg p-2 bg-slate-400">
        <Bar
          data={dataToChart}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              labels: {
                fontColor: "red",
              },
            },
            scales: {
              y: {
                grid: {
                  color: "black",
                  drawBorder: true,
                  borderColor: "black",
                  drawOnChartArea: false,
                },
                ticks: {
                  color: "black",
                  fontSize: 33,
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
              x: {
                grid: {
                  color: "black",
                  drawBorder: true,
                  borderColor: "black",
                  drawOnChartArea: false,
                },
                ticks: {
                  color: "black",
                  borderColor: "black",
                  stepSize: 1,
                  // beginAtZero: true,
                },
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
      
      <div className="w-2/6 h-72 rounded-lg p-2 bg-slate-200">
        <Line
          data={dataToChart}
          options={{
            plugins: {
              legend: {
                display: false,
                fontColor: "black"
              },
              labels: {
                fontColor: "red",
              },

            },
            scales: {
              y: {
                grid: {
                  color: "black",
                  drawBorder: true,
                  borderColor: "black",
                  drawOnChartArea: false,
                },
                ticks: {
                  color: "black",
                  fontSize: 33,
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
              x: {
                grid: {
                  color: "black",
                  drawBorder: true,
                  borderColor: "black",
                  drawOnChartArea: false,
                },
                ticks: {
                  color: "black",
                  borderColor: "black",
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default HomeChart;
