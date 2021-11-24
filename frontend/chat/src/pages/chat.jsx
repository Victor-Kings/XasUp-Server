import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';


const Chatbox = () => {
   
    const [message, updateMessage] = useState('')
    const [messages, updateMessages] = useState([])

    const handleFormSubmit = () => {
      updateMessages([...messages, message])
    }

    const handleChange = event => {
      console.log(event)
      updateMessage(event);
    }
console.log(messages)
  return (
    <Grid container style={{maxWidth: '700px', justifyContent: 'center', margin: '20px auto auto auto'}} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} backgroundColor="#4169E1" style={{WebkitBorderTopLeftRadius: '10px', WebkitBorderTopRightRadius: '10px', height: '50px'}}>
      <h2 style={{margin: '10px auto auto'}}>Chatzaum bolado</h2>
      </Grid>
      <Grid item xs={12} backgroundColor="#B0C4DE" style={{height: '700px'}}>
      <ul className="list">
          { messages.map((m, index) => (
              <li
                  style={{listStyle: 'none', textAlign: 'right', padding: '1rem'}}
                  key={index}
              >
                  <span style={{border: '1px', borderRadius: '5px', display: 'inline-block',listStyle: 'none', marginBottom: '1rem', backgroundColor: '#89ddff', borderColor: '#1abeff',padding: '6px'}}>
                      {m}
                  </span>
              </li>
          ))}
      </ul>
      </Grid>
      <Grid item xs={12} backgroundColor="#4682B4" style={{WebkitBorderBottomLeftRadius: '10px', WebkitBorderBottomRightRadius: '10px', height: '50px'}}>
        <div style={{display: 'flex'}}>
        <input
            style={{width: '80%', height: '25px',marginTop: '10px',borderRadius: '5px', borderStyle: 'none', outlineStyle: 'none'}}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Digite uma mensagem..."
            type="text"
            value={message}
        />
        <button style={{margin: '8px auto auto auto', fontSize: '1.0rem', fontFamily: 'monospace', color: 'green', fontWeight: 'bold', borderRadius: '3px', borderStyle: 'none', height: '2rem'}} onClick={handleFormSubmit}>Enviar</button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Chatbox;
