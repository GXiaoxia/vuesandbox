new Vue({
	el:'#vue-app',
	data:{
		width:{width:'100%'},
		src:'img/bag.png'
	},
	methods:{
		punch:function(){
			// console.log(parseInt(this.width.width));
			var a = parseInt(this.width.width);
			this.width.width = a - 10 + '%';
			if(this.width.width == '50%'){
				this.src = 'img/bag-burst.png';
			}
		},
		restart:function(){
			this.width.width = '100%';
			this.src = 'img/bag.png';
		}
	}
})