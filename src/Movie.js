// 여기선 실제로 movie를 render 할거임
import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster}){
    return <h4>{title}</h4>
}

// 우리가 얻어 올 props를 찾기 시작하기
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;