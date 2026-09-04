<script setup>
import TechIcon from "../ui/TechIcon.vue";

const techs = [
  { label: "Vue.js", icon: "vuedotjs", color: "4FC08D" },
  { label: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { label: "HTML", icon: "html5", color: "E34F26" },
  { label: "CSS", icon: "css", color: "1572B6" },
  { label: "JavaScript", icon: "javascript", color: "F7DF1E" },
];
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center px-4 sm:px-6 md:px-14 pt-24 pb-16 overflow-hidden"
  >
    <div class="max-w-6xl mx-auto w-full">
      <div class="grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <span
            class="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-cyan/10 text-cyan border border-cyan/30 mb-4"
          >
            👋 Hello, I'm
          </span>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2"
          >
            Ganza <span class="text-cyan">Alain Gentil</span>
          </h1>
          <p class="font-mono text-sm tracking-[0.2em] text-teal mb-5">
            FRONTEND DEVELOPER
          </p>
          <p class="text-muted leading-relaxed max-w-md mb-8">
            I build modern, fast and user-focused websites and mobile
            applications. Turning ideas into beautiful and functional digital
            experiences.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#projects"
              class="flex items-center justify-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded-full text-bg w-full sm:w-auto"
              style="
                background: linear-gradient(
                  90deg,
                  var(--color-cyan),
                  var(--color-teal)
                );
              "
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                <path
                  d="M20 6h-3V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9 4h6v2H9V4z"
                />
              </svg>
              View My Work
            </a>
            <a
              href="#contact"
              class="flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 rounded-full border border-border text-text hover:bg-bg transition-colors w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                <path
                  d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-8 5.99-8-5.99V18h16V8.24z"
                />
              </svg>
              Contact Me
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-5">
            <div
              v-for="tech in techs"
              :key="tech.label"
              class="flex flex-col items-center gap-1.5"
            >
              <div class="w-9 h-9 sm:w-10 sm:h-10">
                <TechIcon
                  :icon="tech.icon"
                  :color="tech.color"
                  :label="tech.label"
                />
              </div>
              <span
                class="text-[9px] sm:text-[10px] text-muted font-mono text-center"
                >{{ tech.label }}</span
              >
            </div>
          </div>
        </div>

        <div
          class="relative flex justify-center items-center min-h-[220px] sm:min-h-[280px] md:min-h-[380px]"
        >
          <p
            class="hidden lg:block absolute top-0 right-0 italic text-teal text-sm leading-relaxed text-right -rotate-2"
          >
            Ideas →<br />Code →<br />Impact
          </p>

          <div class="blob-bg"></div>
          <div class="blob-bg blob-bg-2"></div>

          <img
            src="../../assets/images/profile-cutout.png"
            alt="Alain"
            class="relative z-10 w-44 sm:w-56 md:w-72 h-auto object-contain"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-1 mt-8 sm:mt-10 relative z-10">
        <svg
          viewBox="0 0 24 24"
          class="w-5 h-5 text-muted"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="8" y="3" width="8" height="14" rx="4" />
          <path d="M12 7v3" stroke-linecap="round" />
        </svg>
        <span class="text-xs font-mono text-muted">Scroll Down</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blob-bg {
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%;
  background: linear-gradient(135deg, var(--color-teal), var(--color-cyan));
  opacity: 0.18;
  z-index: 0;
}
.blob-bg-2 {
  width: 70%;
  height: 70%;
  border-radius: 60% 40% 35% 65% / 55% 45% 55% 45%;
  opacity: 0.14;
  transform: rotate(25deg);
}
</style>
