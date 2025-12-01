<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const email = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

const handleReset = async () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
    console.log('Reset password for', email.value)
  }, 1000)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Forgot Password</CardTitle>
        <CardDescription class="text-center">
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div v-if="isSubmitted" class="text-center text-green-600">
          If an account exists for {{ email }}, you will receive an email shortly.
        </div>
        <div v-else class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" v-model="email" />
        </div>
      </CardContent>
      <CardFooter class="flex flex-col gap-4">
        <Button v-if="!isSubmitted" class="w-full" @click="handleReset" :disabled="isLoading">
          <span v-if="isLoading">Sending...</span>
          <span v-else>Send Reset Link</span>
        </Button>
        <div class="text-sm text-center text-muted-foreground">
          <NuxtLink to="/login" class="underline underline-offset-4 hover:text-primary">
            Back to Login
          </NuxtLink>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
