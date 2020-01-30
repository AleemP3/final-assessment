import React from 'react';
import {Grid, Card, } from "semantic-ui-react";
import { Link } from "react-router-dom"

const Planet = (props) => {

  return(
    <>
    {props.planets.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                  Climate: {planet.climate} 
                </Card.Description>
                <Card.Description>
                  Gravity: {planet.gravity}
                </Card.Description>
                <Card.Description>
                  Terrain: {planet.terrain}
                </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
    {props.planets1.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Climate: {planet.climate}
                  </Card.Description>
                  <Card.Description>
                    Gravity: {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                    Terrain: {planet.terrain}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
    {props.planets2.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Climate: {planet.climate}
                  </Card.Description>
                  <Card.Description>
                    Gravity: {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                    Terrain: {planet.terrain}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.planets3.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Climate: {planet.climate}
                  </Card.Description>
                  <Card.Description>
                    Gravity: {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                    Terrain: {planet.terrain}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.planets4.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Climate: {planet.climate}
                  </Card.Description>
                  <Card.Description>
                    Gravity: {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                    Terrain: {planet.terrain}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      {props.planets5.map(planet => (
      <div>
        <br />
        <Grid.Row>
          <Card>
            <Card.Header as="h3" textAlign="center">{planet.name}</Card.Header>
              <Card.Content>
                <Card.Description>
                    Climate: {planet.climate}
                  </Card.Description>
                  <Card.Description>
                    Gravity: {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                    Terrain: {planet.terrain}
                  </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Row>
      </div>  
      ))}
      </>
  )}

  export default Planet;