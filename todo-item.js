(function( window, undfined){
	// Define a new component called todo-item
	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li>This is a {{todo.text}}</li>'
	});
	var todo = new Vue({
		el: '#todo',
		data: {
			groceryList: [
				{ text: 'Vegetables' },
				{ text: 'Cheese' },
				{ text: 'Whatever else humans are supposed to eat' }
			]
		}
	});
}(window));
