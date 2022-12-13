export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab3f4e3536msh3397133bf118fedp1eae29jsnd7f698c4186f',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));