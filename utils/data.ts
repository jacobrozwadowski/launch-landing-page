export const frameworks = [
  "react",
  "qwik",
  "svelte",
  "vue",
  "tailwind",
] as const;

export type Framework = (typeof frameworks)[number];
