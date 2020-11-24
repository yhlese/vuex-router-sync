export const mapConfig = {
  //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
  //要显示散点图，必须填写这个配置
  geo:{
      show:true,
      roam: true, //是否允许鼠标滚动放大，缩小
      map:'china',
      label: {  //图形上的文本标签，可用于说明图形的一些数据信息
          // show:true,  //是否显示文本
          color:'#CCC',  //文本颜色
      },
      itemStyle: { //地图区域的多边形 图形样式。 默认样试。
          areaColor: 'white', //地图区域的颜色。
          borderColor: '#111', //边框线
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
          {name: '北京',value: Math.round(Math.random()*500)},
          {name: '天津',value: Math.round(Math.random()*500)},
          {name: '上海',value: Math.round(Math.random()*500)},
          {name: '重庆',value: Math.round(Math.random()*500)},
          {name: '河北',value: Math.round(Math.random()*500)},
          {name: '河南',value: Math.round(Math.random()*500)},
          {name: '云南',value: Math.round(Math.random()*500)},
          {name: '辽宁',value: Math.round(Math.random()*500)},
          {name: '黑龙江',value: Math.round(Math.random()*500)},
          {name: '湖南',value: Math.round(Math.random()*500)},
          {name: '安徽',value: Math.round(Math.random()*500)},
          {name: '山东',value: Math.round(Math.random()*500)},
          {name: '新疆',value: Math.round(Math.random()*500)},
          {name: '江苏',value: Math.round(Math.random()*500)},
          {name: '浙江',value: Math.round(Math.random()*500)},
          {name: '江西',value: Math.round(Math.random()*500)},
          {name: '湖北',value: Math.round(Math.random()*500)},
          {name: '广西',value: Math.round(Math.random()*500)},
          {name: '甘肃',value: Math.round(Math.random()*500)},
          {name: '山西',value: Math.round(Math.random()*500)},
          {name: '内蒙古',value: Math.round(Math.random()*500)},
          {name: '陕西',value: Math.round(Math.random()*500)},
          {name: '吉林',value: Math.round(Math.random()*500)},
          {name: '福建',value: Math.round(Math.random()*500)},
          {name: '贵州',value: Math.round(Math.random()*500)},
          {name: '广东',value: Math.round(Math.random()*500)},
          {name: '青海',value: Math.round(Math.random()*500)},
          {name: '西藏',value: Math.round(Math.random()*500)},
          {name: '四川',value: Math.round(Math.random()*500)},
          {name: '宁夏',value: Math.round(Math.random()*500)},
          {name: '海南',value: Math.round(Math.random()*500)},
          {name: '台湾',value: Math.round(Math.random()*500)},
          {name: '香港',value: Math.round(Math.random()*500)},
          {name: '澳门',value: Math.round(Math.random()*500)},
          {name: '南海诸岛',value: Math.round(Math.random()*500)}
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
              {name: '宜昌', value: [111.3,30.7,330]},
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
              return val[2] / 25;
          },
          rippleEffect: { //涟漪特效相关配置。
              brushType: 'stroke' //波纹的绘制方式
          },
          hoverAnimation: true, //鼠标移入放大圆
      }
  ]
}