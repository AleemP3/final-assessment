import React from 'react';
import {Grid, Container} from "semantic-ui-react";
import { Route } from "react-router-dom" 
import Home from "./components/Home"; 
import Person from "./components/Person";
import Planets from "./components/Planets"
import Navbar from "./components/Navbar";


const App = () => {


  return(
    <>
    <Navbar />
    <Grid>
      <Grid.Row>
          <Route exact path="/" component={Home} />
          <Route exact path="/person/:id" component={Person} /> 
          <Route exact path="/planets" component={Planets} />
      </Grid.Row>
    </Grid>
    </>
  );
};

export default App;
