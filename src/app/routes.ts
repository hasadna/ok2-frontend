import Home from '../components/views/home/Home.vue';
import RegisterPage from '../components/views/loginPage/RegisterPage.vue';
import OneMinuteSpeech from '../components/views/parliamentTool/oneMinuteSpeech/OneMinuteSpeech.vue';

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
  {
    path: '/oneminutespeech',
    name: 'one-minute-speech',
    component: OneMinuteSpeech
  }
];

export default routes;
