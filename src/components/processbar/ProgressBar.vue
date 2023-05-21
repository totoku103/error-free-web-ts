<template>
    <smart-progress-bar ref="progressbar"
                        :min="min"
                        :max="max"
                        @change="onChange"
                        showProgressValue/>
</template>

<script setup lang="ts">

import {ProgressBar} from "smart-webcomponents/source/typescript/smart.elements.d.ts"
import "smart-webcomponents/source/styles/default/smart.progressbar.css"
import "smart-webcomponents/source/typescript/smart.progressbar.d.ts"
import {ref, Ref, defineEmits, withDefaults, watch,} from 'vue'

const min: number = 0;
const max: number = 100;
let timer: number = 0;
const progressbar: Ref<HTMLElement | null> = ref(null);

interface Props {
    refreshCycle: number,
}

const props = withDefaults(defineProps<Props>(), {
    refreshCycle: 0
});

const emits = defineEmits<{
    (event: 'complete'): void
}>();

watch(() => props.refreshCycle,
    () => {
        if (timer !== 0) clearInterval(timer);
        else setTimer();
    });

function onChange(event: Event): void {
    const detail = (event as CustomEvent).detail;
    if (detail.value >= max) {
        emits('complete');
    }
}

// function getValue(): number {
//     if(!progressbar) {
//         return progressbar.value;
//     }
// }

// function setValue(value: number): void {
//     progressbar.value = value;
// }


function setTimer() {
    const appendValue = 100 / (props.refreshCycle / 1000);
    const obj = progressbar.value;
    if (obj !== null) {
        const currentValue = obj?.value;


    }
    // }, 1000)
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