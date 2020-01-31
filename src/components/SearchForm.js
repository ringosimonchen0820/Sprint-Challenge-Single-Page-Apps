import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';


const FormInput = styled.form`
  text-align:center;
  padding:15px;
`

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

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState('')

  const [searchResults, setSearchResults] = useState([])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const data = response.data.results
      const results = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm)
      })
      setSearchResults(results)
    })
    
  },[searchTerm])

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  return (
    <section className="search-form">
      <FormInput>
      <input
        type="text"
        placeholder="Search"
        name="textfield"
        value={searchTerm}
        onChange={handleChange}
      />
      </FormInput>
      <ul>
    {
      searchResults.map(item => {
        return (
        <Content key={item.id}>
          <Link to={`/character/${item.id}`}>
            <img src={item.image} alt="character profile" />
            <Title>Name: {item.name}</Title>
            <CharacterContent>Species: {item.species}</CharacterContent>
            <CharacterContent>Status:{item.status}</CharacterContent>
          </Link>
        </Content>
        )
      })
    }
      </ul>
    </section>
  );
}
