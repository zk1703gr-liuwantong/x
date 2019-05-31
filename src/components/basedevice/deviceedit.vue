<template>
	<div style='text-align: center;'>
		<h1>修改公司a息</h1>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='设备类别' v-model='devname'></el-input> </el-col>
		 
		</el-row>
		<el-row>
		  <el-select v-model="typeid" placeholder="请选择"  style='width:300px;margin-top: 20px;'>
		 	<el-option
		 	  v-for="item in list1"
		 	  :label="item.typename"
		 	  :value="item.typeid">
		 	</el-option>
		 </el-select>
		
		
		
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='投入时间' v-model='devdata'></el-input> </el-col>
		</el-row>
		<el-row>
		 <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='责任人' v-model='devuser'></el-input> </el-col>
		
		<el-select v-model="compid" placeholder="请选择">
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
				devname:'',
				typeid:'',
				devdata:'',
				devuser:'',
				devid:'',
				compid:'',
				
				list:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {userid:this.userid,cname:this.cname,username:this.username,password:this.password,telno:this.telno,email:this.email,sex:this.sex,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/deviceedit'});
				})
			},
		
			cancel(){
				this.$router.go(-1);
			},
			sc1(){
				var typeid= this.$route.params.row;
				var url = this.baseUrl+"/baseDevtype/load"
				// 传递给后端的数据
				var data={typeid:typeid}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
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
					var obj=res.data; 
					// 回显
					this.devname = obj.devname;
					this.typeid = obj.typeid;
					this.devdata = obj.devdata;
					this.devuser = obj.devuser;
					this.compid = obj.compid;
					this.devid = obj.devid;	
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
				this.sc1();
				
			
			
			
		}
		
	}
</script>

<style>

</style>
