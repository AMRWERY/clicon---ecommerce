<template>
    <div>
        <div class="relative w-max">
            <base-button :default-icon="false" :paddingX="'px-5'" :paddingY="'py-2.5'" id="dropdownToggle"
                @click="toggleMenu" :class="{
                    'bg-[#fa8232] text-gray-100 hover:text-gray-100/80': isOpen,
                    'bg-[#f2f4f5] text-gray-700 hover:text-gray-800': !isOpen
                }"
                class="rounded-sm text-sm font-medium cursor-pointer border-0 outline-0 flex items-center justify-center transition-colors duration-200">
                All Categories
                <icon name="material-symbols:keyboard-arrow-down-rounded" :class="{ 'rotate-180': isOpen }"
                    class="ms-1 mt-1 transition-transform duration-300"></icon>
            </base-button>

            <ul id="dropdownMenu" v-if="isOpen"
                class="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-sm max-h-96 overflow-auto overflow-y-auto hide-scrollbar">
                <li class="dropdown-item py-2.5 px-5 hover:bg-[#f2f4f5] text-slate-600 text-sm font-medium cursor-pointer flex items-center gap-4"
                    v-for="item in menuItems" :key="item.text" @click="handleSelect(item)">
                    <img :src="item.iconPath" alt="svg icon" class="w-5 h-5">
                    <span class="text-sm font-medium">{{ item.text }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from '@/types/categories-menu'

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const menuItems = ref<MenuItem[]>([
    {
        text: 'Mobiles, Tablets & Accessories',
        href: '#',
        iconPath: '/svg/smartphone.svg'
    },
    {
        text: 'Computers & Office Supplies',
        href: '#',
        iconPath: '/svg/laptop-computer.svg'
    },
    {
        text: 'TVs & Electronics',
        href: '#',
        iconPath: '/svg/tv.svg'
    },
    {
        text: "Women's Fashion",
        href: '#',
        iconPath: '/svg/dress-stylish.svg'
    },
    {
        text: "Men's Fashion",
        href: '#',
        iconPath: '/svg/coat-jacke.svg'
    },
    {
        text: "Kids Fashion",
        href: '#',
        iconPath: '/svg/short-trousers.svg'
    },
    {
        text: "Health, Beauty & Perfumes",
        href: '#',
        iconPath: '/svg/perfume.svg'
    },
    {
        text: "Supermarket",
        href: '#',
        iconPath: '/svg/supermarket.svg'
    },
    {
        text: "Home, Furniture & Tools",
        href: '#',
        iconPath: '/svg/furniture-home.svg'
    },
    {
        text: "Kitchen & Appliances",
        href: '#',
        iconPath: '/svg/kitchen-room.svg'
    },
    {
        text: "Toys, Games & Baby",
        href: '#',
        iconPath: '/svg/baby-cartoon-cute-game.svg'
    },
    {
        text: "Sports, Fitness & Outdoors",
        href: '#',
        iconPath: '/svg/dumbell-fitness.svg'
    },
    {
        text: "Books",
        href: '#',
        iconPath: '/svg/books.svg'
    },
    {
        text: "Video Games",
        href: '#',
        iconPath: '/svg/games-control.svg'
    },
    {
        text: "Automotive",
        href: '#',
        iconPath: '/svg/front-car.svg'
    },
]);

const handleSelect = (item: MenuItem) => {
    isOpen.value = false;
};
</script>