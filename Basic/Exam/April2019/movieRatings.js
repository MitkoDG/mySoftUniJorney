function movieRatings(input) {
    let index = 0;
    let numMovies = Number(input[index++]);
    let totalL = input.length;

    let movieNLowR = input[index];
    let movieNHighR = input[index++];
    let movieLowR = Number(input[index]);
    let movieHighR = Number(input[index++]);
    
    let ratingAVG = 0

    for (let m = 1; m < totalL; m+=2) {
        let movieName = input[m];
        let movieRating = Number(input[m+1])
        ratingAVG +=movieRating;
        if (movieRating < movieLowR) {
            movieLowR = movieRating;
            movieNLowR = movieName;
        } else if (movieRating > movieHighR) {
            movieHighR = movieRating;
            movieNHighR = movieName;
        }
        
    }
    let resultAVG = (ratingAVG / numMovies).toFixed(1);


    console.log(`${movieNHighR} is with highest rating: ${movieHighR.toFixed(1)}`);
    console.log(`${movieNLowR} is with lowest rating: ${movieLowR.toFixed(1)}`);
    console.log(`Average rating: ${resultAVG}`);
}
movieRatings(['5',
    'A Star is Born',
    '7.8',
    'Creed 2',
    '7.3',
    'Mary Poppins',
    '7.2',
    'Vice',
    '7.2',
    'Captain Marvel',
    '7.1'
    ])