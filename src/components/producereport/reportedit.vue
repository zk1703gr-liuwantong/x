<template>
	<div style='text-align: center;'>
		<h1>修改公司信息</h1>
		
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='船队名称' v-model='shipname'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='宝钢人' v-model='reportuser'></el-input> </el-col>
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
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				
				shipname:'',
				reportuser:'',
				compid:'',
				reportid:'',
				list:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {reportid:this.reportid,shipname:this.shipname,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/reportlist'});
				})
			},
		
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			
				
				var userid= this.$route.params.row;
				var url = this.baseUrl+"/produceReport/load"
				// 传递给后端的数据
				var data={reportid:userid}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// 接收路由传递的数据
					var obj=res.data; 
					// 回显
					this.shipname = obj.shipname;
					this.reportuser = obj.reportuser;
					this.compid = obj.compid;
					this.reportid = obj.reportid;
					
					
				})
				var url = this.baseUrl+"/baseCompany/list"
				
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
