<template>
    <div>
        <div class="inline-flex items-center gap-2 rounded-lg bg-gray-900 font-bold xs:scale-90 sm:scale-100">
            <span
                class="transform -rotate-3 rounded-sm px-3 py-1 text-2xl xs:text-lg xs:px-2 xs:py-0.5 sm:text-xl md:text-2xl"
                :class="[highlightBgColor, highlightTextColor]">
                {{ highlightedWord }}
            </span>

            <span class="text-2xl xs:text-lg sm:text-xl md:text-2xl" :class="textColor">
                {{ mainWord }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    highlightedWord: {
        type: String,
        required: true,
    },
    mainWord: {
        type: String,
        required: true,
    },
    highlightBgColor: {
        type: String,
        default: 'bg-yellow-400', // Default background for the highlight
    },
    highlightTextColor: {
        type: String,
        default: 'text-black', // Default text color for the highlight
    },
    textColor: {
        type: String,
        default: 'text-white', // Default text color for the main word
    }
});
</script>