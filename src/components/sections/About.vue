<script setup>
const milestones = [
  {
    stage: "Primary Education",
    place: "Bright School",
    note: "Joined the school robotics team at age 9 — this is where the curiosity for building things started.",
  },
  {
    stage: "O-Level",
    place: "Saint Aloys Rwamagana",
    note: "Continued the robotics passion, joining the school's robotics team and deepening technical interest.",
  },
  {
    stage: "Currently",
    place: "College APPEC TSS",
    note: "Studying and building frontend development skills — turning years of curiosity into real, shippable software.",
  },
];
</script>

<template>
  <section id="about" class="px-6 md:px-14 py-24 max-w-6xl mx-auto">
    <p class="font-mono text-xs tracking-[0.3em] text-cyan mb-4">ABOUT</p>
    <h2 class="text-3xl md:text-4xl mb-10">My Story</h2>

    <div class="grid md:grid-cols-2 gap-16 items-start">
      <div class="flex justify-center md:justify-start relative">
        <div class="hero-glow"></div>
        <div
          class="relative w-64 h-80 rounded-2xl overflow-hidden border border-border"
        >
          <img
            src="../../assets/images/profile-cutout.png"
            alt="Alain"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <p class="text-muted leading-relaxed text-sm mb-8">
          It started at nine years old, when I joined the robotics team at
          Bright School. That's where the dream began — building things, taking
          them apart, figuring out how they worked. The passion never really
          left. By O-Level at Saint Aloys Rwamagana, I was back on a robotics
          team, and the interest had only grown. Today that same curiosity
          drives how I build software — careful, hands-on, and always learning.
        </p>

        <h3 class="font-bold text-text mb-4">Academic Background</h3>
        <div class="flex flex-col gap-5">
          <div
            v-for="m in milestones"
            :key="m.stage"
            class="border-l-2 border-cyan/40 pl-4"
          >
            <p class="text-xs font-mono text-cyan">{{ m.stage }}</p>
            <p class="font-medium text-text text-sm">{{ m.place }}</p>
            <p class="text-muted text-xs leading-relaxed mt-1">{{ m.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-glow {
  position: absolute;
  width: 16rem;
  height: 16rem;
  border-radius: 9999px;
  background: radial-gradient(circle, var(--color-cyan) 0%, transparent 70%);
  opacity: 0.15;
  filter: blur(60px);
  animation: heroGlow 5s ease-in-out infinite;
  z-index: -1;
}
@keyframes heroGlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.12;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.22;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-glow {
    animation: none;
  }
}
</style>
