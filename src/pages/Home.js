import React, { Component } from 'react';
import { SearchForm } from '../component/SearchForm'
import { MoviesList } from '../component/MoviesList'
import { NotFound } from '../component/NotFound'
import { Details } from './Details'

export class Home extends Component {
  state = {
    usedSearch: false,
    results: [],
    totalResults: 0
  }

  handleResults = data => {
    this.setState({ results: data.Search, usedSearch: true, totalResults: data.totalResults })
  }

  renderResults() {
    return this.state.results && this.state.results.length === 0 ?
      <NotFound/> : <MoviesList movies={this.state.results} totalResults={this.state.totalResults} />
  }

  render() {

    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId) {
      return <Details id={url.searchParams.get('id')}/>
    }

    const { usedSearch } = this.state
    return (
      <div className="content__area1">
        <p className="content__title">Search Movie</p>
        <div className="search-box">
          <SearchForm onResults={this.handleResults} />
        </div>
        <div className="content__results">
          {
            usedSearch ? this.renderResults() : <div className="content__message">Use the search form find your movie</div>
          }
        </div>
      </div>
    );
  }
}
