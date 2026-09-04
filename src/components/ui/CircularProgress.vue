<script setup>
import { computed } from "vue";
const props = defineProps({
  percent: { type: Number, required: true },
});
const radius = 20;
const circumference = 2 * Math.PI * radius;
const offset = computed(() => circumference * (1 - props.percent / 100));
</script>

<template>
  <svg width="48" height="48" viewBox="0 0 48 48" class="shrink-0">
    <circle
      cx="24"
      cy="24"
      :r="radius"
      fill="none"
      stroke="var(--color-border)"
      stroke-width="4"
    />
    <circle
      cx="24"
      cy="24"
      :r="radius"
      fill="none"
      stroke="var(--color-cyan)"
      stroke-width="4"
      stroke-linecap="round"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="offset"
      transform="rotate(-90 24 24)"
      style="transition: stroke-dashoffset 0.8s ease"
    />
    <text
      x="24"
      y="27"
      text-anchor="middle"
      font-size="10"
      font-family="monospace"
      fill="var(--color-text)"
    >
      {{ percent }}%
    </text>
  </svg>
</template>
