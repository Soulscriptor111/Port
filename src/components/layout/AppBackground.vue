<template>
  <div
    class="fixed inset-0 -z-10 overflow-hidden bg-bg transition-colors duration-300"
  >
    <svg
      class="absolute inset-0 w-full h-full net-mesh"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--color-cyan)" stroke-width="1">
        <line x1="40" y1="80" x2="260" y2="220" opacity="0.15" />
        <line x1="260" y1="220" x2="420" y2="100" opacity="0.12" />
        <line x1="260" y1="220" x2="200" y2="420" opacity="0.14" />
      </g>
      <g stroke="var(--color-teal)" stroke-width="1">
        <line x1="700" y1="650" x2="880" y2="760" opacity="0.12" />
        <line x1="880" y1="760" x2="950" y2="600" opacity="0.1" />
      </g>
    </svg>
    <div class="grid-fade"></div>
  </div>
</template>

<style scoped>
.net-mesh {
  opacity: 0.4;
}
.grid-fade {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--color-border) 1px, transparent 1px);
  background-size: 26px 26px;
  mask-image: radial-gradient(
    ellipse 70% 55% at 50% 15%,
    black 30%,
    transparent 85%
  );
  opacity: 0.5;
}
</style>
