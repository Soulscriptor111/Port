<script setup>
import { ref } from "vue";
import socialLinks from "../../data/media.js";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const whatIDo = [
  "Frontend Development",
  "UI/UX Design",
  "Responsive Websites",
  "Version Control",
];

const contactInfo = [
  {
    label: "Email",
    value: "alaingentilg2011@gmail.com",
    href: "mailto:alaingentilg2011@gmail.com",
  },
  { label: "Phone", value: "0795535686", href: "tel:+250795535686" },
  { label: "Location", value: "Muhanga, Rwanda", href: null },
  {
    label: "Website",
    value: "ala1n-rw.vercel.app",
    href: "https://ala1n-rw.vercel.app",
  },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const subscribeEmail = ref("");
const subscribeStatus = ref("idle");

async function handleSubscribe() {
  subscribeStatus.value = "sending";
  try {
    const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: subscribeEmail.value, form: "newsletter" }),
    });
    subscribeStatus.value = res.ok ? "success" : "error";
    if (res.ok) subscribeEmail.value = "";
  } catch {
    subscribeStatus.value = "error";
  }
}
</script>

<template>
  <footer
    class="relative w-full bg-surface/90 backdrop-blur-xl border-t border-border"
  >
    <div
      class="grid sm:grid-cols-2 md:grid-cols-5 gap-10 px-6 py-12 md:px-14 max-w-6xl mx-auto"
    >
      <div class="sm:col-span-2 md:col-span-1">
        <img
          src="../../assets/images/logo.png"
          alt="Alain Gentil"
          class="h-9 w-auto mb-3"
        />
        <p class="font-bold text-text leading-tight">Ganza Alain Gentil</p>
        <p class="font-mono text-xs tracking-[0.2em] text-teal mb-3">
          FRONTEND DEVELOPER
        </p>
        <p class="text-muted text-sm leading-relaxed mb-4 max-w-xs">
          Building modern, fast and user-focused websites and mobile
          applications. Turning ideas into digital experiences.
        </p>
        <p class="italic text-teal text-sm mb-4">
          Let's build something amazing!
        </p>
        <div class="flex items-center gap-2">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            :aria-label="social.name"
            class="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/40 transition-colors"
          >
            <svg
              v-if="social.name === 'Instagram'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'Facebook'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-2.416c0-2.616 1.243-4.79 4.559-4.79 1.213 0 2.263.13 2.567.19v3.263l-1.762.001c-1.379 0-1.646.657-1.646 1.607v2.145h3.283l-.428 3.667h-2.855v7.98H9.101z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'X-Twitter'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'GitHub'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'LinkedIn'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'Discord'"
              viewBox="0 0 24 24"
              class="w-3.5 h-3.5 fill-current"
            >
              <path
                d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.673-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <p class="font-bold text-text text-sm mb-4">Quick Links</p>
        <div class="flex flex-col gap-2.5">
          <button
            v-for="link in links"
            :key="link.id"
            @click="scrollTo(link.id)"
            class="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors bg-transparent border-0 p-0 text-left"
          >
            <span class="text-cyan">→</span> {{ link.label }}
          </button>
        </div>
      </div>

      <div>
        <p class="font-bold text-text text-sm mb-4">What I Do</p>
        <div class="flex flex-col gap-2.5">
          <div
            v-for="item in whatIDo"
            :key="item"
            class="flex items-center gap-2 text-sm text-muted"
          >
            <span class="text-cyan">✓</span> {{ item }}
          </div>
        </div>
      </div>

      <div>
        <p class="font-bold text-text text-sm mb-4">Get In Touch</p>
        <div class="flex flex-col gap-2.5">
          <component
            v-for="info in contactInfo"
            :key="info.label"
            :is="info.href ? 'a' : 'p'"
            :href="info.href"
            :target="
              info.href && info.href.startsWith('http') ? '_blank' : null
            "
            :rel="info.href && info.href.startsWith('http') ? 'noopener' : null"
            class="text-sm text-muted hover:text-cyan transition-colors break-all"
          >
            {{ info.value }}
          </component>
        </div>
      </div>

      <div>
        <p class="font-bold text-text text-sm mb-4">Subscribe</p>
        <p class="text-muted text-xs leading-relaxed mb-4">
          Get the latest updates, projects and tech tips straight to your inbox.
        </p>
        <form
          @submit.prevent="handleSubscribe"
          class="flex items-center gap-2 mb-2"
        >
          <input
            v-model="subscribeEmail"
            type="email"
            required
            placeholder="Your email address"
            class="flex-1 min-w-0 bg-bg border border-border rounded-full px-4 py-2 text-text text-xs outline-none focus:border-cyan transition-colors"
          />
          <button
            type="submit"
            :disabled="subscribeStatus === 'sending'"
            class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-bg disabled:opacity-50"
            style="
              background: linear-gradient(
                135deg,
                var(--color-teal),
                var(--color-cyan)
              );
            "
            aria-label="Subscribe"
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </form>
        <p
          v-if="subscribeStatus === 'success'"
          class="text-xs text-cyan font-mono"
        >
          Subscribed — thank you!
        </p>
        <p
          v-if="subscribeStatus === 'error'"
          class="text-xs text-red-400 font-mono"
        >
          Something went wrong, try again.
        </p>
      </div>
    </div>

    <div
      class="border-t border-border px-6 py-4 md:px-14 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted font-mono"
    >
      <p>
        © {{ new Date().getFullYear() }} Ganza Alain Gentil. All rights
        reserved.
      </p>
      <p>Code · Create · Grow</p>
    </div>
  </footer>
</template>
