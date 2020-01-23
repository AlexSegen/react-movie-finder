/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Spinner } from '../component/Spinner'
import { Link } from 'react-router-dom'
import dataService from '../services/data.service'

import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../actions'

export const Details = props => {

    const [movie, setMovie] = useState({});

    const [actors, setActors] = useState([]);  

    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const [hasErrors, setErrors] = useState(false);

    const getMovieDetails = id => {
        dispatch(setLoading(true))
        setErrors(false)
        dataService.getMovie(id).then(res => {
            setMovie(res)
            getActors(res.Actors)
            dispatch(setLoading(false))
        }).catch(error => {
            console.log('Error: ', error)
            dispatch(setLoading(false))
            setErrors(true)
        })
    }

    const getActors = str => {
        console.log('getActors', str)
        let tmp = str ? str.split(",") : "";
        setActors(tmp ? tmp : [])
    }

    useEffect(() => {
        getMovieDetails(props.match.params.id);
    }, [props.match.params.id]);

    return isLoading ? <Spinner/> : (
        <div className="content__details">
            <div className="details_media roll-in-blurred-left">
                <img src={movie.Poster} className="media_photo" alt={movie.Title} />
            </div>
            <div className="details_body fade-in-top">
                {
                    movie.imdbRating && movie.imdbRating !== "N/A" &&
                    <div className="details_body-scores jello-horizontal">
                        <div className="score">
                        { movie.imdbRating }
                            <span>Score</span>
                        </div>
                    </div>

                }
                

                {
                    hasErrors ? <div className="field message is-danger">
                        <div className="message-body has-text-centered">
                            Oops, please try again!
                                        </div>
                    </div> : null
                }

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
                <br/>
                <h4>Actors</h4>
                <ul className="list-styled">
                    {
                        actors.map(actor => {
                            return <li key={actor}>
                                <i className="fa fa-chevron-right mr-1 text-primary"></i> {actor}</li>
                        })
                    }
                </ul>
                <div className="details_body-awards">
                    <i className="fa fa-trophy has-text-warning icon"></i> <span>{movie.Awards}</span>
                </div>
                <hr />
                <Link to="/" className="button is-default" >Go back</Link>
            </div>

        </div>
    );

};