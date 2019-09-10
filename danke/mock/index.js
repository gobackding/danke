const Mock = require("mockjs");
const url = require("url")



var data = Mock.mock({
  "data|100":[
    {
      img:"https://public.danke.com.cn/public-20180430-FrO6nfbFXyEpA3CFZVW5c5QlTL1b?imageView2/1/w/380/h/285",
      house:"https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA",
      title:"八里桥  西马庄园 次卧 朝北 A 室",
      area:"北|建筑面积约9㎡|1楼",
      RMB:"1991元/月",
      distance:"距八通线八里桥站1150米",
      location:"https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F",
      heating:"集中供暖",
      apartment:"品质公寓",
      home:"可立即入住",
      Day:"首月",
      discounts:"白住2个月",
      Year:"签约年租，白住2个月！"
    },
    {
      img:"https://public.danke.com.cn/public-20181205-FnVJFy8sITpgVZxvwvA3QEhgfiap?imageView2/1/w/380/h/285",
      title:"万源街  金色漫香林二期 次卧 朝北 A 室",
      house:"https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA",
      area:"北|建筑面积约12㎡|3楼",
      RMB:"5600元/月",
      distance:"距八通线八里桥站1150米",
      location:"https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F",
      balcony:"独立阳台",
      heating:"集中供暖",
      apartment:"品质公寓",
      Day:"首月",
      discounts:"白住2个月",
      Year:"签约年租，白住2个月！"
    },
    {
      img:"https://public.danke.com.cn/public-20180413-FqJEqnw5PA7_cYlAhOLopU_x4ggk?imageView2/1/w/380/h/285",
      title:"五棵松  大成郡 次卧 朝北 D 室",
      house:"https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA",
      area:"北|建筑面积约11㎡|3楼",
      RMB:"2516元/月",
      distance:"距1号线五棵松站2150米",
      location:"https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F",
      home:"可立即入住",
      heating:"自采暖",
      apartment:"品质公寓",
      Day:"首月",
      discounts:"白住2个月",
      Year:"签约年租，白住2个月！"
    },
    {
      img:"https://public.danke.com.cn/public-20190420-Fu2jlkn6ZpMPvlQwfZVR5u3AYjj_?imageView2/1/w/380/h/285",
      title:"北运河西  玉桥东路30号院 次卧 朝东 A 室",
      house:"https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA",
      area:"东|建筑面积约10㎡|5楼",
      RMB:"2516元/月",
      distance:"距6号线北运河西站950米",
      location:"https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F",
      home:"可立即入住",
      heating:"集中供暖",
      apartment:"品质公寓",
      Day:"首月",
      discounts:"白住2个月",
      Year:"签约年租，白住2个月！"
    },
    {
      img:"https://public.danke.com.cn/public-20190326-FiwpDSzzL-cy93V8F-zU4512j57F?imageView2/1/w/380/h/285",
      title:"清源路  富强东里 次卧 朝南 A 室",
      house:"https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA",
      area:"南|建筑面积约8㎡|5楼",
      RMB:"2516元/月",
      distance:"距4号线大兴线清源路站850米",
      location:"https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F",
      home:"可立即入住",
      heating:"集中供暖",
      apartment:"品质公寓",
      Day:"首月",
      discounts:"白住2个月",
      Year:"签约年租，白住2个月！"
    },
    
  ]
})


// Mock.mock(/\goods\/goodsList/,"get",function(options){
//     let {limit,page} = url.parse(options.url,true).query;
//     return data.data.slice((page-1)*limit,(limit*page)-1)
// })


Mock.mock(/\goods\/goodsList/,"post",function(options){
  // console.log(options);1
  let {limit,page} = JSON.parse(options.body);

  // let {limit,page} = url.parse(options.url,true).query;
  return data.data.slice((page-1)*limit,(limit*page)-1)
})
