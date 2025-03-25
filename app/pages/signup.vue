<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent } from '@nuxt/ui'
  import { useToast } from '#imports'

  definePageMeta({
    layout: 'auth'
  })

  useSeoMeta({
    title: 'Sign up'
  })

  const toast = useToast()

  const fields = [
    {
      name: 'name',
      type: 'text' as const,
      label: 'Name',
      placeholder: 'Enter your name'
    },
    {
      name: 'email',
      type: 'text' as const,
      label: 'Email',
      placeholder: 'Enter your email'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      placeholder: 'Enter your password'
    }
  ]

  const providers = [
    {
      label: 'Google',
      icon: 'i-simple-icons-google',
      onClick: () => {
        toast.add({
          title: 'Google',
          description: 'Login with Google'
        })
      }
    },
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      onClick: () => {
        toast.add({
          title: 'GitHub',
          description: 'Login with GitHub'
        })
      }
    }
  ]

  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
  })

  type Schema = z.output<typeof schema>

  // function onSubmit(payload: FormSubmitEvent<Schema>) {
  //   console.log('Submitted', payload)
  // }

  const loading = ref(false)

  async function onSubmit(payload: FormSubmitEvent<Schema>) {
    if (loading.value) return
    loading.value = true

    console.log('Submitted', payload)
    toast.add({
      title: 'Submitted successfully!',
      description: `${payload.data.name}, ${payload.data.email} `
    })

    setTimeout(() => {
      loading.value = false
    }, 2000) // Simulating API call
  }
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    :providers="providers"
    title="Create an account"
    :submit="{ label: 'Create account', loading }"
    @submit="onSubmit">
    <template #description>
      Already have an account?
      <ULink to="/login" class="text-primary-500 font-medium">
        Login.
      </ULink>
    </template>

    <template #footer>
      By signing up, you agree to our
      <ULink to="/" class="text-primary-500 font-medium">
        Terms of Service.
      </ULink>
    </template>
  </UAuthForm>
</template>
