import { useState, useEffect } from "react";
import { movieDummy } from "../src/api/movieDummy";
import VirticalMovieView from "./components/VirticalMovieView";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    movieDummy().then((res) => {
        if (res) {
            setMovieData(res);
            setLoading(false);
            console.log(res);
        } else {
          console.log("error");
        }
    });
  }, []);

  return (
    <div className="Contaier">
      <div className="movie-list-container">
        {loading ? 
          <div style={{color: "white"}}>
            loading...
          </div> 
          : 
          movieData && movieData.map((item, index) => (
            <VirticalMovieView
              key={index}
              poster={"https://image.tmdb.org/t/p/original" + item.poster_path} 
              title={item.original_title}
              star={item.vote_average}
              detail={item.overview}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
