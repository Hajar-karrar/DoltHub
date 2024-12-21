import { Routes,Route ,useLocation} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Calcul from './Calcul';
import AllList from './AllListe';
import Api from './Api';
import Todo from './Todo';
import { LanguageProvider } from "./LanguageContext";
function App() {

  const location = useLocation();
  const hideNavPaths = ["/calcul", "/list", "/api"];
  const showNav = !hideNavPaths.includes(location.pathname);


  return (
    <div className="App">
      {showNav && <Header />}
      <LanguageProvider>
     
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/calcul' element={<Calcul/>}/>
          <Route path="/list" element={<AllList/>}/>
          <Route path="/api" element={<Api/>}/>
          <Route path="/todo" element={<Todo/>}/>
      </Routes>
     
    </LanguageProvider>
    </div>
  );
}

export default App;
