import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList';
import Navbar from './components/NavBar';
import CountryDetails from './components/CountryDetails.js';

export default function App() {
	return (
		<div className='App'>
			{/* navbar that will be showing in every page */}
			<Navbar />

			{/* web aplication routes */}
			<Switch>
				<Route exact path='/' component={CountryList} />
				<Route exact path='/details/:countryId' component={CountryDetails} />
			</Switch>
		</div>
	);
};