import React, { useState, useEffect } from 'react';
import {Grid, Container, List, Header, } from "semantic-ui-react";
// import swapi from "swapi-node";
import axios from "axios";


const Person = (props) => {

  const proxyurl = "https://shrouded-mountain-55024.herokuapp.com/";

  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/${props.match.params.id}/`).then(res => {
      console.log(res.data)
      setPerson(res.data)
      
      axios.get(res.data.homeworld)
      .then( res => {
        console.log(res.data)
        setPlanet(res.data)
      })
    })
  }, [])

  return(
    // <Grid.Row>
    <Container>
      <br />
      <Grid.Column>
        <List horizontal relaxed>
          <List.Item><Header as="h1">{person.name}</Header></List.Item>
          <List.Item>
            <Header>Height: {person.height}</Header>
          </List.Item>
          <List.Item>
            <Header>Mass : {person.mass}</Header>
          </List.Item>
          <List.Item>
            <Header>Birthday : {person.birth_year}</Header>
          </List.Item>
        </List>
        <hr />
        <List>
          <List.Item>
            <Header as="h2">Home Planet : {planet.name}</Header>
          </List.Item>
          <List.Item>
            <Header as="h3">Climate : {planet.climate}</Header>
          </List.Item>
          <List.Item>
            <Header as="h3">Gravity : {planet.gravity}</Header>
          </List.Item>
          <List.Item>
            <Header as="h3">Terrain : {planet.terrain}</Header>
          </List.Item>
        </List>
      </Grid.Column>
    </Container>
    // </Grid.Row>
  )
}

export default Person; 