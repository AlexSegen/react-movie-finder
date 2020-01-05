import React, { Component } from 'react';

import dataService from '../services/data.service'

export class SearchForm extends Component {
    state = {
        inputMovie : '',
        isLoading: false,
        isError : false
    }

    handleChange = (e) => {
        this.setState({ inputMovie : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.state.inputMovie || this.state.inputMovie.toString().trim().length === 0)
            return

        this.setState({ isLoading : true})
        dataService.searchMovies(this.state.inputMovie.trim()).then(data => {
            const { Search = [], totalResults = ""} = data;
            this.props.onResults({Search, totalResults})
            this.setState({ isLoading : false})
        }).catch(error => {
            console.log('Error: ', error)
            this.setState({ isLoading : false, isError: true})
        })

    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div  className="field has-addons">
                    <div className="control">
                        <input
                        onChange={this.handleChange}
                        className="input"
                        type="text"
                        placeholder="Find a movie"/>
                    </div>
                    <div className="control">
                        <button className={`button is-info is-search ${this.state.isLoading ? "is-loading" : ""}`}>
                        Search
                        </button>
                    </div>
                </div>
                {
                    this.state.isError ? <div className="field message is-danger">
                                            <div className="message-body has-text-centered">
                                                Oops, please try again!
                                            </div>
                                        </div> : null
                }
                
            </form>
           
         );
    }
}