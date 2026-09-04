import { ref, watchEffect } from "vue";

const isDark = ref(localStorage.getItem("theme") !== "light");

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value;
  }
  watchEffect(() => {
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  });
  return { isDark, toggle };
}
