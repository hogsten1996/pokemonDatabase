import { useGetPokemonQuery} from '../reducers/PokemonApi';
import { Link as RouterLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import '../index.css';

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="center-content">
        <Typography className="center-text" variant="h6">
          Error: {error.message}
        </Typography>
      </Container>
    );
  }

  if (!data || !data.results) {
    return (
      <Container className="center-content">
        <Typography className="center-text" variant="h6">
          No data available
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="center-content">
      <Typography className='pokeList' variant="h4">
        Pokémon List
      </Typography>
      <List>
        {data.results.map((pokemon, index) => (
          <ListItem className='listItem' key={index} component={RouterLink} to={`/pokemon/${pokemon.name}`}>
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PokemonList;
