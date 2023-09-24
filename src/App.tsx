import { useState } from "react";
import styled from "styled-components";
import image from "./assets/notas.png";

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
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
            <Card>
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
            <Card>
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
            <Card>
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
            <Card>
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
            <Card>
              <h2>Titulo</h2>
              <p>Descrição</p>
            </Card>
          </div>
        </Content>
      </Container>
    </>
  );
}

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
  padding: 8px 20px;

  h2 {
    font-family: "Roboto", sans-serif;
    color: #464646;
    font-weight: 400;
    font-size: 16px;
  }
  p{
    font-family: Inter;
    font-size: 12px;
    font-weight: 300;
    line-height: 4px;
    color: #455464;
  }
`;

export default App;
