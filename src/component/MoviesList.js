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
                {/* <nav className="pagination" role="navigation" aria-label="pagination">
                    <button className="pagination-previous" title="This is the first page" disabled>Previous</button>
                    <button className="pagination-next">Next page</button>
                    <ul className="pagination-list">
                        <li>
                        <button className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</button>
                        </li>
                        <li>
                        <button className="pagination-link" aria-label="Goto page 2">2</button>
                        </li>
                        <li>
                        <button className="pagination-link" aria-label="Goto page 3">3</button>
                        </li>
                    </ul>
                </nav> */}
            </div>
        )

    }
}
