import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
// import Superagent

class Weather extends React.Component {
    render() {
        return(
            this.props.weather.map((day, index) =>
                <ListGroup.Item key={index}>
                    <FontAwesomeIcon icon={faCloudSunRain} className="mr-sm-2"/>
                    {`
                    ${day.date}
                    ${day.forcast}
                    `}
                </ListGroup.Item>
            )
        );
    }
} 

export default Weather;