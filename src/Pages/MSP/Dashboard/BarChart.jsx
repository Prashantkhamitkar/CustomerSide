import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const staticData = [211, 200, 110, 50, 196, 90, 113, 23];

  // Function to determine the color based on the value
  const determineColor = (value) => {
    if (value > 200) return "#FF4560"; // Red for values greater than 200
    if (value > 150) return "#FEB019"; // Yellow for values greater than 150
    if (value > 100) return "#00E396"; // Green for values greater than 100
    return "#008FFB"; // Blue for other values
  };

  // Generate colors based on static data
  const colors = staticData.map(determineColor);

  const chartOptions = {
    series: [
      {
        data: staticData,
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 250,
    },
  };

 

  return (
    <div id="chart">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
