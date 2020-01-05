import React, { Component } from 'react';
import {PropTypes} from 'prop-types'

import { Link } from 'react-router-dom'

import dataService from '../services/data.service'

export class Details extends Component {
    state = {
        movie: {},
        isLoading: false,
        hasErrors: false
    }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.getMovieDetails(id)
    }

    getMovieDetails = id => {
        this.setState({ isLoading : true})
        dataService.getMovie(id).then(movie => {
            this.setState({ movie, isLoading : false, hasErrors: false})
        }).catch(error => {
            console.log('Error: ', error)
            this.setState({ isLoading : false, hasErrors: true})
        })
    }

    render() { 
        const { movie } = this.state
        return ( 
            <div className="content__details">
                <div className="details_media roll-in-blurred-left">
                    <img src={movie.Poster} className="media_photo" alt={movie.Title}/>
                </div>
                <div className="details_body fade-in-top">
                    <div className="details_body-scores jello-horizontal">
                        <div className="score">
                            {movie.Metascore}
                            <span>Score</span>
                        </div>
                    </div>
                    <h2 className="details_body-title">{movie.Title} <br/>
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
                    <hr/>
                    <Link to="/" className="button is-default" >Go back</Link>
                </div>
     
            </div>
         );
    }
}
 