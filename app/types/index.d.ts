import type { ParsedContent } from '@nuxt/content'
import type { Avatar, Badge, Link } from '#ui/types'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: { src: string } // ✅ Matches Nuxt Content format
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar: Avatar
  } & Link)[]
  body?: {
    toc?: {
      links: Array<{ text: string; href: string }>
    }
  }
}
