(function( window, undfined){
	var app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue!'
		}
	});
	var app2 = new Vue({
		el: '#app2',
		data: {
			message:  'You loaded this page on title ' + new Date()
		}
	});
	var app3 = new Vue({
		el: '#app3',
		data: {
			seen: true
		}
	});
	var app4 = new Vue({
		el: '#app4',
		data: {
			todos: [
				{ text: 'Learn JavaScript' },
				{ text: 'Learn Vue' },
				{ text: 'Build something awesome' }
			]
		}
	});
	var app5 = new Vue({
		el: '#app5',
		data: {
			message: 'Hello Vue.js!'
		},
		methods: {
			reverseMessage: function () {
				alert( "reverse" );
				this.message = this.message.split('').reverse().join('')
			}
		}
	});
	var app6 = new Vue({
		el: '#app6',
		data: {
			message: 'Hello Vue!'
		}
	});

}(window));
