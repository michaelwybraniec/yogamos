export function useNormalizedPath() {
  const route = useRoute()
  const i18n = useI18n?.() // Optional chaining in case i18n isn't enabled

  // Get available locales
  const availableLocales = (i18n?.locales?.value || []).map(locale =>
    typeof locale === 'string' ? locale : locale.code
  )

  // Split path into segments
  const segments = route.path.split('/').filter(Boolean)

  // Check if the first segment is a locale
  const firstSegment = segments[0]
  const normalizedPath = computed(() =>
    availableLocales.includes(firstSegment)
      ? '/' + segments.slice(1).join('/')
      : route.path
  )

  return {
    normalizedPath
  }
}
