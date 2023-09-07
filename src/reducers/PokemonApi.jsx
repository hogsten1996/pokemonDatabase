import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getPokemon : builder.query({
            query:()=> 'pokemon'
        }),
        getPokemonAbilities: builder.query({
            query: ()=> 'ability'
        }),
        getGenderById: builder.query({
            query: (id) => `gender/${id}`,
          }),
    }),
})

export const {useGetPokemonByNameQuery, useGetPokemonQuery, useGetPokemonAbilitiesQuery,
     useGetGenderByIdQuery} = pokemonApi
