import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Movie } from './Movie'

export class MoviesList extends Component {

    static propTypes = {
        movies: PropTypes.array,
        totalResults: PropTypes.string
    }

    render() {
        const { movies, totalResults } = this.props
        return (
            <div className="content__result-row">
    <p className="content__subtitle slide-in-elliptic-top-fwd">We have found <strong>{totalResults}</strong> coincidences!</p>
                <div className="MoviesList">
                    {
                        movies.map(movie => {
                            return (
                                <div key={movie.imdbID} className="MoviesList-item">
                                    <Movie
                                    id={movie.imdbID}
                                    title={movie.Title}
                                    poster={movie.Poster}
                                    year={movie.Year} />
                            </div>
                            )
                        })
                    }

                </div>
            </div>
        )

    }
}
