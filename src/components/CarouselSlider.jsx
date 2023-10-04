import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPlayCircle } from 'react-icons/fa';

const CarouselSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item>
                <img
                    src={`https://image.tmdb.org/t/p/original/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg`}
                    className="img w-100"
                />
                <Carousel.Caption className="Movie-caption" style={{ textAlign: "left", marginLeft: "-180px", width: "50%" }}>
                    <h1 className='Movie-judul'>The Nun II</h1>
                    <p className='Movie-deskripsi'>In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.</p>
                    <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}> <FaPlayCircle style={{ marginRight: '5px', marginBottom: "2px" }} />WATCH TRAILER</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg`}
                    className="img w-100"
                />
                <Carousel.Caption className="Movie-caption" style={{ textAlign: "left", marginLeft: "-180px", width: "50%" }}>
                    <h1 className='Movie-judul'>Fast X</h1>
                    <p className='Movie-deskripsi'>Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.</p>
                    <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}> <FaPlayCircle style={{ marginRight: '5px', marginBottom: "2px" }} />WATCH TRAILER</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg`}
                    className="img w-100"
                />
                <Carousel.Caption className="Movie-caption" style={{ textAlign: "left", marginLeft: "-180px", width: "40%" }}>
                    <h1 className='Movie-judul'>Blue Beetle</h1>
                    <p className='Movie-deskripsi'>
                        Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.
                    </p>
                    <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}> <FaPlayCircle style={{ marginRight: '5px', marginBottom: "2px" }} />WATCH TRAILER</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;