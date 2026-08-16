# Argent Bank

Application bancaire React + Redux consommant une API Express/MongoDB.
Projet 10 — parcours Développeur Web OpenClassrooms.

## Prérequis

- **MongoDB** (Community Server)
- **Node.js 18** pour le back-end — imposé par `mongoose@5`
- **Node.js 20+** pour le front-end — imposé par Vite

## Installation

```bash
Backend
mongod --config /opt/homebrew/etc/mongod.conf

cd ArgentBank-Backend && nvm use 18 && npm run dev:server

FrontEnd
npm run dev

## Documentation API

Swagger : http://localhost:3001/api-docs