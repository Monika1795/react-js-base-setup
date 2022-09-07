import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import RoutesWrapper from './router';
import './assets/styles/index.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
