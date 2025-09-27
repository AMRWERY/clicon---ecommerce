<template>
    <div>
        <div v-if="showPopup"
            class="bg-gray-800/90 py-3 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 fixed z-50 w-full">
            <div class="md:w-4/6">
                <p class="text-white font-semibold">Cookies on Toyota Egypt Website</p>
                <p class="text-white text-sm md:text-base mt-1">
                    This site uses cookies as explained in our Cookie Policy. If you agree to our use of cookies, please
                    close this message and continue to use this site.
                </p>
            </div>

            <div class="flex justify-start sm:justify-center self-center md:self-auto">
                <base-button :default-icon="false" :type="'button'" :bg-color="'bg-white'" :text-color="'text-gray-800'"
                    :variant="'solid'" :hover-color="'hover:bg-gray-200'" :paddingX="'px-4'" :paddingY="'py-3'"
                    :class="'rounded-2xl font-semibold transition'" @click="acceptCookies">
                    Accept & Close
                </base-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const showPopup = ref(false);

onMounted(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
        showPopup.value = true;
    }
});

const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    showPopup.value = false;
}
</script>