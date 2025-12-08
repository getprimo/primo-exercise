# Exercice Frontend - Login Flow

## Objectif
Implémenter un flux d'authentification simple en React.
Durée estimée : 25 minutes.

## Identifiants de test
- Email : `test@test.com`
- Mot de passe : `password`

## Attentes techniques

L'architecture et la gestion de l'état sont laissées à votre libre choix (Context API, Redux, Zustand, ou autre).

### 1. Gestion de l'état global
- Mettre en place un système pour gérer l'état de l'utilisateur (`user`) et le statut de connexion (`isAuthenticated`).
- Le token doit être stocké pour persister la connexion au rechargement de la page (ex: localStorage).
- L'application doit réagir aux changements d'état (Login -> Dashboard -> Logout).

### 2. Formulaire de connexion (src/components/LoginForm.tsx)
- Gérer les champs `email` et `password`.
- Ajouter une validation simple (champs requis, format email).
- Appeler l'API mockée `loginApi` (fournie dans `src/api/auth.ts`).
- Gérer les retours d'erreurs (ex: "Identifiants invalides") et l'état de chargement.

## Structure du projet
- `src/api/auth.ts` : Contient la fonction `loginApi` (MOCK) à utiliser.
- `src/components/LoginForm.tsx` : Composant de départ pour le formulaire.
- `src/App.tsx` : Point d'entrée de l'application.

Bonne chance !
