import React, { useEffect, useState } from 'react';

export const Pagination = props => {

    const [pages, setPages] = useState(0)
    const [totalPages, setTotalPages] = useState([1, 2, 3, 4, 5, 6, 7])
    const [currentPage, setCurrentPage] = useState(1);


    /*  const goToPage = page => {
         console.log(page)
     } */

    const handlePagination = () => {
        /* console.log('handlePagination')
        let tmp = Math.round(props.resultCount / 10);
        setPages(tmp)
        console.log('Pages', pages)
        console.log('totalPages', totalPages) */
    }

 /*    useEffect(() => {
        handlePagination()

        return () => {
            setTotalPages([])
        }
    }) */

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <button className="pagination-previous" title="This is the first page" disabled>Previous {pages}</button>
            <button className="pagination-next">Next page</button>
            <ul className="pagination-list">
                {

                    totalPages.map(page => {
                        return (
                            <li key={page}>
                                <button  className="pagination-link is-current1">{page}</button>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )

}