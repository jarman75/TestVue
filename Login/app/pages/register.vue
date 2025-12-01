<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Registered with', name.value, email.value, password.value)
    // Mock redirect
    navigateTo('/')
  }, 1000)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Create an account</CardTitle>
        <CardDescription class="text-center">
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" v-model="name" />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" v-model="email" />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" v-model="password" />
        </div>
        <div class="grid gap-2">
          <Label for="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" v-model="confirmPassword" />
        </div>
      </CardContent>
      <CardFooter class="flex flex-col gap-4">
        <Button class="w-full" @click="handleRegister" :disabled="isLoading">
          <span v-if="isLoading">Creating account...</span>
          <span v-else>Create account</span>
        </Button>
        <!-- Login link removed -->
      </CardFooter>
    </Card>
  </div>
</template>
