import {
  Header as DSHeader,
  HeaderBody,
  HeaderNav,
  NavItem,
  Logo,
  Service,
  SwitchTheme,
  Container,
  Tile, TileBody, TileImage, Row, Col
} from '@dataesr/react-dsfr';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import CTA from '../components/cta'

import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
  const referer = context.req.headers.referer
  const ameliDone = context.req.cookies['ameli']
  if (referer && referer.match(/8000/) && ameliDone != 'done') {
    context.res.setHeader('set-cookie', 'ameli=done')
    return {
      redirect: {
        destination: '/questions-frequentes',
        permanent: false,
      },
    }
  }
  return { props: {}}
}


export default function Home() {
  return (
    <Layout>
      <Container spacing="p-3w">
        <h1>Bienvenue sur Mes Aides</h1>
        <p>Deux simulateurs vous sont proposés pour répondre au mieux à nos questions.</p>
      </Container>
      <CTA source="accueil"/>
      <Container>
        <p>Pour plus d’informations, accédez aux <Link href="/questions-frequentes">questions fréquentes</Link> ou contactez-nous : <a href="mailto:contact@mes-aides.gouv.fr?subject=Demande d’informations">contact@mes-aides.gouv.fr</a></p>
      </Container>
    </Layout>
  )
}
