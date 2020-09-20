import React, { Component } from 'react';
import './App.css';
import Containters from './components/Containers'
import axios from 'axios';

class App extends Component {

  constructor (){
    super()
    this.state ={
      TotalConfirmed: '',
      TotalDeaths: '',
      TotalRecovered: '',
      TotalCountryConfirmed: '',
      TotalCountryDeaths: '',
      TotalCountryRecovered: '',
      Country:''
    }
  }

  componentDidMount() {
    axios.get(`https://api.covid19api.com/world/total`)
      .then(res => {
        const Total = res.data;
        this.setState({ 
          TotalConfirmed: Total.TotalConfirmed,
          TotalDeaths: Total.TotalDeaths,
          TotalRecovered: Total.TotalRecovered
        });
        // console.log(this.state.TotalConfirmed);
      })

      axios.get(`https://api.covid19api.com/summary`)
      .then(res => {
        const AllCountries = res.data.Countries;
        const Country = AllCountries.map(countries => countries.Slug)
        this.setState({ 
          // TotalCountryConfirmed: TotalCountry.TotalConfirmed,
          // TotalCountryDeaths: TotalCountry.TotalDeaths,
          // TotalCountryRecovered: TotalCountry.TotalRecovered,
          Country: Country
        });
        // console.log(Country);
      })


  }

  render(){
    const ActiveCases = this.state.TotalConfirmed - (this.state.TotalRecovered + this.state.TotalDeaths)

    return (
      <div className='app'>
        <Containters ActiveCases={ActiveCases} 
        TotalConfirmed={this.state.TotalConfirmed} 
        TotalDeaths={this.state.TotalDeaths} 
        TotalRecovered={this.state.TotalRecovered}
        Country={this.state.Country}/>
      </div>
    );
  }
}

export default App
