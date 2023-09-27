import styled from "styled-components";
import { useState, useEffect } from "react";
import {Star} from '@styled-icons/bootstrap/Star';
import {Pencil} from '@styled-icons/evil/Pencil';
import {ColorFill} from '@styled-icons/boxicons-solid/ColorFill';
import {DeleteOutline} from '@styled-icons/typicons/DeleteOutline';
import axios from "axios";
import  Url  from "../constant/url";
import Token from "../constant/token";
import Swal from 'sweetalert2';



export default function Card(props: any){


  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.card.title);
  const [editedText, setEditedText] = useState(props.card.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Send edited data to the API
    const updatedData = {
      title: editedTitle,
      text: editedText,
    };

    axios.put(`${Url}cards/${props.card.id}`, updatedData, {
      headers: {
        'Authorization': `Bearer ${Token}`
      }
    })
      .then(res => {
        console.log('Card editado com sucesso:', res.data);
        setIsEditing(false);
      })
      .catch(err => {
        console.log('Erro ao editar o card:', err);
      });
  };

  const editCard = (cardId: number, updatedData: any) => {
    axios.put(`${Url}cards/${cardId}`, updatedData, {
      headers: {
        'Authorization': `Bearer ${Token}`
      }
    })
    .then(res => {
      console.log('Card editado com sucesso:', res.data);
    })
    .catch(err => {
      console.log('Erro ao editar o card:', err);
    });
  }
  

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
      if (result.isConfirmed) {
        axios.delete(`${Url}cards/${props.card.id}`, {
          headers: {
            'Authorization': `Bearer ${Token}`
          }
        })
        .then(res => {
       props.setControl(!props.control);
          console.log('Card excluído com sucesso');
        })
        .catch(err => {
          console.log('Erro ao excluir o card', err);
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
 
   
  }
  

      
           
          return <Cardd >
              <div>
              <h2>{props.card.title}</h2>
              <StyledButton>
             <STar></STar>
             </StyledButton>
              </div>
              <p>{props.card.text}</p>
              <Options>
  <div>
    <StyledButton>
      <PencilIcon />
    </StyledButton>
    <StyledButton>
      <ColorF />
    </StyledButton>
  </div>
  <StyledButton onClick={()=>handleDelete()}>
    <Delete />
  </StyledButton>
</Options>
            </Cardd>
      
        
    
}
const Cardd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 330px;
  height: 380px;
  border-radius: 25px;
  margin: 10px;
  
  

  > div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ccc;
    
    h2 {
    font-family: "Roboto", sans-serif;
    color: #464646;
    font-weight: 400;
    font-size: 16px;
    margin-left: 12px;
  }
 
  }
  p{
    font-family: Inter;
    font-size: 12px;
    font-weight: 300;
    line-height: 4px;
    color: #455464;
    margin-left: 12px;
    height: 260px;
  }
 
`;
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;

  `;

const StyledButton = styled.button`
background-color: transparent;
width: 40px;
height: 40px;
border: none;
cursor: pointer;
:hover{
  background-color: #ebdaa4;
  border-radius: 48%;
}
`;


const STar = styled(Star)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
const PencilIcon = styled(Pencil)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  
`;

const ColorF = styled(ColorFill)`
  width: 24px;
  height: 24px;
  margin-left: 12px;

  
`;

const Delete = styled(DeleteOutline)`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  
`;
