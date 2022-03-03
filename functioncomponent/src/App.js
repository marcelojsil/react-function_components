import './App.css';
import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
    <Container maxWidth="sm">
      <Typography variant='h3' align='center'>Formulário de Cadastro</Typography>
      <FormularioCadastro />    
    </Container>
    );
  }
}

export default App;