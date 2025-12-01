<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const handleReset = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Password reset successfully')
    navigateTo('/login')
  }, 1000)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Reset Password</CardTitle>
        <CardDescription class="text-center">
          Enter your new password below
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="password">New Password</Label>
          <Input id="password" type="password" v-model="password" />
        </div>
        <div class="grid gap-2">
          <Label for="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" v-model="confirmPassword" />
        </div>
      </CardContent>
      <CardFooter class="flex flex-col gap-4">
        <Button class="w-full" @click="handleReset" :disabled="isLoading">
          <span v-if="isLoading">Resetting...</span>
          <span v-else>Reset Password</span>
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
