import { useState } from 'react';
import Grid from '@mui/material/Grid';

export function Chatbox(){
   
    const [message, updateMessage] = useState<string>('')
    const [messages, updateMessages] = useState<string[]>([])

    const handleFormSubmit = () => {
      updateMessages([...messages, message])
    }

    const handleChange = (event: any) => {
      console.log(event)
      updateMessage(event);
    }
  return (
    <Grid container style={{maxWidth: '700px', justifyContent: 'center', margin: '20px auto auto auto'}} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} style={{WebkitBorderTopLeftRadius: '10px', WebkitBorderTopRightRadius: '10px', height: '50px', backgroundColor: 'gray'}}>
      <h2 style={{margin: '10px auto auto'}}>Chatzaum bolado</h2>
      </Grid>
      <Grid item xs={12} style={{height: '700px'}}>
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
      <Grid item xs={12} style={{WebkitBorderBottomLeftRadius: '10px', WebkitBorderBottomRightRadius: '10px', height: '50px'}}>
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

