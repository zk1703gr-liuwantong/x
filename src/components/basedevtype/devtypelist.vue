<template>
	<div>
		<h1 style="text-align: center">人员信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width:160px' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="typeid" label="id" width="80"></el-table-column>
				<el-table-column prop="typename" label="姓名" width="80"></el-table-column>
			
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.typeid)">删除</el-button>
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
				this.$router.push({name:'devtypeedit',params:{row:row}})
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/delete"
				// 传递给后端的数据
				var data = {typeid:compid};
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
				this.$router.push({path:'devtypeadd'})
			},
			search(){
				
			}
		},
		mounted:function(){
			 // 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
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
