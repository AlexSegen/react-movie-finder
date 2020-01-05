import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Movie extends Component {

    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
    }

    render() { 
        const { title, poster, year} = this.props

        return ( 
        <div className="card card-movie flip-in-hor-bottom">
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
        </div>
        );
    }
}