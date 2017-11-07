// 组件
Vue.component('greeting',{
	template:"<p>{{name}} : Hello component! <button v-on:click='changeName'>changeName</button></p>",
	data:function(){
		return {
			name:'guo'
		}
	},
	methods:{
		changeName:function(){
			this.name = 'li';
		}
	}
});

new Vue({
	el:'#vue-app-one',
});

new Vue({
	el:'#vue-app-two',
});

/*
	component: 组件的作用是抽离Vue实例中的属性和方法
	vue-component: 包含模板<html> 属性<data..> 方法<methods..>
	template: 模板中, 有且只能有一个根标签
	工厂模式 data:function(){ return {} }
*/
