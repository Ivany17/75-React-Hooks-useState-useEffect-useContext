import './App.css';
import React, {useState} from 'react';
import FuncStopWatch from './components/FuncStopWatch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { UserContext, userContext } from './context';

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Ivan Yarem'
  });
  return(
    <>
      <button onClick={handlerBtn}>Switch</button>
      {isVisible && <FuncStopWatch />}
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <button>switch theme</button>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;