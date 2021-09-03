import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryItem(props) {

		//   const {cca3} = props.country
		//   const {common} = props.country.name
		
		//get the props needed
		const { cca3, cca2, name: { common } } = props.country;
		
			return (
				// link to an especifc country through its cca3
				<Link to={`/details/${cca3}`}>
					{/* use cca2 abreviation to find the flag pic on a external url */}
					<img src={`https://www.countryflags.io/${cca2}/flat/64.png`} alt={common} />
					<p>
						<strong>{common}</strong>
					</p>
				</Link>
			);
		};