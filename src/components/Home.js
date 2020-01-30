import React, { useState, useEffect } from 'react';
import {Grid, Container, Card, Header, } from "semantic-ui-react";
import swapi from "swapi-node";
import People from "./People";
// const swapi = require('swapi-node');
import axios from "axios";

const Home = () => {
  // const proxyurl = "https://shrouded-mountain-55024.herokuapp.com/";

  const [people, setPeople] = useState([]);
  const [people1, setPeople1] = useState([]);
  const [people2, setPeople2] = useState([]);
  const [people3, setPeople3] = useState([]);
  const [people4, setPeople4] = useState([]);
  const [people5, setPeople5] = useState([]);
  const [people6, setPeople6] = useState([]);
  const [people7, setPeople7] = useState([]);
  const [people8, setPeople8] = useState([]);
 

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?page=${1}`).then(res => {
      setPeople(res.data.results)
    })
    axios.get( `https://swapi.co/api/people/?page=${2}` ).then(res => {
      setPeople1(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${3}`).then(res => {
      setPeople2(res.data.results)
    })
    axios.get( `https://swapi.co/api/people/?page=${4}`).then(res => {
      setPeople3(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${5}`).then(res => {
      setPeople4(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${6}`).then(res => {
      setPeople5(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${7}`).then(res => {
      setPeople6(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${8}`).then(res => {
      setPeople7(res.data.results)
    })
    axios.get(`https://swapi.co/api/people/?page=${9}`).then(res => {
      setPeople8(res.data.results)
    })

  }, [])

  return( 
    <>
    <Container>
      <br />
      <Header as="h2" textAlign="center">Star Wars People</Header>
      <br />
    </Container>
      <Grid centered={true} >
          <People 
            people={people} 
            people1={people1} 
            people2={people2}  
            people3={people3}  
            people4={people4}  
            people5={people5}
            people6={people6}
            people7={people7}
            people8={people8}
            />
      </Grid>
    </>
  );
};

export default Home;
