const API_URL = "https://www.omdbapi.com"
const API_KEY = "a4766de2"

export default {
    async searchMovies(keyword = "", page = 1) {
        try {
            const res = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${keyword}&page=${page}`)
            const data = await res.json()
            return data
        } catch (error) {
            throw new Error(error.message)            
        }
    },
    async getMovie(movieID = "") {
        try {
            const res = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${movieID}`)
            const data = await res.json()
            return data
        } catch (error) {
            throw new Error(error.message)            
        }
    }
}