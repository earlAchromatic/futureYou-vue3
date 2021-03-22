<template>
  <div class="column">
    <div class="box">
      <TheChart
        class="chart"
        height="400"
        type="bar"
        :options="chartOptions"
        :series="generateChartSeries.series"
      ></TheChart>
      <div class="column">
        <div>
          {{
            timelineInput.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })
          }}
        </div>
        <input
          type="range"
          name="Timeline"
          id="Timeline"
          min="1"
          max="30"
          step="1"
          list="timelineticks"
          v-model.number="timelineInput"
          v-on:change="updateTimeline(timelineInput)"
        />
        <label for="Timeline">Timeline</label>
        <datalist id="timelineticks">
          <option value="0"></option>
          <option value="5"></option>
          <option value="10"></option>
          <option value="15"></option>
          <option value="20"></option>
          <option value="25"></option>
          <option value="30"></option>
        </datalist>

        <div>
          {{
            interestInput.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })
          }}
        </div>
        <input
          type="range"
          name="Interest Rate"
          id="InterestRate"
          min="0"
          max="15"
          step="0.1"
          list="interestticks"
          v-model.number="interestInput"
          v-on:change="updateInterest(interestInput)"
        />
        <label for="InterestRate">Interest Rate</label>
        <datalist id="interestticks">
          <option value="2"></option>
          <option value="4"></option>
          <option value="6"></option>
          <option value="8"></option>
          <option value="10"></option>
          <option value="12"></option>
          <option value="14"></option>
        </datalist>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { itemData } from "../../store";

export default {
  name: "ChartSection",
  setup() {
    const { updateInterest, updateTimeline, getItems } = itemData();

    return { updateInterest, updateTimeline, getItems };
  },
  components: {
    TheChart: VueApexCharts,
  },
  data: function() {
    var timelineInput = 30;
    var interestInput = 6;
    return {
      timelineInput,
      interestInput,
      chartOptions: {
        noData: {
          text: "Enter an Item",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "14px",
            fontFamily: undefined,
          },
        },
        legend: {
          onItemClick: {
            toggleDataSeries: false,
          },
        },
        chart: {
          type: "bar",
          stacked: true,
          id: "FutureYou",
          background: "#00000000",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              });
            },
          },
        },
        xaxis: {
          type: "category",
          categories: [],
        },
        dataLabels: {
          formatter: function(val) {
            return `$${val.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`;
          },
          style: {
            colors: ["#ffffff"],
          },
        },
        theme: {
          mode: "dark",
          palette: "palette5",
        },
      },
    };
  },
  updated() {
    this.addSVGAnimate();
  },
  beforeUpdate() {
    this.chartOptions = this.updateChartOptions();
  },
  computed: {
    generateChartSeries() {
      let cats = [];
      let series = [
        {
          name: "Cost Today",
          data: [],
        },
        {
          name: "Future Cost",
          data: [],
        },
      ];

      this.getItems.forEach((e) => {
        cats.push(e.itemName);
        series[0].data.push(e.cost);
        series[1].data.push(e.futureCost);
      });
      return { series, cats };
    },
  },
  methods: {
    updateChartOptions() {
      let chartOptions = {
        ...this.chartOptions,
        xaxis: {
          type: "category",
          categories: this.generateChartSeries.cats,
        },
      };
      return chartOptions;
    },
    addSVGAnimate() {
      var el = document.querySelector("#apexchartsFutureYou > svg");

      //insert defs tag containing color and animation
      var tag = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      tag.innerHTML = `<linearGradient id="skyGradient" x1="100%" y1="100%">
    <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
      <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
    </stop>
    <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
      <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
      <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />    
    </stop>
  </linearGradient>`;

      el.appendChild(tag);
    },
  },
};
</script>

<style lang="css">
.box {
  margin: 10px;
}
input {
  margin: 20px;
  width: 300px;
  color: white;
}

.apexcharts-series[seriesName="FuturexCost"] > path {
  fill: url("#skyGradient") !important;
}
</style>
