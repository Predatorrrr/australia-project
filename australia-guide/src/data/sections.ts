export type SectionId =
  | 'accueil'
  | 'visa'
  | 'logement'
  | 'travail'
  | 'budget'
  | 'demarches'
  | 'sante'
  | 'transport'
  | 'vie-pratique'

export interface ContentCard {
  id: string
  title: string
  description: string
  image: string
  meta?: string
  tag?: string
}

export interface SectionDef {
  id: SectionId
  label: string
  navShort: string
  title: string
  intro: string
  background: string
  accent: string
  continueLabel: string
  nextId?: SectionId
  cards: ContentCard[]
  subsections?: { title: string; text: string }[]
}

/** High-quality Australian Unsplash photography — curated for immersion */
export const BACKGROUNDS = {
  sydney:
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2400&q=80',
  harbour:
    'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&w=2400&q=80',
  beach:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80',
  uluru:
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=2400&q=80',
  rainforest:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80',
  desert:
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80',
  melbourne:
    'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=2400&q=80',
  reef:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2400&q=80',
  road:
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80',
  mountains:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80',
  cityNight:
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2400&q=80',
  vineyard:
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2400&q=80',
  cowork:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  apartment:
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
  passport:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80',
  hospital:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
  train:
    'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
  cafe:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
  work:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
  money:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
  docs:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
  van:
    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1600&q=80',
  house:
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
  sharehouse:
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
  hostel:
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=80',
  whv:
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
  student:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
  tourist:
    'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1600&q=80',
  skilled:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
}

/**
 * Working set of nine intercalaires — structure supports easy rename/add.
 * Confirm final list with Ethan before locking labels.
 */
export const SECTIONS: SectionDef[] = [
  {
    id: 'accueil',
    label: 'Accueil',
    navShort: 'Accueil',
    title: 'Votre aventure australienne commence ici',
    intro:
      'Un compagnon immersif pour préparer visa, logement, travail et quotidien — avec clarté et élégance.',
    background: BACKGROUNDS.sydney,
    accent: 'var(--eucalyptus)',
    continueLabel: 'Commencer mon aventure',
    nextId: 'visa',
    cards: [
      {
        id: 'a1',
        title: 'Visa & entrée',
        description: 'Choisissez le bon statut et préparez votre dossier.',
        image: BACKGROUNDS.whv,
        tag: 'Essentiel',
      },
      {
        id: 'a2',
        title: 'Logement',
        description: 'Sharehouse, Airbnb ou long terme — trouvez votre base.',
        image: BACKGROUNDS.sharehouse,
        tag: 'Priorité',
      },
      {
        id: 'a3',
        title: 'Premier budget',
        description: 'Estimez vos coûts d’installation et de vie.',
        image: BACKGROUNDS.money,
        tag: 'Clé',
      },
    ],
    subsections: [
      {
        title: 'Une feuille de route claire',
        text: 'Neuf chapitres pour avancer pas à pas, du premier visa au quotidien australien.',
      },
    ],
  },
  {
    id: 'visa',
    label: 'Visa',
    navShort: 'Visa',
    title: 'Choisissez votre porte d’entrée',
    intro:
      'Quatre statuts pour arriver sereinement — comparez, choisissez, puis construisez un dossier clair.',
    background: BACKGROUNDS.harbour,
    accent: 'var(--petroleum)',
    continueLabel: 'Continuer vers le logement',
    nextId: 'logement',
    cards: [
      {
        id: 'v1',
        title: 'Working Holiday (417 / 462)',
        description:
          'Jusqu’à 12 mois, travail autorisé — la voie la plus libre pour découvrir l’Australie en gagnant sa vie.',
        image: BACKGROUNDS.whv,
        meta: '18–35 ans · 1 an · travail libre',
        tag: 'Populaire',
      },
      {
        id: 'v2',
        title: 'Visa étudiant (500)',
        description:
          'Études à temps plein et travail partiel — idéal pour une immersion longue avec un cadre clair.',
        image: BACKGROUNDS.student,
        meta: 'Formation · travail partiel',
        tag: 'Études',
      },
      {
        id: 'v3',
        title: 'ETA / Touriste',
        description:
          'Séjour court pour explorer le pays avant de vous engager sur un projet plus ambitieux.',
        image: BACKGROUNDS.tourist,
        meta: 'Courte durée · découverte',
        tag: 'Découverte',
      },
      {
        id: 'v4',
        title: 'Skilled & sponsor',
        description:
          'Métiers en tension, nomination employeur ou points — pour s’installer durablement.',
        image: BACKGROUNDS.skilled,
        meta: 'Professionnel · long terme',
        tag: 'Carrière',
      },
    ],
    subsections: [
      {
        title: 'Pièces essentielles',
        text: 'Passeport, justificatifs financiers, casier judiciaire, assurance et formulaire ImmiAccount.',
      },
      {
        title: 'Délais typiques',
        text: 'De quelques jours (ETA) à plusieurs semaines selon le type de visa et la saison.',
      },
    ],
  },
  {
    id: 'logement',
    label: 'Logement',
    navShort: 'Logement',
    title: 'Trouvez votre base australienne',
    intro:
      'Hostel, sharehouse ou appartement — sécurisez un toit dès l’arrivée, puis peaufinez pour le long terme.',
    background: BACKGROUNDS.beach,
    accent: 'var(--sand)',
    continueLabel: 'Continuer vers le travail',
    nextId: 'travail',
    cards: [
      {
        id: 'l1',
        title: 'Sharehouse',
        description: 'Colocation locale — le meilleur rapport qualité/prix pour s’intégrer.',
        image: BACKGROUNDS.sharehouse,
        meta: '150–280 AUD / sem.',
        tag: 'Recommandé',
      },
      {
        id: 'l2',
        title: 'Appartement',
        description: 'Studio ou 1 bedroom — plus d’indépendance une fois le budget stable.',
        image: BACKGROUNDS.apartment,
        meta: '400–700+ AUD / sem.',
        tag: 'Long terme',
      },
      {
        id: 'l3',
        title: 'Hostel & court séjour',
        description: 'Arrivée souple les premiers jours, idéal pour prospecter les quartiers.',
        image: BACKGROUNDS.hostel,
        meta: '30–60 AUD / nuit',
        tag: 'Arrivée',
      },
      {
        id: 'l4',
        title: 'Maison & family stay',
        description: 'Plus d’espace, parfois avec jardin — courant hors CBD.',
        image: BACKGROUNDS.house,
        meta: 'Selon ville',
        tag: 'Famille',
      },
    ],
    subsections: [
      {
        title: 'Plateformes utiles',
        text: 'Flatmates, Gumtree, Facebook groups, Domain et Realestate.com.au.',
      },
    ],
  },
  {
    id: 'travail',
    label: 'Travail',
    navShort: 'Travail',
    title: 'Travaillez en Australie',
    intro:
      'TFN, CV australien, réseaux et secteurs qui recrutent — construisez votre activité dès le départ.',
    background: BACKGROUNDS.cityNight,
    accent: 'var(--eucalyptus)',
    continueLabel: 'Continuer vers le budget',
    nextId: 'budget',
    cards: [
      {
        id: 't1',
        title: 'Hospitality & retail',
        description: 'Cafés, bars, restaurants — portes d’entrée rapides dans les grandes villes.',
        image: BACKGROUNDS.cafe,
        tag: 'Rapide',
      },
      {
        id: 't2',
        title: 'Farm & regional',
        description: 'Travail agricole pour prolonger le WHV et découvrir l’intérieur.',
        image: BACKGROUNDS.vineyard,
        tag: 'WHV +',
      },
      {
        id: 't3',
        title: 'Bureau & tech',
        description: 'Coworking, contrats courts et networking dans les hubs urbains.',
        image: BACKGROUNDS.cowork,
        tag: 'Skilled',
      },
      {
        id: 't4',
        title: 'CV & entretien',
        description: 'Format local, références et soft skills — ce que les recruteurs attendent.',
        image: BACKGROUNDS.work,
        tag: 'Méthode',
      },
    ],
    subsections: [
      {
        title: 'À faire en premier',
        text: 'Demandez votre TFN, ouvrez un compte bancaire et préparez un CV d’une page.',
      },
    ],
  },
  {
    id: 'budget',
    label: 'Budget',
    navShort: 'Budget',
    title: 'Maîtrisez votre budget',
    intro:
      'Installation, loyer, transport et imprévus — visualisez vos coûts pour voyager sereinement.',
    background: BACKGROUNDS.uluru,
    accent: 'var(--sand)',
    continueLabel: 'Continuer vers les démarches',
    nextId: 'demarches',
    cards: [
      {
        id: 'b1',
        title: 'Coût d’installation',
        description: 'Bond, première semaine, SIM, transports — prévoyez un coussin solide.',
        image: BACKGROUNDS.money,
        meta: '~3 000–5 000 AUD',
        tag: 'Arrivée',
      },
      {
        id: 'b2',
        title: 'Vie mensuelle',
        description: 'Loyer, courses, sorties — selon Sydney, Melbourne ou régional.',
        image: BACKGROUNDS.cafe,
        meta: '2 000–3 500 AUD',
        tag: 'Mensuel',
      },
      {
        id: 'b3',
        title: 'Compte & devises',
        description: 'Banque locale, Wise / Revolut et transfert d’argent sans friction.',
        image: BACKGROUNDS.docs,
        tag: 'Banque',
      },
    ],
    subsections: [
      {
        title: 'Conseil',
        text: 'Gardez 1 à 2 mois de réserve avant de compter sur un premier salaire.',
      },
    ],
  },
  {
    id: 'demarches',
    label: 'Démarches',
    navShort: 'Démarches',
    title: 'Les démarches essentielles',
    intro:
      'ImmiAccount, TFN, Medicare/OVHC, banque et téléphone — la checklist pour être opérationnel.',
    background: BACKGROUNDS.melbourne,
    accent: 'var(--petroleum)',
    continueLabel: 'Continuer vers la santé',
    nextId: 'sante',
    cards: [
      {
        id: 'd1',
        title: 'ImmiAccount',
        description: 'Compte officiel pour visas, documents et suivi de dossier.',
        image: BACKGROUNDS.passport,
        tag: 'Officiel',
      },
      {
        id: 'd2',
        title: 'TFN & impôts',
        description: 'Tax File Number indispensable pour travailler légalement.',
        image: BACKGROUNDS.docs,
        tag: 'Fiscal',
      },
      {
        id: 'd3',
        title: 'Banque & SIM',
        description: 'Ouvrez un compte et activez une ligne locale dès l’arrivée.',
        image: BACKGROUNDS.money,
        tag: 'Pratique',
      },
    ],
    subsections: [
      {
        title: 'Ordre recommandé',
        text: 'Visa → arrivée → SIM → banque → TFN → logement durable → travail.',
      },
    ],
  },
  {
    id: 'sante',
    label: 'Santé',
    navShort: 'Santé',
    title: 'Santé & assurance',
    intro:
      'OVHC, Medicare selon le statut, urgences et pharmacies — protégez-vous dès le premier jour.',
    background: BACKGROUNDS.rainforest,
    accent: 'var(--eucalyptus)',
    continueLabel: 'Continuer vers le transport',
    nextId: 'transport',
    cards: [
      {
        id: 's1',
        title: 'Assurance OVHC',
        description: 'Obligatoire pour de nombreux visas étudiants et certains statuts.',
        image: BACKGROUNDS.hospital,
        tag: 'Requis',
      },
      {
        id: 's2',
        title: 'Médecins & urgences',
        description: 'GP, bulk billing et numéro d’urgence 000 — les réflexes à connaître.',
        image: BACKGROUNDS.hospital,
        tag: 'Urgence',
      },
      {
        id: 's3',
        title: 'Pharmacie & bien-être',
        description: 'Chemists, téléconsultation et prévention soleil / chaleur.',
        image: BACKGROUNDS.reef,
        tag: 'Quotidien',
      },
    ],
    subsections: [
      {
        title: 'À emporter',
        text: 'Ordonnances traduites, carnet de vaccination et contacts d’assurance.',
      },
    ],
  },
  {
    id: 'transport',
    label: 'Transport',
    navShort: 'Transport',
    title: 'Se déplacer autrement',
    intro:
      'Opal, Myki, trains régionaux, van life ou location — choisissez selon votre rythme.',
    background: BACKGROUNDS.road,
    accent: 'var(--sand)',
    continueLabel: 'Continuer vers la vie pratique',
    nextId: 'vie-pratique',
    cards: [
      {
        id: 'tr1',
        title: 'Transports urbains',
        description: 'Cartes Opal / Myki, ferry et bus — le réseau des métropoles.',
        image: BACKGROUNDS.train,
        tag: 'Ville',
      },
      {
        id: 'tr2',
        title: 'Van & road trip',
        description: 'Liberté sur la côte Est ou Outback — budget fuel et camping inclus.',
        image: BACKGROUNDS.van,
        tag: 'Aventure',
      },
      {
        id: 'tr3',
        title: 'Vols domestiques',
        description: 'Jetstar, Virgin, Qantas — pour relier les États rapidement.',
        image: BACKGROUNDS.passport,
        tag: 'Longue distance',
      },
    ],
    subsections: [
      {
        title: 'Permis',
        text: 'Permis international ou conversion selon la durée de séjour et l’État.',
      },
    ],
  },
  {
    id: 'vie-pratique',
    label: 'Vie pratique',
    navShort: 'Vie pratique',
    title: 'Le quotidien australien',
    intro:
      'Culture, météo, réseaux, courses et rituels locaux — pour vous sentir chez vous plus vite.',
    background: BACKGROUNDS.mountains,
    accent: 'var(--eucalyptus)',
    continueLabel: 'Revenir à l’accueil',
    nextId: 'accueil',
    cards: [
      {
        id: 'vp1',
        title: 'Culture & codes',
        description: 'Tutoiement, tip culture, humour et rythme de vie — les bases sociales.',
        image: BACKGROUNDS.cafe,
        tag: 'Intégration',
      },
      {
        id: 'vp2',
        title: 'Météo & saisons',
        description: 'Hémisphère sud inversé, UV intenses et cyclones en tropiques.',
        image: BACKGROUNDS.beach,
        tag: 'Climat',
      },
      {
        id: 'vp3',
        title: 'Réseaux & community',
        description: 'Meetup, Facebook groups expats et clubs sportifs pour tisser du lien.',
        image: BACKGROUNDS.work,
        tag: 'Social',
      },
    ],
    subsections: [
      {
        title: 'Prochaine étape',
        text: 'Revenez sur les chapitres clés et validez votre checklist personnelle.',
      },
    ],
  },
]

export function getSection(id: SectionId): SectionDef {
  return SECTIONS.find((s) => s.id === id) ?? SECTIONS[0]
}

export function sectionIndex(id: SectionId): number {
  return SECTIONS.findIndex((s) => s.id === id)
}
