import React, { useEffect, useState } from 'react';
import './App.css'

function App({ title }) {
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    if (password === 'feijao') setIsOpen(true);
    else setIsOpen(false);
  }, [password])

  const setLocked = () => {
    setPassword('');
    setIsOpen(false);
  }

  return (
    <div className="container">
      {title && <h1 data-testid="title">{title}</h1>}

      <input type="text" data-testid="input-password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <div className="content">
        {isOpen ? (
          <button data-testid="button-unlocked" onClick={() => setLocked()}>
            Destravado
          </button>
        ) : (
          <button data-testid="button-locked">
            Travado
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
