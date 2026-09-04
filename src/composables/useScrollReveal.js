import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const target = ref(null)
  const visible = ref(false)
  let observer

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { target, visible }
}