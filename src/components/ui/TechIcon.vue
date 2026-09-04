<script setup>
import { ref } from "vue";
defineProps({
  icon: { type: String, required: true },
  color: { type: String, required: true },
  label: { type: String, required: true },
});
const failed = ref(false);
</script>

<template>
  <div
    class="w-full h-full flex items-center justify-center rounded-lg"
    :style="{ background: '#' + color + '1A' }"
  >
    <img
      v-if="!failed"
      :src="`/icons/${icon}.svg`"
      :alt="label"
      class="w-2/3 h-2/3 object-contain"
      @error="failed = true"
    />
    <span v-else class="font-bold text-[10px]" :style="{ color: '#' + color }">
      {{ label.slice(0, 2).toUpperCase() }}
    </span>
  </div>
</template>
