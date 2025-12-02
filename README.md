# Test Technique - Tableau Patients v0

> 🧠 **NB :** L’IA est une alliée précieuse dans notre quotidien, mais il est essentiel de l’utiliser à bon escient. Merci de ne pas en abuser pour la réalisation de ce test.

## Contexte

Vous êtes candidat(e) à un poste de **Développeur Vue.js** dans une équipe qui travaille sur une application de gestion médicale.

L'objectif de ce test n'est **pas la perfection visuelle**, mais votre capacité à :
- **Concevoir** un composant réutilisable et maintenable
- **Documenter** pour que l'équipe puisse l'utiliser sans vous
- **Sécuriser** le code avec des tests pertinents
- **Expliquer** et **embarquer** l'équipe

## Contexte technique

L'équipe utilise :
- **Vue 3.4** avec Composition API et `defineModel`
- **Vite** comme build tool
- Un **monolithe PHP** qui monte des composants Vue isolés
- **LESS** avec export en variables CSS dans `:root`
- **Storybook** (en français) maintenu par l'équipe
- **Tests Vitest** pour la non-régression
- **ESLint** pour la qualité du code

Le projet est configuré et prêt. Lancez `npm install` puis les commandes disponibles dans `package.json`.

---

## Besoin fonctionnel

On veut afficher un **tableau de patients filtrable et paginé côté serveur**.

On veut **éviter de réécrire ce genre de tableau** dans chaque module (patients, rendez-vous, prescriptions…).

On veut aussi **documenter ce composant dans Storybook** pour l'équipe.

---

## Structure du test

Le test est organisé en **2 parties**, pour une durée totale estimée de **~2 heures** :

1. **Partie 1** : Analyse du besoin et proposition d'architecture (30 min)
2. **Partie 2** : Implémentation ciblée d'un sous-ensemble (1h30 min)

---

## Partie 1 : Proposition d'architecture (30 min)

### Objectif

Mesurer votre capacité d'analyse, de découpage, d'anticipation des évolutions et de pédagogie.

### Consignes

Décrivez l'architecture que vous proposeriez pour répondre au besoin. Vous devez couvrir :

1. **Les composants Vue que vous créeriez** (nom + rôle)
2. **Comment ils communiquent entre eux** (props, emits, provide/inject…)
3. **Ce qui est générique réutilisable**, et ce qui est spécifique "Patients"
4. **Les tests unitaires critiques à écrire en premier** (juste les noms, pas d'implémentation)
5. **Le plan Storybook** (quelles stories, pourquoi)

### Format attendu

- **1 schéma ou pseudo-schéma texte** (pas besoin de Figma) OU **un UML (drawIO, ou autre), diagramme de communication, diagramme de composants** 
- **10-15 lignes d'explication structurée**
- **Liste courte des tests unitaires prioritaires** (juste les noms)
- **Plan Storybook** (quelles stories, pourquoi)

### Ce qui est évalué

- Votre capacité à raisonner en composant réutilisable (design system fonctionnel, pas juste UI)
- Votre pédagogie écrite : savez-vous expliquer clairement à l'équipe ?
- Votre anticipation des besoins futurs (réutilisabilité)

**Livrable** : Un fichier `ARCHITECTURE.md` à la racine du projet.

---

## Partie 2 : Implémentation ciblée (1h 30min)

### Objectif

Mesurer votre capacité à livrer du code propre, découpé, typé, testable, sans magie.

On ne vous fait pas tout coder. On vous demande d'implémenter **une seule pièce critique** de l'architecture que vous avez décrite : le **panneau de filtres avancés**.

### Consignes

Implémentez un composant `FiltersPanel.vue` (Composition API, Vue 3.4) qui gère les filtres suivants :

- **status** : select (actif / inactif / suivi)
- **ageMin / ageMax** : nombres
- **lastVisitFrom / lastVisitTo** : dates

### Contraintes techniques

1. Le composant expose son état via `v-model:filters` en utilisant `defineModel`
2. Type attendu :
   ```typescript
   interface PatientsFilters {
     status?: 'actif' | 'inactif' | 'suivi'
     ageMin?: number
     ageMax?: number
     lastVisitFrom?: string // ISO
     lastVisitTo?: string   // ISO
   }
   ```
3. Le composant doit être **autonome visuellement** (pas de lib UI), stylé via variables CSS exposées dans `:root` et définies en LESS
4. **Accessibilité minimale** : labels associés, navigation clavier, `aria-labelledby` sur le panneau
5. Un bouton **"Appliquer"** émet un événement `apply` (ou ferme le panneau)
6. **Bonus** : un bouton **"Réinitialiser"** remet les filtres à `{}`

### Livrables

1. **Le composant Vue** : `src/components/FiltersPanel.vue`
2. **Un test Vitest unitaire** : `src/components/FiltersPanel.test.ts`
   - Test sur la synchro `v-model:filters` (quand je saisis, le parent reçoit ; quand le parent change la prop, le panneau se met à jour)
3. **Une story Storybook** : `src/components/FiltersPanel.stories.ts`
   - En français
   - Avec des controls sur `filters`
   - Documentée pour l'équipe
---

## Structure du projet

```
vue-test/
├── src/
│   ├── components/
│   │   ├── FiltersPanel.vue              # À créer (Partie 2)
│   │   ├── FiltersPanel.test.ts           # À créer (Partie 2)
│   │   └── FiltersPanel.stories.ts        # À créer (Partie 2)
│   ├── types/
│   │   └── patients.ts                   # Types déjà créés
│   ├── styles/
│   │   └── variables.less                # Variables CSS déjà définies
│   └── test/
│       └── setup.ts                       # Setup Vitest
├── .storybook/                            # Configuration Storybook
├── ARCHITECTURE.md                        # À créer (Partie 1)
└── README.md                              # Ce fichier
```

---

## Commandes utiles

```bash
# Installation des dépendances
npm install

# Lancer les tests
npm run test

# Lancer Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Vérifier le code avec ESLint
npm run lint:check

# Corriger automatiquement les problèmes ESLint
npm run lint

# Dev server (si vous voulez tester le composant en isolation)
npm run dev
```

---

## Ce qui est fourni

- ✅ Configuration Vite + Vue 3.4
- ✅ Configuration Storybook (français)
- ✅ Configuration Vitest
- ✅ Configuration ESLint (Vue 3 + TypeScript)
- ✅ Variables LESS dans `:root`
- ✅ Types TypeScript de base (`PatientsFilters`)
- ✅ Setup de test Vitest

## Ce que vous devez créer

- 📝 **Partie 1** : `ARCHITECTURE.md`
- 💻 **Partie 2** : `FiltersPanel.vue`, `FiltersPanel.test.ts`, `FiltersPanel.stories.ts`

---

## Ne pushez le code sur GitHub mais envoyez-le compressé à annabelle.bouin@teranga-software.com ##

## Questions ?

Si vous avez des questions pendant le test, n'hésitez pas à les poser. Nous valorisons la communication et la clarification des besoins.

**À vos claviers ! ⌨️**
