import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import './index.css';
import 'remixicon/fonts/remixicon.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
