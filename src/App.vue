<script setup>
import AppBackground from "./components/layout/AppBackground.vue";
import Navbar from "./components/layout/Navbar.vue";
import MobileMenu from "./components/layout/MobileMenu.vue";
import Footer from "./components/layout/Footer.vue";
import EvidenceModal from "./components/ui/EvidenceModal.vue";

import Hello from "./components/sections/Hello.vue";
import Process from "./components/sections/Process.vue";
import About from "./components/sections/About.vue";
import Skills from "./components/sections/Skills.vue";
import Projects from "./components/sections/Projects.vue";
import Contact from "./components/sections/Contact.vue";
</script>

<template>
  <div id="app" class="relative min-h-screen">
    <AppBackground />
    <Navbar />
    <MobileMenu />

    <main class="relative z-10">
      <Hello />
      <Process />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <Footer />
    <EvidenceModal />
  </div>
</template>
