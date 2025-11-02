# Instructions pour le candidat

> Ce fichier résume les instructions essentielles du test

## 🎯 Objectif

Vous êtes candidat(e) à un poste de **Lead Développeur Vue.js**.

L'objectif n'est **pas la perfection visuelle**, mais votre capacité à :
- Concevoir un composant réutilisable
- Le documenter pour l'équipe
- Le sécuriser avec des tests pertinents
- Expliquer et embarquer l'équipe

## ⏱️ Durée estimée

**~2 heures** réparties en 3 parties :
- **Partie 1** : Architecture (30 min)
- **Partie 2** : Implémentation (50-60 min)
- **Partie 3** : Débrief (10-20 min)

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Vérifier que tout fonctionne
npm run test        # Tests Vitest
npm run storybook   # Storybook (port 6006)
npm run lint:check  # Vérifier le code avec ESLint

# 3. Lire le README.md complet pour les détails
```

## 📋 Ce que vous devez créer

### Partie 1 : Architecture
- **Fichier** : `ARCHITECTURE.md` (à la racine)
- **Contenu** :
  - Schéma de l'architecture
  - Liste des composants (nom + rôle)
  - Communication entre composants
  - Générique vs Spécifique Patients
  - Tests unitaires prioritaires
  - Plan Storybook

> 💡 Un template est fourni dans `ARCHITECTURE.md.template`

### Partie 2 : Implémentation
- **Composant** : `src/components/FiltersPanel.vue`
  - Gère les filtres : status, ageMin, ageMax, lastVisitFrom, lastVisitTo
  - Utilise `v-model:filters` avec `defineModel`
  - Style avec variables CSS (`:root`)
  - Accessibilité minimale
  - Bouton "Appliquer" + Bonus "Réinitialiser"

- **Test** : `src/components/FiltersPanel.test.ts`
  - Test la synchro bidirectionnelle `v-model:filters`

- **Story** : `src/components/FiltersPanel.stories.ts`
  - En français
  - Avec controls sur `filters`
  - Documentée pour l'équipe

> 💡 Des exemples sont fournis dans `src/components/*.example.*`

## 📚 Ressources fournies

- ✅ Configuration Vue 3.4 + Vite
- ✅ Configuration Storybook (français)
- ✅ Configuration Vitest
- ✅ Configuration ESLint (Vue 3 + TypeScript)
- ✅ Variables LESS dans `src/styles/variables.less`
- ✅ Types TypeScript dans `src/types/patients.ts`
- ✅ Setup de test

## ❓ Questions

Si vous avez des questions pendant le test, n'hésitez pas à les poser. Nous valorisons la communication et la clarification des besoins.

**Bonne chance ! 🚀**

