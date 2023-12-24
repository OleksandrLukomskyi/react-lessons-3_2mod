import { Component } from "react";
import {ToastContainer} from 'react-toastify';
import PokemonForm from "./Pokemon/PokemonForm";
import Pokemoninfo from "./Pokemon/Pokemoninfo";

import 'react-toastify/dist/ReactToastify.css';


 export default  class App extends Component {

  state = {
    // pokemon: null,
    // loading: false,
    pokemonName: '',
  }

  // componentDidMount () {
  //  this.setState({loading: true});

  //  setTimeout(() => { fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //   .then(res => res.json())
  //   .then(pokemon => this.setState({pokemon})).finally(() => this.setState({loading: false}));}, 2000)
  // }
  
  handleFormSubmit = pokemonName => {
    this.setState({pokemonName})
  }

  render() {
  return (
    <div
      style={{
        maxWidth: 1170, margin: '0 auto', padding: 20 }}
      >
    
     {/* {this.state.loading && <h1>Загружаем...</h1>} */}
     {/* {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
     <PokemonForm onSubmit={this.handleFormSubmit} />
     <Pokemoninfo pokemonName={this.state.pokemonName}/>
      <ToastContainer autoClose={3000} />
    </div>
  );
}f
};
