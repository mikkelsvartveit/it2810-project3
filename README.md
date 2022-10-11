# IT2810 Project 3

## Running instructions

To run the app locally, you need to install:

- [Node version 16](https://nodejs.org/en/download/)
- [MongoDB Server](https://www.mongodb.com/try/download/community)

#### Start MongoDB Server

Open a terminal and run:

```
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
