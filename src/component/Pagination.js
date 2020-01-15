import React, { useEffect, useState } from 'react';

export const Pagination = ({ totalResults }) => {

    const [totalPages, setTotalPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('s');
    const pageParam = urlParams.get('page');

    const renderPagination = () => {

        if (totalResults > 0) {
            let pagesQty = Math.round(totalResults / 10);
            let pagesArray = [];
            for (let i = 0; i < pagesQty; i++) {
                pagesArray.push(i + 1);
            }
            setTotalPages(pagesArray);
        }

    };

    const goToPage = page => {
        if (page > totalPages.length || page <= 0) return;
        window.location.href = "/?s=" + search + "&page=" + (page ? page : 1);
    };

    useEffect(() => {
        setCurrentPage(pageParam ? parseInt(pageParam) : 1);
        renderPagination();
        return () => {
            renderPagination()
        }

    }, []);

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <button onClick={() => goToPage(currentPage - 1)} className="pagination-previous" disabled={currentPage === 1 || totalPages.length === 0}>Previous</button>
            <button onClick={() => goToPage(currentPage + 1)} className="pagination-next" disabled={currentPage === totalPages.length || totalPages.length === 0}>Next page</button>
            <ul className="pagination-list">
                {
                    totalPages.length > 1 ? totalPages.map(page => {
                        return (
                            <li key={page}>
                                <button type="button" onClick={() => goToPage(page)}
                                    className={currentPage === page ? "pagination-link is-current" : "pagination-link"}>{page}</button>
                            </li>
                        )
                    }) : null
                }

            </ul>
        </nav>
    )

}