import React from 'react';
import { Movie } from './Movie'

export const MoviesList = props => {

        const { movies, totalResults, inputMovie } = props;
        return (
            <div className="content__result-row">
<p className="content__subtitle slide-in-elliptic-top-fwd">We have found <strong>{totalResults}</strong> coincidences! {inputMovie}</p>
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
