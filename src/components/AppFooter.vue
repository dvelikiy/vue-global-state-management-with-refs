<template>
  <v-footer height="40" app>
    <div class="text-caption">{{ currentTime }}</div>
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; {{ yearComputed }}
      <span class="d-none d-sm-inline-block">Dmitry Velikiy</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://velikiy.netlify.app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Website
      </a>
    </div>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue';
import { useGlobalState } from '@/composables/useGlobalState';

const { currentTime } = useGlobalState();

const yearComputed = computed(() => {
  if (new Date().getFullYear() === 2024) {
    return new Date().getFullYear();
  } else {
    return `${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`;
  }
});
</script>
