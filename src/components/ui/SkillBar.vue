<script setup>
import { computed } from "vue";
import projects from "../../data/projects.js";
import { useEvidenceModal } from "../../composables/useEvidenceModal";

const props = defineProps({
  title: { type: String, required: true },
  percent: { type: Number, required: true },
  provenIn: { type: String, default: null },
});

const { open } = useEvidenceModal();
const provenProject = computed(() =>
  projects.find((p) => p.slug === props.provenIn),
);
</script>

<template>
  <div class="mb-6 last:mb-0">
    <div class="flex items-center justify-between mb-2.5">
      <button
        v-if="provenProject"
        @click="open({ title, level: percent + '%', provenIn })"
        class="text-sm font-medium text-text bg-transparent border-0 p-0 hover:text-cyan transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded text-left"
      >
        {{ title }}
      </button>
      <span v-else class="text-sm font-medium text-text">{{ title }}</span>
      <span class="text-xs font-mono text-muted">{{ percent }}%</span>
    </div>
    <div class="relative h-2 w-full rounded-full bg-border overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-700"
        :style="{
          width: percent + '%',
          background:
            'linear-gradient(90deg, var(--color-cyan), var(--color-teal))',
        }"
      ></div>
      <div class="absolute inset-0 flex pointer-events-none">
        <span
          v-for="n in 4"
          :key="n"
          class="flex-1 border-r border-bg/50 last:border-r-0"
        ></span>
      </div>
    </div>
  </div>
</template>
