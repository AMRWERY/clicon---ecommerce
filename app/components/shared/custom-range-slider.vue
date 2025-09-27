<template>
    <div>
        <div class="custom-range-slider" :style="cssVariables">
            <div class="range-values">
                <span>{{ formattedMinValue }}</span>
                <span>{{ formattedMaxValue }}</span>
            </div>

            <div class="slider-wrapper">
                <div class="slider-track"></div>
                <div class="slider-progress" :style="progressStyle"></div>

                <input type="range" :min="min" :max="max" :step="step" v-model.number="localMin" @input="onMinInput"
                    class="range-input" />
                <input type="range" :min="min" :max="max" :step="step" v-model.number="localMax" @input="onMaxInput"
                    class="range-input" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: { type: Array as PropType<number[]>, required: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    formatter: { type: Function as PropType<(val: number) => string>, default: (val: number) => val.toLocaleString() },
    isRtl: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const localMin = ref<number>(props.modelValue[0] ?? props.min);
const localMax = ref<number>(props.modelValue[1] ?? props.max);

const formattedMinValue = computed(() => props.formatter(localMin.value));
const formattedMaxValue = computed(() => props.formatter(localMax.value));

const progressStyle = computed(() => {
    const range = props.max - props.min;
    if (range === 0) return { left: '0%', width: '0%' };
    const startPercent = ((localMin.value - props.min) / range) * 100;
    const endPercent = ((localMax.value - props.min) / range) * 100;
    if (props.isRtl) {
        return {
            right: `${100 - endPercent}%`,
            width: `${endPercent - startPercent}%`
        };
    }
    return {
        left: `${startPercent}%`,
        width: `${endPercent - startPercent}%`
    };
});


const cssVariables = computed(() => ({
    '--slider-color': '#EF4444', // Red-500
}));

watch(() => props.modelValue, (newVal) => {
    localMin.value = newVal[0] ?? props.min;
    localMax.value = newVal[1] ?? props.max;
});

const onMinInput = () => {
    if (localMin.value >= localMax.value) {
        localMin.value = localMax.value;
    }
    emit("update:modelValue", [localMin.value, localMax.value]);
};

const onMaxInput = () => {
    if (localMax.value <= localMin.value) {
        localMax.value = localMin.value;
    }
    emit("update:modelValue", [localMin.value, localMax.value]);
};
</script>

<style scoped>
.custom-range-slider {
    width: 100%;
}

.range-values {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--slider-color, #EF4444);
}

.slider-wrapper {
    position: relative;
    height: 20px;
    display: flex;
    align-items: center;
    direction: ltr;
}

.slider-track,
.slider-progress {
    position: absolute;
    height: 6px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 6px;
}

.slider-track {
    background-color: #e5e7eb;
}

.slider-progress {
    background-color: var(--slider-color, #EF4444);
    z-index: 1;
    position: absolute;
}

.range-input {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    pointer-events: none;
    z-index: 2;
    direction: ltr;
}

.range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: var(--slider-color, #EF4444);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 1px #ddd;
    cursor: pointer;
    pointer-events: auto;
}

.range-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--slider-color, #EF4444);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 1px #ddd;
    cursor: pointer;
    pointer-events: auto;
}
</style>