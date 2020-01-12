/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import dataService from '../services/data.service'

export const Details = props => {

    const [movie, setMovie] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [hasErrors, setErrors] = useState(false);

    const getMovieDetails = id => {
        setLoading(true)
        setErrors(false)
        dataService.getMovie(id).then(res => {
            setMovie(res)
            setLoading(false)
        }).catch(error => {
            console.log('Error: ', error)
            setLoading(false)
            setErrors(true)
        })
    }

    useEffect(() => {
        getMovieDetails(props.match.params.id);

        return () => {

        };
    }, [props.match.params.id]);

    return (
        <div className="content__details">
            <div className="details_media roll-in-blurred-left">
                <img src={movie.Poster} className="media_photo" alt={movie.Title} />
            </div>
            <div className="details_body fade-in-top">
                <div className="details_body-scores jello-horizontal">
                    <div className="score">
                        {movie.Metascore}
                        <span>Score</span>
                    </div>
                </div>
                <h2 className="details_body-title">{movie.Title} <br />
                    <small> Genre: {movie.Genre} | Year: {movie.Year}</small></h2>
                {
                    movie.Ratings ?
                        <ul className="details_body-rating">
                            {
                                movie.Ratings.map(r => {
                                    return <li key={r.Value}><strong>{r.Source}:</strong> {r.Value}</li>
                                })
                            }
                        </ul> : null
                }
                <p className="details_body-plot">{movie.Plot}</p>
                <div className="details_body-awards">
                    <i className="fa fa-trophy has-text-warning icon"></i> <span>{movie.Awards}</span>
                </div>
                <hr />
                <Link to="/" className="button is-default" >Go back</Link>
            </div>

        </div>
    );

};