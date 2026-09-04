<script setup>
import { useTheme } from "../../composables/useTheme";
const { isDark, toggle } = useTheme();
</script>

<template>
  <button
    @click="toggle"
    class="w-9 h-9 rounded-full bg-transparent border border-border flex items-center justify-center text-muted hover:text-cyan transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <svg v-if="isDark" viewBox="0 0 24 24" class="w-4 h-4 fill-current">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <svg
      v-else
      viewBox="0 0 24 24"
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template>
