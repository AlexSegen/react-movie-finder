import React from 'react';
import { Link } from 'react-router-dom'
export const Movie = props => {


    const { id, title, poster, year } = props;

    return (
        <Link to={`/details/${id}`}
            className="card card-movie flip-in-hor-bottom">
            <div className="card-image">
                <figure className="image">
                    <img src={poster === 'N/A' ? '/img/placeholder.svg' : poster} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title">{title}</p>
                        <p className="subtitle">{year}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}