import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnime from 'vue-animejs';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueAnime);

Vue.config.productionTip = false;

const router = new VueRouter({
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});

new Vue({
    router: router,
    el: '#app',
    template: '<App/>',
    components: { App }
}).$mount('#app');
