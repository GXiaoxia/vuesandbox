new Vue({
	el:'#vue-app',
	data:{
		colors:['pink','red','purple'],
		users:[
			{name:'henry1',age:30},
			{name:'henry2',age:40},
			{name:'henry3',age:50},
		]
	},
	methods:{
		
	},
	computed:{
	
	}
});

/* 
	v-for: 用于遍历数组和对象

	in: 是变量和属性的分割线
	变量: 随便起名字,和用的时候一致
	属性: 一定来自于data对象中
	数组: 遍历数组时, 默认传的值为数组元素,第二个值为下标
	对象: 遍历对象时, 第一个值是value,第二个值是key
*/