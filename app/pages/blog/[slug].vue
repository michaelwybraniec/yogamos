<script setup lang="ts">
  import type { BlogPost } from '~/types'

  const route = useRoute()

  const { data: post } = await useAsyncData(route.path, async () => {
    return (await queryCollection('posts')
      .path(route.path)
      .first()) as unknown as BlogPost | null
  })

  if (!post.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found',
      fatal: true
    })
  }

  const { data: surround } = await useAsyncData(
    `${route.path}-surround`,
    async () =>
      await queryCollectionItemSurroundings('posts', route.path, {
        fields: ['title', 'description', 'navigation']
      }),
    { default: () => [] }
  )

  const title = post.value.title
  const description = post.value.description

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description
  })

  if (post.value.image?.src) {
    defineOgImage({
      url: post.value.image.src
    })
  } else {
    defineOgImageComponent('Saas', {
      headline: 'Blog'
    })
  }
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader :title="post.title" :description="post.description">
      <template #headline>
        <UBadge v-bind="post.badge" variant="subtle" />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <time class="text-gray-500 dark:text-gray-400">{{
          new Date(post.date).toLocaleDateString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        }}</time>
      </template>

      <div class="mt-4 flex flex-wrap items-center gap-3">
        <UButton
          v-for="(author, index) in post.authors"
          :key="index"
          :to="author.to"
          color="primary"
          target="_blank"
          size="sm"
        >
          <UAvatar v-bind="author.avatar" alt="Author avatar" size="2xs" />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer v-if="post && post.body" :value="post" />

        <hr v-if="surround?.length" />

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="
            post.body.toc.links.map((link) => ({
              ...link,
              id: link.href,
              depth: 1
            }))
          "
        />
      </template>
    </UPage>
  </UContainer>
</template>
