import React, { Fragment, useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const Graphic = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Fetching population data from the provided API
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch population data');
        }
        return response.json();
      })
      .then((data) => {
        const populationData = data.data.map((entry) => ({
          year: entry.Year,
          population: entry.Population,
        }));
        setChartData(populationData);
      })
      .catch((error) => {
        console.error("Error fetching population data:", error);
      });
  }, []);

  useEffect(() => {
    if (chartData) {
      // Destroy existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create new chart
      const ctx = document.getElementById("population-chart");

      // Ensure the chart context exists before attempting to create the chart
      if (ctx) {
        const chartContext = ctx.getContext("2d");
        chartRef.current = new Chart(chartContext, {
          type: "line",
          data: {
            labels: chartData.map((data) => data.year),
            datasets: [
              {
                label: "Population",
                data: chartData.map((data) => data.population),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Year",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Population",
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false, // Ensure the chart can be resized freely
          },
        });
      }
    }
  }, [chartData]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">US Population Chart</h5>
              <div style={{ position: "relative", height: "400px", width: "100%" }}>
                <canvas id="population-chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Graphic;
