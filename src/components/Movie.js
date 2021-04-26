import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export default class Movies extends React.Component {
  render(){
    return(
      <CardColumns>

        {
          this.props.movies.map((movie,index) =>
          <Card key={index}>
            <Card.Img src={movie.img_url || "https://www.flickr.com/photos/cat-sidh/48574513541"} alt={movies.title}/>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>{movie.released_on}</Card.Text>
              <Card.Text>{movie.average_votes}</Card.Text>
              <Card.Text>{movie.total_votes}</Card.Text>
              <Card.Text>{movie.popularity}</Card.Text>
            </Card.Body>
          </Card>
          )
        }
      </CardColumns>
    );
  }
}