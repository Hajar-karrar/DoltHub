import { Routes,Route ,useLocation} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Calcul from './Calcul';
import AllList from './AllListe';
import Api from './Api';
import Todo from './Todo';
import NotFound from './NotFound';
import { LanguageProvider } from "./LanguageContext";
import ThemeWrapper from './ThemeWrapper';
function App() {

  const location = useLocation();
  
  const hideNavPaths = ['/list', '/calcul' ,"/api"];
  const showNav =
    !hideNavPaths.includes(location.pathname) && !location.pathname.startsWith('/control');


  return (
    <div className="App">
      {showNav && <Header />}
      <LanguageProvider>
     
      <ThemeWrapper>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/calcul' element={<Calcul/>}/>
          <Route path="/list" element={<AllList/>}/>
          <Route path="/api" element={<Api/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      </ThemeWrapper>
     
    </LanguageProvider>
    </div>
  );
}

export default App;
