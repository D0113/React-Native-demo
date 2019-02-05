const apiGetAllMovies = 'http://10.0.3.2:3000/movie';

async function getMoviesFromServer() {
    try {
        let res = await fetch(apiGetAllMovies);
        let resJson = await res.json();

        return resJson;
    } catch (error) {
        console.log(error);
    }
}

async function insertMoviesToServer(movie) {
    try {
        let res = await fetch(apiGetAllMovies, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)

        });
        let resJson = await res.json();

        return resJson;
    } catch (error) {
        console.log(error);
    }
}

async function updateMoviesToServer(movie) {
    try {
        let res = await fetch(apiGetAllMovies + '/' + movie.id, {
            method: 'PATCH',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)

        });
        let resJson = await res.json();

        return resJson;
    } catch (error) {
        console.log(error);
    }
}

export {getMoviesFromServer};
export {insertMoviesToServer};
export {updateMoviesToServer};