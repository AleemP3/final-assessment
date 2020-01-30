import React, { useState, useEffect } from 'react';
import {Grid, Container, Card, Header, } from "semantic-ui-react";
import axios from "axios";
import Planet from "./Planet";

const Planets = () => {

  const [planets, setPlanets] = useState([]);
  const [planets1, setPlanets1] = useState([]);
  const [planets2, setPlanets2] = useState([]);
  const [planets3, setPlanets3] = useState([]);
  const [planets4, setPlanets4] = useState([]);
  const [planets5, setPlanets5] = useState([]);

  useEffect( () => {
    axios.get(`https://swapi.co/api/planets/`)
    .then(res => {
      setPlanets(res.data.results)
    })
    axios.get(`https://swapi.co/api/planets/?page=2`)
    .then(res => {
      setPlanets1(res.data.results)
    })
    axios.get(`https://swapi.co/api/planets/?page=3`)
    .then(res => {
      setPlanets2(res.data.results)
    })
    axios.get(`https://swapi.co/api/planets/?page=4`)
    .then(res => {
      setPlanets3(res.data.results)
    })
    axios.get(`https://swapi.co/api/planets/?page=5`)
    .then(res => {
      setPlanets4(res.data.results)
    })
    axios.get(`https://swapi.co/api/planets/?page=6`)
    .then(res => {
      setPlanets5(res.data.results)
    })
  }, [])
  
  return(
    <>
      <Container>
        <br />
        <Header as="h2" textAlign="center">Star Wars Planets</Header>
        <br />
      </Container>
      <Grid centered={true} >
        <Planet 
          planets={planets}
          planets1={planets1}
          planets2={planets2}
          planets3={planets3}
          planets4={planets4}
          planets5={planets5}
        />
      </Grid>
    </>
  );
};

export default Planets;