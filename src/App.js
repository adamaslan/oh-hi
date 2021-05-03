import React, {useState} from 'react';
import hii from './hii.jpg';
import './App.css';
import styled from 'styled-components';
import { css, ThemeProvider } from 'styled-components';

const Sup = styled.a`
display: flex;

font-size: 24px;
transition:ease 2.25s all;
color: blue;
:hover {
  font-size:48px;
  opacity:0.5;
}
@media (max-width:768 px){
  font-size:24px;
}
`


const Hii = styled.a`
color: white;
font-size: 36px;
transition:ease 0.25s all;
color:${props => props.color ? props.color : props.theme.primary.baseColor};
${props => props.primary && css`
font-size:48px;
color: yellow;
`} 
:hover {
  font-size:48px;
  opacity:0.5;
}
@media (max-width:768 px){
  font-size:24px;
}
`
const Hihi = styled(Hii)`
font-size: 18px;
color:r red;
`

const Bordy = styled.img`
border: 12px solid yellowgreen;
  border-radius: 9px;
  `


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  border: 12px solid yellowgreen;
  border-radius: 9px;
  `
  



const Body = styled.div`
text-align: center;
`

const theme = {
  primary: { 
    baseColor: "#00FF00"
}
}

function App() { 
  const [ primary, setPrimary]= useState (false)

  return (
    <ThemeProvider theme={theme}>
    <Body>
      <header className="App-header">
        <Bordy src={hii} />
       
        <p>
          
        </p>
         <Hihi> Hihi</Hihi>
        <Hii primary={primary} onClick={() => setPrimary(!primary)}
        >
          Hii
      
          </Hii>
      </header>
    </Body>
    <Grid>
        <Item>1</Item>
        <Item>2</Item>
        <Item><Sup>Sup</Sup></Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>   <Hii primary={primary} onClick={() => setPrimary(!primary)}
        >
          Hii
      
          </Hii></Item>
      </Grid>

    </ThemeProvider>
  );
}

export default App;
