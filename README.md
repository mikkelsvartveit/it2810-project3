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

The application is a search engine for Rick and Morty characters. Our inspiration for this project was the [Rick and Morty API](https://rickandmortyapi.com/). Since the dataset was so large and we thought also kinda funny we chose to use it.

The website consists of two tabs, Characters and Episodes.

#### Characters

The user can infinitely scroll characters from database. The user can also search for characters by name. The search is case insensitive and will return all characters that contain the search string. The user can also filter characters by status, species and gender. The user can also sort the characters by name and rating in a desired order.

The user can also click on a character to view a modal with more information about the character. The following data is displayed:

- Name
- Status (Alive, Dead or Unknown)
- Species (and type if it has one)
- Gender
- Origin
- Location (last seen)
- All episodes the character has been in
- Rating (out of 5 stars)

Here the user can also rate the character. The rating is saved in the database and will be displayed on the character card.

#### Episodes

The episode tab is very similar to the character tab. The user can search for episodes by name and filter by season. The user can also sort the episodes by name and rating in a desired order. The user can also click on an episode to view a modal with more information about the episode. The following data is displayed:

- Name
- Season
- Episode number
- Air date
- Characters in the episode
- Rating (out of 5 stars)

### Technology

The application consists of a frontend and a backend. The frontend is a React application that uses the backend to fetch data from the database. The backend is an Express application that uses the [Mongoose](https://mongoosejs.com/) library to communicate with the database. The database is a MongoDB database.d

We decided to use mongo-db and Apollo for our backend. We chose mongo-db because it is a document based database, which is a good fit for our application. We chose Apollo because it is a GraphQL server, and seemed relatively easy to learn. We also chose to use Apollo because it is a good fit for our frontend, which is built with React and Apollo Client.

For state management we use Apollo Clients reactive variables. We chose to use reactive variables because they are easy to use and we did not need to use a more complex state management solution. We use the reactive variables to store the current filtering or sorting options.

### Testing

### Web accessibility

Minimalistic design. High contrast...
ARIA-labels etc.

### Suistainable development

Since there was only 4 weeks for this relatively big project we chose to use the Material UI library instead of styling the UI ourselves. This leads to a greater bundle size and more data transfer. In terms of suistainability we want to minimize data and loading since it costs energy to power the servers that run the webpages.

Apollo caches requests for us automatically and this is very important to minimize data traffic. We have also dont fetch all the props when we display characters. But when a character is previewed then we send a new request that gets all the data.

We have also implemented pagination. In our dataset there are 826 characters and the user can view all of these by scrolling. But we dont want to load all of them since that is a lot of data and most users wont scroll that far. Therefore we only show a _page_ of 20 characters and when the users scrolls to the bottom we detect it and send a new request. This way we only load 20 characters at a time and the user can scroll through all of them.

Fonts also take a lot of data to load. We have therefore chosen to use the Google Fonts API to load the fonts. This way we can utilize that many other websites are using the same fonts and they can be cached in the browser.

### GitLab CI/CD

To improve the workflow regarding Git and merge requests, we have disabled pushing to main and implemented a CI/CD pipeline in GitLab that does the following:

1. Checks formatting rules by running Prettier on all files in the project.

2. Checks for code quality issues by running ESLint.

3. Runs all automated tests (component tests and snapshot tests).

4. Tries to build a production version of the React app.

5. Deploys the application to the virtual machine provided by the course staff (only on `main` branch).

If any of these checks fail, GitLab will refuse to merge the merge request. This enforces a certain level of code quality throughout the project, and helps catching bugs and other issues before they are merged to the production branch.
