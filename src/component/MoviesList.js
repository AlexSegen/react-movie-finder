/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux'

import { Spinner } from './Spinner'
import { Movie } from './Movie'

export const MoviesList = ({ movies, totalResults, inputMovie }) => {

    const isLoading = useSelector(state => state.loading);

    return isLoading ? <Spinner/> : (
            <div className="content__result-row">
<p className="content__subtitle slide-in-elliptic-top-fwd">We have found <strong>{totalResults}</strong> coincidences for {inputMovie}!</p>
                <div className="MoviesList">
                    {
                        movies.map((movie, index) => {
                            return (
                                <div key={movie.imdbID + '-' + index} className="MoviesList-item">
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
