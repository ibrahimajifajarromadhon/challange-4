import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovieList, searchMovieList } from './api/Api';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MovieDetail from './components/MovieDetail';
import CarouselSlider from "./components/CarouselSlider";

const App = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [carouselActive, setCarouselActive] = useState(true); 

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = ({ showDetail }) => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i} onClick={() => showDetail(movie)}>
          <img
            className="Movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovieList(q)
      setPopularMovies(query.results)
      console.log({ query: query })
    }
  }

  console.log({ popularMovies: popularMovies })

  const showMovieDetail = (movie) => {
    setSelectedMovie(movie);
    setCarouselActive(false);
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: 'transparent', position: 'absolute', width: '100%', zIndex: '1' }}>
        <span className="navbar-brand" style={{ color: "red", fontWeight: "bold", fontSize: "40px", marginLeft: "20px", marginTop:"-70px", marginRight:"-100px"}}>MovieList</span>
        <div className="container">
          <form className="form-inline" style={{ marginLeft: "400px" }}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="What do you want to watch?"
              aria-label="Search"
              onChange={({ target }) => search(target.value)} 
              style={{color:"red", backgroundColor: 'transparent', border:"solid 1px", borderRadius:"20px" }}
            />
          </form>
          <div className="ml-auto">
            <button className="Movie-login" type="button">
              Login
            </button>
            <button className="Movie-register" type="button">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="App">
      {carouselActive && <CarouselSlider />}
        <header className="App-header">
        {!selectedMovie && (
            <>
            <h2 className='Movie-pupular' style={{ marginLeft: "5px" }}>Popular Movie</h2>
            <a href='#' className='Movie-more' style={{ float: "right" }}>See All Movie<FaArrowRight className='Movie-arrowRight' /></a>
            </>
          )}          
          <div className="Movie-container">
            {selectedMovie ? (
              <div>
                <MovieDetail movie={selectedMovie} />
              </div>
            ) : (
              <PopularMovieList showDetail={showMovieDetail} />
            )}
          </div>
        </header>
      </div>
    </>
  )
}

export default App;