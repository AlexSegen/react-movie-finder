/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Spinner } from '../component/Spinner'
import dataService from '../services/data.service'

import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../actions'

export const Details = () => {

    const [movie, setMovie] = useState({});

    const [actors, setActors] = useState([]);  

    const { id } = useParams();
    const history = useHistory();

    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const [hasErrors, setErrors] = useState(false);

    const getMovieDetails = () => {
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
        let tmp = str ? str.split(",") : "";
        setActors(tmp ? tmp : [])
    }

    const goHome = () => {
        history.goBack()
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

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
                    hasErrors && 
                    <div className="field message is-danger">
                        <div className="message-body has-text-centered">
                            Oops, please try again!
                        </div>
                    </div> 
                }

                <h2 className="details_body-title">{movie.Title} <br />
                    <small> Genre: {movie.Genre} | Year: {movie.Year}</small></h2>
                {
                    movie.Ratings &&
                    <ul className="details_body-rating">
                        {
                            movie.Ratings.map(r => {
                                return <li key={r.Value}><strong>{r.Source}:</strong> {r.Value}</li>
                            })
                        }
                    </ul>
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
                <button onClick={goHome} className="button is-default">Go back</button>
            </div>

        </div>
    );

};