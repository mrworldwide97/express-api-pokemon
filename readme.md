# API Node.js avec Express

Ce projet est une API en utilisant Node.js et Express. Suivez les étapes ci-dessous pour installer et lancer l'API sur votre propre machine.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Node.js](https://nodejs.org/) : Téléchargez et installez Node.js si ce n'est pas déjà fait.

## Installation

1. Clonez ce dépôt sur votre machine en utilisant la commande suivante :

   ```bash
   git clone https://github.com/votre-utilisateur/api-node-express.git
   Accédez au répertoire du projet :
   ```

cd api-node-express
Installez les dépendances à l'aide de npm :

npm install

## Configuration

Créez un fichier .env à la racine du projet et configurez les variables d'environnement nécessaires. Voici un exemple :

## env

PORT=8080

MONGO_URL=mongodb://localhost:27017/pokemon

## Utilisation

Pour démarrer l'API, exécutez la commande suivante :

npm start

L'API sera accessible à l'adresse http://localhost:8080 (ou le port que vous avez configuré dans le fichier .env).
La documentation sera accessible via le navigateur à l'adresse http://localhost:8080/docs
