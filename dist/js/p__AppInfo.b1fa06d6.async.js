(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5,7],{"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=()=>JSON.parse(localStorage.getItem("dataSource")||"{}"),r=(e,t)=>{var a=n(),r=Object.keys(a).find((t=>a[t].author===e))||"",c=a[r].apps||[];return c.find((e=>e.name===t))},c=e=>localStorage.setItem("dataSource",JSON.stringify(e))},Idy6:function(e,t,a){"use strict";a.r(t);a("QE6f");var n=a("Xo8F"),r=(a("tLCQ"),a("XYLF")),c=a("VTBJ"),l=(a("1Cgs"),a("zvbH")),o=(a("D2jH"),a("2ROE")),i=a("q1tI"),s=a.n(i),m=a("Ty5D"),u=a("9kvl"),d=a("bTu8"),p=a("Ap4+"),g=a("xqva"),E=a("Ndxo"),b=a("i7U8"),_=a("0lfv"),f=a("bIAK"),h=a("I5X1"),v=a("La0L"),O=a.n(v);a("J/SH");d["a"].use([p["a"]]);var j=()=>{var e=Object(m["l"])(),t=e.appId,a=e.author,i=Object(_["b"])(a,t),d=Object(h["a"])("initialiseModel",(e=>e)),p=d.isScriptable;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l["a"],{mode:"light",icon:s.a.createElement(o["a"],{type:"left"}),onLeftClick:()=>u["a"].goBack()}),i?s.a.createElement("div",{className:O.a.container},s.a.createElement(r["a"],{full:!0},s.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u4fe1\u606f",extra:p?s.a.createElement(b["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png",onClick:()=>{var e=new CustomEvent("catalog-event",{detail:Object(c["a"])(Object(c["a"])({},i),{},{key:"downloadButtonClicked"})});window.dispatchEvent(e),console.log("\u89e6\u53d1\u4e0b\u8f7d\u529f\u80fd")}}):s.a.createElement("a",{href:i.scriptURL,download:"".concat(i.name,".js")},s.a.createElement(b["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png"}))}),s.a.createElement(r["a"].Body,{className:O.a.container_body},s.a.createElement(n["a"],{align:"start",justify:"start"},s.a.createElement("img",{className:O.a.appImg,src:i.thumb,alt:i.name}),s.a.createElement(n["a"].Item,null,s.a.createElement(n["a"],{direction:"column",align:"start"},s.a.createElement(n["a"],null,s.a.createElement("h3",{className:O.a.appTitle},i.title)),s.a.createElement(n["a"].Item,null,s.a.createElement("div",{className:O.a.appDesc},i.description))))))),i.html&&s.a.createElement(r["a"],{full:!0},s.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u63cf\u8ff0"}),s.a.createElement(r["a"].Body,null,s.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.html.join("")}}))),i.images&&s.a.createElement("div",{className:O.a.photos},s.a.createElement(r["a"],{full:!0},s.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u76f8\u518c"}),s.a.createElement(r["a"].Body,null,s.a.createElement(g["a"],{scrollbar:{draggable:!0},spaceBetween:10,slidesPerView:1.2},i.images.map(((e,t)=>s.a.createElement(E["a"],{key:"img".concat(t)},s.a.createElement("img",{style:{maxWidth:"100%",width:"auto"},src:e,alt:""}))))))))):s.a.createElement(f["a"],null,"\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6"))};t["default"]=j},La0L:function(e,t,a){e.exports={container:"container___2dK_3",container_body:"container_body___1k27R",appImg:"appImg___1MXfc",appTitle:"appTitle___2Vrw4",appDesc:"appDesc___qLGi7"}},R0pf:function(e,t,a){e.exports={container:"container___3WbTd",widgetTitle:"widgetTitle___1Ojl9",icon:"icon___38pp4",subList:"subList___1NVQZ","row-dragging":"row-dragging___1TbdM",avatar:"avatar___2yRWX",user_info:"user_info___1pF6R",user_title:"user_title___3VZaa",user_text:"user_text___2-KJa",extra:"extra___1Pjch"}},diY3:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("o0o1"),r=a.n(n),c=(a("HVTF"),a("OT5E")),l=a("HaE+"),o=a("9kvl"),i=function(){var e=Object(l["a"])(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["c"])(t,{method:"get"});case 2:a=e.sent;try{a.scriptable?(n=JSON.parse(localStorage.getItem("dataSource")||"{}"),n[t]=a,localStorage.setItem("dataSource",JSON.stringify(n))):c["a"].fail("\u8ba2\u9605\u5730\u5740\u9519\u8bef")}catch(r){c["a"].fail(JSON.stringify(r))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},i7U8:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomerIcon",(function(){return N}));a("mw1O");var n=a("nJCp"),r=a("VTBJ"),c=(a("tLCQ"),a("XYLF")),l=a("o0o1"),o=a.n(l),i=a("HaE+"),s=(a("RFiq"),a("ZyfH")),m=a("ODXe"),u=(a("pYJI"),a("EIQY")),d=(a("QE6f"),a("Xo8F")),p=(a("B8GA"),a("8dL9")),g=a("wx14"),E=a("Ff2n"),b=(a("puyI"),a("xZH1")),_=a("q1tI"),f=a.n(_),h=a("wYyv"),v=a.n(h),O=a("YJCA"),j=a("R0pf"),y=a.n(j),w=a("0lfv"),x=a("diY3"),k=a("bIAK"),I=b["a"].prompt,N=Object(_["forwardRef"])(((e,t)=>{var a=e.icon,n=Object(E["a"])(e,["icon"]);return f.a.createElement("img",Object(g["a"])({ref:t,className:y.a.icon,alt:"",src:a},n))})),S=Object(O["c"])((e=>{var t=e.counts;return f.a.createElement(p["a"],{style:{userSelect:"none"},text:t,size:"small"})})),L=e=>{var t=e.dataSource,a=e.update,n=e.setLoading;return f.a.createElement(u["a"],{className:y.a.subList,autoClose:!0,right:[{text:"\u66f4\u65b0",onPress:()=>(n(!0),Object(x["a"])(t.url).then((()=>{var e=Object(w["a"])();a(e)})).finally((()=>{n(!1)}))),style:{backgroundColor:"#77cad1",color:"white"}},{text:"\u5220\u9664",onPress:()=>{var e=Object(w["a"])();delete e[t.url],Object(w["c"])(e),a(e)},style:{backgroundColor:"red",color:"white"}}],style:{marginBottom:10,padding:"10px 0"}},f.a.createElement(d["a"],null,f.a.createElement("img",{className:y.a.avatar,alt:"",src:t.icon}),f.a.createElement("div",null,f.a.createElement(d["a"],{className:y.a.user_info,direction:"column",justify:"start"},f.a.createElement("div",{className:y.a.user_title},t.author," \u7ec4\u4ef6"),f.a.createElement("div",null,t.repo),f.a.createElement("div",{className:y.a.user_text},"@",t.author))),f.a.createElement(S,{counts:t.counts}),f.a.createElement("div",{style:{marginLeft:"auto"}},f.a.createElement("a",{href:t.repo,target:"_blank"},f.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/github.png",style:{width:"3rem",height:"3rem"}})))))},C=Object(O["b"])((e=>f.a.createElement(L,e))),H=Object(O["a"])((e=>{var t=e.children;return f.a.createElement("div",null,t)}));t["default"]=()=>{var e=Object(w["a"])(),t=f.a.useState(e),a=Object(m["a"])(t,2),l=a[0],u=a[1],d=f.a.useState(!1),p=Object(m["a"])(d,2),g=p[0],E=p[1];return f.a.createElement(n["a"],{className:y.a.container},f.a.createElement(s["a"],{toast:!0,animating:g}),f.a.createElement(c["a"],null,f.a.createElement(c["a"].Header,{className:y.a.widgetTitle,title:"\u7ec4\u4ef6\u8ba2\u9605(".concat(Object.keys(l).length,")"),extra:f.a.createElement("div",{className:y.a.extra},f.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/cloud-refresh.png",onClick:Object(i["a"])(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object.keys(l),E(!0),a=0,n=t;case 3:if(!(a<n.length)){e.next=10;break}return r=n[a],e.next=7,Object(x["a"])(r);case 7:a++,e.next=3;break;case 10:u(Object(w["a"])()),E(!1);case 12:case"end":return e.stop()}}),e)})))}),f.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/add.png",onClick:()=>I("\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740","",[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){var e=Object(i["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return E(!0),e.next=3,Object(x["a"])(t);case 3:u(Object(w["a"])()),E(!1);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}])}))}),f.a.createElement(c["a"].Body,{style:{minHeight:100}},f.a.createElement(H,{useDragHandle:!0,helperClass:y.a["row-dragging"],onSortEnd:t=>{var a=t.oldIndex,n=t.newIndex,r=Object.keys(l),c=v()(r,a,n),o={};c.forEach((t=>{o[t]=e[t]})),Object(w["c"])(o),u(o)}},Object.keys(l).length?Object.keys(l).map(((e,t)=>{var a=l[e],n=Object(r["a"])(Object(r["a"])({},a),{},{counts:a.apps.length,url:e});return f.a.createElement(C,{key:e,index:t,dataSource:n,update:u,setLoading:E})})):f.a.createElement(k["a"],{style:{height:"5rem"}},"\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605")))))}}}]);