import React, { useState } from 'react';
import { SearchForm } from '../component/SearchForm'
import { MoviesList } from '../component/MoviesList'
import { NotFound } from '../component/NotFound'

export const Home = () => {

  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const handleResults = data => {
    setResults(data.Search);
    setUsedSearch(true);
    setTotalResults(data.totalResults)
  }

  const renderResults = () => {
    return results && results.length === 0 ?
      <NotFound /> : <MoviesList movies={results} totalResults={totalResults} />
  }

  return (
    <div className="content__area1">
      <p className="content__title">Search Movie</p>
      <div className="search-box">
        <SearchForm onResults={handleResults} />
      </div>
      <div className="content__results">
        {
          usedSearch ? renderResults() : <div className="content__message">Use the search form find your movie</div>
        }
      </div>
    </div>
  );

}