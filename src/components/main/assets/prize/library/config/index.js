export const mapConfig = {
  //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
  //要显示散点图，必须填写这个配置
  geo:{
      show:true,
      roam: false, //是否允许鼠标滚动放大，缩小
      map:'china',
      label: {  //图形上的文本标签，可用于说明图形的一些数据信息
          // show:true,  //是否显示文本
          color:'#CCC',  //文本颜色
          
      },
      itemStyle: { //地图区域的多边形 图形样式。 默认样试。
          areaColor: 'white', //地图区域的颜色。
          borderColor: '#111', //边框线
          normal:{
            color: {
              type: 'linear',
              x: 0.5,
              y: 0.5,
              r: 0.5,
                colorStops: [{
                    offset: 0, color: 'rgba(90,176,241)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(165,222,252)' // 100% 处的颜色
                }],
              
            }
          }
      },
      emphasis:{ //高亮状态下的多边形和标签样式。
          label:{ //文本
              color: '#ADA',
          },
          itemStyle:{ //区域
              areaColor: '#F60'
          }
      },
      data:[
         
      ],
  },
  tooltip:{
      show:true,
  },
  //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
  visualMap: {
      min: 0, //最小值
      max: 600, //最大值
      calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
      inRange: {
          color: ['#e83e5e','#fb2a08', '#d6f628'] //颜色
      },
      textStyle: {
          color: '#fff'
      },
  },
  series:[
      {
          type:'effectScatter', //样试
          coordinateSystem:'geo', //该系列使用的坐标系
          data:[ //数据
              {name: '宜昌', value: [111.3,30.7,130]},
              {name: '信阳', value: [114.089435,32.167686,440]},
              {name: '北京', value: [116.422586,39.921549,560]}
          ],
          itemStyle: { //样试。
              normal:{ //默认样试
                  color: '#d6f628'
              }
          },
          label: {
              normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
              }
          },
          //标记的大小,可以设置数组或者函数返回值的形式
          symbolSize: function (val) {
            console.log(val)
              return val[2] / 25;
          },
          rippleEffect: { //涟漪特效相关配置。
              brushType: 'stroke' //波纹的绘制方式
          },
          hoverAnimation: true, //鼠标移入放大圆
      }
  ]
}