import { useNavigate } from "react-router-dom"
import { AlbumTitle } from "./components/AlbumTitle"
import { Router } from "./routes/Router"


function App () {
  const navigate = useNavigate()

  function handleClickBack () {
    navigate(-1)
  }
  return (
    <div>
      <h1>Album:</h1>
      <button onClick={handleClickBack}>Voltar</button>
      <hr />
      <Router />
    </div>
      
  )
}

export default App

