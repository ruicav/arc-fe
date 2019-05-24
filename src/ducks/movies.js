import { createSlice } from "redux-starter-kit"

const setUpcomingMovies = (state, action) => [...state, ...action.payload.movies]

const movies = createSlice({
  slice: "movies",
  initialState: [],
  reducers: {
		setUpcoming: setUpcomingMovies
	}
})

export { movies }