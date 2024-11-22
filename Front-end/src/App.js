import logo from './logo.svg';
import './App.css';
import Register from './component/auth/register';
import Login from './component/auth/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatApp from './component/pages/chatApp';
import Test from './component/pages/test';
import Notfound from './component/pages/Notfound';
import Protected from './hooks/useProtected';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index='/' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={<ChatApp />} />
          <Route 
            path='/test' 
            element={ 
              <Protected>
                <Test />
              </Protected>
            }
          />
          <Route path='/notfound' element={ <Notfound /> } />
                    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
