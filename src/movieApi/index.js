import axios from 'axios'
import moment from 'moment'

axios.defaults.baseURL = 'https://ancient-waters-72863.herokuapp.com'

const getUpcoming = (page) => {
  const params = page ? {page} : {}
  return axios.get(
    '/movies/upcoming',
    {params}
  )
    .then(result => ({
      ...result,
      data: {
        ...result.data,
        results: [...result.data.results]
          .filter(m => moment(m.release_date, 'YYYY-MM-DD').isAfter(moment.now()))
      }
    }))
}

const searchMovies = (title, page) => {
  return axios.get(
    '/movies/search',
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