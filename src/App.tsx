import { useState } from "react";
import styled from "styled-components";
import Notes from "./components/Notes";
import NavBar from "./components/NavBar";

function App() {

  const [count, setCount] = useState(0);

  

  return (
    <>
      <Container>
        <NavBar/>

         
        <Notes/>
      </Container>
    </>
  );
}
;




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



export default App;
