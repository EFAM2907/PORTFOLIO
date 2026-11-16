
import { useState} from "react";
import Landing from './components/Landig'
import Principal from './components/Principal'
import './App.css';

function App() {
  const [animacion, setAnimacion] = useState(false)
  setTimeout(() => {
    setAnimacion(true)
  }, 3000);

  return (
    <> 
     {animacion ?  <Principal/> :  <Landing/>  }
     </>
  );
}

export default App;
