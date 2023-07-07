<template>
  <div>
    <HeaderApp />

    <div class="flex justify-center">
      <SideBar />
      <div class="col-md-6">
        <h1 class="text-center mt-4 text-3xl font-bold text-gray-700">Chart</h1>
        <div class="flex flex-wrap mt-4 w-80">
          <div class="w-full w-1/2">
            <div class="flex justify-around">
            <!--Graph Card-->
            <div class="transform transition-all hover:scale-125">

            <div class="bg-white border rounded shadow mt-10 mr-10">
              <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Graph of Doughnut</h5>
              </div>

              <div class="p-5">
                <canvas
                  id="myDoughnutChart"
                  class="chartjs"
                  
                  width="undefined"
                  height="undefined"
                ></canvas>
              </div>
              </div>
            </div>

            <!--Graph Card-->
            <div class="transform transition-all hover:scale-125">

            <div class="bg-white border rounded shadow mt-10">
              <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Graph of Pie</h5>
              </div>
              <div class="p-5">
                <canvas
                  id="myPieChart"
                  class="chartjs"
                  width="undefined"
                  height="undefined"
                ></canvas>
              </div>
            </div>
          </div>
          </div>
          </div>
            <!--Graph Card-->

            <div class="w-full w-1/2">
              <div class="flex justify-around">
                <div class="transform transition-all hover:scale-125">

            <div class="bg-white border rounded shadow mt-10 mr-10 mb-10">
              <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Graph of Bar and Line</h5>
              </div>
              <div class="p-5">
                <canvas
                  id="myBarChart"
                  class="chartjs"
                  width="undefined"
                  height="undefined"
                ></canvas>
              </div>
            </div>
              </div>
            <!--Graph Card-->
            <div class="transform transition-all hover:scale-125">

            <div class="bg-white border rounded shadow mt-10 mb-10">
              <div class="border-b p-3">
                <h5 class="font-bold uppercase text-gray-600">Graph of Bar</h5>
              </div>
              <div class="p-5">
                <canvas
                  id="myLineChart"
                  class="chartjs"
                  width="undefined"
                  height="undefined"
                ></canvas>
              </div>
            
            </div>
          </div>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  components: { SideBar, HeaderApp },
  name: "PageChart",
  props: {
    msg: String,
  },
  mounted() {
    console.log("Component mounted");

    const barCtx = document.getElementById("myBarChart");
    const pieCtx = document.getElementById("myPieChart");
    const lineCtx = document.getElementById("myLineChart");
    const doughnutCtx = document.getElementById("myDoughnutChart");

    // new Chart(barCtx, {
    //   type: "bar",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [10, 19, 7, 5, 14, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.6)",
    //           "rgba(54, 162, 235, 0.6)",
    //           "rgba(255, 206, 86, 0.6)",
    //           "rgba(75, 192, 192, 0.6)",
    //           "rgba(153, 102, 255, 0.6)",
    //           "rgba(255, 159, 64, 0.6)",
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Page Impressions",
            data: [10, 20, 30, 40],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Adsense Clicks",
            data: [5, 15, 10, 30],
            type: "line",
            fill: false,
            borderColor: "rgb(54, 162, 235)",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 19, 7, 5, 14, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // new Chart(lineCtx, {
    //   type: "line",
    //   data: {
    //     labels: ["January", "February", "March", "April", "May", "June"],
    //     datasets: [
    //       {
    //         label: "My Dataset",
    //         data: [65, 59, 80, 81, 56, 55],
    //         borderColor: "rgba(255, 99, 132, 0.6)",
    //         fill: false,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
    new Chart(lineCtx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Likes",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 19, 7, 5, 14, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.chart-container {
  height: 200px;
}
.area {
  background-image: radial-gradient(
    ellipse closest-corner,
    rgb(233, 238, 240),
    #0ea0d1
  );
}
.area1 {
  background-image: radial-gradient(
    ellipse closest-corner,
    rgb(233, 238, 240),
    #32d10e
  );
}
</style>
