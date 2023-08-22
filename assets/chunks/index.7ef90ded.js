import{h as g,d as m,i as l,j as c,z as R,n as b,R as j,s as d,an as W,a as z,f as P,w as q,D as F,p as $,q as H,a3 as S,J as C,u as v,k as h,ao as J,L as U,ap as X,aq as Y,T as G,ar as K,a0 as V}from"./framework.36fb4a52.js";import{a as Q}from"./theme.d51c024c.js";function I(e){const s=e.currentTarget,{offsetX:n,offsetY:i}=e,a=document.createElement("div");a.className="ripple-dom",a.style.left=n+"px",a.style.top=i+"px",s.appendChild(a),setTimeout(()=>{a.remove()},750)}const x={created(e){e.addEventListener("mousedown",I,!0)},beforeUnmount(e){e.removeEventListener("mousedown",I,!0)}};const Z=g({name:"j-icon"}),ee=g({...Z,props:{color:{default:""},size:{default:"medium"},disabled:{type:Boolean,default:!1},icon:{default:null},hover:{type:Boolean,default:!0},blod:{type:[Boolean,Number],default:!1}},setup(e){const s=e,n=m(()=>["size_"+s.size]),i=m(()=>{const a={};return s.color&&(a.color=s.color),s.hover&&(a.cursor="pointer"),s.blod&&(a.fontWeight=typeof s.blod=="boolean"?600:s.blod),a});return(a,p)=>a.icon?(l(),c("div",{key:0,class:b(["j-icon",n.value]),style:j(i.value)},[R("i",{class:b(["iconfont",[a.icon]])},null,2)],6)):d("",!0)}}),E=e=>(e.install=s=>{const n=e.name;s.component(n,e)},e);function Ce(e){return Array.isArray(e)}const Be=(e,s=0,n=100)=>Math.min(n,Math.max(s,e));function je(e,{min:s,max:n}){return e/100*(n-s)+s}function Te(e,{min:s,max:n}){return(e-s)/(n-s)*100}const L=E(ee),se=["info","warning","success","error"];const f=W([]),ne={key:0,class:"j-message-icon"},oe={class:"j-message-inner"},te={key:0,class:"j-message-content"},ae=["innerHTML"],le={key:2},ie={key:1,class:"j-message-close"},re=g({name:"j-alert"}),ce=g({...re,props:{showType:{default:"alert"},type:{default:"info"},message:{type:[String,Function,Object],default:""},closed:{type:Boolean,default:!1},onClose:{type:[Function,null],default:null},id:{default:null},defaultVisable:{type:Boolean,default:!0},duration:{default:3e3},showIcon:{type:Boolean,default:!1}},setup(e,{expose:s}){const n=e,i=20,a=m(()=>({info:"icon-jinggao",success:"icon-chenggong1",warning:"icon-xinxi-yuankuang",error:"icon-cuowuguanbiquxiao-yuankuang"})[n.type]),p=x,u=z(n.defaultVisable),t=z();let r=null;const A=m(()=>{const o=[];return n.type&&o.push(n.type),o}),D=m(()=>{const o={};if(n.showType==="alert")o.display="flex",o.zIndex=0;else if(n.showType==="pop-up"){let y=0;n.id&&(y=f.findIndex(O=>O.id===n.id)||0),o.display="inline-flex",o.position="fixed",o.left="50%",o.top=y*54+i+"px",o.marginTop=y*i+"px";const _=t.value;_&&(o.marginLeft=-_.clientWidth/2+"px")}return o});function T(){u.value=!0}function k(){u.value=!1}const M=()=>{n.duration!==0&&(w(),r=setTimeout(()=>{k()},n.duration))},w=()=>{r&&clearTimeout(r)};return P(()=>{if(n.showType==="pop-up"){T(),M();const{isOutside:o}=Q(t);q(o,y=>{!y&&r?w():M()})}}),F(()=>{r&&w()}),s({open:T,close:k}),(o,y)=>(l(),$(G,{"on-before-leave":o.onClose,name:"j-message"},{default:H(()=>[u.value?S((l(),c("div",{key:0,ref_key:"jMessageRef",ref:t,class:b(["j-message",A.value]),style:j(D.value)},[o.showIcon?(l(),c("div",ne,[C(v(L),{icon:a.value},null,8,["icon"])])):d("",!0),R("div",oe,[typeof o.message=="string"?(l(),c("div",te,[o.$slots.default?h(o.$slots,"default",{key:0}):typeof o.message=="string"?(l(),c("span",{key:1,innerHTML:o.message},null,8,ae)):J(o.message)?(l(),c("div",le,[(l(),$(U(o.message),X(Y(o.message.props)),null,16))])):d("",!0)])):d("",!0)]),o.closed?(l(),c("div",ie,[C(v(be),{onClick:k,icon:"icon-close",size:"so-small","icon-btn":""})])):d("",!0)],6)),[[v(p)]]):d("",!0)]),_:3},8,["on-before-leave"]))}});let ue=1;const de=se,N=e=>({...e,showType:"pop-up",defaultVisable:!1});function fe(){return document.createDocumentFragment()}function pe(e){const s=fe(),n=e.mount(s);return document.body.appendChild(s),n}const me=e=>{const s=f.indexOf(e);s!==-1&&(f.splice(s,1),setTimeout(()=>{e.app.unmount()},300))};function ye(e){const s=`j-message-${ue++}`,n=e.onClose,i={...e,id:s,onClose:()=>{n==null||n(),me(u)}},a=K(ce,i),p=pe(a),u={id:s,app:a,vm:p,props:i,handler:{close(){p.close()}}};return u}const B=e=>{e=N(e);const s=ye(e);return f.push(s),s.handler};de.forEach(e=>{B[e]=s=>(s=N(s),B({...s,type:e}))});B.closeAll=e=>{if(f.length)for(const s in f)(!e||f[s].props.type===e)&&f[s].handler.close()};const ge=["disabled"],ve=g({name:"j-button"}),he=g({...ve,props:{type:{default:""},size:{default:"medium"},disabled:{type:Boolean,default:!1},btnType:{},icon:{default:null},iconBtn:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const n=e,i=x,a=m(()=>{const t=[n.type,n.size];return n.disabled&&t.push("disabled"),n.iconBtn&&t.push("icon-btn"),t}),p=m(()=>{const t={};return n.block&&(t.display="flex"),t}),u=t=>{n.disabled||s("click",t)};return(t,r)=>S((l(),c("div",{disabled:t.disabled,class:b(["j-button",a.value]),onClick:u,style:j(p.value)},[h(t.$slots,"icon",{},()=>[t.icon||t.iconBtn?(l(),c("div",{key:0,onMousedown:r[0]||(r[0]=V(()=>{},["stop","prevent"])),class:"j-button-icon"},[C(v(L),{size:t.size,icon:t.icon},null,8,["size","icon"])],32)):d("",!0)]),t.iconBtn?d("",!0):(l(),c("div",{key:0,onMousedown:r[1]||(r[1]=V(()=>{},["stop","prevent"])),class:"j-button-text"},[h(t.$slots,"default")],32)),h(t.$slots,"icon-right")],14,ge)),[[v(i)]])}}),be=E(he);export{be as B,L as I,ce as _,je as a,Te as b,Be as c,x as d,Ce as i,B as m,E as w};