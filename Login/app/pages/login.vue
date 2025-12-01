<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Logged in with', email.value, password.value)
    // Mock redirect
    navigateTo('/')
  }, 1000)
}

// OAuth handler removed
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription class="text-center">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" v-model="email" />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" v-model="password" />
        </div>
      </CardContent>
      <CardFooter class="flex flex-col gap-4">
        <Button class="w-full" @click="handleLogin" :disabled="isLoading">
          <span v-if="isLoading">Signing in...</span>
          <span v-else>Sign In</span>
        </Button>
        <div class="text-sm text-center text-muted-foreground">
          <NuxtLink to="/forgot-password" class="underline underline-offset-4 hover:text-primary">
            Forgot password?
          </NuxtLink>
        </div>
        <div class="text-sm text-center text-muted-foreground">
          Don't have an account?
          <NuxtLink to="/register" class="underline underline-offset-4 hover:text-primary">
            Sign up
          </NuxtLink>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
