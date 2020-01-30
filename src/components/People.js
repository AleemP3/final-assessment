import React from 'react';
import {Grid, Card, } from "semantic-ui-react";
import { Link } from "react-router-dom"

const People = (props) => {

  return(
    <>
    {props.people.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 29)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                  Gender: {person.gender} 
                </Card.Description>
                <Card.Description>
                  Height: {person.height}
                </Card.Description>
                <Card.Description>
                  Birthday: {person.birth_year}
                </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
    {props.people1.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
    {props.people2.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people3.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people4.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people5.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people6.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people7.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.people8.map(person => (
      <div>
        <br />
        <Grid.Row>
          <Card key={person.id} as={Link} to={`/person/${person.url.slice(28, 30)}`}>
            <Card.Header as="h3" textAlign="center">{person.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Gender: {person.gender}
                  </Card.Description>
                  <Card.Description>
                    Height: {person.height}
                  </Card.Description>
                  <Card.Description>
                    Birthday: {person.birth_year}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
    </>
  );
};

export default People; 