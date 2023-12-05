import {
  Header as DSHeader,
  HeaderBody,
  HeaderNav,
  Logo,
  Service,
} from '@dataesr/react-dsfr';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>mes-aides.gouv.fr - Vous informer sur vos aides et vos droits</title>
        <meta name="description" content="Vous informer sur vos aides et vos droits" />
        <link rel="icon" href="https://template.incubateur.net/~/@gouvfr/dsfr/dist/favicon/favicon.svg" />
        <script
              dangerouslySetInnerHTML={{
                __html: `
              var _paq = _paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//stats.data.gouv.fr/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '9']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
              })();
            `}}
        />
      </Head>
      <DSHeader>
        <HeaderBody>
          <Logo splitCharacter={5}>République Française
          </Logo>
          <Service
            title="mes-aides.gouv.fr"
            description="Vous informer sur vos aides et vos droits"
          />
        </HeaderBody>
        <HeaderNav>
          <Link href="/" passHref>
            <li className="fr-nav__item">
              <a href="" className="fr-nav__link">Accueil</a>
            </li>
          </Link>
          <Link href="/questions-frequentes" passHref>
            <li className="fr-nav__item">
              <a href="" className="fr-nav__link">Questions fréquentes</a>
            </li>
          </Link>
        </HeaderNav>
      </DSHeader>
      {children}
    </>
  )
}
