<script setup lang="ts">
  import { computed } from 'vue'
  import {
    useAsyncData,
    queryCollectionNavigation,
    queryCollection
  } from '#imports'

  // const { normalizedPath } = useNormalizedPath()

  const route = useRoute()

  // const { data: post } = await useAsyncData('single-post', () =>
  //   queryCollection('posts').where('path', 'LIKE', route.path).first()
  // )
  const { data: post } = await useAsyncData(route.path, () =>
    queryCollection('posts').path(route.path).first()
  )

  if (!post.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found',
      fatal: true
    })
  }

  // Fetch Navigation Data
  const { data: navigation } = await useAsyncData('navigation', () =>
    queryCollectionNavigation('posts')
  )

  // Helper Functions for Breadcrumbs
  function findPageBreadcrumb(
    navigation: any[],
    path: string
  ): any[] {
    for (const item of navigation) {
      if (item.path === path) return [item]
      if (item.children) {
        const childBreadcrumb = findPageBreadcrumb(
          item.children,
          path
        )
        if (childBreadcrumb.length) return [item, ...childBreadcrumb]
      }
    }
    return []
  }

  function mapContentNavigation(breadcrumb: any[]): any[] {
    return breadcrumb.map(({ title, path }) => ({
      label: title,
      to: path
    }))
  }

  // Compute Breadcrumbs
  const breadcrumb = computed(() => {
    if (!navigation.value || !post.value) return []
    return mapContentNavigation(
      findPageBreadcrumb(navigation.value, post.value.path)
    )
  })

  const { data: surround } = await useAsyncData(
    `${route.path}-surround`,
    () => {
      return queryCollectionItemSurroundings('posts', route.path, {
        fields: ['description']
      })
    }
  )

  // SEO Meta
  useSeoMeta({
    title: post.value.title,
    ogTitle: post.value.title,
    description: post.value.description,
    ogDescription: post.value.description
  })
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description">
      <template #headline>
        <UBadge
          v-bind="post.badge"
          variant="subtle" />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <time class="text-gray-500 dark:text-gray-400">
          {{
            new Date(post.date).toLocaleDateString('en', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          }}
        </time>
      </template>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <UBreadcrumb :items="breadcrumb" />
        <ContentRenderer
          v-if="post && post.body"
          :value="post" />
        <hr v-if="surround?.length" />
        <UContentSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="
            post.body.toc.links.map(link => ({
              ...link,
              id: link.id,
              depth: 1
            }))
          " />
      </template>
    </UPage>
  </UContainer>
</template>
