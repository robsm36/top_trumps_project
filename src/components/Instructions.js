/* eslint-disable max-len */
import React from 'react';
import style from '../card.module.css';

class Instructions extends React.Component {
  render() {
    return (
      <div>
        <div className={ style.nft }>
          <div className={ style.main }>
            <br />
            <p>
              Olá, Seja bem vindo(a) ao Criador de Trunfos!
              Aqui você poderá criar suas cartas de jogo personalizadas,
              ao melhor estilo da popular série de jogos Super-Trunfo.
              <br />
              <br />
              <br />
              Você deve preencher os campos do formulário com os dados da carta.
              <br />
              <br />
              Escolha um nome e crie uma descrição, insira um link de uma imagem para
              a sua carta, defina sua raridade e se ela é um Super-Trunfo (só pode haver um trunfo por baralho).
              <br />
              <br />
              Escolha o poder de cada atributo com um nuḿero entre 1 e 90.
              <br />
              A soma máxima de pontos não deve ultrapassar 210.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
