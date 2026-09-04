<script setup>
import { ref } from "vue";
import socialLinks from "../../data/media.js";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const form = ref({ name: "", email: "", subject: "", message: "" });
const status = ref("idle");

const subjects = [
  "New Project",
  "Job Opportunity",
  "Collaboration",
  "General Inquiry",
  "Other",
];

const contactCards = [
  {
    label: "Email",
    value: "alaingentilg2011@gmail.com",
    note: "Send me an email anytime",
    href: "mailto:alaingentilg2011@gmail.com",
  },
  {
    label: "Phone",
    value: "0795535686",
    note: "Call or WhatsApp",
    href: "tel:+250795535686",
  },
  {
    label: "Location",
    value: "Muhanga, Rwanda",
    note: "Available remotely",
    href: null,
  },
  {
    label: "Socials",
    value: "Soulscriptor111",
    note: "LinkedIn / GitHub",
    href: null,
  },
];

async function handleSubmit() {
  status.value = "sending";
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(document.getElementById("contact-form")),
    });
    if (res.ok) {
      status.value = "success";
      form.value = { name: "", email: "", subject: "", message: "" };
    } else {
      status.value = "error";
    }
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <section id="contact" class="px-6 md:px-14 py-24 max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-14">
      <div>
        <span
          class="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-cyan/10 text-cyan border border-cyan/30 mb-4"
        >
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
            <path
              d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-8 5.99-8-5.99V18h16V8.24z"
            />
          </svg>
          Get In Touch
        </span>
        <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Let's Work <span class="text-cyan">Together</span>
        </h2>
        <p class="text-muted leading-relaxed max-w-md mb-4">
          Have a project in mind, a question, or just want to say hello? I'd
          love to hear from you. Feel free to reach out — I'm always open to new
          opportunities and collaborations.
        </p>
        <p class="italic text-teal text-sm mb-8">Drop me a message →</p>

        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <component
            v-for="card in contactCards"
            :key="card.label"
            :is="card.href ? 'a' : 'div'"
            :href="card.href"
            class="bg-surface border border-border rounded-2xl p-4 flex items-start gap-3 hover:border-cyan/40 transition-colors"
          >
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-bg"
              style="
                background: linear-gradient(
                  135deg,
                  var(--color-teal),
                  var(--color-cyan)
                );
              "
            >
              <svg
                v-if="card.label === 'Email'"
                viewBox="0 0 24 24"
                class="w-4 h-4 fill-current"
              >
                <path
                  d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-8 5.99-8-5.99V18h16V8.24z"
                />
              </svg>
              <svg
                v-else-if="card.label === 'Phone'"
                viewBox="0 0 24 24"
                class="w-4 h-4 fill-current"
              >
                <path
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z"
                />
              </svg>
              <svg
                v-else-if="card.label === 'Location'"
                viewBox="0 0 24 24"
                class="w-4 h-4 fill-current"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
                />
              </svg>
              <svg v-else viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                <path
                  d="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h4v-1.8h-4a5.9 5.9 0 1 0 0 11.8h4v-1.8h-4A4.1 4.1 0 0 1 3.9 12zM8 13h8v-2H8zm8-6h-4v1.8h4a4.1 4.1 0 1 1 0 8.2h-4V19h4a5.9 5.9 0 1 0 0-11.8z"
                />
              </svg>
            </div>
            <div>
              <p class="text-xs font-mono text-muted">{{ card.label }}</p>
              <p class="text-sm font-medium text-text break-all">
                {{ card.value }}
              </p>
              <p class="text-[11px] text-muted">{{ card.note }}</p>
            </div>
          </component>
        </div>

        <div class="flex items-center gap-3 mb-4">
          <a
            v-for="social in socialLinks.filter((s) =>
              ['GitHub', 'LinkedIn', 'Instagram'].includes(s.name),
            )"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            :aria-label="social.name"
            class="w-9 h-9 rounded-full flex items-center justify-center text-bg"
            style="
              background: linear-gradient(
                135deg,
                var(--color-teal),
                var(--color-cyan)
              );
            "
          >
            <svg
              v-if="social.name === 'GitHub'"
              viewBox="0 0 24 24"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            <svg
              v-else-if="social.name === 'LinkedIn'"
              viewBox="0 0 24 24"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
              />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="w-4 h-4 fill-current">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
              />
            </svg>
          </a>
        </div>
        <p class="italic text-teal text-sm">Let's build something amazing!</p>
      </div>

      <div class="bg-surface border border-border rounded-2xl p-6 md:p-8">
        <div class="flex items-center gap-3 mb-1">
          <div
            class="w-9 h-9 rounded-lg flex items-center justify-center text-bg shrink-0"
            style="
              background: linear-gradient(
                135deg,
                var(--color-teal),
                var(--color-cyan)
              );
            "
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-text">Send Me a Message</h3>
        </div>
        <p class="text-muted text-xs leading-relaxed mb-6">
          Fill in the form below and I'll get back to you as soon as possible.
        </p>

        <form
          id="contact-form"
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-4"
        >
          <div>
            <label for="name" class="block text-xs font-mono text-muted mb-1.5"
              >YOUR NAME *</label
            >
            <input
              id="name"
              name="name"
              type="text"
              required
              v-model="form.name"
              placeholder="Enter your name"
              class="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-cyan transition-colors"
            />
          </div>
          <div>
            <label for="email" class="block text-xs font-mono text-muted mb-1.5"
              >YOUR EMAIL *</label
            >
            <input
              id="email"
              name="email"
              type="email"
              required
              v-model="form.email"
              placeholder="Enter your email"
              class="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-cyan transition-colors"
            />
          </div>
          <div>
            <label
              for="subject"
              class="block text-xs font-mono text-muted mb-1.5"
              >SUBJECT *</label
            >
            <select
              id="subject"
              name="subject"
              required
              v-model="form.subject"
              class="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-cyan transition-colors"
            >
              <option value="" disabled>Select a subject</option>
              <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label
              for="message"
              class="block text-xs font-mono text-muted mb-1.5"
              >MESSAGE *</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              v-model="form.message"
              placeholder="Tell me about your project or message..."
              class="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-cyan transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="flex items-center justify-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded-lg text-bg disabled:opacity-50 transition-opacity mt-2"
            style="
              background: linear-gradient(
                90deg,
                var(--color-cyan),
                var(--color-teal)
              );
            "
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
            {{ status === "sending" ? "Sending…" : "Send Message" }}
          </button>

          <p v-if="status === 'success'" class="text-sm text-cyan font-mono">
            Message sent — thanks, I'll get back to you soon.
          </p>
          <p v-if="status === 'error'" class="text-sm text-red-400 font-mono">
            Something went wrong. Try again, or email directly.
          </p>
        </form>
      </div>
    </div>

    <div
      class="mt-10 bg-surface border border-border rounded-2xl px-6 py-4 flex items-center justify-between flex-wrap gap-3"
    >
      <div class="flex items-center gap-2 text-sm text-text">
        <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current text-cyan">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
          />
        </svg>
        Based in Muhanga, Rwanda
      </div>
      <p class="italic text-teal text-sm">I'm here and ready to help!</p>
    </div>
  </section>
</template>
