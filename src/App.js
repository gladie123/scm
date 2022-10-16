import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './routes/Contact';

import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';

function App() {

  /*const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [details , setDetails] = useState('')

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3000//api/register', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name, 
        email, 
        subject, 
        details,
      })
    })

    const data = await response.json()

    console.log(data)
  }
*/

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/training' element={<Training/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
