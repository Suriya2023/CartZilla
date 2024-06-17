import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Content from './Component/FlexContent'
import CardSection from './Component/CardSection';
import FlexContent from './Component/FlexConTent2';
import Card2 from './Component/Card2';
import CarOusel from './Component/CarOusel';

function App() {
  // const [mode, setMode] = useState("light")
  // const togglemode = () => {
  //   if(mode === 'light'){
  //     setMode('dark')
  //     document.body.style.background = "black"
  //     document.body.style.color = "white"
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.background = "white"
  //     document.body.style.color = "dark"
  //   }
  // }

  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white"
  });

  const toggleBtn = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black"



      })


    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white"
      })

    }
  }
  return (
    <>
      <Navbar toggleBtn={toggleBtn} mystyle={mystyle} />
      <Content mystyle={mystyle} />
      <CardSection mystyle={mystyle} />
      <FlexContent mystyle={mystyle} />
      <Card2 mystyle={mystyle} />
      <CarOusel mystyle={mystyle}/>

    </>

  );
}

export default App;
