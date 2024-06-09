<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AppMain />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { useGlobalState } from '@/composables/useGlobalState';
const { profileData } = useGlobalState();

profileData.value.name = 'Thomas Anderson';
profileData.value.jobTitle = 'Software Engineer';
profileData.value.department = 'Artificial Intelligence';
</script>
