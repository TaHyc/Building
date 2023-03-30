import Header from './pages/Header/Header';
import Main from "./pages/Main/Main";
import './App.css';
import Katalog from "./pages/Katalog/Katalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="appWrapContent">
        <Header/>
        <Routes>
        <Route path='' element={ <Main /> } />
        <Route path='/katalog' element={ <Katalog /> } />

        

        </Routes>
     
    </div>
      </BrowserRouter>  
  );
}

export default App;
