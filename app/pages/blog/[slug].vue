<script setup lang="ts">
  const route = useRoute()

  const { data: post } = await useAsyncData('single-post', () =>
    queryCollection('posts')
      .where('path', 'LIKE', route.path) // 🔥 Correct way in Content v3
      .first()
  )

  const segments = route.path.split('/').filter(Boolean) // Remove empty parts

  // Fetch available locales dynamically
  const i18n = useI18n?.()
  const availableLocales = (i18n?.locales?.value || []).map((locale) =>
    typeof locale === 'string' ? locale : locale.code
  )

  // If first segment matches a locale, remove it
  const firstSegment = segments[0]
  const normalizedPath = availableLocales.includes(firstSegment)
    ? '/' + segments.slice(1).join('/')
    : route.path

  const { data: post2 } = await useAsyncData('single-post', () =>
    queryCollection('posts').where('path', 'LIKE', normalizedPath).first()
  )

  console.log({
    post3: post.value,
    post4: post2.value
  })

  const { data: posts2 } = await useAsyncData('all-posts', () =>
    queryCollection('posts').all()
  )

  // console.log('All Posts:', posts2.value)
  // console.log(posts2.value?.map((p) => p.path))

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
        <!-- <UContentToc
          v-if="post.body && post.body.toc"
          :links="
            post.body.toc.links.map((link) => ({
              ...link,
              id: link.href,
              depth: 1
            }))
          "
        /> -->
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="
            post.body.toc.links.map((link) => ({
              ...link,
              id: link.id,
              depth: 1
            }))
          "
        />

        })) "
      </template>
    </UPage>
  </UContainer>
</template>
