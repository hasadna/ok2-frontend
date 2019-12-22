import Home from '../components/views/home/Home.vue';
import RegisterPage from '../components/views/loginPage/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
];

export default routes;
