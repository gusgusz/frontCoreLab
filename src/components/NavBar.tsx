import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/notas.png';
import Token from '../constant/token'; 
import axios from 'axios';
import Url from '../constant/url'; 

const Navbar = styled.div`
  background-color: #fafafa;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  height: 54px;
  padding: 2px 5px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    margin-left: 10px;
    align-items: center;
    width: 80%;
    height: 80%;

    img {
      height: 45px;
      width: 45px;
      margin-right: 10px;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      color: #455464;
      font-weight: 300;
      font-size: 16px;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      color: #333;
      border-radius: 4px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      width: 50%;
      font-size: 13px;
      margin-left: 25px;
      min-width: 128px;
    }

    button {
      padding: 8px 16px;
      margin-left: 10px;
      font-size: 13px;
      cursor: pointer;
      background-color: #455464;
      color: #fff;
      border: none;
      border-radius: 4px;

      &:hover {
        background-color: #333;
      }
    }
  }
`;

function NavBar(props: any) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }

   
    const searchEndpoint = `${Url}cards/search`;

    axios
      .post(searchEndpoint, { search: searchTerm },  {
        headers: {
          'Authorization': `Bearer ${Token}`,
        },
      })
      .then((response) => {
        console.log('Search results:', response.data);
        props.setCards(response.data);
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    props.setControl(!props.control)
  };

  return (
    <Navbar>
      <div>
        <img src={image} alt="CoreNotes Logo" />
        <h2>CoreNotes</h2>
        <input
          type="text"
          id="searchInput"
          placeholder="Search notes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClearSearch}>Clear</button>
      </div>
    </Navbar>
  );
}

export default NavBar;