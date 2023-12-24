import { Component } from "react";


export default class PokemonInfo extends Component {
   state = {
   pokemon: null,
   // loading: false,
   error: null,
   status:'idle',
}

   componentDidUpdate(prevProps, prevState) {
      if(prevProps.pokemonName !== this.props.pokemonName) {
         console.log('изменилось имя покемона');
         // console.log('prevProps.pokemonName: ', prevProps.pokemonName);
         // console.log('this.props.pokemonName: ', this.props.pokemonName);
this.setState({ status: 'pending' });


   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
         .then(response => {
            if (response.ok) {
               return response.json();
            }
            return Promise.reject(
               new Error(`Немає покемона з ім'ям ${this.props.pokemonName}`),
            )
         })
         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
         .catch(error => this.setState({ error, status: 'rejected' }) )
         }
      }
   
   
   render() {
      const {pokemon, error, status } = this.state;
      // const {pokemonName} = this.props;
      
      if(status === 'idle') {
         return <div>Введи імя покемону</div>
      }

      if(status === 'pending') {
         return  <div>Загружаем...</div>
      }

      if(status === 'rejected') {
         return <h1>{error.message}</h1>
      }

      if(status === 'resolved') {
         return  <div>
         <p>{pokemon.name}</p>
         <img src={pokemon.sprites.other['official-artwork'].front_default}
         alt={pokemon.name} width="240" />
         </div>
      }
      // return (
      // <div>
      //    {error && <h1>{error.message}</h1>}
      //    {loading && <div>Загружаем...</div>}
      //    {!pokemonName && <div>Введи імя покемону</div>}
      //    {pokemon && (
      //    <div>
      //       <p>{pokemon.name}</p>
      //       <img src={pokemon.sprites.other['official-artwork'].front_default}
      //       alt={pokemon.name} width="300" />
      //       </div>)
         
      //    }
      //    </div>
      //    );

   }

}