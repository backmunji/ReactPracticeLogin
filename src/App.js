import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyPage from './myPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path ='/1' element={<About/>} />
          <Route path= '/2' element={<MyPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
