<template>
    <div>
        <div class="mx-auto max-w-7xl">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-s-1 md:space-s-2 rtl:space-s-reverse">
                    <li class="inline-flex items-center">
                        <nuxt-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 ">
                            <icon name="material-symbols:home-outline-rounded" class="me-2.5" />
                            Home
                        </nuxt-link>
                    </li>
                    <li v-if="breadcrumbLabel">
                        <div class="flex items-center">
                            <icon name="material-symbols:keyboard-arrow-right"
                                class="mx-1 text-gray-700 rtl:rotate-180" />
                            <nuxt-link to="" class="text-sm font-medium text-gray-700 ms-1">{{
                                breadcrumbLabel }}</nuxt-link>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

// Capitalizes the first letter of a string
const capitalize = (s: string) => {
    if (typeof s !== 'string' || !s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const breadcrumbLabel = computed(() => {
    // 1. Prioritize the `breadcrumb` property from the route's meta field.
    //    We expect it to be a plain string now.
    if (route.meta?.breadcrumb && typeof route.meta.breadcrumb === 'string') {
        return route.meta.breadcrumb;
    }

    // 2. Fallback to using the route's name.
    if (route.name) {
        // Handle both string and symbol cases
        const routeName = typeof route.name === 'string' ?
            route.name :
            route.name.toString();

        // Replace hyphens with spaces and capitalize the result for a clean look.
        const formattedName = routeName.replace(/-/g, ' ');
        return capitalize(formattedName);
    }

    // 3. As a last resort, use the final segment of the URL path.
    const pathSegments = route.path.split('/').filter(Boolean); // removes empty segments
    const lastSegment = pathSegments[pathSegments.length - 1] ?? '';

    const formattedSegment = lastSegment.replace(/-/g, ' ');
    return capitalize(formattedSegment) || 'Page';
});

defineProps({
    routeMeta: {
        type: Object,
        default: () => ({})
    },
    routeName: {
        type: String,
        default: ''
    },
    routePath: {
        type: String,
        default: ''
    }
});
</script>