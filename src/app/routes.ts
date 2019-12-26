import Home from '../components/views/home/Home.vue';
import OneMinuteSpeech from '../components/views/parliamentTool/oneMinuteSpeech/OneMinuteSpeech.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/oneminutespeech',
    name: 'one-minute-speech',
    component: OneMinuteSpeech
  }
];

export default routes;
