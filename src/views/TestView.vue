<template>
    <div id="container"></div>
</template>

<script setup lang="ts">
import * as Highcharts from "highcharts";
import {
    Chart,
    ChartOptions,
    SeriesOptionsType,
    SeriesLineOptions,
    PointOptionsObject,
    TitleOptions,
    XAxisOptions
} from "highcharts";
import {onMounted, ref, Ref, reactive} from "vue";

console.log("start")
const dataA: Ref<Array<(number | [(number | string), (number | null)] | null | PointOptionsObject)>> = ref([1, 2, 3, 4, 5])
const options: Highcharts.Options = {
    chart: {
        height: "100%"
    } as ChartOptions,
    title: {
        text: 'Chart reflow is set to true'
    } as TitleOptions,
    xAxis: {} as XAxisOptions,
    series: [{
        type: 'line',
        data: dataA.value
    } as SeriesLineOptions] as Array<SeriesOptionsType>
}

let chart: Chart | null = null;

setInterval(() => {
    dataA.value.push(1)
    // if (chart) {
    //     chart.update(options)
    // }
}, 1000);

onMounted(() => {
    console.log("onMounted")
    const elementById: HTMLElement | null = document.getElementById("container");
    if (elementById) {
        const charts: ChartOptions | undefined = options.chart;
        if (charts) {
            charts.renderTo = elementById;
            console.log("chart", chart)
            chart = Highcharts.chart(options);
        }
    }
});
</script>

<style scoped>

</style>
