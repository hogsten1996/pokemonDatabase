import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery, useGetGenderByIdQuery} from '../reducers/PokemonApi';

const PokemonDetail = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(name);

  let genderData = null;
  const genderQuery = useGetGenderByIdQuery(data?.id || 1);
  if (genderQuery.data) {
    genderData = genderQuery.data;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.abilities) {
    return <div>No data available</div>;
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;

  return (
    <div className='centerMe'>
      <h1 style={{color: 'white'}}>{data.name}{genderData && ( <> - {genderData.name}</>)}</h1>
      <img className='image' src={imageUrl}/>
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
