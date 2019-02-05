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


export {getMoviesFromServer};