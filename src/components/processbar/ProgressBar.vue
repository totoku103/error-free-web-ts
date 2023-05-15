<template>
    <smart-progress-bar ref="progressbar"
                        :min="min"
                        :max="max"
                        @change="onChange"
                        showProgressValue/>
</template>

<script setup lang="ts">
import {ref, Ref, defineEmits, withDefaults} from 'vue'

const min = 0;
const max = 100;
let timer = null;

interface Props {
    refreshCycle: number,
}

const props = withDefaults(defineProps<Props>(), {
    refreshCycle: 0
});

const emits = defineEmits<{
    (event: 'complete'): void
}>();

function onChange(event: Event) {
    const detail = (event as CustomEvent).detail;
    if (detail.value >= max) {
        emits('complete');
    }
}

// export default {
//     name: "SmartRefreshTimerProgressBar",
//     props: {
//         refreshMsTime: {
//             type: Number,
//             required: true,
//             default: 3000
//         },
//         width: {
//             type: Number,
//             required: false,
//             default: 120
//         },
//         height: {
//             type: Number,
//             required: false,
//             default: 38
//         }
//     },
//     data() {
//         return {
//             timer: null,
//             max: 100
//         }
//     },
//     watch: {
//         refreshMsTime() {
//             this.clearTimer();
//             if (this.refreshMsTime > 0)
//                 this.setTimer()
//         }
//     },
//     methods: {
//         onChange(e) {
//             if (e.detail.value >= this.max) {
//                 this.onEmit();
//             }
//         },
//         onEmit() {
//             this.$emit('processBarComplete');
//         },
//         getValue() {
//             return this.$refs.progressbar.value;
//         },
//         setValue(value) {
//             this.$refs.progressbar.value = value;
//         },
//         setTimer() {
//             const interval = 100 / (this.refreshMsTime / 1000);
//             this.timer = setInterval(() => {
//                 const val = this.getValue();
//                 val >= 100
//                     ? this.setValue(0)
//                     : this.setValue(val + interval);
//             }, 1000);
//         },
//         clearTimer() {
//             this.setValue(0)
//             clearInterval(this.timer);
//         }
//     },
//     mounted() {
//         this.clearTimer();
//         this.setTimer();
//     }
//     ,
//     beforeUnmount() {
//         this.clearTimer();
//     }
// }
</script>

<style>
:root {
    --smart-progress-bar-default-width: 150px;
    --smart-progress-bar-default-height: 38px;
}
</style>