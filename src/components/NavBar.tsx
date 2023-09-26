import styled from "styled-components";
import image from "../assets/notas.png";

function NavBar(props: any) {
  return <Navbar>
    <div>
      <img src={image}></img>
      <h2>CoreNotes</h2>
      <input type="text" id="searchInput" placeholder="Pesquisar notas" />
    </div>
  </Navbar>
}

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
export default NavBar;