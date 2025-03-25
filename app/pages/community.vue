<script setup lang="ts">
  const colorMode = useColorMode()
</script>

<template>
  <div>
    <!-- <UContainer> -->
    <div class="flex justify-center p-20">
      <UCard variant="soft">
        <div class="flex justify-center">
          <StarsBg v-show="colorMode.value === 'dark'" />

          <UIcon name="i-mingcute-group-3-fill" class="size-50" />
        </div>
        <div class="flex justify-center">
          Community page in construction.
        </div>
        <div class="flex justify-center p-10">
          <UButton
            trailing-icon="i-lucide-arrow-left"
            variant="subtle"
            color="neutral"
            to="/">
            Home
          </UButton>
        </div>
      </UCard>
    </div>
    <!-- </UContainer> -->
  </div>
</template>
