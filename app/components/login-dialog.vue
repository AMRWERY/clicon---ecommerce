<template>
    <div>
        <div class="relative w-max mx-auto">
            <button type="button" id="dropdownToggle" @click="toggleMenus(menuType)"
                class="cursor-pointer text-slate-100 text-sm font-medium hover:text-slate-200 flex items-center justify-center">
                <icon name="mingcute:user-1-line" class="text-white w-[26px] h-[26px]"></icon>
            </button>

            <ul id="dropdownMenu" v-if="isOpen"
                class="absolute top-full end-0 mt-2 rounded-sm [box-shadow:0_8px_19px_-7px_rgba(215,215,215,1)] bg-white py-2 z-[1000] w-[350px] divide-y divide-gray-200 h-max overflow-auto">
                <div class="pt-4">
                    <div class="px-4 mx-auto max-w-screen-2xl">
                        <h2 class="mb-4 text-xl font-bold text-center text-gray-800">Sign in to your account
                        </h2>
                        <form class="max-w-lg mx-auto">
                            <div class="flex flex-col gap-4 md:p-2">
                                <div>
                                    <dynamic-inputs :label="t('form.email')" type="email" :name="t('form.email')"
                                        :rules="'required|email'" :required="true" />
                                </div>

                                <div>
                                    <dynamic-inputs :label="t('form.password')" placeholder="••••••••" type="password"
                                        :name="t('form.password')" :rules="'required|minLength:7'" :required="true" />
                                </div>

                                <base-button :default-icon="false" :paddingX="'px-8'" :paddingY="'py-3'"
                                    :bg-color="'bg-[#fa8232]'" :block="true" :text-color="'text-white'"
                                    :hover-color="'hover:bg-orange-400'"
                                    :append-icon="'material-symbols:arrow-right-alt-rounded'"
                                    class="text-sm font-semibold text-center transition duration-100 rounded-lg outline-none ring-gray-300 focus-visible:ring active:bg-gray-600 md:text-base flex items-center justify-center">
                                    Login
                                </base-button>

                                <div class="relative flex items-center justify-center">
                                    <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                                    <span class="relative px-4 text-sm text-gray-400 bg-white">Don't have an
                                        account?</span>
                                </div>

                                <base-button to="" :default-icon="false" :paddingX="'px-8'" :paddingY="'py-3'"
                                    :text-color="'text-[#fa8232]'" :bg-color="'bg-white'" :variant="'outline'"
                                    :hover-color="'hover:bg-gray-100'" :block="true" :route="true"
                                    class="flex items-center justify-center gap-2 text-sm font-semibold text-center transition duration-100 border-[#ffe7d6] rounded-lg outline-none ring-gray-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                                    Create account
                                </base-button>
                            </div>
                        </form>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

defineProps<{
    toggleMenus: (menuType: string) => void;
    menuType: string;
    isOpen: boolean;
}>();
</script>