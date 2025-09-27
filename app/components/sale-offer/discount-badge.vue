<template>
    <div>
        <div class="inline-flex items-baseline justify-center gap-2 font-semibold xs:scale-90 sm:scale-100">
            <span class="text-lg xs:text-sm sm:text-base md:text-lg" :class="textColor">
                {{ t('sale_offer.up_to') }}
            </span>
            <span class="text-5xl xs:text-3xl sm:text-4xl md:text-5xl font-bold" :class="highlightColor">
                {{ discountValue }}%
            </span>
            <span class="text-lg xs:text-sm sm:text-base md:text-lg" :class="textColor">
                {{ t('sale_offer.off') }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

defineProps({
    discountValue: {
        type: Number,
        required: true
    },
    highlightColor: {
        type: String,
        default: 'text-yellow-400' // Default color for the percentage
    },
    textColor: {
        type: String,
        default: 'text-gray-100' // Default color for surrounding text
    }
})
</script>