module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
/*      {
        source: '/',
        destination: '/local',
        permanent: false,
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '.*localhost.*',
          },
        ],
      },
      {
        source: '/',
        destination: '/ameli',
        permanent: false,
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '.*ameli.*',
          },
        ],
      },*/
      {
        source: '/',
        destination: 'https://www.mesdroitssociaux.gouv.fr?utm_source=mes-aides&utm_medium=basic',
        permanent: false,
      },
    ]
  },
}
