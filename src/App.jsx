import React from 'react'
import "./App.css"
import Weather from './Weather.jsx';


function App() {

return (
<div className="App">
    <div className="container">
      <Weather defaultCity="Jamaica"/>
<footer>
  This project was coded by {''}  
  <a href="https://krystleportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" >{''}
  Krystle Leach</a> and is {''}
  <a href="https://github.com/krystleL21/my-react-app" target="_blank" rel="noopener noreferrer">
  open-sourced on GitHub</a> and {''}
  <a href="https://687bdb1c75721d4552893ca6--krystle-react-app.netlify.app/" target="_blank" rel="noopener noreferrer">
  hosted on Netlify</a>
</footer>
</div>
</div>
  );
}

export default App
