import React, { useState, useEffect } from 'react';
import CountryItem from './CountryItem';
import countries from './../countries.json';

export default function CountryList() {

	const [countriesArray, setCountriesArray] = useState(countries);
	
	const [search, setSearch] = useState('');
	useEffect(() => {
		setCountriesArray(
			countries.filter((el) =>
				el.name.common.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search]);
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-5'>
					<div className='list-group'>
						<input
							type='text'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						{countriesArray.map((oneCountry, index) => {
							return (
								<CountryItem
									key={index}
									country={oneCountry}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};