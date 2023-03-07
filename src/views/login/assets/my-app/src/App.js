import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Maincomponent from './component/Maincomponent';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
    <Routes>
       <Route>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Maincomponent />} />
          <Route path="/" element={<Footer/>} />
          </Route>
    
      </Routes>
      </div>
  );
}

export default App;
