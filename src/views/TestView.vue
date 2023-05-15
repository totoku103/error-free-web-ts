<template>
    <div style="height: 500px">
        <div id="container"></div>
    </div>
</template>

<script setup lang="ts">
import * as Highcharts from "highcharts";
import {Chart, ChartOptions, SeriesLineOptions, TitleOptions, XAxisOptions} from "highcharts";
import {onMounted, ref, Ref} from "vue";


const options: Ref<Highcharts.Options> = ref<Highcharts.Options>({
    chart: {} as ChartOptions,
    title: {
        text: 'Chart reflow is set to true' as string
    } as TitleOptions,
    xAxis: {} as XAxisOptions,
    series: [
        {
            type: 'line' as string,
            data: [1, 2, 3, 4, 5, 1, 2, 34, 5, 4, 1] as number[],
            name: 'name1'
        } as SeriesLineOptions,
        {
            type: 'line' as string,
            data: [2, 4, 12, 2, 4, 4, null, 10, 32, 1, 2] as number[],
            name: 'name2'
        } as SeriesLineOptions
    ] as Array<SeriesLineOptions>
})
let chart: Chart | null = null;


onMounted(() => {
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
