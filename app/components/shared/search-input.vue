<template>
    <div>
        <div class="relative">
            <input v-model="model" type="text" :placeholder="placeholder"
                class="ps-3 pr-10 py-2 border rounded-lg text-sm" />
            <icon name="mdi:magnify"
                class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "Search...",
    },
});

const emit = defineEmits(["update:modelValue"]);

const model = ref(props.modelValue);

watch(model, (val) => {
    emit("update:modelValue", val);
});
</script>