<template>
    <div class="flex-column">
        <smart-button-group id="smartPollingTimeButton"
                            :data-source="JSON.stringify(defaultButtonData)"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, defineEmits} from "vue";

type buttonData = {
    label: String,
    value: String
}

const defaultButtonData: buttonData[] = [
    {label: "5s", value: "5000"},
    {label: "10s", value: "10000"},
    {label: "15s", value: "15000"},
    {label: "30s", value: "30000"},
    {label: "||", value: "pause"}
];

const emit = defineEmits<{
    (event: 'onClick', data: object): void
}>()

const addChangeEvent = () => {
    const elementById: HTMLElement = document.getElementById("smartPollingTimeButton")!;
    elementById.addEventListener("change", (event) => {
        const detail = (event as CustomEvent).detail;
        emit('onClick', detail.values[0])
    });
}


onMounted(() => {
    addChangeEvent()
})

</script>

<style>

</style>