
import './App.css';
import Login from './components/Login';
import StudentData from './components/StudentData';
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/student-data" element={<StudentData/>}/>
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
