<template>
	<div style='text-align: center;'>
		<h1>添加员工信息</h1>
		<el-row>
		  
		  <el-select v-model="devid" placeholder="设备名称"  style='width:300px;margin-top: 20px;'>
		   	<el-option
		   	  v-for="item in list1"
		   	  :label="item.typename"
		   	  :value="item.typeid">
		   	</el-option>
		   </el-select>
		 </el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修原因' v-model='cause'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修费用' v-model='cost'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修日期' v-model='repairdate'></el-input> </el-col>
			
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
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				repairid:'',
				list1:[]
				

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produeRepair/insert"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/repairlist'});
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
			
			this.sc1();
		}
		
	}
</script>

<style>

</style>
