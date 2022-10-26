# IT2810 Project 3

## Running instructions

To run the app locally, you need to install:

- [Node version 16](https://nodejs.org/en/download/)
- [MongoDB Server](https://www.mongodb.com/try/download/community)

#### Start MongoDB Server

Open a terminal and run:

```
mkdir ~/mongodb
mongod --dbpath ~/mongodb
```

#### Clone repository and run application

Open another terminal, clone the repository and navigate to the backend directory:

```
git clone https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-18/prosjekt3.git
cd prosjekt3/backend
```

Install dependencies and set up the database:

```
npm run setup
```

Run the Express backend and the React app simultaniously:

```
npm start
```

Note: you can re-run `npm run setup` at any time to reset the database back to the defaults.

## Documentation

### Contents and functionality

### Technology

### Testing

### Web accessibility

Minimalistic design. High contrast...
ARIA-labels etc.

### Suistainable development

Since there was only 4 weeks for this relatively big project we chose to use the Material UI library instead of styling the UI ourselves. This leads to a greater bundle size and more data transfer. In terms of suistainability we want to minimize data and loading since it costs energy to power the servers that run the webpages.
