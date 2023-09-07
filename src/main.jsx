import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Navbar from './components/Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar /> 
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


