import { createSlice } from "redux-starter-kit"

const addMovie = (state, action) => [
  ...state,
  {
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    name: action.payload.name
  }
]

const movies = createSlice({
  slice: "movies",
  initialState: [
    {
      name: 'Forrest Gump',
      description: 'É Mago'
    }
  ],
  reducers: {
    add: addMovie
  }
})

export { movies }