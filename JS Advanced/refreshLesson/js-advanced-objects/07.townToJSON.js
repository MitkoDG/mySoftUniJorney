function convertTownsToJSON(data) {
    data.shift();
    const towns = [];

    for (let town of data) {
        town = town
        .replace('| ', '')
        .replace(/ \| /g, '|')
        .replace(' |', '');
        
        let [name, latitude, longitude] = town.split('|');
        latitude = Number(latitude);
        longitude = Number(longitude);
        towns.push({
            'Town': name,
            'Latitude': Number(latitude.toFixed(2)),
            'Longitude': Number(longitude.toFixed(2))
        });
    }

   console.log(JSON.stringify(towns));
}