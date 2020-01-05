import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


export class Movie extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
    }

    render() { 
        const { id, title, poster, year} = this.props

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
}