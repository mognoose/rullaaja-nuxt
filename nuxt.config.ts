// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    APPID: '1074965099007197235',
    PUBLIC_KEY: '0fa564d7037045cf70a1279f7e7f193f386997ca8cbcd0559399de17efd99cfd',
    TOKEN: 'MTA3NDk2NTA5OTAwNzE5NzIzNQ.GJf0pv.-bPCpFrYqHyqxpkUgzpEZ2bvmIF9SM46n55Rfo',
    CHANNELID: '479199736776228865',
    INVITE_LINK: '"https://discord.com/oauth2/authorize?client_id=1074965099007197235&scope=bot&permissions=380104636416"',
    public: {
      
    }
  },
  srcDir: 'src',
  devServer: {
    port: Number(process.env.NUXT_PORT ?? 8080),
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
