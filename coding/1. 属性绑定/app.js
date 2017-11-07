new Vue({
	el:'#vue-app',
	data:{
		name:'henry',
		job:'web开发',
		website:'http://www.thenewstep.com',
		websiteTag:"<a href='http://www.thenewstep.com'>thenewstep</a>",
	},
	methods:{
		greet:function(time){
			return 'good ' + time + ' ' + this.name + '!'		// 有参数,this指向vue实例
			// return 'good morning'   // 无参数
		}
	}
});

/* 
	el: element - 需要控制的标签元素
	data: 用于存储各个类型的数据(array,object,string,number...)
	methods: 用于存储各种方法
	v-bind: 用于绑定某个属性(指令)
	v-html: 用于给某个标签绑定值为标签(html)的属性
*/