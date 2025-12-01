<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { Primitive } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  as?: any
  asChild?: boolean
}>(), {
  as: 'button',
  asChild: false
})
</script>

<template>
  <Primitive :as="props.as" :as-child="props.asChild"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </Primitive>
</template>
