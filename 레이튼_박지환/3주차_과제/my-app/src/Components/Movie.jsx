const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, posterPath, voteAverage}) {
    return (
        <div className="movies">
            <img src={`${IMAGE_URL}${posterPath}`} alt={title}></img>
            <div className="movies_info">
                <h5>{title}</h5>
                <p>{voteAverage}</p>
            </div>
        </div>
    )
}

export default Movie;