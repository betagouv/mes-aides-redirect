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

        <p>Pour la plupart d’entre vous, vous quittez <a href="https://assure.ameli.fr/">votre compte ameli (l’Assurance Maladie en Ligne)</a> pour vous rendre sur les simulateurs de prestations sociales indépendants.</p>

        <h2>Que souhaitez-vous ?</h2>
        <Accordion keepOpen>
          <AccordionItem title="Pourquoi ai-je besoin d’une complémentaire santé ?">
            <p>En France, pour être remboursé sur l’ensemble de ses dépenses de santé, il est indispensable de disposer d’une complémentaire car les régimes de sécurité sociale ne prennent en charge qu’une partie de ces dépenses.</p>
            <p>Si vous n’avez pas de complémentaire, alors vous devrez régler par vos propres moyens cette partie des dépenses non couverte par votre régime de sécurité sociale.</p>
          </AccordionItem>
          <AccordionItem title="Savoir si j’ai le droit à la complémentaire santé solidaire">
            <p>La complémentaire santé solidaire est une complémentaire santé destinée à des publics qui ont de faibles revenus.<br />En plus de la prise en charge de cette partie des dépenses de santé, la complémentaire santé solidaire offre des avantages importants à ses bénéficiaires :</p>
            <ul>
              <li>Ils n’ont pas à avancer de frais quand ils se rendent chez un médecin ;</li>
              <li>Les médecins ne peuvent pas pratiquer de dépassements d&apos;honoraires ;</li>
              <li>Ils bénéficient du <a href="https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/100pourcent-sante/article/100-sante-faciliter-l-acces-aux-soins-et-aux-equipements-auditifs-optiques-et">100% santé</a> : appareils auditifs, prothèses dentaires et lunettes de vue entièrement remboursés lorsqu’ils sont choisis dans les paniers de l’offre 100% Santé.<br />Pour bénéficier de la complémentaire santé solidaire, vous ne devez pas percevoir des ressources annuelles supérieures à un certain plafond : en fonction du niveau de ressources de votre foyer, la complémentaire santé solidaire sera gratuite ou supposera le règlement mensuel d’une participation financière qui varie en fonction de l’âge et est de 30 euros par mois au maximum.<br />Vous pouvez réaliser une simulation afin de savoir si votre situation vous permet de bénéficier de la complémentaire santé solidaire : si c’est le cas, les simulateurs vous indiqueront comment demander cette aide. </li>
            </ul>
            <CTA source="ameli-eligibilite-css" />
          </AccordionItem>
          <AccordionItem title="Déclarer ma mutuelle auprès d’ameli pour moi ou pour quelqu’un de ma famille">
            <p>Vous devez <a href="https://www.ameli.fr/assure/adresses-et-contacts/vos-paiements/vos-remboursements/comprendre-un-remboursement/part-mutuelle-non-recue">vous renseigner auprès de votre mutuelle pour savoir la marche à suivre</a>. Il s’agit le plus souvent de lui faire parvenir les documents de votre carte vitale afin de permettre la télétransmission.</p>
          </AccordionItem>
          <AccordionItem title="Me renseigner sur mon dossier ou sur un délai de traitement">
            <p>Vous devez contacter votre caisse <a href="https://www.ameli.fr/assure/adresses-et-contacts/laide-pour-une-complementaire-sante-cmuc/acs/suivre-lavancement-de-votre-dossier">depuis votre compte ameli</a> pour connaître l’avancement de votre dossier - <a href="https://assure.ameli.fr">lien direct vers votre compte ameli</a>.</p>
          </AccordionItem>
          <AccordionItem title="Me connecter à mon espace sécurisé sur ameli pour contacter un conseiller spécialisé">
            <p>Rendez-vous sur <a href="https://assure.ameli.fr/">la messagerie en ligne de votre compte ameli</a>. Si vous avez perdu votre mot de passe, <a href="https://www.ameli.fr/assure/adresses-et-contacts/votre-compte-ameli/vous-avez-oublie-votre-code-secret">vous pouvez en demander un nouveau sur cette page</a>. En cas de difficulté d’accès ou pour plus d’information sur « Mon compte sur ameli.fr » contactez par téléphone votre caisse d’Assurance Maladie au 3646 (service 0,06 Euro/min + prix appel).</p>
          </AccordionItem>
          <AccordionItem title="Déclarer mon médecin traitant">
            <p>La procédure est détaillée sur <a href="https://www.ameli.fr/assure/adresses-et-contacts/un-changement-de-situation/declarer-un-nouveau-medecin-traitant">cette page du site de l’Assurance Maladie</a>.</p>
          </AccordionItem>
          <AccordionItem title="Faire une demande sur ma santé, ma sécurité sociale (carte vitale, arrêts maladie, etc.)">
            <p>Vous pouvez vous rendre sur <a href="https://assure.ameli.fr/">la messagerie en ligne de votre compte ameli</a> ou appeler le 36 46.</p>
          </AccordionItem>
        </Accordion>
      </Container>
      <Container spacing="p-2w">

        <h2>Continuer vers les simulateurs</h2>

        <p>Les simulateurs proposés ne sont pas affiliés à l’Assurance Maladie en ligne : nous n’avons pas accès à vos dossiers. Aucun des renseignements que vous entrez sur notre site n’est ensuite transmis à l’Assurance Maladie. Notre but est de faire le point avec vous sur les prestations sociales et aides que vous pouvez demander.</p>

        <CTA source="ameli" />
      </Container>
    </Layout>
  )
}
