const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzODZmZmViNmEzMjYwNWNhZjZjNTkxNjgyYzhkZiIsInN1YiI6IjY0ZWRiNDAzMWZlYWMxMDBmZTVlOWFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9PCq8HvT1NH--3nflfYRPTa2ZCqZf-q3tDsGDS5zNkg"

export const movieDummy = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      
    return fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            return response.results;
        })
        .catch(err => {
            console.error(err);
            return [];
        })
}
