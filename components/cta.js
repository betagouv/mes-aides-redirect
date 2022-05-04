import {
  Container,
  Tile, TileBody, TileImage, Row, Col
} from '@dataesr/react-dsfr';

import Link from 'next/link'

export default function CTA({source}) {
  const sourceParam = source ? `?utm_source=${source}` : ""
  return (
    <Container spacing="p-3w">
        <Row>
        <Col>
          <Tile>
              <TileBody
                  title="mesdroitssociaux.gouv.fr"
                  description="Simulateur tout public"
                  linkHref={`/redirection/mesdroitssociaux${sourceParam}`}>
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
                  linkHref={`/redirection/1jeune1solution${sourceParam}`}>
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
  )
}
