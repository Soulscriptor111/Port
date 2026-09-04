<script setup>
const steps = [
  {
    n: "01",
    title: "Research",
    desc: "Understand the problem, the users, and what actually needs to be built before writing any code.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Sketch the structure and visual language — layout, hierarchy, and the details that make it feel considered.",
  },
  {
    n: "03",
    title: "Develop",
    desc: "Build it clean and component-based, testing as I go rather than all at the end.",
  },
  {
    n: "04",
    title: "Deploy",
    desc: "Ship it, verify it works in the real world, and keep the evidence — repo, live link — attached.",
  },
];
</script>

<template>
  <section id="process" class="px-6 md:px-14 py-24 max-w-6xl mx-auto">
    <p class="font-mono text-xs tracking-[0.3em] text-cyan mb-4">HOW I WORK</p>
    <h2 class="text-3xl md:text-4xl mb-10">Work Process</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="step in steps"
        :key="step.n"
        class="bg-surface border border-border rounded-2xl p-6"
      >
        <p class="font-mono text-xs text-cyan mb-3">{{ step.n }}</p>
        <h3 class="font-bold text-text mb-2">{{ step.title }}</h3>
        <p class="text-muted text-sm leading-relaxed">{{ step.desc }}</p>
      </div>
    </div>
  </section>
</template>
