"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[87],{55202:function(e,t,n){n(72791);t.Z=n.p+"static/media/select-arrow.ef735b9a48c75a4e5498f876e3b0888b.svg"},78076:function(e,t,n){var a=n(1413),o=(n(72791),n(93646)),s=n(38630),l=n(28182),r=n(55202),i=n(80184),c=function(e){return o.c.DropdownIndicator&&(0,i.jsx)(o.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},e),{},{children:(0,i.jsx)("img",{src:r.Z,alt:"arrow"})}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(t,n,o){return(0,a.Z)((0,a.Z)({},t),{},{background:"#fff",borderColor:"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",color:"#222",display:"flex",overflow:"hidden",padding:"4px 12px",width:e?"100px":"100%",minWidth:e?"80px":"200px",minHeight:"48px",fontSize:"16px",fontWeight:"600","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,t){return(0,a.Z)((0,a.Z)({},e),{},{display:"none"})}}};t.Z=function(e){var t=e.name,n=void 0===t?"":t,a=e.value,o=void 0===a?null:a,r=e.sm,u=void 0!==r&&r,x=e.label,m=void 0===x?"":x,h=e.options,f=void 0===h?[]:h,g=e.setValue,v=void 0===g?function(){}:g,p=e.isClearable,b=void 0===p||p;return(0,i.jsxs)("div",{className:(0,l.Z)({"flex items-center":u}),children:[m&&(0,i.jsxs)("label",{className:(0,l.Z)("mb-1.5 text-secondary-300 font-bold flex items-center"),htmlFor:m,children:[m,(0,i.jsx)("span",{className:"ml-1.5 inline-block bg-[#006D85] w-1.5 h-1.5 rounded-full"})]}),(0,i.jsx)(s.ZP,{isClearable:b,name:n,clearIndicator:!0,styles:d(u),id:m,value:o,onChange:v,options:f,components:{DropdownIndicator:c},placeholder:u?"":"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"})]})}},61087:function(e,t,n){n.d(t,{Z:function(){return F}});var a=n(1413),o=n(29439),s=n(72791),l=n(94502),r=n(63917),i=n(28182),c=n(763),d=n(57689),u=n(78076),x=n(70188),m=n(96048),h=n.n(m);var f=n.p+"static/media/prev.0ba7b31192ae832f345d4a127d088f8d.svg";var g=n.p+"static/media/next.bebff1c891b224785dd8a6b5e39612fd.svg",v=n(39230),p=n(80184),b=function(){var e=(0,v.$G)().t;return(0,p.jsx)("div",{className:"p-5 pt-7 text-center font-semibold",children:e("No data")})},j=n(10658),y=function(e){var t=e.children,n=e.onClose,a=void 0===n?function(){}:n,o=e.open,l=void 0!==o&&o,r=e.title,c=void 0===r?"":r,d=e.classNames,u=void 0===d?"":d;return(0,s.useEffect)((function(){document.body.style.overflow=l?"hidden":"auto"}),[l]),(0,p.jsx)(p.Fragment,{children:l&&(0,p.jsxs)("div",{className:"h-screen fixed top-0 left-0 w-full z-50",children:[(0,p.jsx)("div",{onClick:a,className:"absolute top-0 left-0 h-full w-full z-5 bg-[#d9d9d9ab]"}),(0,p.jsxs)("div",{className:(0,i.Z)("bg-white p-6 z-10 absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded shadow-card max-h-[85vh] overflow-y-auto",u),children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:"text-xl font-bold mb-6",children:c}),(0,p.jsx)(j.Z,{onClick:a,className:"absolute right-3 top-3 cursor-pointer"})]}),t]})]})})},w=n(59828),N=n(38965),C=n(84965),k=n(21830),Z=n.n(k),z=n(46671),E=n.n(z),F=function(e){var t=e.url,n=void 0===t?"/":t,m=e.viewUrl,j=void 0===m?null:m,k=e.listKey,z=void 0===k?"":k,F=e.params,S=void 0===F?{}:F,D=e.filters,B=void 0===D?null:D,I=e.columns,L=void 0===I?[]:I,K=e.onRowClick,A=void 0===K?function(){}:K,M=e.doubleRow,P=void 0!==M&&M,R=e.modalClassNames,V=void 0===R?"":R,G=e.hasActionColumn,T=void 0!==G&&G,U=e.ModalBody,W=void 0===U?null:U,$=e.openCreateModal,q=void 0!==$&&$,H=e.setOpenCreateModal,O=void 0===H?function(){}:H,_=e.dataKey,J=void 0===_?"data.data":_,Q=e.rowKey,X=void 0===Q?"id":Q,Y=e.doubleScrollbar,ee=void 0!==Y&&Y,te=(0,s.useState)(1),ne=(0,o.Z)(te,2),ae=ne[0],oe=ne[1],se=(0,s.useState)(null),le=(0,o.Z)(se,2),re=le[0],ie=le[1],ce=(0,s.useState)({value:15,label:"15"}),de=(0,o.Z)(ce,2),ue=de[0],xe=de[1],me=(0,v.$G)().t,he=(0,l.i7)({key:z,url:n,params:{params:(0,a.Z)((0,a.Z)({},S),{},{page:ae,per_page:(0,c.get)(ue,"value")})}}),fe=he.data,ge=he.isLoading,ve=he.isError,pe=(0,l.xq)({id:re,key:[z,re],url:null!==j&&void 0!==j?j:n,enabled:!!re}),be=pe.data,je=void 0===be?{}:be,ye=pe.isLoading,we=(0,l.n7)({listKeyId:z}),Ne=we.mutate,Ce=we.isLoading,ke=(0,C.Z)({listKeyId:z}),Ze=ke.mutate,ze=ke.isLoading,Ee=(0,l.V0)({listKeyId:z}),Fe=Ee.mutate,Se=Ee.isLoading,De=function(e){var t=e.data,a=e.setError,o=e.reset;!q&&re?Ze({url:"".concat(null!==j&&void 0!==j?j:n,"/").concat((0,c.get)(t,X)),attributes:(0,c.omit)(t,X)},{onSuccess:function(){ie(null),o()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){a(t,{type:"validation",message:(0,c.head)(e)})}))}}):Ne({url:n,attributes:t},{onSuccess:function(){O(!1),o()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){a(t,{type:"validation",message:(0,c.head)(e)})}))}})},Be=function(e){Z().fire({position:"center",icon:"error",backdrop:"rgba(0,0,0,0.9)",background:"none",title:me("Are you sure?"),showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#F25886",cancelButtonColor:"#006D85",confirmButtonText:me("Delete"),cancelButtonText:me("Cancel"),customClass:{title:"title-color"}}).then((function(t){t.isConfirmed&&Fe({url:"".concat(null!==j&&void 0!==j?j:n,"/").concat(e)})}))};return ve?(0,p.jsx)(d.Fg,{to:"/error"}):ge?(0,p.jsx)(r.E,{}):(0,p.jsxs)("div",{className:"bg-white py-4 px-7 shadow-box",children:[B,(0,p.jsx)("div",{className:"max-h-[75vh] overflow-y-auto ",children:ee?(0,p.jsx)(E(),{children:(0,p.jsxs)("table",{className:"table relative   border border-[#E6E6E6] rounded-lg",children:[(0,p.jsx)("thead",{className:"thead sticky top-0 z-30 bg-white",children:(0,p.jsxs)("tr",{className:"tr",children:[L&&L.map((function(e,t){return(0,p.jsx)("th",{className:(0,i.Z)("th",(0,c.get)(e,"classnames",""),{"sticky left-0 z-50 bg-white":0===t}),children:(0,c.get)(e,"title")},(0,c.get)(e,"title"))})),T&&(0,p.jsx)("th",{className:"th text-center",children:me("Actions")})]})}),(0,p.jsx)("tbody",{className:"tbody",children:(0,c.get)(fe,J,[]).length>0?(0,c.get)(fe,J,[]).map((function(e,t){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("tr",{onClick:function(){return A(e)},className:"tr",children:[L.map((function(n,a){return(0,p.jsx)("td",{className:(0,i.Z)("td",(0,c.get)(n,"classnames",""),{"!px-0":P},{"sticky left-0 z-50 bg-white":0===a}),children:(0,c.get)(n,"render")?(0,c.get)(n,"render")({value:(0,c.get)(e,(0,c.get)(n,"key")),row:e,index:t+(ae-1)*ue+1}):(0,c.get)(e,(0,c.get)(n,"key"))},(0,c.get)(n,"key",a))})),T&&(0,p.jsxs)("td",{className:"td flex justify-center !max-w-full",children:[(0,p.jsx)(w.Z,{className:"mx-3.5",color:"#2F68FC",size:22,onClick:function(){return ie((0,c.get)(e,X))}}),(0,p.jsx)(N.Z,{onClick:function(){return Be((0,c.get)(e,X))},color:"#F25886",size:24})]})]},(0,c.get)(e,(0,c.get)(L,"[0].key",t)))})})):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:(null===L||void 0===L?void 0:L.length)||12,children:(0,p.jsx)(b,{})})})})]})}):(0,p.jsxs)("table",{className:"table relative   border border-[#E6E6E6] rounded-lg",children:[(0,p.jsx)("thead",{className:"thead sticky top-0 z-30 bg-white",children:(0,p.jsxs)("tr",{className:"tr",children:[L&&L.map((function(e,t){return(0,p.jsx)("th",{className:(0,i.Z)("th",(0,c.get)(e,"classnames",""),{"sticky left-0 z-50 bg-white":0===t}),children:(0,c.get)(e,"title")},(0,c.get)(e,"title"))})),T&&(0,p.jsx)("th",{className:"th text-center",children:me("Actions")})]})}),(0,p.jsx)("tbody",{className:"tbody",children:(0,c.get)(fe,J,[]).length>0?(0,c.get)(fe,J,[]).map((function(e,t){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("tr",{onClick:function(){return A(e)},className:"tr",children:[L.map((function(n,a){return(0,p.jsx)("td",{className:(0,i.Z)("td",(0,c.get)(n,"classnames",""),{"!px-0":P},{"sticky left-0 z-50 bg-white":0===a}),children:(0,c.get)(n,"render")?(0,c.get)(n,"render")({value:(0,c.get)(e,(0,c.get)(n,"key")),row:e,index:t+(ae-1)*ue+1}):(0,c.get)(e,(0,c.get)(n,"key"))},(0,c.get)(n,"key",a))})),T&&(0,p.jsxs)("td",{className:"td flex justify-center !max-w-full",children:[(0,p.jsx)(w.Z,{className:"mx-3.5",color:"#2F68FC",size:22,onClick:function(){return ie((0,c.get)(e,X))}}),(0,p.jsx)(N.Z,{onClick:function(){return Be((0,c.get)(e,X))},color:"#F25886",size:24})]})]},(0,c.get)(e,(0,c.get)(L,"[0].key",t)))})})):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:(null===L||void 0===L?void 0:L.length)||12,children:(0,p.jsx)(b,{})})})})]})}),(0,c.get)(fe,"data.meta.total")>0&&(0,p.jsxs)("div",{className:"flex mt-3 justify-between items-center",children:[(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)(u.Z,{isClearable:!1,sm:!0,value:ue,setValue:xe,options:x.D5}),(0,p.jsxs)("span",{className:"ml-3 text-secondary-300 text-sm font-semibold",children:[me("Show")," 1-",(0,c.get)(ue,"value",0)," ",me("from")," ",(0,c.get)(fe,"data.meta.total",0)]})]}),(0,p.jsx)(h(),{forcePage:ae-1,onPageChange:function(e){var t=e.selected;return oe(t+1)},pageCount:(0,c.ceil)((0,c.get)(fe,"data.meta.total",0)/(0,c.get)(ue,"value",1)),nextLabel:(0,p.jsx)("img",{src:g,alt:"next"}),previousLabel:(0,p.jsx)("img",{src:f,alt:"prev"}),className:"pagination"})]}),(0,p.jsxs)(y,{onClose:function(){O(!1),ie(null)},classNames:V,title:me(q?"Create":"Update"),open:!(!q&&!re),children:[Ce&&(0,p.jsx)(r.p,{}),ze&&(0,p.jsx)(r.p,{}),Se&&(0,p.jsx)(r.p,{}),q?W(De,je):ye?(0,p.jsx)(r.p,{}):W(De,je)]})]})}}}]);
//# sourceMappingURL=87.8fb71764.chunk.js.map