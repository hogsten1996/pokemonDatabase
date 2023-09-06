import {configureStore} from "@reduxjs/toolkit";
import { pokemonApi } from './reducers/PokemonApi';

const store = configureStore({
    reducer:{
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

export default store;