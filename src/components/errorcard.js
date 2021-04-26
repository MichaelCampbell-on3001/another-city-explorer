import React from 'react';
import Card from 'react-bootstrap/Card';


export default class ErrorCard extends React.Component {
  render() {
    return(
      <Card style={{ minWidth: '18rem' }}>
        <Card.Img
          variant='top'
          src={`https://images.app.goo.gl/JBrwsqjRj8PSnpcB8`}
          alt='Da-what!'
        />
        <Card.Body>
          <Card.Title>
        What in the what!
          </Card.Title>
          <Card.Text>{this.props.error.message}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}