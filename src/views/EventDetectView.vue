<template>
    <polling-time-button @onClick="onClick"/>
</template>

<script setup lang="ts">
import PollingTimeButton from "../components/button/PollingTimeButton.vue"

function onClick(event: Event) {
    console.log(event)
}

</script>

<style scoped>

</style>
