import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import store from "./store.js";
import './index.css'
import {Routes, BrowserRouter, Route} from "react-router-dom";
import PokemonList from './components/PokemonList.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <div>
                <PokemonList />
              </div>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
