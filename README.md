# Gestion de Bibliothèque

Une application web permettant de gérer une bibliothèque, avec des fonctionnalités CRUD (Create, Read, Update, Delete) pour les livres.

## Fonctionnalités

### 1. Afficher la liste des livres
- Affichage du titre, de l'auteur et de l'année de publication
- Bouton pour voir les détails d'un livre
- Bouton pour supprimer un livre

### 2. Créer un livre
- Formulaire avec validation pour ajouter un nouveau livre
- Champs obligatoires : titre (min. 3 caractères), auteur (min. 3 caractères), année de publication (≤ année actuelle)
- Champ facultatif : résumé (max. 500 caractères)

### 3. Modifier un livre
- Formulaire pré-rempli pour modifier les informations d'un livre existant

### 4. Afficher les détails d'un livre
- Page dédiée affichant toutes les informations du livre

### 5. Supprimer un livre
- Suppression d'un livre directement depuis la liste

## Technologies utilisées

- **Backend** :
  - Express.js : framework web pour Node.js
  - Mongoose : ODM pour interagir avec MongoDB
  - dotenv : gestion des variables d'environnement

- **Frontend** :
  - EJS : moteur de template côté serveur
  - CSS personnalisé pour l'interface utilisateur

## Configuration et installation

1. Clonez ce dépôt
```bash
git clone https://github.com/VOTRE-NOM-UTILISATEUR/library-management.git
cd library-management
