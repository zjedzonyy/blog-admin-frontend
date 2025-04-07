import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupForm from '../components/SignUpForm'
import Homepage from '../components/Homepage'
import LoginForm from '../components/LoginForm'
import Posts from '../components/Posts'
import Post from '../components/Post'
import NewPost from '../components/NewPost'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: 'homepage', element: <Homepage />},
      { path: 'signup', element: <SignupForm />},
      { path: 'login', element: <LoginForm />},
      { path: 'posts', element: <Posts />},
      { path: 'posts/:id', element: <Post />},
      { path: 'create-post', element: <NewPost />},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
