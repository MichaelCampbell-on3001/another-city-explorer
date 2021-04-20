import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location {}
    }
  }

  getLocation = async () => {
    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`

    const response = await axios.get(apiUrl);

    const location = response.data[0];

    this.setState ({
      location,
    });
  }

  render() {
    
  }


}