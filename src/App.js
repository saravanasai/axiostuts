import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import "./App.css"
import ContactList from "./components/contactList/ContactList"
import NavBar from "./components/NavBar/NavBar"
import Home from "./Home"
import { routes } from "./Routes/Routes"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {routes.map(({ path, element }) => {
            return <Route exact path={path} element={element} />
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
