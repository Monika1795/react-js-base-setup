import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTES} from './router';
import { RouteType } from './router/types';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {
        ROUTES.map(({path,id,Component}:RouteType)=>{
        return <Route key = {id} path={path} element = {<Component/>}/>
        })
      }
  </Routes>
  </BrowserRouter>
  );
}

export default App;
