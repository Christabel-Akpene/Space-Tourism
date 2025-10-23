import { Routes, Route } from "react-router"
import Layout from "./pages/layout"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Route>
      </Routes>
  )
}

export default App
