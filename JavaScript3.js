const axios = require('axios');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter your city Name and Internationally Approved Alpha Code for Province/Territory:', (input) => {
    let split = input.split(",");
    let cityName = split[0];
    let provinceCode = split[1];
    findCity(cityName, provinceCode)
        .then(data => {
            if (data.data.length > 0) {
                const firstCity = data.data[0];
                cityID = firstCity.wikiDataID;


                if(firstCity.population != 0){
                    console.log("City:", firstCity.city + "(" + firstCity.latitude +", " + firstCity.longitude + " ) has a population of " + firstCity.population);
                }
                else{
                    console.log("City:", firstCity.city + "(" + firstCity.latitude +", " + firstCity.longitude + " ) doesn't have population data");
                }
            }
            else {
                console.log("No cities found.");
            }
            
            rl.question('Radius in KM:', (radiusIn) => {
                let radius = parseInt(radiusIn);
                findRadius(cityID, radius)
                    .then(data => {
                        console.log("Some close cities are")
                        if (data && data.data && data.data.length > 0) {
                            data.data.forEach(city => {
                                console.log("     " + city.city);
                            });
                        } else {
                            console.log("No cities found.");
                        }
                        rl.close();
                    })
                    .catch(error => {
                        console.error(error);
                        rl.close();
                    });
            });
        })
        .catch(error => {
            console.error(error);
            rl.close();
        });
});


async function findCity(cityName, provinceCode){
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/CA/regions/NB/cities',
        params: { 
            countryIds: 'CA',
            namePrefix: cityName,
            regionIds: provinceCode
        },
        headers: {
          'X-RapidAPI-Key': '2848fe45c4msh255b6764230ad06p11a533jsnc9efcb7c743d',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


async function findRadius(cityID, radiusIn){
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q2138/nearbyCities',
        params: {
            cityid: cityID,
            radius: radiusIn,
            distanceUnit: 'KM'
        },
        headers: {
            'X-RapidAPI-Key': '2848fe45c4msh255b6764230ad06p11a533jsnc9efcb7c743d',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };


    try {
        const response = await axios.request(options);
        return response.data
    }
    catch (error) {
        console.error(error);
    }
}
