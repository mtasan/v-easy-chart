<template>
  <div id="app">
    <PieChart divid="divpie" :heightValue="height" :data="chartData" pieChartType="donut"></PieChart>
  </div>
</template>

<script>

import PieChart from "./components/PieChart";
export default {
  name: "App",
  components: {
    PieChart
  },
  data: function() {
    return {
      chartData: [
        { value: 335, name: "istanbul" },
        { value: 310, name: "ankara" },
        { value: 234, name: "izmir" },
        { value: 135, name: "adana" },
        { value: 1548, name: "mersin" }
      ],
      height : "500"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
