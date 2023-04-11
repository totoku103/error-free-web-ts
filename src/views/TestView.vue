<template>
    <div style="height: 500px">
        <div id="container"></div>
    </div>
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
    XAxisOptions, SeriesOptions
} from "highcharts";
import {onMounted, ref, Ref, reactive, watch} from "vue";


const options: Ref<Highcharts.Options> = ref<Highcharts.Options>({
    chart: {} as ChartOptions,
    title: {
        text: 'Chart reflow is set to true' as string
    } as TitleOptions,
    xAxis: {} as XAxisOptions,
    series: [{
        type: 'line' as string,
        data: [] as number[]
    } as SeriesLineOptions] as Array<SeriesLineOptions>
})

let chart: Chart | null = null;
// watch(options.value.series[0], (nv, ov) => {
//     console.log(nv, ov)
// })


onMounted(() => {
    console.log("onMounted")
    setInterval(() => {
        const value: Highcharts.Options = options.value;
        if (value.series == undefined) return;
        if (value.series.length > 0) {
            const series = value.series;
        }

        if (chart) {
            chart.update(options.value)
        }
    }, 1000);

    const elementById: HTMLElement | null = document.getElementById("container");
    if (elementById) {
        const charts: ChartOptions | undefined = options.value.chart;
        if (charts) {
            charts.renderTo = elementById;
            chart = Highcharts.chart(options.value);
        }
    }
});
</script>

<style scoped>

</style>
