<template>
  <div>
    <button v-if="isVisible" @click="scrollToTop"
      class="fixed z-50 flex items-center justify-center px-4 py-4 text-white bg-black border rounded-full shadow-lg bottom-16 end-8"
      aria-label="Scroll to top">
      <icon name="material-symbols:keyboard-double-arrow-up-rounded" class="w-8 h-8"></icon>
    </button>
  </div>
</template>

<script setup>
const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>