<script setup>
import TechIcon from "./TechIcon.vue";

const iconMap = {
  "Vue.js": { icon: "vuedotjs", color: "4FC08D" },
  "Tailwind CSS": { icon: "tailwindcss", color: "06B6D4" },
  HTML: { icon: "html5", color: "E34F26" },
  CSS: { icon: "css", color: "1572B6" },
  JavaScript: { icon: "javascript", color: "F7DF1E" },
};

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  screenshoot: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
  url: { type: String, default: "" },
  repoUrl: { type: String, default: "" },
});
</script>

<template>
  <div
    class="w-full rounded-2xl overflow-hidden flex flex-col bg-surface border border-border hover:border-cyan/40 transition-colors duration-300"
  >
    <div class="h-36 w-full overflow-hidden bg-bg">
      <img
        v-if="screenshoot"
        :src="screenshoot"
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-muted font-mono text-[10px]"
      >
        screenshot
      </div>
    </div>
    <div class="flex flex-col gap-3 p-5 flex-1">
      <p class="font-bold text-text">{{ title }}</p>
      <p class="text-xs text-muted leading-relaxed flex-1">{{ description }}</p>

      <div v-if="tags.length" class="flex flex-wrap gap-2">
        <div
          v-for="tag in tags"
          :key="tag"
          class="flex items-center gap-1.5 pr-2 pl-1 py-1 rounded-full bg-bg border border-border"
        >
          <div v-if="iconMap[tag]" class="w-4 h-4">
            <TechIcon
              :icon="iconMap[tag].icon"
              :color="iconMap[tag].color"
              :label="tag"
            />
          </div>
          <span class="text-[10px] font-mono text-muted">{{ tag }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-2">
        <a
          v-if="url"
          :href="url"
          target="_blank"
          rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 text-center text-[11px] font-mono font-semibold px-4 py-2 rounded-full text-bg"
          style="
            background: linear-gradient(
              90deg,
              var(--color-cyan),
              var(--color-teal)
            );
          "
        >
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
            <path
              d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"
            />
          </svg>
          View Work
        </a>
        <span
          v-else
          class="flex-1 flex items-center justify-center gap-1.5 text-center text-[11px] font-mono px-4 py-2 rounded-full border border-dashed border-border text-muted"
        >
          View Work
        </span>

        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 text-center text-[11px] font-mono text-teal border border-teal/50 px-4 py-2 rounded-full hover:bg-teal/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          GitHub
        </a>
        <span
          v-else
          class="flex-1 flex items-center justify-center gap-1.5 text-center text-[11px] font-mono px-4 py-2 rounded-full border border-dashed border-border text-muted"
        >
          GitHub
        </span>
      </div>
    </div>
  </div>
</template>
