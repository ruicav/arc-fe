import { createSlice } from "redux-starter-kit"

const search = createSlice({
  slice: "search",
  initialState: false,
  reducers: {
    isSearching: (state, action) => action.payload.searching,
  }
})

export { search }