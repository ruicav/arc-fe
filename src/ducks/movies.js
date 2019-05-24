import { createSlice } from "redux-starter-kit"

const setMovies = (state, action) => [...action.payload.movies]

const movies = createSlice({
  slice: "movies",
  initialState: [],
  reducers: {
		setMovies: setMovies
	}
})

export { movies }