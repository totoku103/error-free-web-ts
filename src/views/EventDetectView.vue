<template>
    <polling-time-button @clickCallback="clickCallback"/>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue'
import PollingTimeButton from "../components/buttons/PollingTimeButton.vue"

function clickCallback(event: Event) {
    console.log(event)
}

</script>

<style scoped>

</style>
