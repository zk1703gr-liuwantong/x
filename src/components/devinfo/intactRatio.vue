<!-- html部分 -->
<template>
	<div id="app">
		<div class="block">
				<span class="demonstration">年</span>
					<el-date-picker
					v-model="years"
					align="right"
					type="year"
					placeholder="选择年"
					@change="fn()"
					value-format="yyyy">
				</el-date-picker>
			</div>
		<h1>港口间设备完好率对比</h1>
		<ve-line :data="chartData"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				chartData:{
					columns:[],
					rows:[]
				},
				years:'2019'
			};
		},
		methods:{
			chartDatas(){
				var url = this.baseUrl+"/devInfo/intactRatio"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData=res.data;
					})
			},
			fn(){
				this.chartDatas();
			}
		},mounted:function(){
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
