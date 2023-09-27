import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import  Url  from "../constant/url";
import Token from "../constant/token";

export default function Notes(props: any) {


  const [nTitle, setNTitle] = useState('')
  const [nText, setNText] = useState('')


  useEffect(() => {
  axios.get(`${Url}cards`, {
        headers: {
            'Authorization': `Bearer ${Token}`
        }
    })
    .then(res => {
      props.setCards(res.data);
    console.log(res.data, "resposta");
  })
    .catch(err => {
      console.log(err, "erro");
      props.setControl(!props.control);
    });
}, [props.control]);


const handleCreateCard = async() => {
  const newCard = {
    title: nTitle,
    text: nText,
  };

 await axios
    .post(`${Url}cards`, newCard, {
      headers: {
        'Authorization': `Bearer ${Token}`,
      },
    })
    .then((res) => {
      console.log('Card criado com sucesso:', res.data);
      props.setControl(!props.control);
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
            <input placeholder="Título"  onChange={(e) => setNTitle(e.target.value)}  value={nTitle}/>
          </div>
          <div>
            <textarea placeholder="Criar nota..." onChange={(e) => setNText(e.target.value)}  value={nText}></textarea>
          </div>
          <div>
            <button onClick={handleCreateCard}>Criar</button>
          </div>

           </Create>
     <h1>Favoritas</h1>
        <div>
          {props.cards.map((card: any) => {
            
            if(card.is_favorite === true){
              return <Card key={card.id} card={card} control={props.control} setControl={props.setControl}/>
            }
          }
          )}
          
        </div>
        <h1>Outras</h1>
        <div>
          {props.cards.map((card: any) => {
            
            if(card.is_favorite === false)
              return <Card key={card.id} card={card} control={props.control} setControl={props.setControl}/>
            
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
  height: 170px;
  margin: 10px;
  align-self: center;
  border: 1px solid #ccc;
  border-radius: 4px;

  div{  
    word-wrap: break-word; 
  white-space: normal;
}

  div > input{
    width: 100%;
    border: none;
    font-family: 'Roboto', sans-serif;
      color: #272525;
      font-weight: 400;
      font-size: 16px;
      margin-left: 12px;
  }
  div > textarea{
    width: 100%;
    border: none;
    resize: none;
    width: 100%;
    height: 80px;
    margin-left: 12px;
    
  }  
  div > button{
    background-color: #455464;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 80%;
    height: 30px;
    width: 70px;
    cursor: pointer;
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    height: 50px;

    h2 {
      font-family: 'Roboto', sans-serif;
      color: #464646;
      font-weight: 400;
      font-size: 16px;
      margin-left: 12px;
    }

 
  }
`;