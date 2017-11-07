new Vue({
	el:'#vue-app',
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		// addToA:function(){
		// 	console.log('a');
		// 	return this.age + this.a;
		// },
		// addToB:function(){
		// 	console.log('b');
		// 	return this.age + this.b;
		// }
	},
	computed:{
		addToA:function(){
			console.log('a1');
			return this.age + this.a;
		},
		addToB:function(){
			console.log('b1');
			return this.age + this.b;
		}
	}
});

/* 
	methods中的方法,无论点击哪个,所有都会被执行

computed计算属性:
	computed: 计算属性, 和方法methods使用方式极度相似
	使用场景: 在处理频繁调用方法时(如搜索),建议使用计算属性
	使用规则: 计算属性在调用时,不能加方法()
*/