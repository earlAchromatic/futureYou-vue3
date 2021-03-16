<template>
  <div class="column">
    <div class="box">
      <TheChart
        class="chart"
        height="400"
        type="bar"
        :options="chartOptions"
        :series="generateChartSeries"
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
          min="0"
          max="30"
          step="any"
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
          step="any"
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
        chart: {
          type: "bar",
          stacked: true,
          id: "FutureYou",
          background: "#00000000",
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
          categories: ["item1"],
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
          palette: "palette3",
        },
      },
    };
  },
  updated() {
    console.log(this.series);
  },
  computed: {
    generateCategories() {
      return 0;
    },
    generateChartSeries() {
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
        console.log(e.futureCost);
        series[0].data.push(e.cost);
        series[1].data.push(e.futureCost);
      });
      console.log(series);
      return series;
    },
  },
  methods: {
    addColumnItem() {},
  },
};
</script>

<style scoped lang="css">
input {
  margin: 20px;
  width: 300px;
  color: white;
}
</style>
