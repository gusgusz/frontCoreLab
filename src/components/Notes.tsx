import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import  Url  from "../constant/url";
import Token from "../constant/token";

export default function Notes(props: any) {

  const [cards, setCards] = useState([])
  const [control, setControl] = useState(false)
  const [nTitle, setNTitle] = useState('')
  const [nText, setNText] = useState('')


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
    .catch(err => {
      console.log(err, "erro");
      setControl(!control);
    });
}, [control]);


const handleCreateCard = () => {
  const newCard = {
    title: nTitle,
    text: nText,
  };

  axios
    .post(`${Url}cards`, newCard, {
      headers: {
        'Authorization': `Bearer ${Token}`,
      },
    })
    .then((res) => {
      console.log('Card criado com sucesso:', res.data);
      setControl(!control);
      setNTitle(''); 
      setNText(''); 
    })
    .catch((err) => {
      console.log('Erro ao criar o card:', err);
    });
};

  
    
    return (
        <Contentt>
           <Create>
          <div>
            <h2>Criar novo card</h2>
          </div>
          <div>
            <input placeholder="Título do card"  onChange={(e) => setNTitle(e.target.value)}  value={nTitle}/>
          </div>
          <div>
            <textarea placeholder="Digite o texto do card" onChange={(e) => setNText(e.target.value)}  value={nText}></textarea>
          </div>
          <div>
            <button onClick={handleCreateCard}>Criar</button>
          </div>

           </Create>
        <h1>Favoritas</h1>
        <div>
          {cards.map((card: any) => {
            
              return <Card key={card.id} card={card} control={control} setControl={setControl}/>
            
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

const Create = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 412px;
  height: 140px;
  border-radius: 25px;
  margin: 10px;
  align-self: center;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    h2 {
      font-family: 'Roboto', sans-serif;
      color: #464646;
      font-weight: 400;
      font-size: 16px;
      margin-left: 12px;
    }

    input {
      width: 70%;
      font-family: 'Roboto', sans-serif;
      color: #464646;
      font-weight: 400;
      font-size: 16px;
      margin-left: 12px;
      border: none;
      padding: 8px;
    }
  }
`;