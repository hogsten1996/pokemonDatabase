import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Pokemon Database
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

