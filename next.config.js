module.exports = {
  reactStrictMode: true,
  async redirects() {
    if (process.env.PROXY !== 'on') {
      return [{
        source: '/(.?)',
        destination: 'https://www.mesdroitssociaux.gouv.fr?utm_source=mes-aides&utm_medium=basic',
        permanent: false,
      }]
    }

    return [
      {
        source: '/redirection/1jeune1solution',
        destination: 'https://www.1jeune1solution.gouv.fr/mes-aides?utm_source=mes-aides&utm_medium=alternative',
        permanent: false,
      },
      {
        source: '/redirection/(.*)',
        destination: 'https://www.mesdroitssociaux.gouv.fr?utm_source=mes-aides&utm_medium=alternative',
        permanent: false,
      },
    ]
  },
}
