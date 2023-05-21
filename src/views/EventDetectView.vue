<template>
    <polling-time-button @onClick="onClick"/>
    <progress-bar :refresh-cycle="refreshCycle"/>
</template>

<script setup lang="ts">
import PollingTimeButton from "../components/button/PollingTimeButton.vue"
import ProgressBar from "../components/processbar/ProgressBar.vue";
import {ref, Ref} from 'vue';

let refreshCycle: Ref<number> = ref(0);


function onClick(event: Event): void {
    const value = Number(event);
    console.log(value)
    refreshCycle.value = value;
}

</script>

<style scoped>

</style>
