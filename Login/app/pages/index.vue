<script setup lang="ts">
import { Button } from '../../components/ui/button'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4 bg-background">
    <h1 class="text-4xl font-bold">Welcome to Nuxt Auth</h1>
    <div class="flex gap-4">
      <NuxtLink to="/login">
        <Button>Login</Button>
      </NuxtLink>
      <NuxtLink to="/register">
        <Button variant="outline">Register</Button>
      </NuxtLink>
    </div>
  </div>
</template>
