import React from "react";
import styled from 'styled-components';

const Welcome = styled.div`
  max-width:1000px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin:30px auto;
  height:1000px;
  font-family: 'Tauri', sans-serif;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <p>Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.</p>
        <img
          className="main-img"
          src="http://vignette4.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png/revision/latest?cb=20160907114210"
          alt="rick and morty"
        />
      </Welcome>
    </section>
  );
}
