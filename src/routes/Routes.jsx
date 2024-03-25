
import { createBrowserRouter } from "react-router-dom";

import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'


export const router = createBrowserRouter([
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
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&&top=7')
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
        },
        
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>
        }
      ]
    },
    
    
  ])