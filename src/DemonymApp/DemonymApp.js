import React, { Component } from 'react';
import './DemonymApp.css'

import Demonym from './Demonym';
import CountrySelector from './CountrySelector';


class DemonymApp extends Component {
    state = {
        countries: [],
        selected: null
    };

    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(response => response.json())
        .then(data => {
            const countries = Object.keys(data)
            .map(key => data[key].item[0]);
            this.setState({
                countries
            });
    });
}
    
    render() {
        const demon = this.state.selected
        ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
        : <div className="demonym_app__placeholder">Select a country above</div>
    return (
      <div className="demonym_app">
        <CountrySelector countries={this.state.countries}/>
        {demon}
      </div>
    );
  }
}

export default DemonymApp;