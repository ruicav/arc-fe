import { createSlice } from "redux-starter-kit"

const search = createSlice({
  slice: "search",
  initialState: {
    query: "",
    loading: false,
    searching: false
  },
  reducers: {
    setQuery: (state, action) => ({...state, query: action.payload.query}),
    setLoading: (state, action) => ({...state, loading: action.payload.loading}),
    setSearching: (state, action) => ({...state, loading: action.payload.searching}),
  }
})

export { search }