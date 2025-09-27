<template>
    <div>
        <div class="flex justify-end mt-4 gap-2 items-center">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="px-3 py-1 border rounded disabled:opacity-50">
                Prev
            </button>

            <span class="px-2 py-1 text-sm">
                Page {{ currentPage }} of {{ totalPages }}
            </span>

            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-3 py-1 border rounded disabled:opacity-50">
                Next
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
});

const emit = defineEmits(["update:currentPage"]);

function changePage(page: number) {
    if (page >= 1 && page <= props.totalPages) {
        emit("update:currentPage", page);
    }
}
</script>