import { ref } from "vue";

const isOpen = ref(false);
const activeSkill = ref(null);

export function useEvidenceModal() {
  const open = (skill) => {
    activeSkill.value = skill;
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  return { isOpen, activeSkill, open, close };
}
