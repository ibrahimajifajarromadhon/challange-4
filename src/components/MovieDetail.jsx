import { FaPlayCircle, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const MovieDetail = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3c892387424c866050c27a24982a568e`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
        setMovie(null);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="Movie-detail" style={backgroundStyle}>
      <div className="container" style={containerStyle}>
        <div className="Movie-detail-content">
          <h1 className='Movie-detail-judul' style={{ marginBottom: "30px" }}>{movie.title}</h1>
          <p>Tanggal Rilis: {movie.release_date}</p>
          <p><FaStar style={{ color: 'gold', marginLeft: '0px', marginBottom: "5px" }} /> {movie.vote_average} / 10</p>
          <p>{movie.overview}</p>
          <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}>
            <FaPlayCircle style={{ marginRight: '5px', marginBottom: '20px', marginTop: "15px" }} />
            WATCH TRAILER
          </a>
          <Link to={'/'}><button type="button" className="Movie-back">BACK TO HOME</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;