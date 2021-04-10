import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import Icons from 'uikit/dist/js/uikit-icons';
import Vue from 'vue';
import Host from './Host';

(UIkit.use as (UIkit: object) => void)(Icons);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	components: {
		Host,
	},
	template: '<Host/>',
});
