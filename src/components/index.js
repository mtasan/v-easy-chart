import Vue from "vue";
import PieChart from "./PieChart.vue";

const Components = {
    PieChart
}

Object.keys(Components).forEach(name=>{
    Vue.component(name,Components[name])
})

export default Components;