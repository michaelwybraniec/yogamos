<script setup lang="ts">
  const { normalizedPath } = useNormalizedPath()

  definePageMeta({
    layout: 'docs'
  })

  console.log('Normalized Path:', normalizedPath.value)

  const { data: page } = await useAsyncData(normalizedPath.value, () => {
    return queryCollection('docs')
      .where('path', 'LIKE', `%${normalizedPath.value}%`)
      .first()
  })

  // const { data: page } = await useAsyncData(normalizedPath.value, () =>
  //   queryCollection('docs')
  //     .where('path', '=', normalizedPath.value)
  //     .where('extension', '=', 'md') // Only Markdown files
  //     .first()
  // )

  console.log('page', page)

  // const allDocs = await queryCollection('docs').all()
  // console.log(
  //   'Available Paths:',
  //   allDocs.map(doc => doc.path)
  // )
  // console.log('Normalized Path:', normalizedPath.value)

  const allDocs = await queryCollection('docs').all()
  console.log(
    'Available Paths:',
    allDocs.map(doc => doc.path)
  )
  console.log('Normalized Path:', normalizedPath.value)

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })
  }

  // if (!page.value || page.value.extension !== 'md') {
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: 'Page not found',
  //     fatal: true
  //   })
  // }

  const { data: surround } = await useAsyncData(
    `${normalizedPath.value}-surround`,
    () => {
      return queryCollectionItemSurroundings('docs', normalizedPath.value, {
        fields: ['description']
      })
    }
  )

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
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
