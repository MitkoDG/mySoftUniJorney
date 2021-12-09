function townTask(input) {
    
    for( let table of input) {
        let [town, latitude, longitude] = table.split(' |')
        
        let currentTownInfo = {
            town: town,
            latitude:Number(latitude).toFixed(2), // може да остане само името защото са еднакви
            longitude:Number(longitude).toFixed(2)
        }
        console.log(currentTownInfo);
    }

}
townTask(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)