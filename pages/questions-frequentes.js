import {
  Container,
  AccordionItem, Accordion,
} from '@dataesr/react-dsfr';

import Layout from '../components/layout'
import CTA from '../components/cta'

export default function Home() {
  return (
    <Layout>
      <Container spacing="p-3w">
        <h1>Bienvenue sur Mes Aides</h1>

        <p>Vous quittez <a href="https://assure.ameli.fr/">votre compte ameli (l’Assurance Maladie en Ligne)</a> pour vous rendre sur le simulateur de prestations sociales indépendant Mes Aides.</p>

        <h2>Que souhaitez-vous ?</h2>
        <Accordion keepOpen>
          <AccordionItem title="Déclarer ma mutuelle auprès d’ameli pour moi ou pour quelqu’un de ma famille">
            <p>Vous devez <a href="https://www.ameli.fr/assure/adresses-et-contacts/vos-paiements/vos-remboursements/comprendre-un-remboursement/part-mutuelle-non-recue">vous renseigner auprès de votre mutuelle pour savoir la marche à suivre</a>. Il s'agit le plus souvent de lui faire parvenir les documents de votre carte vitale afin de permettre la télétransmission.</p>
          </AccordionItem>
          <AccordionItem title="Savoir si j’ai le droit à la CMU-C ou à l’ACS">
            <p>Vous pouvez <router-link to="foyer/demandeur">passer la simulation afin de faire le point sur votre situation</router-link>. Si vous avez le droit à la complémentaire santé solidaire (qui remplace la CMU-C et l’ACS depuis le 1ᵉʳ novembre 2019) notre simulateur vous indiquera comment demander cette aide.</p>
            <CTA source="ameli-eligibilite-css"/>
          </AccordionItem>
          <AccordionItem title="Déclarer mon médecin traitant">
            <p>La procédure est détaillée sur <a href="https://www.ameli.fr/assure/adresses-et-contacts/un-changement-de-situation/declarer-un-nouveau-medecin-traitant">cette page du site de l’Assurance Maladie</a>.</p>
          </AccordionItem>
          <AccordionItem title="Me renseigner sur mon dossier ou sur un délai de traitement">
            <p>Vous devez contacter votre caisse <a href="https://www.ameli.fr/assure/adresses-et-contacts/laide-pour-une-complementaire-sante-cmuc/acs/suivre-lavancement-de-votre-dossier">depuis votre compte ameli</a> pour connaître l'avancement de votre dossier - <a href="https://assure.ameli.fr">lien direct vers votre compte ameli</a>.</p>
          </AccordionItem>
          <AccordionItem title="Me connecter à mon espace sécurisé sur ameli pour contacter un conseiller spécialisé">
            <p>Rendez-vous sur <a href="https://assure.ameli.fr/">la messagerie en ligne de votre compte ameli</a>. Si vous avez perdu votre mot de passe, <a href="https://www.ameli.fr/assure/adresses-et-contacts/votre-compte-ameli/vous-avez-oublie-votre-code-secret">vous pouvez en demander un nouveau sur cette page</a>. En cas de difficulté d'accès ou pour plus d'information sur « Mon compte sur ameli.fr » contactez par téléphone votre caisse d'Assurance Maladie au 3646 (service 0,06 Euro/min + prix appel).</p>
          </AccordionItem>
        </Accordion>
      </Container>
      <Container spacing="p-2w">

        <h2>Continuer vers les simulateurs</h2>

        <p>Les simulateurs proposés ne sont pas affiliés à l’Assurance Maladie en ligne : nous n’avons pas accès à vos dossiers. Aucun des renseignements que vous entrez sur notre site n’est ensuite transmis à l’Assurance Maladie. Notre but est de faire le point avec vous sur les prestations sociales et aides que vous pouvez demander.</p>

        <CTA source="ameli"/>
      </Container>
      <Container>
        <p>Pour plus d’informations, contactez-nous : <a href="mailto:contact@mes-aides.gouv.fr?subject=Demande d’informations">contact@mes-aides.gouv.fr</a></p>
      </Container>
    </Layout>
  )
}
