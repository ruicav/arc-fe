import axios from 'axios'

const movieApi = {
  getUpcoming: () => axios.get('http://localhost:9000/movies/upcoming'),
  searchMovies: (title) => axios.get(
    'http://localhost:9000/movies/search',
    {
      params: { query: title }
    }
    )
}

export default movieApi