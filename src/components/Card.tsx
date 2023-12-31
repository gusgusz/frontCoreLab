import  { useState } from 'react';
import styled from 'styled-components';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import {Star} from '@styled-icons/bootstrap/Star';
import { Pencil } from '@styled-icons/evil/Pencil';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline';
import { Save } from 'styled-icons/bootstrap';
import axios from 'axios';
import Url from '../constant/url';
import Token from '../constant/token';
import Swal from 'sweetalert2';


interface CardContainerProps {
  isEditing: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  width: 330px;
  height: 380px;
  border-radius: 25px;
  margin: 10px;
  word-wrap: break-word; 
  white-space: normal;
  flex-wrap: wrap;
  padding-right: 4px;
  position: relative;

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
      display: ${({ isEditing }) => (isEditing ? 'block' : 'none')};
    }
  }

  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 300;
    line-height: 4px;
    color: #455464;
    margin-left: 12px;
    height: 260px;
    max-height: 260px;
    width: 320px;
    flex-direction: column;
    display:flex;
    word-spacing: 2px;
    line-height: 1.5;
  }

  textarea {
    width: 100%;
    height: 260px;
    padding: 12px;
    border: none;
    resize: none;
    display: block;
    word-wrap: break-word; 
  white-space: normal;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ebdaa4;
    border-radius: 48%;
  }
`;

const StarFillIcon = styled(StarFill)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  color: yellow;
  
`;

const SaveIcon = styled(Save)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;

const StarIcon = styled(Star)`
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

const DeleteIcon = styled(DeleteOutline)`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

  const ColorOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaaaaa;
  position: absolute;
  border-radius: 5px;
  bottom: -20px;
  left: 80px;
  flex-wrap: wrap;
  background-color: #fff;
  width:  430px;
  height: 76px;
  z-index: 1;
  button{
    width: 33px;
    height: 33px;
    border: none;
    cursor: pointer;
  border-radius: 50%;
  }
`;

export default function Card( props: any ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.card.title);
  const [editedText, setEditedText] = useState(props.card.text);
  const [is_Favorite, setIs_Favorite] = useState(props.card.is_favorite);
  const [color, setColor] = useState(props.card.color? props.card.color : '#fff');
  const [isColor, setIsColor] = useState(false);
  const colorOptions = [
    '#BAE2FF',
    '#B4FFDD',
    '#FFEBAC',
    '#FFCAB9',
    '#F99494',
    '#9DD6FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C'
   
  ]

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleFavorite = async () => {
    const updatedData = {
      is_favorite: !is_Favorite,
    };
  
    await axios
      .put(`${Url}cards/${props.card.id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log('Card editado com sucesso:', res.data);
        props.setControl(!props.control);
        setIs_Favorite(!is_Favorite); 
      })
      .catch((err) => {
        console.log('Erro ao editar o card:', err);
      });
  }
  
    const handleColor = (col : string) => {
    const updatedData = {
     color: col,
    };

    axios
      .put(`${Url}cards/${props.card.id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log('Cor editada com sucesso:', res.data);
        setIsEditing(false);
        setColor(col);
        props.setControl(!props.control)
        setIsColor(false);
      })
      .catch((err) => {
        console.log('Erro ao editar a cor do card:', err);
      });
  };


  const handleSave = () => {
    const updatedData = {
      title: editedTitle,
      text: editedText,
    };

    axios
      .put(`${Url}cards/${props.card.id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log('Card editado com sucesso:', res.data);
        setIsEditing(false);
        props.setControl(!props.control)
      })
      .catch((err) => {
        console.log('Erro ao editar o card:', err);
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não vai poder reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${Url}cards/${props.card.id}`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then(() => {
            console.log('Card excluído com sucesso');
            props.setControl(!props.control);
          })
          .catch((err) => {
            console.log('Erro ao excluir o card', err);
          });
        Swal.fire('Apagado!', 'Sua nota foi apagada com sucesso.', 'success');
      }
    });
  };

  return (
    <CardContainer isEditing={isEditing} color={color}>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Digite o título"
          />
        ) : (
          <h2>{props.card.title}</h2>
        )}
        <StyledButton onClick={handleFavorite}>
         { is_Favorite && <StarFillIcon /> }
          { !is_Favorite && <StarIcon />}
        </StyledButton>
      </div>
      <div>
        {isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="Digite o texto"
          />
        ) : (
          <p>{props.card.text}</p>
        )}
      </div>
      <Options>
      { !isEditing ?  ( <div>
       <StyledButton onClick={handleEdit}>
            <PencilIcon />
          </StyledButton>
          <StyledButton onClick={() => setIsColor(true)}>
            <ColorF />
          </StyledButton>
        </div>) :   (
          <div>
        <StyledButton onClick={handleSave}>
          <SaveIcon></SaveIcon>
        </StyledButton>
        </div>
      )}
        <StyledButton onClick={handleDelete}>
          <DeleteIcon />
        </StyledButton>
      </Options>
   { isColor && <ColorOptions>
      {colorOptions.map((c, i) => (
        <button key={i} onClick={() => handleColor(c)} style={{backgroundColor: c}}></button>
      ))}
    </ColorOptions>}
    </CardContainer>
  );
}
