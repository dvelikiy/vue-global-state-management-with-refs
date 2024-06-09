<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height mx-auto" max-width="900">
      <h1 class="mb-4 mt-5">Your Profile</h1>
      <v-row>
        <v-col cols="6">
          <v-card
            class="mx-auto"
            prepend-avatar="../assets/ThomasAnderson.png"
            :subtitle="profileData.jobTitle"
            :title="profileData.name"
          >
            <v-card-text> Department: {{ profileData.department }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="mb-3 mt-5">Edit</h2>
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Name" v-model="profileData.name" />
            <v-text-field label="Job title" v-model="profileData.jobTitle" />
            <v-text-field label="Department" v-model="profileData.department" />
          </v-col>
        </v-row>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useGlobalState } from '@/composables/useGlobalState';

// TODO: Switch from local to global state

const { profileData } = useGlobalState();
</script>
