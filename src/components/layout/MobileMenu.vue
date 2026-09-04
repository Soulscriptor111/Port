<script setup>
import { useMobileMenu } from "../../composables/useMobileMenu";

const { isOpen, close } = useMobileMenu();

const links = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  close();
}
</script>

<template>
  <div
    v-if="isOpen"
    @click="close"
    class="fixed inset-0 bg-black/50 z-40 md:hidden"
  ></div>

  <div
    class="fixed top-16 right-0 z-40 w-56 bg-surface border-l border-b border-border rounded-bl-2xl flex flex-col gap-5 p-6 transition-transform duration-300 md:hidden"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <button
      v-for="link in links"
      :key="link.id"
      @click="scrollTo(link.id)"
      class="text-left text-sm text-muted hover:text-text transition-colors"
    >
      {{ link.label }}
    </button>
  </div>
</template>
