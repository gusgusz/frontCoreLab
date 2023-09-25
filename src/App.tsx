import { useState } from "react";
import styled from "styled-components";
import image from "./assets/notas.png";
import {Star} from '@styled-icons/bootstrap/Star';
import {Pencil} from '@styled-icons/evil/Pencil';
import {ColorFill} from '@styled-icons/boxicons-solid/ColorFill';
import {DeleteOutline} from '@styled-icons/typicons/DeleteOutline'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <NavBar>
          <div>
            <img src={image}></img>
            <h2>CoreNotes</h2>
            <input type="text" id="searchInput" placeholder="Pesquisar notas" />
          </div>
        </NavBar>

        <Content>
          <h1>Favoritas</h1>
          <div>
            
          <Card>
              <div>
              <h2>Titulo</h2>
              <StyledButton>
             <STar></STar>
             </StyledButton>
              </div>
              <p>Descrição</p>
              <Options>
  <div>
    <StyledButton>
      <PencilIcon />
    </StyledButton>
    <StyledButton>
      <ColorF />
    </StyledButton>
  </div>
  <StyledButton>
    <Delete />
  </StyledButton>
</Options>
            </Card>
            
          </div>
        </Content>
      </Container>
    </>
  );
}
;


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

const NavBar = styled.div`
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
      font-family: "Roboto", sans-serif;
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
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #d9d9d9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow-y: scroll;
`;

const Content = styled.div`
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

const Card = styled.div`
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

export default App;
