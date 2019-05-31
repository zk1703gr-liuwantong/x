<template>
	<div>
		<h1 style="text-align: center">作业信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width:160px' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="jobid" label="主键id" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="starttime" label="开始作业时间" width="120"></el-table-column>
				<el-table-column prop="completetime" label="结束作业时间" width="120"></el-table-column>
				<el-table-column prop="duration" label="运行时长" width="180"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="180"></el-table-column>
				<el-table-column prop="reportid" label="报岗id" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.jobid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_compname:'',
				search_industry:'',
				list:[]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'jobedit',params:{row:row}})
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/produceJob/delete"
				// 传递给后端的数据
				
				var data = {jobid:compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'jobadd'})
			},
			search(){
			
				}
			}
		,
		mounted:function(){
			 // 后端网址
			var url = this.baseUrl+"/produceJob/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list = res.data;
			})
		}
		
	}
</script>

<style>

</style>
