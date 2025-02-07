import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartPage from '../pages/StartPage/index'
import QuizGame from '../pages/GamePage/index'


const route = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/quiz',
    element: <QuizGame />,
  },
])

const Router: React.FC = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default Router
