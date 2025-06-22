<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">Nuxt UI - Starter</h1>

    <div class="flex items-center gap-2">
      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui.nuxt.com/getting-started/installation/nuxt"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />

      <!-- After: Semantic design tokens with automatic dark mode support -->
      <div class="bg-muted p-4 rounded-lg">
        <h2 class="text-highlighted text-xl">User Profile</h2>
        <p class="text-muted text-xs mb-2">Account settings and preferences</p>
        <UButton variant="outline" color="primary" size="sm" class="mt-2"
          >Edit Profile</UButton
        >
      </div>
    </div>
  </div>
</template>
