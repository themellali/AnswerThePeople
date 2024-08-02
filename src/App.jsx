import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Answer from './components/Answer'
import KeywordDetails from './pages/KeywordDetails'

const App = () => {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route index path="/answer-the-people" element={<Answer />}/>
          <Route path='/keyword-details/are' element={<KeywordDetails/>}/>
        </Routes>
      </Dashboard>
    </Router>
  )
}

export default App