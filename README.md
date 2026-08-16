# Argent Bank

Application bancaire React + Redux consommant une API Express / MongoDB.
Projet 10 — parcours Développeur Web OpenClassrooms.

## Prérequis

- **MongoDB** (Community Server)
- **Node.js 18** pour le back-end — imposé par `mongoose@5`
- **Node.js 20+** pour le front-end — imposé par Vite

Les deux versions de Node cohabitent via [nvm](https://github.com/nvm-sh/nvm).
Un fichier `.nvmrc` est présent dans `ArgentBank-Backend/`.

## Installation

Depuis la racine du dépôt :

```bash
cd ArgentBank-Backend && nvm use && npm install
```

```bash
cd ArgentBank-Frontend && npm install
```

## Lancement

Trois terminaux, dans cet ordre.

### 1. Base de données

```bash
mongod --config /opt/homebrew/etc/mongod.conf
```

> Chemin valable pour une installation Homebrew sur Mac Apple Silicon.
> Sur un autre système, démarrer MongoDB sur le port `27017`.

### 2. API — http://localhost:3001

```bash
cd ArgentBank-Backend && nvm use && npm run dev:server
```

Attendre les deux lignes `Server listening on http://localhost:3001` et
`Database successfully connected`.

**Au premier lancement uniquement**, peupler la base dans un autre terminal :

```bash
cd ArgentBank-Backend && nvm use && npm run populate-db
```

### 3. Front-end — http://localhost:5173

```bash
cd ArgentBank-Frontend && npm run dev
```

> Pas de `nvm use` ici : le front-end utilise Node 20+.

## Comptes de test

| Email | Mot de passe |
| --- | --- |
| `tony@stark.com` | `password123` |
| `steve@rogers.com` | `password456` |

## Documentation de l'API

Swagger : http://localhost:3001/api-docs

Le document `ArgentBank-Backend/swagger.yaml` contient les routes utilisateur
fournies, ainsi que la **proposition de routes pour les transactions**
(phase 2 du projet), non implémentées côté serveur.
