import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Login from '@/components/home/Login'
import Welcome from '@/components/home/Welcome'  //子组件
import Test1 from '@/components/home/Test1'  //子组件
import Test2 from '@/components/home/Test2'  //子组件

import deviceadd from '@/components/basedevice/deviceadd'
import devicelist from '@/components/basedevice/devicelist'  
import deviceedit from '@/components/basedevice/deviceedit'

import devtypeadd from '@/components/basedevtype/devtypeadd' 
import devtypelist from '@/components/basedevtype/devtypelist'  





import devtypeedit from '@/components/basedevtype/devtypeedit'  
import list from '@/components/baseuser/list'  
import add from '@/components/baseuser/add'  
  import edit from '@/components/baseuser/edit'  
  import CompEdit from '@/components/bianj/CompEdit'  
  import CompList from '@/components/bianj/CompList'
  import zhengjia from '@/components/bianj/zhengjia'
  import flowlist from '@/components/baseflow/flowlist'
  import flowadd from '@/components/baseflow/flowadd'
  import joblist from '@/components/producejob/joblist'
  import jobadd from '@/components/producejob/jobadd'
  import jobedit from '@/components/producejob/jobedit'
  import consumelist from '@/components/emsenergyconsume/consumelist'
  import consumeadd from '@/components/emsenergyconsume/consumeadd'
  import consumeedit from '@/components/emsenergyconsume/consumeedit'
  import standradcoallist from '@/components/energystandradcoal/standradcoallist'
  import standradcoaladd from '@/components/energystandradcoal/standradcoaladd'
  import standradcoaledit from '@/components/energystandradcoal/standradcoaledit'
  import job from '@/components/job/job'
  import EnergyModel from '@/components/job/EnergyModel'
  import devinfo from '@/components/job/devinfo'
  import intactRatio from '@/components/devinfo/intactRatio'
  import amount from '@/components/devinfo/amount'
  import cost from '@/components/devinfo/cost'
  import consume from '@/components/devinfo/consume'

  import faultlist from '@/components/producefault/faultlist'
  import faultadd from '@/components/producefault/faultadd'
  import faultedit from '@/components/producefault/faultedit'
  
  import repairlist from '@/components/producerepair/repairlist'
  import repairadd from '@/components/producerepair/repairadd'
  import repairedit from '@/components/producerepair/repairedit'
  import reportlist from '@/components/producereport/reportlist'
  import reportadd from '@/components/producereport/reportadd'
  import reportedit from '@/components/producereport/reportedit'
  import control from '@/components/control/Control'
  

Vue.use(Router)

export default new Router({  
// import baseFlowList from '@/components/baseFlow/baseFlowList'
  routes: [
		{path:'/Login',component:Login,name:'Login'},
		{
		  path: '/',name: 'Index',component: Index,
				children:[
						{path:'/',component:Welcome},
						{path:'deviceadd',component:deviceadd,name:'deviceadd'},
						{path:'devicelist',component:devicelist},
						{path:'deviceedit',component:deviceedit,name:'deviceedit'},
						{path:'/',component:Welcome},
						{path:'devtypeadd',component:devtypeadd,name:'devtypeadd'},
						{path:'devtypelist',component:devtypelist},
						{path:'reportlist',component:reportlist},
						{path:'reportadd',component:reportadd},
						{path:'reportedit',component:reportedit,name:'reportedit'},
						{path:'control',component:control,name:'control'},
						
						{path:'faultlist',component:faultlist,name:'faultlist'},
						{path:'faultedit',component:faultedit,name:'faultedit'},
						{path:'faultadd',component:faultadd,name:'faultadd'},
						{path:'repairlist',component:repairlist,name:'repairlist'},
						{path:'repairadd',component:repairadd,name:'repairadd'},
						{path:'repairedit',component:repairedit,name:'repairedit'},
						
						{path:'devtypeedit',component:devtypeedit,name:'devtypeedit'},
						{path:'list',component:list,name:'list'},
						{path:'add',component:add},
						{path:'edit',component:edit,name:'edit'},
						{path:'CompEdit',component:CompEdit,name:'CompEdit'},
						{path:'CompList',component:CompList},
						{path:'zhengjia',component:zhengjia,name:'zhengjia'},
						{path:'flowlist',component:flowlist,name:'flowlist'},
						{path:'flowadd',component:flowadd,name:'flowadd'},
						{path:'joblist',component:joblist,name:'joblist'},
						{path:'jobadd',component:jobadd,name:'jobadd'},
						{path:'jobedit',component:jobedit,name:'jobedit'},
						{path:'consumelist',component:consumelist,name:'consumelist'},
						{path:'consumeadd',component:consumeadd,name:'consumeadd'},
						{path:'consumeedit',component:consumeedit,name:'consumeedit'},
						{path:'standradcoallist',component:standradcoallist,name:'standradcoallist'},
						{path:'standradcoaladd',component:standradcoaladd,name:'standradcoaladd'},
						{path:'standradcoaledit',component:standradcoaledit,name:'standradcoaledit'},
						{path:'job',component:job,name:'job'},
						{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
						{path:'devinfo',component:devinfo,name:'devinfo'},
						{path:'intactRatio',component:intactRatio,name:'intactRatio'},
						{path:'amount',component:amount,name:'amount'},
						{path:'cost',component:cost,name:'cost'},
						{path:'consume',component:consume,name:'consume'},
						
						
						
						
						
// 						{path:'baseFlowAdd',component:baseFlowAdd,name:'baseFlowList'},
// 						{path:'baseFlowEdit',component:baseFlowEdit,name:'baseFlowEdit'}
						// , {path:'MainTable',component:MainTable}
					]
		 }	
		
	
	
  ]
})
