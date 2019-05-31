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
		<h1>流程作业量对比图/折线图</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>设备类别作业量对比图/折线图</h1>
		<ve-line :data="chartData2"></ve-line>
		<h1>设备作业作业量对比图 (单位：万吨)/折线图</h1>
		<ve-line :data="chartData3"></ve-line>
		<h1>流程作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData"></ve-histogram>
		<h1>设备类别作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h1>设备作业作业量对比图 (单位：万吨)/柱状图</h1>
		<ve-histogram :data="chartData3"></ve-histogram>
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
				chartData2:{
					columns:[],
					rows:[]
				},
				chartData3:{
					columns:[],
					rows:[]
				},
				years:'2019'
				
			};
		},
		methods:{
			chartDatas(){
				var url = this.baseUrl+"/jobAmount/flowAmount"
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
			chartDatas1(){
				var url = this.baseUrl+"/jobAmount/devTypeAmount"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData2=res.data;
					})
			},
			chartDatas2(){
				var url = this.baseUrl+"/jobAmount/devAmount"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData3=res.data;
					})
			},
			fn(){
				this.chartDatas();
				this.chartDatas1();
				this.chartDatas2();
			}
			
		},
		mounted:function(){
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
