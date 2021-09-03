import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';
import CountryList from './CountryList';

//give the country full name based on the avreviation (cca3). will be use to find the borders countries names
function getCountryName(country) {
	return country.map((cca3) => {
		return countries.find(countryName => countryName.cca3 === cca3);
	});
}

export default function CountryDetails(props) {
	//get an id to compare with the cca3 to get the country name
	const { countryId } = props.match.params;

	//compare id with cca3 to get country name
	const currentCountry = countries.find(
		(country) => country.cca3 === countryId
	);

	//function to be used in case the country has more than 1 capital	
	const capital = currentCountry.capital.join(', ');

	//get all the props needed from the current country
	const { area, borders, name, cca2, region, subregion } = currentCountry;

	//use getCountryNames function to change the cca3 reference to the name of the border country
	const borderCountries = getCountryName(borders);

	return (
		<div className='country-details'>
			<div className='country-list'>
				<CountryList />
			</div>
			<div className='coutry-borders'>
				<h1 className='h1'>
					{name.common}
					{/* use cca2 abreviation to find the flag pic on a external url */}
					<img src={`https://www.countryflags.io/${cca2}/flat/64.png`} alt={name.common} />
				</h1>
				<table className='table'>
					<tbody>
						<tr>
							<td>Official name</td>
							<td>{name.official}</td>
						</tr>
						<tr>
							<td>Capital</td>
							<td>{capital}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Region</td>
							<td>{region}</td>
						</tr>
						<tr>
							<td>Subregion</td>
							<td>{subregion}</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
									{/* print all the border countries with their own link page */}
									{borderCountries.map((countryName, index) => {
										return (
											<Link to={`/details/${countryName.cca3}`} key={index}>
												<p>{countryName.name.official}</p>
											</Link>
										);
									})}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}