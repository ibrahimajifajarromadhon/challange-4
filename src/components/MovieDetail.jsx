import React from 'react';
import { FaPlayCircle, FaStar } from 'react-icons/fa';

const MovieDetail = ({ movie }) => {
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
          <p><FaStar style={{ color: 'gold', marginLeft: '0px' }} /> {movie.vote_average} / 10</p>
          <p>{movie.overview}</p>
          <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}>
            <FaPlayCircle style={{ marginRight: '5px', marginBottom: '20px', marginTop: "15px" }} />
            WATCH TRAILER
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
