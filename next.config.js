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
        destination: 'https://mes-aides.1jeune1solution.beta.gouv.fr?utm_source=mes-aides-:utm_source&utm_medium=alternative',
        permanent: false,
        has: [{
          type: 'query',
          key: 'utm_source',
          value: '(?<utm_source>.*)'
        }]
      },
      {
        source: '/redirection/1jeune1solution',
        destination: 'https://mes-aides.1jeune1solution.beta.gouv.fr?utm_source=mes-aides&utm_medium=alternative',
        permanent: false,
      },
      {
        source: '/redirection/(.*)',
        destination: 'https://www.mesdroitssociaux.gouv.fr?utm_source=mes-aides-:utm_source&utm_medium=alternative',
        permanent: false,
        has: [{
          type: 'query',
          key: 'utm_source',
          value: '(?<utm_source>.*)'
        }],
      },
      {
        source: '/redirection/(.*)',
        destination: 'https://www.mesdroitssociaux.gouv.fr?utm_source=mes-aides&utm_medium=alternative',
        permanent: false,
      },
    ]
  },
}
