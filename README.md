# IT2810 Project 3

This web application was created during the course IT2810 Web Development at NTNU. The application is a search engine for Rick and Morty characters and episodes, and allows filtering and sorting using a number of different parameters.

![Screenshot of app](https://user-images.githubusercontent.com/30391413/198878503-092961db-eb9f-4fe6-a7bc-8d9ca71a5bee.png)

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

## Content and functionality

The website consists of two main parts; the Characters tab and the Episodes tab.

#### Characters

On page load, the user is presented with a list of Rick and Morty characters. The user can search for characters by name. The search is case insensitive and will return all characters that contain the provided search string. The user can also filter characters by status, species and gender. The results can be sorted by name, episode count or rating in ascending or descending order.

The user can click on a character card to display a modal with more information about the character. The following data is displayed in the modal:

- Name
- Status (Alive, Dead or Unknown)
- Species (and type if it has one)
- Gender
- Origin
- Location (last seen)
- All episodes the character was featured in
- Rating (out of 5 stars)

Inside the modal the user can also give a rating to the character. This rating is saved in the database and will be displayed on the character card on the search result page.

#### Episodes

The episode tab is very similar to the character tab. The user can search for episodes by name and filter by season and episode air date. The user can also sort the episodes by name and rating in the desired order. Just like on the characters tab, the episode cards can be clicked to reveal a modal with more information about the episode. This data is displayed in the modal:

- Name
- Season
- Episode number
- Air date
- All characters featured in the episode
- Rating (out of 5 stars)

Just like with characters, the user can give their rating to an episode through the modal.

## Technology

The application consists of three NPM modules: a frontend client, a backend server and a types module that allows sharing types and interfaces between the frontend and the backend.

#### Frontend

The frontend is a React application with Typescript that uses GraphQL to fetch data from the server. We have utilized the [Apollo Client](https://www.apollographql.com/docs/react/) library, which allows for data management using GraphQL at its core. It also provides built-in integration with React. This makes it a good fit for our application, since it simplifies GraphQL interaction with the server while also providing a system for global state management in React.

We have handled global state management using Apollo Client's [reactive variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/). This proved to be a very simple and straightforward approach for dealing with global state. We made a deliberate choice not to include a more complex, feature-rich state management library like Redux, as we believe this would be overkill when Apollo already covers our global state needs quite well.

Another big advantage of the Apollo Client is its built-in caching system. The client keeps a local cache of every GraphQL query, which improves the user experience by reducing loading times. This is also great from sustainability point of view, as it reduces the amount of data transmitted and limits the number of HTTP requests arriving at the server.

To reduce time spent on design and development, we decided to opt for the React UI library [MUI](https://mui.com). This library provides pre-made components for elements like selectors and input fields, cards, modals and icons to name a few.

#### Backend

Our backend is an Express application written in Typescript, combined with a MongoDB database. The database has one collection for episodes and one collection for characters. We chose MongoDB as our DBMS for a couple reasons:

1. Our initial dataset was already on JSON format. The document-based nature of MongoDB therefore made it extremely easy to simply import these large JSON files into the database without considering table structure, data types, nested properties or relationships between tables.
2. MongoDB is a very developer friendly database solution. It is easy to install locally, it has a great companion application called MongoDB Compass for managing the database manually, and it is straightforward to deploy on the production server. It is also more mature and well-documented than for instance Neo4j, which is another alternative we considered.

To allow for querying the backend with a GraphQL API, we used the [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/) library in combination with the [Mongoose](https://mongoosejs.com) object modeling abstraction layer. These libraries are widely used and it was easy to get started using the official Apollo documentation. While we had to provide the resolver logic ourselves for things like combining data from the two collections, implementing pagination of the response and sorting the results, Apollo Server made this job quite uncomplicated.

## Miscellaneous

#### Testing

We have quite thoroughly tested the components of the React app using Jest and the React Testing Library. These can be classified as unit tests, as they test only a small part of the application at a time. This makes it easy to specify how a component should behave. Naturally, the unit tests can not access the actual data from the database, and it was therefore necessary to mock the GraphQL responses to properly test all parts of the application. Luckily, the Apollo Client has built-in mocking functionality, which is the solution we ended up with.

In addition to the unit tests, we have created some simple end-to-end tests using Cypress. Cypress is a testing tool that spins up a browser, simulates user actions and asserts that the website behaves as expected. This allows for rapid development of test suites that covers the whole application stack in a realistic browser environment. The downside of end-to-end testing is that they are slower and comes with more overhead, and it is not always obvious what part of the code is responsible for the potential errors that show up.

#### Web accessibility

We have attempted to achieve a high level of accessibility in our web application. First of all, we have made sure that the layout is responsive and looks nice on any screen size. MUI has layout components that simplifies this job, abstacting away the actual CSS media queries. Secondly, we have tried to take web accessibility fundementals into account when developing the application. The essence of this is that the website should be designed for all users, no matter their age, education, skill level or impairments. Here are some concrete steps we have taken to improve accessibility:

- Attention to contrast between the text and the background.
- Minimalistic design without overly saturated colors, enough spacing between elements and text with sufficient font size.
- Usage of semantic elements like header, main, section and nav for a clear division of different elements in the UI
- Images have `alt` attributes to improve the experience for people using screen readers.
- Usage of `aria-label` and `aria-labelledby` attributes for elements that do not have obvious visible text accociated with them.

#### Sustainable development

Since we had limited time for completing this relatively complex project, we chose to use the Material UI library instead of styling the entire UI ourselves. This leads to a greater bundle size and more data transfer on the initial page load. In terms of suistainability we want to minimize data size and loading time since it costs energy to power the servers that run the web page. Therefore, this became a tradeoff between development time and bundle size.

GraphQL allows reducing the response size significally compared to a traditional REST API. Since GraphQL gives the client the option to specify exactly what data it needs, the amount of unnecessary data transmitted from the server to the client is minimal. For instance, when displaying the search result, there is only a limited amount of information that is displayed in the cards. Therefore, the client only requests the fields it needs for displaying the cards. When clicking on a card and showing the modal, more information about the character is needed, and the client therefore sends a new API call requesting more data for that specific character or episode.

Apollo Client also caches requests for us automatically, which this is very important to minimize data traffic. If you click a card to open a character modal, then close the modal and open it again, you can see that Apollo Client hits the cache and does not send a new request to the server.

We have also implemented pagination. In our dataset there are 826 characters and the user can view all of these by scrolling. However, we dont want to load all of them since the user likely wont scroll all the way to the bottom. Therefore, we only show a _page_ of 18 characters, and when the user scrolls close to the bottom, a new page is fetched and appended to the search result automatically. This technique is called infinite scroll, and provides a great user experience while reducing a lot of unnecessary data transfer.

Custom fonts are also generally quite heavy on data. We have chosen to use the Google Fonts API to load the fonts used on our website. This lets us utilize that many other websites are using the same fonts, and it is therefore likely that the fonts are already cached in the browser.

We have also debounced the search bars to reduce the number of API calls. This means that the search is only performed when the user has stopped typing for a short period of time. This is a good compromise between user experience and data transfer.

#### GitLab CI/CD

To improve the workflow regarding Git and merge requests, we have disabled pushing to the main branch and implemented a CI/CD pipeline in GitLab that does the following:

1. Checks formatting rules by running Prettier on all files in the project.

2. Checks for code quality issues by running ESLint.

3. Runs all automated tests (unit tests and end-to-end tests).

4. Tries to build a production version of the React app.

5. Resets the database and deploys the application to the virtual machine provided by the course staff (only on `main` branch).

If any of these checks fail, GitLab will refuse to merge the merge request. This enforces a certain level of code quality throughout the project, and helps catching bugs and other issues before they are merged to the production branch.
