import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ExtSearchBar from './ExtSearchBar'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://127.0.0.1:8000/api/login/', {
      const response = await axios.post('/api/login/', {
        username,
        password,
      });

    console.log(response.data)
    navigate('/admin')  

    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <ExtSearchBar/>
      <div style={{display: 'flex', width: '20vw', margin: 'auto', position: 'relative', top: '20vw', flexDirection: 'column', gap: '2vw', padding: '2vw', backgroundColor: '#ddd', borderRadius: '1vw'}}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{backgroundColor: '#fff', border: '0', }}>Iniciar sesión</button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default Login;