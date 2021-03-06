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
