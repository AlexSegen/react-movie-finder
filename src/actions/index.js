export const searchMovie = (search, page) => {
    return {
        type: "SEARCH_MOVIE",
        payload: {
            page,
            search
        }
    }
}

export const setLoading = (payload = false) => {
    return { type: "LOADING", payload: payload }
}
 