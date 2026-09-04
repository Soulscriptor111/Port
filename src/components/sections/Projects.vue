<script setup>
import Card from "../ui/Card.vue";
import projects from "../../data/projects.js";
</script>

<template>
  <section id="projects" class="px-6 md:px-14 py-16 md:py-24 max-w-6xl mx-auto">
    <span
      class="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-cyan/10 text-cyan border border-cyan/30 mb-4"
    >
      // My Work
    </span>
    <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
      Projects I've <span class="text-cyan">Built</span>
    </h2>
    <p class="text-muted max-w-2xl leading-relaxed mb-2">
      A small but honest collection — every project here is real and verifiable.
    </p>
    <p class="italic text-teal text-sm mb-10">Explore my work →</p>

    <div class="grid sm:grid-cols-2 gap-6">
      <Card
        v-for="project in projects"
        :key="project.slug"
        :title="project.title"
        :description="project.description"
        :screenshoot="project.screenshoot"
        :tags="project.tags"
        :url="project.demoUrl"
        :repoUrl="project.repoUrl"
      />
    </div>
  </section>
</template>
