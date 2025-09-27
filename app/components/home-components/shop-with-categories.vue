<template>
  <div>
    <div class="mx-auto px-4 sm:px-6 lg:px-12">
      <p class="text-center font-bold text-3xl">{{ t('home.shop_with_categories') }}</p>

      <div class="relative w-full group">
        <div ref="container" class="flex items-center p-4 space-s-4 overflow-x-auto scroll-smooth hide-scrollbar">
          <div v-for="(category, index) in clonedCategories" :key="index" class="flex-shrink-0 w-40 text-center">
            <div
              class="flex flex-col items-center justify-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm h-44">
              <img :src="category.image" :alt="category.name" class="object-contain w-24 h-24 mb-2" />
              <span class="text-sm font-medium text-gray-700">{{ category.name }}</span>
            </div>
          </div>
        </div>

        <button @click="scrollLeft"
          class="absolute start-0 p-2 text-white transition-opacity bg-orange-500 rounded-full shadow-lg opacity-0 -translate-y-1/2 top-1/2 group-hover:opacity-100 hover:bg-orange-600 focus:outline-none flex items-center justify-center">
          <icon name="material-symbols:keyboard-arrow-left" class="rtl:rotate-180"></icon>
        </button>

        <button @click="scrollRight"
          class="absolute end-0 p-2 text-white transition-opacity bg-orange-500 rounded-full shadow-lg opacity-0 -translate-y-1/2 top-1/2 group-hover:opacity-100 hover:bg-orange-600 focus:outline-none flex items-center justify-center">
          <icon name="material-symbols:keyboard-arrow-right" class="rtl:rotate-180"></icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

interface Category {
  name: string;
  image: string;
}

const props = defineProps<{
  categories: Category[];
}>();

const container = ref<HTMLDivElement | null>(null);
const isTransitioning = ref(false);
const CLONE_COUNT = 5;

const clonedCategories = computed(() => {
  if (props.categories.length === 0) {
    return [];
  }
  const firstClones = props.categories.slice(0, CLONE_COUNT);
  const lastClones = props.categories.slice(-CLONE_COUNT);
  return [...lastClones, ...props.categories, ...firstClones];
});

onMounted(() => {
  nextTick(() => {
    if (container.value && container.value.children.length > 0) {
      const itemWidth = (container.value.children[0] as HTMLElement).offsetWidth + 16;
      container.value.scrollLeft = itemWidth * CLONE_COUNT;
    }
  });
});

const handleInfiniteScroll = () => {
  if (!container.value) return;
  const itemWidth = (container.value.children[0] as HTMLElement).offsetWidth + 16;
  const realItemsCount = props.categories.length;
  if (container.value.scrollLeft >= itemWidth * (realItemsCount + CLONE_COUNT)) {
    container.value.scrollLeft = itemWidth * CLONE_COUNT;
    container.value.style.scrollBehavior = 'auto';
  }
  if (container.value.scrollLeft <= 0) {
    container.value.scrollLeft = itemWidth * realItemsCount;
    container.value.style.scrollBehavior = 'auto';
  }
};

const scroll = (direction: 'left' | 'right') => {
  if (!container.value || isTransitioning.value) return;
  isTransitioning.value = true;
  container.value.style.scrollBehavior = 'smooth';
  const scrollAmount = 300 * (direction === 'left' ? -1 : 1);
  container.value.scrollBy({ left: scrollAmount });
  setTimeout(() => {
    handleInfiniteScroll();
    isTransitioning.value = false;
  }, 500);
};

const scrollLeft = () => scroll('left');
const scrollRight = () => scroll('right');
</script>