<script setup lang="ts">
  const route = useRoute()
  const { data: page } = await useAsyncData('blog', () =>
    queryCollection('blog').first()
  )

  const { data: posts } = await useAsyncData(route.path, () =>
    queryCollection('posts').all()
  )

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })
  }
  useSeoMeta({
    title: page.value.title,
    ogTitle: page.value.title,
    description: page.value.description,
    ogDescription: page.value.description
  })

  defineOgImageComponent('Saas')

  definePageMeta({
    layout: 'default'
  })
</script>

<template>
  <UContainer>
    <UPageHeader
      v-bind="page"
      class="py-[50px]" />
    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="
            new Date(post.date).toLocaleDateString('en', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          "
          :authors="post.authors"
          :badge="post.badge"
          orientation="vertical"
          :ui="{
            description: 'line-clamp-2'
          }"
          variant="soft" />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>
