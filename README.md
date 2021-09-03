# **"World Countries"**

### Description

Personal project done during my bootcamp where you can choose any country and you will get some information about it (Official name, capita, area, region, subregion, bordes). I used a json file as basic data base to have all the countries and start the project. You can click in the flag to get all the info or you can search using the search bar. Countries with boarders will have a link to get rach of those neighbor info as well. This project use diferente routes for each country.


### Technologies

- Bootstrap
- Javascript
- React
- Hooks

### MVP (Minimum Viable Produc)

App, see some info from diferent countries. Search for especific ones. UI create with Bootstrap.

### User Stories

- **country flag** - user can see the flag and name of the country and choose one to see details.
- **country borders** - if country has neighbor, it will show a link to those ones.
- **search country** - use the search bar to find especifc country by name.

### Client / Frontend

### React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                                         |
| ------------------------- | -------------------- | --------------------------- | ---------------------------------------------------------------------------------|
| `/`                       | SplashPage           | public `<Route>`            | Home page, choose a country by its name of flag to see its details               |
| `/details/:id`            | Country detail       | public `<Route>`            | Detail page, see details of the choosen coutry and links to its border neighbors |


### Components

- SplashPage (Home)
- DetailsPage (Details)

### Data Structure
```
├── public
│   ├── _index.html
├── src
│   ├── components
│   │   ├── CountryDetails.js
│   │   ├── CountryItem.js
│   │   ├── CountryList.js
│   │   ├── NavBar.js
│   ├── app.css
│   ├── app.js
│   ├── countries.json
│   ├── index.css
│   ├── index.js
├── gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Git
* [GitHub] ( https://github.com/jpsm83/world-countries )