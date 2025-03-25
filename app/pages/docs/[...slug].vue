<script setup lang="ts">
  const route = useRoute()

  definePageMeta({
    layout: 'docs'
  })

  const { data: page } = await useAsyncData(route.path, async () => {
    let content = await queryCollection('docs')
      .where('path', 'LIKE', route.path)
      .first()

    if (!content) {
      console.warn(
        `No content found for ${route.path}, falling back to navigation.`
      )
      content = await queryCollection('docs').path(route.path).first()
    }

    // console.log('Loaded Content:', content) // Debugging
    return content
  })

  // console.log({
  // page,
  // routePath: route.path
  // availablePaths: allDocs.map(doc => doc.path)
  // })

  const { data: surround } = await useAsyncData(
    `${route.path}-surround`,
    () => {
      return queryCollectionItemSurroundings('docs', route.path, {
        fields: ['description']
      })
    }
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
</script>

<template>
  <UPage v-if="page">
    <!-- <UPage> -->
    <UPageHeader
      :title="page.title"
      :description="page.description" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
