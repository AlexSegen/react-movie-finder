import React, { useState, useEffect } from 'react';
import dataService from '../services/data.service'


export const SearchForm = props => {
    const [inputMovie, setInputMovie] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [hasErrors, setErrors] = useState(false);

    const handleChange = e => {
        setInputMovie(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!inputMovie || inputMovie.toString().trim().length === 0)
            return
        window.location.href = "/?s=" + inputMovie;
    }

    const searchMovie = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const search = urlParams.get('s');
        const page = urlParams.get('page');
        if (search) {
            setLoading(true)
            setErrors(false)
            dataService.searchMovies(search.trim(), page).then(data => {
                const { Search = [], totalResults = "" } = data;
                props.onResults({ Search, totalResults, inputMovie: search })
                setLoading(false)
            }).catch(error => {
                console.log('Error: ', error)
                setLoading(false)
                setErrors(true)
            })
        }

    }

    useEffect(() => {
        searchMovie()
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