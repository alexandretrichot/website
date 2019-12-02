import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter();

new Vue({
	router: router,
	el: '#app',
	template: '<App/>',
	components: { App }
}).$mount('#app');
