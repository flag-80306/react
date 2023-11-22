import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import favouritesReducer from './favouritesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favourites: favouritesReducer
  },
})
