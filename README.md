# Nautilux Frontend Test

Le but de ce test est d'évaluer tes capacités à implémenter les solutions qui permettront à ton interface de communiquer avec une API, de gérer les données et de respecter l'intégration d'un design donné. Nous attendons de ta part que tu sois également capable de maîtriser les outils que nous utilisons dans nos projets.

## Stack technique

Ce projet est basé sur React.

La gestion des données se fait grâce à **Redux**.

Les échanges avec l'API se font avec **axios** et **redux-saga**.

Le routage se base sur **react-navigation**.

## Ta mission

Tu devras dans ce test :

1. Récupérer et afficher sous forme de tableau une liste d'interventions.
2. Faire en sorte que les interventions puissent être triées selon leur date de création.
3. Créer une page dédiée pour les interventions, accessible en cliquant sur une ligne du tableau.
4. Créer un formulaire pour créer une nouvelle intervention.
5. Respecter le design selon les maquettes fournies.

## Détails

### 1. Récupérer et afficher sous forme de tableau une liste d'interventions.

La liste des interventions doit être récupérée via la ressource `/interventions` de l'API REST.
Tu devras la stocker dans le store et l'afficher sous forme de tableau en respectant la maquette associée.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e2338c620cb0cd7427169)

### 2. Faire en sorte que les interventions puissent être triées selon leur date de création.

En cliquant sur l'entête de la colonne **Date**, le tri des interventions doit changer selon leur date de création (`created_at`).

### 3. Créer une page dédiée pour les interventions, accessible en cliquant sur une ligne du tableau.

Chaque ligne du tableau est cliquable et renvoie sur la page `/intervention/:id` qui affiche toutes les informations de l'intervention.

Le bouton **Retour** renvoit vers la liste des interventions.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e548572321db4628af05f)

### 4. Créer un formulaire pour créer une nouvelle intervention.

En cliquant sur le bouton **Créer une intervention**, l'utilisateur doit être redirigé sur la page `/create` qui présente un formulaire de création.
Tu devras créer cette page et gérer le routage.
Le formulaire permet de renseigner les champs :

- `name` : nom
- `description` : description de l'intervention
- `sender_name` : nom du demandeur
- `sender_email` : email du demandeur
- `sender_phone` : téléphone du demandeur

Le champ `created_at` et rempli à la soumission du formulaire et respecte le format `YYYY-MM-DD HH:ss:mm`.

À la soumission du formulaire, on est redirigé vers `/` et l'intervention est ajoutée à la fin de la liste.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e233747c8ddb83c816a00)

**Pas de requête vers l'API pour ce point.**

### 5. Respecter le design selon les maquettes fournies.

Pour chaque page tu devras intégrer le style de la maquette correspondante. Tu peux styliser comme tu le souhaire (inline CSS, styled-components, fichier CSS importé). Pas de pixel perfect non plus, nous voulons juste ici que le rendu soit similaire au design associé.

## Installation

Clône ce dépôt et installe les dépendances :

```
npm install
```

Lance le serveur web :

```
npm start
```

Lance dans un autre terminal le serveur de l'API _(depuis la racine)_ :

```
node server/server.js
```

_Note : le port par défaut de l'API est 3001._

## Rendu

Tu peux nous rendre ton test terminé sous la forme d'un zip (**sans `node_modules`**) ou d'un dépôt git en ligne.

N'hésites pas à nous contacter si tu as la moindre question !
