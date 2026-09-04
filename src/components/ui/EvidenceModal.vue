<script setup>
import { computed } from "vue";
import { useEvidenceModal } from "../../composables/useEvidenceModal";
import projects from "../../data/projects.js";

const { isOpen, activeSkill, close } = useEvidenceModal();
const project = computed(() =>
  projects.find((p) => p.slug === activeSkill.value?.provenIn),
);
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center px-6"
    >
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="close"
      ></div>
      <div
        class="relative w-full max-w-2xl bg-surface border border-border rounded-2xl overflow-hidden"
      >
        <button
          @click="close"
          class="absolute top-4 right-4 text-muted hover:text-text transition-colors text-lg z-10"
        >
          ✕
        </button>
        <div v-if="project">
          <div class="h-40 bg-bg overflow-hidden">
            <img
              v-if="project.screenshoot"
              :src="project.screenshoot"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-muted font-mono text-xs"
            >
              screenshot
            </div>
          </div>
          <div class="p-8">
            <p class="font-mono text-xs tracking-[0.25em] text-cyan mb-2">
              {{ activeSkill.title }} — PROVEN IN
            </p>
            <h3 class="text-2xl font-bold text-text mb-1">
              {{ project.title }}
            </h3>
            <p class="text-muted font-mono text-xs mb-6">
              {{ project.completedDate }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noopener"
                class="text-xs font-mono px-4 py-2 rounded-lg font-semibold border border-border text-text hover:bg-bg transition-colors"
              >
                View Source ↗
              </a>
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener"
                class="text-xs font-mono px-4 py-2 rounded-lg font-semibold text-bg"
                style="
                  background: linear-gradient(
                    90deg,
                    var(--color-cyan),
                    var(--color-teal)
                  );
                "
              >
                View Live ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
