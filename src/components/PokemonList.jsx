import { useGetPokemonQuery } from '../reducers/PokemonApi';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.results) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {data.results.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;