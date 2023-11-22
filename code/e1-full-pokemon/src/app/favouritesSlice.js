import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/"
    },
    {
      name: "mew",
      url: "https://pokeapi.co/api/v2/pokemon/151/"
    },
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (state, action) => {
        state.value.push(action.payload)
    },
  },
})

export const { add } = favouritesSlice.actions

export default favouritesSlice.reducer