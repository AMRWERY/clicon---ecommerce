<template>
    <div>
        <div v-if="modelValue"
            class="fixed inset-0 p-4 flex flex-wrap justify-end items-end w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div :class="['w-full bg-white shadow-lg rounded-lg relative', maxWidth]">
                <!-- Header -->
                <div class="flex items-center border-b border-gray-300 p-4">
                    <h3 class="text-slate-900 text-xl font-semibold flex-1">{{ title }}</h3>
                    <icon name="material-symbols:close-rounded"
                        class="ms-2 cursor-pointer shrink-0 text-gray-400 hover:text-red-500"
                        @click="$emit('update:modelValue', false)" />
                </div>

                <!-- Body (only if slot exists) -->
                <div v-if="$slots.body">
                    <slot name="body" />
                </div>

                <!-- Footer (only if slot exists) -->
                <div v-if="$slots.footer" class="flex justify-end gap-4">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    modelValue: { type: Boolean, required: true },
    title: { type: String, default: "Modal Title" },
    maxWidth: { type: String, default: "max-w-lg" },
})

defineEmits(["update:modelValue"])
</script>