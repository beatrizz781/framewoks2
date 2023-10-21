import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';


class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias')
      .then(response => response.json())
      .then(noticias => this.setState({ noticias }))
      .catch(error => console.error('Erro na solicitação da API: ', error));
  }

  formatarData(data) {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  render() {
    const { noticias } = this.state;

    return (
      <Container>
        <br />     <br />
        <div className="App">
          {noticias.map(noticia => (
            <div key={noticia.id_noticia}>
              <Typography variant="h5">{noticia.titulo}</Typography>
              <Typography variant="body1">{noticia.noticia}</Typography>
              <Typography variant="caption"><strong>Autor:</strong> {noticia.autor}</Typography>
              <Typography variant="caption">Data de Criação: {this.formatarData(noticia.data_criacao)} </Typography>
              <Typography variant="caption">Data da Notícia: {this.formatarData(noticia.data_noticia)}</Typography>
              <hr />
              <br />
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
