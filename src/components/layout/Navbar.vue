<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useMobileMenu } from "../../composables/useMobileMenu";
import ThemeToggle from "../ui/ThemeToggle.vue";

const { toggle } = useMobileMenu();
const scrolled = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 60;
}
onMounted(() =>
  window.addEventListener("scroll", handleScroll, { passive: true }),
);
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const links = [
  { label: "HOME", id: "home" },
  { label: "PROCESS", id: "process" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-6 md:px-14 transition-colors duration-300"
    :class="
      scrolled
        ? 'bg-surface/80 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
    "
  >
    <button
      @click="scrollTo('home')"
      class="bg-transparent border-0 p-0 outline-none focus-visible:ring-2 focus-visible:ring-0 rounded flex items-center"
    >
      <img src="../../assets/logo.png" alt="Alain Gentil" class="h-10 w-auto" />
    </button>

    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <button
        v-for="link in links"
        :key="link.id"
        @click="scrollTo(link.id)"
        class="nav-link bg-transparent border-0 p-0 pb-1 text-muted hover:text-text outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded"
      >
        {{ link.label }}
      </button>
    </nav>

    <div class="flex items-center gap-3">
      <ThemeToggle />
      <button
        @click="toggle"
        class="md:hidden w-6 h-4 flex flex-col justify-between bg-transparent border-0 p-0 outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded"
        aria-label="Toggle menu"
      >
        <span class="h-[2px] w-full rounded-full bg-cyan"></span>
        <span class="h-[2px] w-full rounded-full bg-cyan"></span>
        <span class="h-[2px] w-full rounded-full bg-cyan"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 0;
  background: var(--color-cyan);
  transition: width 0.25s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
