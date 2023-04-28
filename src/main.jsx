import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import Welcome from './pages/Welcome';
import Quizpage from './pages/Quizpage';
import Details from './pages/Details';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'details',
        element: <Details />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'quiz',
            element: <Quizpage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
);
