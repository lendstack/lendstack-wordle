import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './containers/Home.jsx'
import Login from './containers/Login.jsx'
import SignUp from './containers/SignUp.jsx'
import Game from './containers/Game.jsx'
import Error from './components/Error.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/game",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Game />
          </Suspense>
        ),
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
