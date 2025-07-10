import { craftInit, CraftNotImplemented } from '@query-api/next/server'
import Home from '@/content/pages/Home'
import Headline from '@/content/components/Headline'

export const craftConfig = craftInit({
  baseUrl: 'https://backend-craftcms.ddev.site:8443',
  authToken: 'Bearer tyE9LViYm0HvcVbUErN1wwIa3qyeby1K',
  debug: true,
  siteMap: [
    {
      handle: 'en',
      path: '/',
      origin: 'http://localhost:3000',
      id: 1,
    },
    {
      handle: 'de',
      path: '/de',
      origin: 'http://localhost:3000/de',
      id: 2,
    },
    {
      handle: 'es',
      path: '/es',
      origin: 'http://localhost:3000/es',
      id: 3,
    },
  ],
  contentMapping: {
    pages: {
      home: Home,
      'news:home': CraftNotImplemented,
    },
    components: {
      headline: Headline,
    }
  }
})