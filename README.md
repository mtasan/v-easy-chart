# v-easy-chart

v-easy-chart for visualize data for Vue projects

## Installation
npm install --save v-easy-chart


## Use
Easy visualize components using Apache echarts(v4.0)

## main.js or any component just import package

```javascript
import 'v-easy-chart'

```

## components
```javascript
<PieChart divid="divpie" :heightValue="height" :data="chartData" pieChartType="pie"></PieChart>

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

```

## Props
divid = id of div which chart will generate

heightValue = height of chart

data = data whichh will be visualize.

pieChartType = "pie" or "donut"


##PIE

![](https://github.com/mtasan/v-easy-chart/blob/master/src/assets/pie.PNG)

##DONUT

![](https://github.com/mtasan/v-easy-chart/blob/master/src/assets/donut.PNG)

## License
[MIT](https://choosealicense.com/licenses/mit/)