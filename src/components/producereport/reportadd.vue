
<template>
	<div style='text-align: center;'>
		<h1>添加员工信息</h1>
	
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='船队名称' v-model='shipname'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='宝钢人' v-model='reportuser'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装载量' v-model='capacity'></el-input> </el-col>
		</el-row>
		<el-row>
		   <el-select v-model="compid" placeholder="请选择"  style='width:300px;margin-top: 20px;'>
		 	<el-option
		 	  v-for="item in list"
		 	  :label="item.compname"
		 	  :value="item.compid">
		 	</el-option>
		 </el-select>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				reportid:'',
				shipname:'',
				reportuser:'',
				compid:'',
				capacity:'',
				list:[]
				

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {reportid:this.reportid,shipname:this.shipname,reportuser:this.reportuser,compid:this.compid,capacity:this.capacity};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/reportlist'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
			
			
			//帮我杀个人     清华it 1702 班 戚二康 
			//公公拿到
			
		},
		mounted:function(){
			var userid= this.$route.params.row;
						var url = this.baseUrl+"/baseUser/load"
						// 传递给后端的数据
						var data={userid:userid}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
	
							
						})
						var url = this.baseUrl+"/baseCompany/list"
						// 传递给后端的数	var data={userid:userid}
						this.$axios.post(url,{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// 接收路由传递的数据
						
							this.list=res.data
						})
			
		}
		
	}
</script>

<style>

</style>

