import React, { useEffect, useState } from 'react';
import dataService from '../services/data.service'

export const Pagination = props => {

    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages] = useState([1,2,3,4,5,6,7,8,9]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const renderPagination = () => {
        console.log('totalResults', parseInt(totalResults));

        console.log('props', props);

        let tmp = Math.round(totalResults / 10);
        setPages(tmp);
        console.log('Pages', pages);
        

        let tmp2 = [];
        for (let i = 0; i < tmp; i++) {
            tmp2.push(i);
        }
        console.log("tmp2", tmp2);
        setTotalPages(tmp2);
        console.log('totalPages', totalPages);
    };

    const goToPage = page => {

        if(page > totalPages.length || page <= 0) return;

        dataService.searchMovies(props.inputMovie.trim(), page).then(data => {
            console.log("data", data);
            setCurrentPage(page);
            const { Search = [], totalResults = "" } = data;
            setTotalResults(totalResults);
            props.onResults({ Search, totalResults, inputMovie: props.inputMovie });
        }).catch(error => {
            console.log('Error: ', error)
        });
    };

    useEffect(() => {
        /* if(currentPage === 1) {
            renderPagination();
        } */
    }, []);

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <button onClick={() => goToPage(currentPage - 1)} className="pagination-previous" disabled={currentPage === 1}>Previous</button>
            <button  onClick={() => goToPage(currentPage + 1)} className="pagination-next" disabled={currentPage === totalPages.length}>Next page</button>
            {/* <ul className="pagination-list">
                {
                    totalPages.length > 1 ? totalPages.map(page => {
                        return (
                            <li key={page}>
                                <button type="button" onClick={() => goToPage(page)} disabled={currentPage === page}  className={ currentPage === page ? "pagination-link is-current": "pagination-link" }>{page}</button>
                            </li>
                        )
                    }) : null
                }

            </ul> */}
        </nav>
    )

}