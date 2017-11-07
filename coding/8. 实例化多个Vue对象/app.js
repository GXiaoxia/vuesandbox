var one = new Vue({
	el:'#vue-app-one',
	data:{
		title:'this is vue-app-one'
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return 'hello app-one';
		}
	}
});

var two = new Vue({
	el:'#vue-app-two',
	data:{
		title:'this is vue-app-two'
	},
	methods:{
		change:function(){
			one.title = 'this is';
		}
	},
	computed:{
		greet:function(){
			return 'hello app-two';
		}
	}
});

two.title = 'anything...';

