<template>
  <div v-bind:id="divid" v-bind:style="{ height: heightValue + 'px', width: '100%'}">
  </div>
</template>
<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  props: {
    divid: {
      type: String,
      default: "pieChartDiv"
    },
    heightValue: {
      type: String,
      default: "800"
    },
    data: {
      type: Array,
      default: function () { return [] }
    },
    pieChartType: {
      type: String,
      default: "pie"
    },
  },
  data: function() {
    return {
      chartType: "PieChart",
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.containerResized);
    });
    this.drawPieChart();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.containerResized);
  },
  methods: {
    containerResized(event) {
      echarts.init(document.getElementById(this.divid)).resize();
    },
    drawPieChart: function() {
      var testdata = this.data;
      var legendData = testdata.map(function(a) {
        return a.label;
      });
      try {
        var myChart = echarts.init(document.getElementById(this.divid));
        myChart.resize();
        let isLabel = true;


        let option = {
          title: {
            text: ""
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "horizontal",
            type: 'scroll',
            x: "top",
            data: legendData,
            formatter: function(value) {
              return echarts.format.truncateText(value, 200);
            }
          },
          series: [
            {
              name: "",
              type: "pie",
              data: testdata,
              label: {
                normal: {
                  show: isLabel
                }
              },
              labelLine: {
                normal: {
                  show: isLabel
                }
              }
            }
          ],
        };


        if (this.pieChartType == "donut") {
          //delete option.series[0].radius;
          option.series[0].radius = ["50%", "70%"];
        }

        myChart.on("click", function(event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        });

        myChart.setOption(option, true);
        echarts.dispose;
      } catch (err) {
        if (err.message == "dom is null") {
          this.$destroy();
        }
      }
    }
  }
};
</script>


<style>
</style>