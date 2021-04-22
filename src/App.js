import React from "react";
import { Container, Form, Button, Card, Navbar, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      weather: [],
      movies: [],
      error: {},
      isError: false,
    };
  }

  getlocation = async (e) => {
  try{
    e.preventDefault();

    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    
    const resp = await axios.get(API);

    const weatherUrl = `http://localhost:3001/weather?lat=${resp.data[0].lat}&lon=${resp.data[0].lon}`;
      const weatherResp = await axios.get(weatherUrl);

      const moviesUrl =`http://localhost:3001/movies?city_name=${this.state.searchQuery}`;
      const moviesResp = await axios.get(moviesUrl);

      this.setState({
        location: resp.data[0],
        wearher: weatherResp.data,
        movies:moviesResp.data,
        isError:true,
      });
  }
};

render(){
  const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

  return (
    <Container fluid>
      <Navbar 
      bg="light"
      expand="lg"
      className="justify-content-md-space-between-mr-sm-2"
      >
        <Navbar.Brand>City Explorer</Navbar.Brand>
        <Form inline>
          <Form.Group>
            <Form.Control
            type="text"
            placeholder="City Name"
            className="mr-sm-2"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
          <Button variant="outline-success" type="submit" onClick={this.getLocation}
          >
            Explore
          </Button>
        </Form>
      </Navbar>


      
    </Container>
  )
}

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
