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
  }

  render(){
    const ActiveCases = this.state.TotalConfirmed - (this.state.TotalRecovered + this.state.TotalDeaths)

    return (
      <div className='app'>
        <Containters ActiveCases={ActiveCases} 
        TotalConfirmed={this.state.TotalConfirmed} 
        TotalDeaths={this.state.TotalDeaths} 
        TotalRecovered={this.state.TotalRecovered}/>
      </div>
    );
  }
}

export default App
