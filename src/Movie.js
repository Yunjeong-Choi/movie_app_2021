import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

const img = (props) => {
    const { src, alt, title} = props; 
    return React.cloneElement('img', { src, alt, title });
}

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            {/* 객체변환에 오류가 있을 수 있으니 스트링도 모두 중괄호 안에 넣는다. */}
            {/* props 객체로 어떻게 변환이 되는지 몰라서 이해가 안댐 */}
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <h5 className="movie_genres">
                    {genres.map((genre, index) => (
                        //{genre} 
                        //TODO: 줄바꿈을 하지 않고 열거하는데 중간에 공백이 있도록 하려면?
                        <div style={{display: 'inline-block', marginRight: '3px'}} key={index} className="genres_genre">{genre}</div>
                    ))}
                </h5>
                <p className="movie_summary">{summary.slice(0,140)}...</p>
                {/* 속성값으로 스타일을 지정할 수 있음. style={{js위의 css}} */}
                {/* 하지만 이보다는 css파일을 따로 만드는 것 추천 */}
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,    
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;