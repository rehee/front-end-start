import Vue = require('vue')
import VApp = require('./vapp.vue')

// tslint:disable-next-line:no-unused-new
new Vue({
	el: '#app',
	render: (h) => h(VApp),
})
