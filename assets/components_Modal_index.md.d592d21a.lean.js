import{a as F,E as i,j as d,J as o,q as l,z as p,l as n,U as y,i as u}from"./chunks/framework.36fb4a52.js";const C=p("h1",{id:"modal-模态框",tabindex:"-1"},[n("Modal 模态框 "),p("a",{class:"header-anchor",href:"#modal-模态框","aria-label":'Permalink to "Modal 模态框"'},"​")],-1),m=p("h2",{id:"基础演示-点击蒙层关闭",tabindex:"-1"},[n("基础演示 ‘点击蒙层关闭’ "),p("a",{class:"header-anchor",href:"#基础演示-点击蒙层关闭","aria-label":'Permalink to "基础演示 ‘点击蒙层关闭’"'},"​")],-1),_=y("",2),A=p("div",null,"我是标题",-1),h=y("",2),v=p("div",null,"我是页脚",-1),E=y("",3),S=JSON.parse('{"title":"Modal 模态框","description":"","frontmatter":{},"headers":[],"relativePath":"components/Modal/index.md","filePath":"components/Modal/index.md"}'),q={name:"components/Modal/index.md"},k=Object.assign(q,{setup(b){const t=F(!1),e=F(!1),c=F(!1);return(g,s)=>{const r=i("j-button"),D=i("j-modal");return u(),d("div",null,[C,m,o(r,{onClick:s[0]||(s[0]=a=>t.value=!0),type:"primary"},{default:l(()=>[n("Open Modal ")]),_:1}),o(D,{clkOutSideClose:!0,position:"top",title:"Modal",visable:t.value,"onUpdate:visable":s[1]||(s[1]=a=>t.value=a)},{default:l(()=>[n(" content... ")]),_:1},8,["visable"]),_,o(r,{onClick:s[2]||(s[2]=a=>e.value=!0),type:"primary"},{default:l(()=>[n("Open ")]),_:1}),o(D,{clkOutSideClose:!0,position:"top",title:"Modal",visable:e.value,"onUpdate:visable":s[3]||(s[3]=a=>e.value=a)},{title:l(()=>[A]),default:l(()=>[n(" content... ")]),_:1},8,["visable"]),h,o(r,{onClick:s[4]||(s[4]=a=>c.value=!0),type:"primary"},{default:l(()=>[n("Open")]),_:1}),o(D,{position:"top",title:"Modal",visable:c.value,"onUpdate:visable":s[5]||(s[5]=a=>c.value=a)},{footer:l(()=>[v]),default:l(()=>[n(" content... ")]),_:1},8,["visable"]),E])}}});export{S as __pageData,k as default};