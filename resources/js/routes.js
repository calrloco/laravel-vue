//importiamo i componenti che ci servono
import ExampleComponent from './components/ExampleComponent';
import Example2 from './components/Example2';
import Bookables from './bookables/Bookables';
//importiamo vue router
import VueRouter from 'vue-router';

// per ogni rotta ci servono 2 parametri
const routes = [
    {
    //path rotta
    path: '/',
    //componente doppiamo specificare dove fare il render///
    component:Bookables,

    //nome rotta
    name:'home'
    },
    {
        //path rotta
        path: '/second',
        //componente doppiamo specificare dove fare il render///
        component:Example2,
    
        //nome rotta
        name:'second'
        },
];
const router = new VueRouter({
    routes,
    mode: 'history',
});
export default router;