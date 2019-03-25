function user_age(data) {
	var dom = document.getElementById("user_age");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	var data = [220, 182, 191, 234, 290, 330, 310];
	var yMax = 500;
	var dataShadow = [];

	for (var i = 0; i < data.length; i++) {
	    dataShadow.push(yMax);
	}

	option = {
	    title: {
	        text: '人数/岁',
	        textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight:100,
            }
	    },
	    grid: {  //设置图标距离父级div的间距
            top: "40",
            left: "0",
            right: "15",
            bottom: "40",
            containLabel: true
        },
	    xAxis: {
	    	type : 'category',
	        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	   
	    yAxis: {
	        axisLine: {
	            show: true,
	            lineStyle: {
                    color: '#7cd0fc'
                }
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#fff'
	            }
	        }
	    },
	    dataZoom: [
	        {
	            type: 'inside'
	        }
	    ],
	    series: [
	        { // For shadow
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                	color: 'rgba(0,0,0,0.05)'}
	            },
	            barGap:'-20%',
	            barCategoryGap:'30%',
	            data: dataShadow,
	            animation: true
	        },
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 1, color: '#32bdeb'},
	                            {offset: 0.3, color: '#188df0'},
	                            {offset: 1, color: '#188df0'}
	                        ]
	                    ),
	                    label: {
					          show: true,
					          position: 'top',
					          textStyle: {
					            color: 'white'
					      }
					  	}

	                },
	                emphasis: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#083e6f'},
	                            {offset: 0.6, color: '#3faeea'},
	                            {offset: 1, color: '#3faeea'}
	                        ]
	                    )
	                }
	            },
	            data: data
	        }
	    ]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
}

//VIP人数增涨统计
function vip_up(data) {
	var dom = document.getElementById("vip_up");
	var myChart = echarts.init(dom);
	option = {
		title: {
	        text: '人数/岁',
	        textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight:100,
            }
	    },
		tooltip: {
            trigger: 'axis',//鼠标经过提示
        },
        grid: {  //设置图标距离父级div的间距
            top: "40",
            left: "0",
            right: "15",
            bottom: "40",
            containLabel: true
        },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	    series: [{
	        data: [820, 932, 901, 934, 1290, 1330, 1320],
	        type: 'line',
	        areaStyle: {},
	        itemStyle: {  
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                        offset: 0,
                        color: 'rgba(32,200,241,1)'
                    }, {
                        offset: .34,
                        color: 'rgba(32,200,241,.7)'
                    },{
                        offset: 1,
                        color: 'rgba(32,200,241,0.00)'
                    }]),
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                         color: "#4fd6d2"
                    }
                },  
                emphasis: {  
                    color: '#4fd6d2',  
                    lineStyle: {        // 系列级个性化折线样式  
                        width:2,  
                        type: 'dotted',  
                        color: "#20c8f1" //折线的颜色
                    }  
                }  
            },
            symbolSize:5, //折线点的大小
	    }]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
}

//地图
function cityMap(){
	 var map = Loca.create('cityMap', {
        mapStyle: 'amap://styles/darkblue',
        zoom: 4,
        center: [107.4976, 32.1697]
    });
    var layer = Loca.visualLayer({
        eventSupport: true,    // selectStyle 配置需要开启 eventSupport: true
        container: map,
        type: 'point',
        shape: 'circle'
    });

    layer.on('mousemove', function (ev) {
        // 事件类型
        var type = ev.type;
        // 当前元素的原始数据
        var rawData = ev.rawData;
        // 原始鼠标事件
        var originalEvent = ev.originalEvent;

        openInfoWin(map.getMap(), originalEvent, {
            '名称': rawData.name,
            '位置': rawData.center
        });
    });

    layer.on('mouseleave', function (ev) {
        closeInfoWin();
    });

    layer.setData(districts, {
        lnglat: 'center'
    });

    layer.setOptions({
        style: {
            radius: 5,
            color: '#4fc2ff',
            borderColor: '#ffffff',
            borderWidth: 1.5,
            opacity: 0.8
        },
        selectStyle: {
            radius: 6,
            color: '#ffe30a'
        }
    });

    layer.render();
}

//运动步数
function walking(data) {
	var dom = document.getElementById("walking");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	var data = [220, 182, 191, 234, 290, 330, 310];
	var yMax = 500;
	var dataShadow = [];

	for (var i = 0; i < data.length; i++) {
	    dataShadow.push(yMax);
	}

	option = {
	    title: {
	        text: '单位:天/步数',
	        textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight:100,
            }
	    },
	    grid: {  //设置图标距离父级div的间距
            top: "40",
            left: "0",
            right: "15",
            bottom: "40",
            containLabel: true
        },
	    xAxis: {
	    	type : 'category',
	        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	   
	    yAxis: {
	        axisLine: {
	            show: true,
	            lineStyle: {
                    color: '#7cd0fc'
                }
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#fff'
	            }
	        }
	    },
	    dataZoom: [
	        {
	            type: 'inside'
	        }
	    ],
	    series: [
	        { // For shadow
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                	color: 'rgba(0,0,0,0.05)'}
	            },
	            barGap:'-20%',
	            barCategoryGap:'30%',
	            data: dataShadow,
	            animation: true
	        },
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 1, color: '#32bdeb'},
	                            {offset: 0.3, color: '#188df0'},
	                            {offset: 1, color: '#188df0'}
	                        ]
	                    ),
	                    label: {
					          show: true,
					          position: 'top',
					          textStyle: {
					            color: 'white'
					      }
					  	}

	                },
	                emphasis: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#083e6f'},
	                            {offset: 0.6, color: '#3faeea'},
	                            {offset: 1, color: '#3faeea'}
	                        ]
	                    )
	                }
	            },
	            data: data
	        }
	    ]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
}


//性别
function gender(data) {
	var dom = document.getElementById("gender");
	var myChart = echarts.init(dom);
	option = {
		    color: ['#3398DB'],
			    title: {
		        text: '单位:万/人',
		        textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		     grid: {  //设置图标距离父级div的间距
	            top: "40",
	            left: "0",
	            right: "15",
	            bottom: "40",
	            containLabel: true
	        },
		    xAxis: {
		    	type : 'category',
		        data : ['男', '女'],
		        axisLabel: {
		            //inside: true,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10,
		                fontWeight:100,
		            }
		        },
		        splitLine: {     //网格线
		          show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            show: true,
	            	lineStyle: {
	                    color: '#7cd0fc'
	                }
		        }
		    },
		   
		    yAxis: {
		        axisLine: {
		            show: true,
		            lineStyle: {
	                    color: '#7cd0fc'
	                }
		        },
		        axisTick: {
		            show: false
		        },
		        splitLine: {     //网格线
		          show: false
		        },
		        axisLabel: {
		            textStyle: {
		                color: '#fff'
		            }
		        }
		    },
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52],
		            itemStyle: {
			            normal: {
				                // 随机显示
				                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
				              
				                // 定制显示（按顺序）
				                color: function(params) { 
				                    var colorList = ['#04fef8','#ffdc00']; 
				                    return colorList[params.dataIndex] 
				                },
				                 label: {
							          show: true,
							          position: 'top',
							          textStyle: {
							            color: 'white'
							      }
							  	}
			            },
			        },
		        }
		    ]
		};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}

}

//SOS
function sos(data) {
	var dom = document.getElementById("sos");
	var myChart = echarts.init(dom);
	option = {
		title: {
	        text: '单位:次',
	        textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight:100,
            }
	    },
		tooltip: {
            trigger: 'axis',//鼠标经过提示
        },
        legend: {
	        data:['今日呼叫','累积呼叫']
	    },
        grid: {  //设置图标距离父级div的间距
            top: "40",
            left: "0",
            right: "15",
            bottom: "40",
            containLabel: true
        },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            //inside: true,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10,
	                fontWeight:100,
	            }
	        },
	        splitLine: {     //网格线
	          show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
            	lineStyle: {
                    color: '#7cd0fc'
                }
	        }
	    },
	    series: [{
	        data: [820, 932, 901, 934, 1290, 1330, 1320],
	        type: 'line',
	        areaStyle: {},
	        itemStyle: {  
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                        offset: 0,
                        color: 'rgba(230,0,6,1)'
                    }, {
                        offset: .34,
                        color: 'rgba(230,0,6,.7)'
                    },{
                        offset: 1,
                        color: 'rgba(230,0,6,0.00)'
                    }]),
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                         color: "#ff0000"
                    },
                    borderColor:'red'
                },  
                emphasis: {  
                    color: '#4fd6d2',  
                    lineStyle: {        // 系列级个性化折线样式  
                        width:2,  
                        type: 'dotted',  
                        color: "#20c8f1" //折线的颜色
                    }  
                }  
            },

            symbolSize:5, //折线点的大小
	    },
	    {
	        data: [720, 832, 801, 834, 1190, 1230, 1220],
	        type: 'line',
	        areaStyle: {},
	        itemStyle: {  
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                        offset: 0,
                        color: 'rgba(32,200,241,1)'
                    }, {
                        offset: .34,
                        color: 'rgba(32,200,241,.7)'
                    },{
                        offset: 1,
                        color: 'rgba(32,200,241,0.00)'
                    }]),
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                         color: "#4fd6d2"
                    }
                },  
                emphasis: {  
                    color: '#4fd6d2',  
                    lineStyle: {        // 系列级个性化折线样式  
                        width:2,  
                        type: 'dotted',  
                        color: "#20c8f1" //折线的颜色
                    }  
                }  
            },
            symbolSize:5, //折线点的大小
	    }]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
}

//健康情况
function health(){
		var myChart1 = echarts.init(document.getElementById("health1"));
		var myChart2 = echarts.init(document.getElementById("health2"));
		var myChart3 = echarts.init(document.getElementById("health3"));
		var option1 = {
		    // 标题组件，包含主标题和副标题
		    title:{
		        show:true,
		        text:"12346人",
		        x:"center",
		        textStyle:{
		            fontSize:"14",
		            color:"#fff"
		        },
		        bottom:"28%"
		    },
		    grid: {  //设置图标距离父级div的间距
	            top: "20%",
	            left: "0",
	            right: "150",
	            bottom: "40",
	            containLabel: true
	        },
		    //  提示框组件
		    tooltip: {
		        //是否显示提示框组件，包括提示框浮层和 axisPointe
		        show:false,
		        // 触发类型: item:数据项触发，axis：坐标轴触发
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    // // 图例
		    // legend: {
		    //     orient: 'vertical',
		    //     x: 'left',
		    //     data:['完成率']
		    // },
		    
		    // 系列列表。每个系列通过 type 决定自己的图表类型
		    series: [
		        {
		            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		            name:'任务进度',
		            type:'pie',
		            // 饼图的半径，数组的第一项是内半径，第二项是外半径
		            radius: ['80%', '50%'],

		            // 是否启用防止标签重叠策略，默认开启
		            avoidLabelOverlap: false,          
		           	hoverAnimation: false,
		           	color: ['#80809d','#ffbd00'], 
		            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {   // 数据值
		                    value:20, 
		                    // 数据项名称
		                    name:'健康',
		                    //该数据项是否被选中
		                    selected:false,
		                    // 单个扇区的标签配置
		                    label: {
				                normal: {
				                    // 是显示标签
				                    show: true,
				                    position: 'center',
				                    fontSize: 12,
				                    color:'#fff',
				                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
				                   
				                }
		               
		            		},
		                 
		                },
		                {
		                    value:100, 
		                    label:{
		                        normal:{
		                            show:false,
		                            
		                        }
		                    }
		                    
		                },
		              
		            ]
		        }
		    ]
		};
		var option2 = {
		    // 标题组件，包含主标题和副标题
		    title:{
		        show:true,
		        text:"12346人",
		        x:"center",
		        textStyle:{
		            fontSize:"14",
		            color:"#fff"
		        },
		        bottom:"28%"
		    },
		    //  提示框组件
		    tooltip: {
		        //是否显示提示框组件，包括提示框浮层和 axisPointe
		        show:false,
		        // 触发类型: item:数据项触发，axis：坐标轴触发
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    // // 图例
		    // legend: {
		    //     orient: 'vertical',
		    //     x: 'left',
		    //     data:['完成率']
		    // },
		    
		    // 系列列表。每个系列通过 type 决定自己的图表类型
		    series: [
		        {
		            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		            name:'任务进度',
		            type:'pie',
		            // 饼图的半径，数组的第一项是内半径，第二项是外半径
		            radius: ['80%', '50%'],

		            // 是否启用防止标签重叠策略，默认开启
		            avoidLabelOverlap: false,          
		           	hoverAnimation: false,
		           	color: ['#80809d','#03d0fc'], 
		            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {   // 数据值
		                    value:20, 
		                    // 数据项名称
		                    name:'亚健康',
		                    //该数据项是否被选中
		                    selected:false,
		                    // 单个扇区的标签配置
		                    label: {
				                normal: {
				                    // 是显示标签
				                    show: true,
				                    position: 'center',
				                    fontSize: 12,
				                    color:'#fff',
				                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
				                   
				                }
		               
		            		},
		                 
		                },
		                {
		                    value:100, 
		                    label:{
		                        normal:{
		                            show:false,
		                            
		                        }
		                    }
		                    
		                },
		              
		            ]
		        }
		    ]
		};
		var option3 = {
		    // 标题组件，包含主标题和副标题
		    title:{
		        show:true,
		        text:"12346人",
		        x:"center",
		        textStyle:{
		            fontSize:"14",
		            color:"#fff"
		        },
		        bottom:"28%"
		    },
		    //  提示框组件
		    tooltip: {
		        //是否显示提示框组件，包括提示框浮层和 axisPointe
		        show:false,
		        // 触发类型: item:数据项触发，axis：坐标轴触发
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    // // 图例
		    // legend: {
		    //     orient: 'vertical',
		    //     x: 'left',
		    //     data:['完成率']
		    // },
		    
		    // 系列列表。每个系列通过 type 决定自己的图表类型
		    series: [
		        {
		            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		            name:'任务进度',
		            type:'pie',
		            // 饼图的半径，数组的第一项是内半径，第二项是外半径
		            radius: ['80%', '50%'],

		            // 是否启用防止标签重叠策略，默认开启
		            avoidLabelOverlap: false,          
		           	hoverAnimation: false,
		           	color: ['#80809d','#f98636'], 
		            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {   // 数据值
		                    value:20, 
		                    // 数据项名称
		                    name:'疾病',
		                    //该数据项是否被选中
		                    selected:false,
		                    // 单个扇区的标签配置
		                    label: {
				                normal: {
				                    // 是显示标签
				                    show: true,
				                    position: 'center',
				                    fontSize: 12,
				                    color:'#fff',
				                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
				                   
				                }
		               
		            		},
		                 
		                },
		                {
		                    value:100, 
		                    label:{
		                        normal:{
		                            show:false,
		                            
		                        }
		                    }
		                    
		                },
		              
		            ]
		        }
		    ]
		};
		myChart1.setOption(option1)
		myChart2.setOption(option2)
		myChart3.setOption(option3)
}

//心率统计
function heart(data){
	var myChart = echarts.init(document.getElementById("heart"));
	var option = {
    title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#24cef9','#ed7d31','#fee433','#f82f28','#2fefb5'],
	grid: {  //设置图标距离父级div的间距
        top: "40",
        left: "0",
        right: "25",
        bottom: "40",
        containLabel: true
    },
    legend: {
        bottom: 40,
        left: 'center',
        data: ['心率正常', '心动过速','心动过缓','心律不齐'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data:[
                {value:70, name: '心率正常'},
                {value:10, name: '心动过速'},
                {value:30, name: '心动过缓'},
                {value:30, name: '心律不齐'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
	            label: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: 'white'
			      }
			  	}
            }
        }
    ]
	}
	myChart.setOption(option, true);
}

//血压统计
function pressure(data){
	var myChart = echarts.init(document.getElementById("pressure"));
	var option = {
    title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#24cef9','#ed7d31','#fee433','#f82f28','#2fefb5'],
	grid: {  //设置图标距离父级div的间距
        top: "40",
        left: "0",
        right: "25",
        bottom: "40",
        containLabel: true
    },
    legend: {
        bottom: 40,
        left: 'center',
        data: ['正常', 'I级高压','II级高压','III级高压','低血压'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data:[
                {value:70, name: '正常'},
                {value:10, name: 'I级高压'},
                {value:30, name: 'II级高压'},
                {value:30, name: 'III级高压'},
                {value:30, name: '低血压'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
	            label: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: 'white'
			      }
			  	}
            }
        }
    ]
	}
	myChart.setOption(option, true);
}

//血氧统计
function oxygen(data){
	var myChart = echarts.init(document.getElementById("oxygen"));
	var option = {
    title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#24cef9','#ed7d31','#fee433','#f82f28','#2fefb5'],
	grid: {  //设置图标距离父级div的间距
        top: "40",
        left: "0",
        right: "25",
        bottom: "40",
        containLabel: true
    },
    legend: {
        bottom: 40,
        left: 'center',
        data: ['正常', '低血氧'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data:[
                {value:70, name: '正常'},
                {value:10, name: '低血氧'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
	            label: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: 'white'
			      }
			  	}
            }
        }
    ]
	}
	myChart.setOption(option, true);
}

//心电统计
function ecg(data){
	var myChart = echarts.init(document.getElementById("ecg"));
	var option = {
    title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#24cef9','#ed7d31','#fee433','#f82f28','#2fefb5'],
	grid: {  //设置图标距离父级div的间距
        top: "40",
        left: "0",
        right: "25",
        bottom: "40",
        containLabel: true
    },
    legend: {
        bottom: 40,
        left: 'center',
        data: ['正常', '异常'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data:[
                {value:70, name: '正常'},
                {value:10, name: '异常'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
	            label: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: 'white'
			      }
			  	}
            }
        }
    ]
	}
	myChart.setOption(option, true);
}