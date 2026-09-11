# CRM VGL360 — mise en route

Le CRM vit dans le même projet Next.js que le site vitrine, sous `/crm`.
Il s'appuie sur [Supabase](https://supabase.com) (base Postgres + auth).

## 1. Créer le projet Supabase

1. Créez un projet sur [supabase.com](https://supabase.com) (gratuit pour démarrer).
2. Dans **Project Settings → API**, récupérez `Project URL` et `anon public key`.
3. Copiez `.env.local.example` vers `.env.local` et renseignez ces deux valeurs.

## 2. Créer le schéma

Dans **SQL Editor** de Supabase, exécutez dans l'ordre :

1. `supabase/migrations/0001_crm_schema.sql` — tables, RLS, triggers (streak, trophées, statut des leads).
2. `supabase/seed.sql` — sociétés (Quentin / Arthur), étapes de pipeline, paliers d'objectifs, catalogue de trophées.

## 3. Créer les 4 comptes

Dans **Authentication → Users → Add user**, créez un compte (email + mot de passe) pour :

- Quentin
- Arthur
- Telma Martin
- Enzo Mucci

Notez l'UUID de chaque utilisateur créé (colonne `UID`).

Puis dupliquez `supabase/seed_profiles.sql.example` en remplaçant les
`<uuid-...>` par les UUID réels, et exécutez-le dans le SQL Editor. Ce script :

- crée les 4 profils (`profiles`) avec leur rôle (`owner` pour Quentin/Arthur,
  `alternant` pour Telma/Enzo) ;
- donne à Quentin et Arthur l'accès à leur seule société ;
- donne à Telma et Enzo l'accès aux **deux** sociétés, pour basculer entre les
  pipelines via le sélecteur en haut du CRM.

## 4. (Optionnel) Pré-remplir le planning de Telma et Enzo

`supabase/seed_planning.sql.example` contient le planning déjà calculé à
partir des calendriers de formation officiels fournis :

- **Enzo** (BTS NDRC, Écoles Vidal) : alternance lundi/mardi — jours de
  formation extraits du code couleur du calendrier PDF.
- **Telma** (BTS NDRC, Groupe Alternance) : rythme irrégulier (pas
  systématiquement tous les lundis) + une semaine intensive par mois — jours
  de formation extraits et vérifiés à 100% contre les totaux d'heures
  imprimés sur chaque page du calendrier.

Les jours de formation sont donc les **vraies dates** du contrat
d'apprentissage 2026-2028, pas une règle générique. Les jours travaillés en
entreprise alternent Quentin / Arthur un jour sur deux (en opposition de
phase entre Telma et Enzo) pour garantir un partage à parts égales entre les
deux sociétés — modifiable à tout moment depuis l'écran **Planning** (chaque
jour est cliquable).

Les week-ends et jours fériés français ne sont **pas** stockés : ils sont
calculés automatiquement par l'application (`lib/crm/holidays.ts`).

Dupliquez le fichier, remplacez `<uuid-telma>` et `<uuid-enzo>`, puis
exécutez-le dans le SQL Editor.

## 5. Lancer l'app

```bash
npm install
npm run dev
```

Rendez-vous sur `http://localhost:3000/crm/login` et connectez-vous avec l'un
des 4 comptes.

## Ce qui est en place

- **Auth & séparation des sociétés** : chaque owner ne voit que sa société ;
  les alternants basculent Quentin ↔ Arthur avec un pipeline totalement
  cloisonné pour chacune (RLS Postgres, pas juste un filtre côté client).
- **Pipeline** (`/crm/pipeline`) : kanban drag & drop, carte de lead éditable
  (société, valeur, ville, référent, secteur, date de contact, notes),
  filtres (statut, recherche).
- **Tableau de bord** (`/crm/dashboard`) : KPIs, prochain palier d'objectif,
  bouton rapide pour enregistrer un rendez-vous, répartition du travail entre
  les deux sociétés.
- **Objectifs** (`/crm/objectifs`) : paliers 40 rdv/50€, 60 rdv/100€,
  80 rdv/150€, 90 rdv en 3 mois = Monaco.
- **Streak façon Duolingo** : 4 rendez-vous pris dans la journée valident la
  flamme ; la série se maintient tant qu'un jour n'est pas manqué.
- **Planning** (`/crm/planning`) : calendrier mensuel par personne, type de
  journée (travail / week-end / férié / formation) et société assignée,
  modifiable au clic.
- **Trophées** (`/crm/trophees`) : catalogue de badges (premier rdv pris /
  effectué / signé, premiers rdv par secteur, paliers 1/10/15/25/50/100
  rendez-vous, 10 signatures) + classement entre Telma et Enzo.

## À faire avec vous ensuite

- Design définitif (vous avez fourni une première référence visuelle — la
  base actuelle en reprend la mise en page/les couleurs avec l'identité
  VGL360, à affiner ensemble).
- Vérifier/ajuster le planning importé (quelques jours en fin de contrat pour
  Enzo n'ont pas pu être extraits avec certitude du PDF — à corriger
  directement dans l'écran Planning si besoin).
- Ajuster le rythme d'alternance Quentin/Arthur si vous voulez une autre règle
  que "un jour sur deux".
