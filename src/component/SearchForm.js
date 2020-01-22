import React, { useState, useEffect } from 'react';
import dataService from '../services/data.service'

import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../actions'

export const SearchForm = ({ onResults }) => {

    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const [inputMovie, setInputMovie] = useState("");
    const [hasErrors, setErrors] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('s');
    const page = urlParams.get('page');

    const handleChange = e => {
        setInputMovie(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!inputMovie || inputMovie.toString().trim().length === 0)
            return
        window.location.href = "/?s=" + inputMovie + "&page=" + (page ? page : 1);
    }

    const searchMovie = () => {
        if (search) {
            dispatch(setLoading(true))
            setErrors(false)
            dataService.searchMovies(search.trim(), page ? page : 1).then(data => {
                const { Search = [], totalResults = "" } = data;
                onResults({ Search, totalResults, inputMovie: search })
                dispatch(setLoading(false))
            }).catch(error => {
                console.log('Error: ', error)
                dispatch(setLoading(false))
                setErrors(true)
            })
        }

    }

    useEffect(() => {
        searchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        onChange={handleChange}
                        className="input"
                        type="text"
                        placeholder="Find a movie" />
                </div>
                <div className="control">
                    <button className={`button is-info is-search ${isLoading ? "is-loading" : ""}`}>
                        Search
                    </button>
                </div>
            </div>
            {
                hasErrors ? <div className="field message is-danger">
                    <div className="message-body has-text-centered">
                        Oops, please try again!
                                        </div>
                </div> : null
            }

        </form>

    );

}