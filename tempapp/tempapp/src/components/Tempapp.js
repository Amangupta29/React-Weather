

import React, { useEffect, useState } from 'react';
import './css/style.css';
import { TypeAnimation } from 'react-type-animation';
const Tempapp = () => {
	const [city, setCity] = useState(null);
	const [search, setSearch] = useState('Mumbai');

	useEffect(() => {
		const fetchApi = async () => {
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5729f7928175809cac6311476a38c699`;
			const response = await fetch(url);
			const resJson = await response.json();
		
			setCity(resJson.main);
		};
		fetchApi();
	}, [search]);

	return (
		<div className='box'>
			<div className='inputData'>
				<input
					type='search'
					value={search}
					className='inputField'
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
			</div>

			{!city ? (
				<p className='errorMsg'> No Data found </p>
			) : (
				<div>
					<div className='info'>
						<h2 className='location'>
							<i className='fas fa-location-dot'></i>
							{search}
						</h2>
						<h1 className='temp'>{city.temp}°Cel</h1>
						<h3 className='tempmin_max'>
							{' '}
							Min : {city.temp} | Max : {city.temp}
						</h3>

						<TypeAnimation
							sequence={[
								'Have  a nice day',
								1000,
								'Enjoy the weather',
								2000,

								() => {
									console.log('Done typing!');
								},
							]}
							wrapper='div'
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: '20px' }}
						/>
					</div>

					<div className='wave -one'></div>

					<div className='wave -two'></div>
					<div className='wave -three'></div>
				</div>
			)}
		</div>
	);
};
export default Tempapp;
