# Exercice Frontend - Login Flow


## Exercise Process
The exercise must be done via screen sharing. You must use the online editor [vscode.dev](https://vscode.dev/) to edit the code.

The script execution is done on the user's terminal.



## Setup

- `yarn install`
- `yarn dev`

go to http://localhost:5173/

## Objectif

Implémenter un flux d'authentification simple en React.
Durée estimée : **25 minutes**.

## Identifiants de test

- Email : `test@test.com`
- Mot de passe : `password`

## Attentes techniques

Des débuts d'implémentation existent, et sont là pour vous aider. Cependant, **sentez-vous à l'aise d'en changer la structure ou le contenu**.
Vous pouvez aussi installer les librairies que vous maîtrisez (zod, yup, joi pour la validation et autre)

### 1. Formulaire de connexion

- Le but est d'implémenter une courte validation du formulaire (`src/pages/Login.tsx`) et d'appeler le mock `loginApi`.
- La librairie installée par défaut est `react-hook-form`.
- La validation peut être faite via `@hookform/resolvers` => librairie à installer

Implémentation souhaitée :

- Gérer les champs `email` et `password`.
- Appeler l'API mockée `loginApi`
- Ajouter une validation simple (champs requis, format email) et affichez les erreurs
- [optionnel] Gérer les erreurs de login
- [optionnel] Gérer le chargement pendant le login

### 2. Gestion de l'état global

Il est recommandé (mais pas obligatoire) d'utiliser le contexte `src/AppContext.tsx`.

- Le but est de gérer l'état d'authentification
- Changez le contexte comme bon vous semble

Implémentation souhaitée :

- Lorsque le login est réussi, alors `src/App.tsx` doit afficher le composant `Welcome`
- Le composant `Welcome` affiche des informations du user connecté
- Depuis la page `Welcome`, on peut se `logout`
- [optionnel] Le token doit être stocké pour persister la connexion au rechargement de la page (la librairie `react-use` propose par exemple le hook `useLocalStorage`)

## Structure du projet

- `src/api/auth.ts` : Contient la fonction `loginApi` (MOCK) à utiliser.
- `src/components/Login.tsx` : Composant de départ pour le formulaire.
- `src/components/Welcome.tsx` : Composant affiché une fois connecté.
- `src/AppContext.tsx` : Contexte global à l'application.
- `src/App.tsx` : Point d'entrée de l'application.

Bonne chance !
