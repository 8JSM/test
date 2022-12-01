import Movie from "./Movie"
import {useState, useEffect} from "react";

function Home() {
    const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    ).then((response) => response.json()).then((json) => {setMovies(json.data.movies);
    setloading(false);
  });
  }, []);
  return <div>
    <h1>The Movies!</h1>
    {loading ? <strong>Loading...</strong> :
    movies.map((movie) => <Movie
      key={movie.id}
      id={movie.id}
      medium_cover_image={movie.medium_cover_image}
      title={movie.title}></Movie>
    )}
    </div>
}

export default Home;