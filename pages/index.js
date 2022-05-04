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
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>mes-aides.gouv.fr - Vous informez sur vos aides et vos droits</title>
        <meta name="description" content="Vous informez sur vos aides et vos droits" />
        <link rel="icon" href="https://template.incubateur.net/~/@gouvfr/dsfr/dist/favicon/favicon.svg" />
      </Head>
      <DSHeader>
        <HeaderBody>
          <Logo splitCharacter={5}>République Française
          </Logo>
          <Service
            title="mes-aides.gouv.fr"
            description="Vous informez sur vos aides et vos droits"
          />
        </HeaderBody>
      </DSHeader>
      <Container>
          <Row>
          <Col>
            <Tile>
                <TileBody
                    title="mesdroitssociaux.gouv.fr"
                    description="Simulateur tout public"
                    linkHref='/redirection/mesdroitssociaux'>
                    <p>Évaluer vos droits à près de 60 aides</p>
                </TileBody>
                <TileImage
                    alt="alternative"
                    src="/logo-mes-droits-sociaux-gouv-fr_adj.svg">
                </TileImage>
            </Tile></Col>
            <Col>
            <Tile>
                <TileBody
                    title="1jeune1solution.gouv.fr"
                    description="pour les moins de 30 ans"
                    linkHref='/redirection/1jeune1solution'>
                    <p>Évaluer vos droits à plus de 500 aides</p>
                </TileBody>
                <TileImage
                    alt="alternative"
                    src="/logo1j1s-france-relance_adj_3.svg">
                </TileImage>
            </Tile>
          </Col>
        </Row>
      </Container>
      <Container>
        <p>Pour plus d'information, contactez-nous : <a href="mailto:contact@mes-aides.gouv.fr?subject=Demande d'informations">contact@mes-aides.gouv.fr</a></p>
      </Container>
    </>
  )
}
