<template>
	<div style='text-align: center;'>
		<h1>添加员工信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='设备类别' v-model='flowname'></el-input> </el-col>
		  <el-select v-model="dljid" placeholder="请选择"  style='width:300px;margin-top: 20px;'>
		   	<el-option
		   	  v-for="item in list1"
		   	  :label="item.typename"
		   	  :value="item.typeid">
		   	</el-option>
		   </el-select>
		 </el-row>
		</el-row>
		<el-row>
		  
		  <el-select v-model="zcjid" placeholder="请选择"  style='width:300px;margin-top: 20px;'>
		  	<el-option
		  	  v-for="item in list"
		  	  :label="item.compname"
		  	  :value="item.compid">
		  	</el-option>
		  </el-select>
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
				
				flowname:'',
				list:[],
				list1:[]
				

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data = {flowname:this.flowname,};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/devicelist'});
				})
			},
			cancel(){
				this.$router.go(-1);
			},
			sc1(){
				var typeid= this.$route.params.row;
				var url = this.baseUrl+"/baseDevice/load"
				// 传递给后端的数据
				var data={typeid:typeid}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					//若不是你突然闯进我生活
					// 接收路由传递的数据
					//我这里不想写代码 你气不气 
				})
				var url = this.baseUrl+"/baseDevtype/list"
				// 传递给后端的数	var data={userid:userid}
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// 接收路由传递的数据
				
					this.list1=res.data
				})
			}
			
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
				// 接收路由传递的数据

				
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
			this.sc1();
		}
		
	}
</script>

<style>

</style>
