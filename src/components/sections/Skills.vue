<script setup>
import CircularProgress from "../ui/CircularProgress.vue";
import TechIcon from "../ui/TechIcon.vue";
import skillGroups from "../../data/skills.js";

const orbitIcons = [
  {
    icon: "vuedotjs",
    color: "4FC08D",
    label: "Vue.js",
    style: "top: 6%; left: 18%;",
  },
  {
    icon: "tailwindcss",
    color: "06B6D4",
    label: "Tailwind CSS",
    style: "top: 0%; left: 44%;",
  },
  {
    icon: "html5",
    color: "E34F26",
    label: "HTML",
    style: "top: 6%; left: 70%;",
  },
  {
    icon: "javascript",
    color: "F7DF1E",
    label: "JavaScript",
    style: "top: 38%; left: 86%;",
  },
  {
    icon: "photoshop",
    color: "31A8FF",
    label: "Photoshop",
    style: "top: 70%; left: 70%;",
  },
  {
    icon: "figma",
    color: "F24E1E",
    label: "Figma",
    style: "top: 78%; left: 44%;",
  },
  {
    icon: "github",
    color: "181717",
    label: "GitHub",
    style: "top: 70%; left: 18%;",
  },
  { icon: "css", color: "1572B6", label: "CSS", style: "top: 38%; left: 2%;" },
];

const techStack = [
  { icon: "vuedotjs", color: "4FC08D", label: "Vue.js" },
  { icon: "tailwindcss", color: "06B6D4", label: "Tailwind CSS" },
  { icon: "html5", color: "E34F26", label: "HTML" },
  { icon: "css", color: "1572B6", label: "CSS" },
  { icon: "javascript", color: "F7DF1E", label: "JavaScript" },
  { icon: "github", color: "181717", label: "GitHub" },
  { icon: "figma", color: "F24E1E", label: "Figma" },
  { icon: "photoshop", color: "31A8FF", label: "Photoshop" },
];

const learning = ["Node.js"];
</script>

<template>
  <section id="skills" class="px-6 md:px-14 py-24 max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <span
          class="inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-cyan/10 text-cyan border border-cyan/30 mb-4"
        >
          // My Skills
        </span>
        <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Tools I Use to Bring <span class="text-cyan">Ideas to Life</span>
        </h2>
        <p class="text-muted leading-relaxed max-w-md mb-6">
          I work with modern technologies and tools to build fast, responsive,
          and beautiful web and mobile applications. Here are some of the skills
          I use and constantly improve.
        </p>
        <p class="italic text-teal text-sm">Always Learning →</p>
      </div>

      <div class="relative aspect-square max-w-sm mx-auto w-full">
        <div
          class="absolute inset-[15%] rounded-full border border-cyan/20"
        ></div>

        <div
          class="absolute inset-[28%] rounded-full flex items-center justify-center p-4"
          style="
            background: linear-gradient(
              135deg,
              var(--color-teal),
              var(--color-cyan)
            );
          "
        >
          <div
            class="w-full h-full rounded-full bg-surface flex items-center justify-center p-3"
          >
            <img
              src="../../assets/images/logo.png"
              alt="Alain Gentil"
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <div
          v-for="icon in orbitIcons"
          :key="icon.label"
          class="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center gap-1 p-1"
          :style="icon.style"
        >
          <div class="w-6 h-6">
            <TechIcon
              :icon="icon.icon"
              :color="icon.color"
              :label="icon.label"
            />
          </div>
          <span
            class="text-[7px] font-mono text-muted text-center leading-none"
            >{{ icon.label }}</span
          >
        </div>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4"
      >
        <div class="flex items-start justify-between">
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
            style="
              background: linear-gradient(
                135deg,
                var(--color-teal),
                var(--color-cyan)
              );
              color: var(--color-bg);
            "
          >
            {{ group.icon }}
          </div>
          <CircularProgress :percent="group.percent" />
        </div>
        <h3 class="font-bold text-text text-sm leading-snug">
          {{ group.title }}
        </h3>
        <p class="text-muted text-xs leading-relaxed flex-1">
          {{ group.description }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in group.tags"
            :key="tag"
            class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-bg text-muted border border-border"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-[2fr_1fr] gap-6">
      <div
        class="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6"
        style="
          background: linear-gradient(
            135deg,
            var(--color-teal),
            var(--color-cyan)
          );
        "
      >
        <div class="flex-1">
          <p class="font-bold text-bg mb-1">My Tech Stack</p>
          <p class="text-bg/80 text-xs mb-4">
            The technologies I enjoy working with and love to master.
          </p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="tech in techStack"
              :key="tech.label"
              class="w-9 h-9 rounded-lg bg-surface p-1.5"
            >
              <TechIcon
                :icon="tech.icon"
                :color="tech.color"
                :label="tech.label"
              />
            </div>
          </div>
        </div>
        <p class="hidden sm:block italic text-bg text-sm text-right shrink-0">
          Build →<br />Create →<br />Improve
        </p>
      </div>

      <div class="bg-surface border border-border rounded-2xl p-6">
        <p class="font-bold text-text mb-1">Currently Learning</p>
        <p class="text-muted text-xs leading-relaxed mb-4">
          Always exploring new technologies to grow and build better solutions.
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="item in learning"
            :key="item"
            class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/30"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
