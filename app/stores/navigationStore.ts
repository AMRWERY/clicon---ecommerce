import type { MenuItem } from "@/types/navigation-routes";

export const useNavigationStore = defineStore("navigation", () => {
  // A reactive array to hold all menu items from all micro-frontends
  const menuItems = ref<MenuItem[]>([]);

  // An action to allow remotes to add their menu items
  function addMenuItems(items: MenuItem[]) {
    // A simple check to prevent duplicate items
    items.forEach((newItem) => {
      if (
        !menuItems.value.some((existing) => existing.route === newItem.route)
      ) {
        menuItems.value.push(newItem);
      }
    });
  }

  return { menuItems, addMenuItems };
});
