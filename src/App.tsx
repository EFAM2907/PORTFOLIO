import { useEffect, useState } from "react";
import Landing from './components/Landig'
import Principal from './components/Principal'
import './App.css';

const LANDING_DURATION_MS = 1500

function App() {
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), LANDING_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return showMain ? <Principal /> : <Landing />
}

export default App;
