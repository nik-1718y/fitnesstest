import React, { useState } from 'react'
import {ThemeProvider,styled} from "styled-components"
import{lightTheme} from "./utils/Themes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Contact from './pages/Contact';
import { useSelector } from 'react-redux';
import WorkoutSuggestion from "./pages/WorkoutSuggestion"



const Container=styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
function App() {
  // const[user,setUser]=useState(true)
  const{currentUser}=useSelector((state)=>state.user)
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {currentUser?(
        <Container>
         <Navbar currentUser={currentUser}/>
         <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/WorkoutSuggestion" exact element={<WorkoutSuggestion />} />
            </Routes>
      </Container>
      ):(
        <Container>
        <Authentication>
          
        </Authentication>
      </Container>
      )
      }
      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App

