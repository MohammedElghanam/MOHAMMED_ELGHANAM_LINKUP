import logo from './logo.svg';
import './App.css';
import Register from './component/auth/register';
import Login from './component/auth/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatApp from './component/pages/chatApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index='/' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={<ChatApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
