import { configureStore, getDefaultMiddleware } from "redux-starter-kit"
import { combineReducers } from "redux"
import { movies, search } from "./ducks"

const preloadedState = {}

const reducer = combineReducers({
  movies: movies.reducer,
  search: search.reducer
})

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
})