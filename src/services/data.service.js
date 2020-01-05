const API_URL = "https://www.omdbapi.com"
const API_KEY = "a4766de2"

export default {
    async searchMovies(keyword = "") {
        try {
            const res = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${keyword}`)
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