
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      }
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router = {router}></RouterProvider>
  </>,
)
