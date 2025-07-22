
import "./index.css";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Weather from './Weather.jsx';


function App() {


  return (
    <div className="App">
<Weather defaultcity="Jamaica"/>
<footer>
  This project was coded by <a href="https://krystleportfolio.netlify.app/" target="_blank" rel="noreferrer" >
Krystle Leach</a> and is <a href="https://github.com/krystleL21/my-react-app" target="_blank" rel="noreferrer">
open-sourced on GitHub</a> and <a href="https://687bdb1c75721d4552893ca6--krystle-react-app.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
</footer>
</div>
  );
}

export default App
