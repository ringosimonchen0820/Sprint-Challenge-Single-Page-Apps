import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const Content = styled.div`
  max-width:1000px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:30px auto;
  font-family: 'Tauri', sans-serif;
`

const Title = styled.h3`
  text-align:center;
  color:white;
  text-decoration:none;
`
const CharacterContent = styled.p`
  text-align:center;
  color:white;
  text-decoration:none
`


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect


  const [characterData, setCharacterData] = useState([])


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const character = response.data.results
        setCharacterData(character);
      })
      .catch(error => {
        console.log('uhh theres a problem captain', error)
      })

  }, []);

  return (
    <section className="character-list">
      {
        characterData.map(item => {
          return (

            <Content key={item.id}>
              <Link to={`/character/${item.id}`}>
              <img src={item.image} alt="character profile" />
              <Title> Name: {item.name}</Title>
              <CharacterContent> Species: {item.species}</CharacterContent>
              <CharacterContent> Status: {item.status}</CharacterContent>
              </Link>
            </Content>
          )
        })
      }
    </section>
  );
}
