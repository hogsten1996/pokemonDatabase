import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../reducers/PokemonApi';

const PokemonDetail = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.ability}</h2>
    </div>
  );
};

export default PokemonDetail;