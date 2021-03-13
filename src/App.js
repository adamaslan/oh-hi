import React, {useState} from 'react';
import hii from './hii.jpg';
import './App.css';
import styled from 'styled-components';
import { css, ThemeProvider } from 'styled-components';

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
    </ThemeProvider>
  );
}

export default App;
