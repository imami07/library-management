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

### Clonez ce dépôt

bashCopygit clone https://github.com/VOTRE-NOM-UTILISATEUR/library-management.git
cd library-management

### Installez les dépendances
npm install

### Créez un fichier .env à la racine du projet avec le contenu suivant

PORT=3000
MONGODB_URI=votre_uri_mongodb

### Démarrez l'application

npm run dev

### Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000

## Structure du projet
Copybibliotheque/
  ├── models/           # Modèles de données Mongoose
  ├── public/           # Fichiers statiques (CSS, JS, images)
  │   └── css/
  ├── routes/           # Définition des routes Express
  ├── views/            # Templates EJS
  │   ├── partials/     # Éléments réutilisables (header, footer)
  │   └── books/        # Templates pour les opérations sur les livres
  ├── .env              # Variables d'environnement (non inclus dans le dépôt)
  ├── .gitignore        # Fichiers à ignorer par Git
  ├── app.js            # Point d'entrée de l'application
  └── package.json      # Dépendances et scripts

## Validation des données

Les champs obligatoires sont vérifiés côté serveur
Des messages d'erreur sont affichés en cas d'erreur de validation

## Organisation du code
Le projet suit une structure modulaire avec séparation claire des responsabilités :

Routes : gestion des requêtes HTTP
Modèles : définition du schéma des données
Vues : présentation des données à l'utilisateur

## Licence
Ce projet a été créé dans le cadre d'un exercice académique.
