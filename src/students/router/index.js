/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-02-20 15:00:14
 * @LastEditTime: 2020-02-20 15:33:28
 */
const Login = () => import('@/students/page/login');
const Register = () => import('@/students/page/register');
const Home = () => import ('@/students/page/home');
const NotFount = () => import('@/students/page/error/404')

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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      name: '404',
      component: NotFount
    },
]
