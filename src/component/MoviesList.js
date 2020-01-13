import React from 'react';
import { Movie } from './Movie'
import { Pagination } from './Pagination'

export const MoviesList = props => {

        const { movies, totalResults } = props
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
                {/* <hr/>
                <Pagination resultCount={totalResults} /> */}
            </div>
        )

}
