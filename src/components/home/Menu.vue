<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu>
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}
					  </el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompEdit'},
						 {text:'人员信息',index:'1022',url:'/list'},
						 {text:'流程信息A',index:'1030',url:'/devtypelist'},
						 {text:'设备信息',index:'1025',url:'/devicelist'},
						 {text:'流程信息',index:'1029',url:'/flowlist'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'维修',index:'1031',url:'/repairlist'},
					 	 {text:'故障信息',index:'1032',url:'/faultlist'},
						 {text:'报岗',index:'1037',url:'/reportlist'},
						 {text:'中控',index:'1039',url:'/control'},
						 {text:'作业信息',index:'1041',url:'/joblist'},
						 {text:'能耗信息',index:'1049',url:'/consumelist'},
						 {text:'折标煤系数',index:'1149',url:'/standradcoallist'},
						 {text:'作业量统计',index:'11478',url:'/job'},
						 {text:'企业用能模型',index:'1146',url:'/EnergyModel'},
						 {text:'港口间设备利用率对比',index:'1147',url:'/devinfo'},
						 {text:'港口间设备完好率对比',index:'11467',url:'/intactRatio'},
						 {text:'港口间作业量对比',index:'1141167',url:'/amount'},
						 {text:'成本核算信息',index:'114167',url:'/cost'},
						 {text:'成本核算信息',index:'117',url:'/consume'},
						 
						 
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'电耗信息',index:'1041',url:'/joblist'},
					 	 {text:'水耗信息',index:'1042'},
					 	 {text:'油耗信息',index:'1043'},
						 
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051'},
					 	 {text:'作业时间信息',index:'1052'},
					 	 {text:'故障信息',index:'1053'}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071'}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'成本核算信息',index:'1081'},
					 	 {text:'设备运行时长',index:'1082'},
					 	 {text:'流程能耗对比',index:'1083'}
					 ]},
					 {text:'用能单元模型',index:'109',children:[
					 	 {text:'全年能效对比',index:'1091'},
					 	 {text:'能效模型(平均值+~20%)',index:'1092'},
					 	 {text:'同类设备能耗对比',index:'1093'}
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'产销模型设置',index:'10101'},
					 	 {text:'产销模型展示',index:'10102'}
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				// 路由跳转
				this.$router.push({path:obj.url});
				// 往store中的tags数组中添加数据
				var obj1 = {name:obj.text,type:'warning',url:obj.url};
				this.$store.commit('addTag',obj1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #F4F4F4;
}
</style>
