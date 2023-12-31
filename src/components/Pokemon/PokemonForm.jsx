import { Component } from "react";
import {ImSearch} from 'react-icons/im';
import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const styles = {form: {marginBottom: 20}};

export default class PockemonForm extends Component {

   state = {
      pokemonName: '',
   };

   handleNameChange = event => {
      this.setState({pokemonName: event.currentTarget.value.toLowerCase()});
   };

   handleSubmit = event => {
      event.preventDefault();
      if (this.state.pokemonName.trim() === '') {
         // alert('Введіть імя покемона.');
         toast.error("Введіть імя покемона!");
         return;
      }
this.props.onSubmit(this.state.pokemonName);

      // this.props.onSubmit(this.state.pokemonName);
      this.setState({pokemonName: ''});

   };

   render() {
      return (
         <form onSubmit={this.handleSubmit} style={styles.form}>
            <input type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}/>
            <button type="submit">
               <ImSearch style={{marginRight: 8}} />
               Знайти
            </button>
         </form>
      )
   }
}