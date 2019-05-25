import { createSlice } from "redux-starter-kit"

const pageControl = createSlice({
  slice: "pageControl",
  initialState: {
    isSearching: false,
    currentPage: 0,
    totalPages: 0,
    query: '',
    isAdding: false
  },
  reducers: {
    updateControl: (state, action) => ({...state, ...action.payload.control}),
  }
})

export { pageControl }