<template>
  <div>
    <UBanner
      to="https://one-front.com"
      target="_blank"
      color="neutral"
      icon="i-lucide-info"
      title="The Yogamos service is currently in development, powered by ONE-FRONT™."
    />
    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
