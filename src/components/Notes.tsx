import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import  Url  from "../constant/url";
import Token from "../constant/token";

export default function Notes(props: any) {

  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get(`${Url}cards`, {
        headers: {
            'Authorization': `Bearer ${Token}`
        }
    })
    .then(res => {
      setCards(res.data);
    console.log(res.data, "resposta");
  })
    .catch(err => console.log(err, "erro"));
}, []);

  
    
    return (
        <Contentt>
        <h1>Favoritas</h1>
        <div>
          
          {cards.map((card: any) => {
            
              return <Card key={card.id} card={card} />
            
          }
          )}
          
        </div>
      </Contentt>
    )
}

const Contentt = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 54px;
  h1 {
    color: #455464;
    margin-left: 30px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
  }
  div{
    display: flex;
    flex-wrap: wrap;
  }
`;