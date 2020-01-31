import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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
