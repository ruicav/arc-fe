import axios from 'axios'

const getUpcoming = (page) => {
  const params = page ? {page} : {}
  return axios.get(
    'http://localhost:9000/movies/upcoming',
    {params}
  )
}

const searchMovies = (title, page) => {
  return axios.get(
    'http://localhost:9000/movies/search',
    {
      params: { query: title, page }
    }
  )
}

const movieApi = {
  getUpcoming,
  searchMovies,
  getNextPage: (pageControl) => 
    pageControl.isSearching
      ? searchMovies(pageControl.query, pageControl.currentPage+1)
      : getUpcoming(pageControl.currentPage+1)
}

export default movieApi