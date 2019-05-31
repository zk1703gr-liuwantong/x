<template>
	<div style='text-align: center;'>
		<h1>修改公司信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修原因' v-model='cause'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报告人' v-model='faultuser'></el-input> </el-col>
		</el-row>
		
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='故障时间' v-model='faulttime'></el-input> </el-col>
		  <el-select v-model="devid" placeholder="设备名称">
		  	<el-option
		  	  v-for="item in list"
		  	  :label="item.compname"
		  	  :value="item.compid">
		  	</el-option>
		  </el-select>
		</el-row>
		
		


		
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				faultId:'',
				list:[]
			};
		},
		methods:{
			saveEdit(){
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data = {devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime,faultId:this.faultId};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/faultlist'});
				})
			},
		
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			
				var faultId= this.$route.params.row;
				var url = this.baseUrl+"/produceFault/load"
				// 传递给后端的数据
				var data={faultId:faultId}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// 接收路由传递的数据
					var obj=res.data; 
					
					this.devid = obj.devid;
					// 回显
					
					this.cause = obj.cause;
					this.faultuser = obj.faultuser;
					this.faulttime = obj.faulttime;
					this.faultId = obj.faultId;
					
				
					
				})
				var url = this.baseUrl+"/baseDevice/list"
				
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
