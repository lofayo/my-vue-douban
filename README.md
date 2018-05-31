
> 还是有很多问题的需要解决的，小程序却都封装好了


#### 1、页面元素单位怎么设置，才能在不同手机屏的自适应？小程序有rpx，这个得自己来弄了。

#### 2、vue-resource实现ajax的http请求

	用法：
		npm install vue-resource
		
		import Vue from 'vue'
		import VueResource from 'vue-resource'
		
		Vue.use(VueResource)
		
		//在子组件中使用jsonp方法
		
		export default{
			created(){
				this.$http.jsonp(url)
					.then(res => console.log(res))
			}
		}
	//具体用法需看vue-resource github官方文档
	
#### 3、父组件对子组件的调用

	（父组件通过绑定自定义属性传值，子组件通过props来接值）
		
		//父组件引用与传值
		<movie-item
		  v-for='(item,index) of movieCategory'
		  v-bind:key='index'
		  v-bind:subjects='item.subjects'
		  v-bind:category='item.category'
		/>
	
		//子组件导出的vue实例接收属性值
		  export default {
			props: ['subjects', 'category']
		  }
		  
#### 4、后续有时间看看webpack配置

		（今天用到路径关联）webpack.base.conf.js	

			function resolve (dir) {
			  return path.join(__dirname, '..', dir)
			}

			alias: {
			  'vue$': 'vue/dist/vue.esm.js',
			  '@': resolve('src'),
			  //果然可以自己配置，很赞
			  '@static': resolve('static'),
			}
	
#### 5、项目里路径的使用的确是个问题啊
	
		有时候配置的@static/images/me.jpg可以用
		
		有时候不能用，就只能走相对路径
		
		
		
		
