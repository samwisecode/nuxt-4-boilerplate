<script lang="ts" setup>
import { ref } from 'vue'
const email = ref<string>('')
const password = ref<string>('')

function submitForm() {
  console.log(`Email: ${email.value}, Password: ${password.value}`)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">
      Lank Dev (@samwisecode)
    </h1>
    <h3 class="text-xl">Nuxt 4 / UI 3 - Starter Kit</h3>

    <div class="flex items-center gap-2">
      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/samwisecode/nuxt-4-boilerplate"
        target="_blank"
      />
    </div>
    <div class="space-y-4">
      <UFormField label="Email">
        <UInput
          v-model="email"
          placeholder="sam@mail.com"
          class="w-64"
        />
      </UFormField>
      <UFormField label="Password">
        <UInput
          v-model="password"
          placeholder=""
          class="w-64"
        />
      </UFormField>
      <UButton
        label="Login"
        color="primary"
        class="w-64"
        @click="submitForm"
      />
    </div>
  </div>
</template>
