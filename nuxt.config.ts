// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devServer: {
    port: Number(process.env.NUXT_PORT ?? 8080),
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules: {
    'api/**': {cors: true, headers: { 'access-control-allow-methods': 'POST' }}
  },
})
