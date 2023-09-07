import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery} from '../reducers/PokemonApi';

const PokemonDetail = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.abilities) {
    return <div>No data available</div>;
  }

  return (
    <div className='centerMe'>
      <h1 style={{color: 'white'}}>{data.name}</h1>
      <h2 style={{color: 'white'}}>Abilities</h2>
      <ul style={{color: 'white'}}>
        {data.abilities.map((abilityInfo, index) => (
          <li key={index}>{abilityInfo.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
