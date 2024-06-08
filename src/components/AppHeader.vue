<template>
  <v-app-bar>
    <v-app-bar-title>MetaCortex Employee Portal</v-app-bar-title>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar
          image="../assets/ThomasAnderson.png"
          v-bind="props"
          class="me-4 cursor-pointer"
        ></v-avatar>
      </template>
      <div
        class="pa-4 bg-surface rounded d-flex flex-column ga-2 border-sm mt-2"
      >
        <h3>Account</h3>
        <div class="text-body-2">
          <span class="font-weight-bold">Name:</span>
          {{ profileData.name }}
        </div>
        <div class="text-body-2">
          <span class="font-weight-bold">Job title:</span>
          {{ profileData.jobTitle }}
        </div>
        <div class="text-body-2">
          <span class="font-weight-bold">Department:</span>
          {{ profileData.department }}
        </div>
      </div>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

// TODO: Switch from local to global state

const profileData = ref({
  name: "Thomas Anderson",
  jobTitle: "Software Engineer",
  department: "Artificial Intelligence",
});
</script>
