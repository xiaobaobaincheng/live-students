const Login = () => import('@/algorithm/page/login');
const Resister = () => import('@/algorithm/page/register');
const Home = () => import ('@/algorithm/page/home');
const NotFount = () => import('@/algorithm/page/error/404')

export default[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/resister',
      name: 'Resister',
      component: Resister
    },
    {
      path: '*',
      name: '404',
      component: NotFount
    },
]
