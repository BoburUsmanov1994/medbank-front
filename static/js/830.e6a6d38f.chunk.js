"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[830],{55202:function(e,t,n){n(72791);t.Z=n.p+"static/media/select-arrow.ef735b9a48c75a4e5498f876e3b0888b.svg"},78076:function(e,t,n){var a=n(1413),s=(n(72791),n(93646)),r=n(38630),o=n(28182),l=n(55202),i=n(80184),c=function(e){return s.c.DropdownIndicator&&(0,i.jsx)(s.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},e),{},{children:(0,i.jsx)("img",{src:l.Z,alt:"arrow"})}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(t,n,s){return(0,a.Z)((0,a.Z)({},t),{},{background:"#fff",borderColor:"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",color:"#222",display:"flex",overflow:"hidden",padding:"4px 12px",width:e?"100px":"100%",minWidth:e?"80px":"200px",minHeight:"48px",fontSize:"16px",fontWeight:"600","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,t){return(0,a.Z)((0,a.Z)({},e),{},{display:"none"})}}};t.Z=function(e){var t=e.name,n=void 0===t?"":t,a=e.value,s=void 0===a?null:a,l=e.sm,u=void 0!==l&&l,m=e.label,x=void 0===m?"":m,f=e.options,p=void 0===f?[]:f,v=e.setValue,h=void 0===v?function(){}:v,g=e.isClearable,b=void 0===g||g;return(0,i.jsxs)("div",{className:(0,o.Z)({"flex items-center":u}),children:[x&&(0,i.jsxs)("label",{className:(0,o.Z)("mb-1.5 text-secondary-300 font-bold flex items-center"),htmlFor:x,children:[x,(0,i.jsx)("span",{className:"ml-1.5 inline-block bg-[#006D85] w-1.5 h-1.5 rounded-full"})]}),(0,i.jsx)(r.ZP,{isClearable:b,name:n,clearIndicator:!0,styles:d(u),id:x,value:s,onChange:h,options:p,components:{DropdownIndicator:c},placeholder:u?"":"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"})]})}},61087:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(1413),s=n(29439),r=n(72791),o=n(94502),l=n(63917),i=n(28182),c=n(763),d=n(57689),u=n(78076),m=n(70188),x=n(96048),f=n.n(x);var p=n.p+"static/media/prev.0ba7b31192ae832f345d4a127d088f8d.svg";var v=n.p+"static/media/next.bebff1c891b224785dd8a6b5e39612fd.svg",h=n(39230),g=n(80184),b=function(){var e=(0,h.$G)().t;return(0,g.jsx)("div",{className:"p-5 pt-7 text-center font-semibold",children:e("No data")})},j=n(10658),y=function(e){var t=e.children,n=e.onClose,a=void 0===n?function(){}:n,s=e.open,o=void 0!==s&&s,l=e.title,c=void 0===l?"":l,d=e.classNames,u=void 0===d?"":d;return(0,r.useEffect)((function(){document.body.style.overflow=o?"hidden":"auto"}),[o]),(0,g.jsx)(g.Fragment,{children:o&&(0,g.jsxs)("div",{className:"h-screen fixed top-0 left-0 w-full z-50",children:[(0,g.jsx)("div",{onClick:a,className:"absolute top-0 left-0 h-full w-full z-5 bg-[#d9d9d9ab]"}),(0,g.jsxs)("div",{className:(0,i.Z)("bg-white p-6 z-10 absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded shadow-card max-h-[85vh] overflow-y-auto",u),children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:"text-xl font-bold mb-6",children:c}),(0,g.jsx)(j.Z,{onClick:a,className:"absolute right-3 top-3 cursor-pointer"})]}),t]})]})})},N=n(59828),Z=n(38965),w=n(84965),C=n(21830),k=n.n(C),E=function(e){var t=e.url,n=void 0===t?"/":t,x=e.viewUrl,j=void 0===x?null:x,C=e.listKey,E=void 0===C?"":C,F=e.params,S=void 0===F?{}:F,D=e.filters,_=void 0===D?null:D,I=e.columns,L=void 0===I?[]:I,B=e.onRowClick,K=void 0===B?function(){}:B,R=e.doubleRow,T=void 0!==R&&R,U=e.modalClassNames,z=void 0===U?"":U,A=e.hasActionColumn,M=void 0!==A&&A,V=e.ModalBody,H=void 0===V?null:V,Y=e.openCreateModal,$=void 0!==Y&&Y,G=e.setOpenCreateModal,P=void 0===G?function(){}:G,q=e.dataKey,W=void 0===q?"data.data":q,X=e.rowKey,O=void 0===X?"id":X,J=(0,r.useState)(1),Q=(0,s.Z)(J,2),ee=Q[0],te=Q[1],ne=(0,r.useState)(null),ae=(0,s.Z)(ne,2),se=ae[0],re=ae[1],oe=(0,r.useState)({value:15,label:"15"}),le=(0,s.Z)(oe,2),ie=le[0],ce=le[1],de=(0,h.$G)().t,ue=(0,o.i7)({key:E,url:n,params:{params:(0,a.Z)((0,a.Z)({},S),{},{page:ee,per_page:(0,c.get)(ie,"value")})}}),me=ue.data,xe=ue.isLoading,fe=ue.isError,pe=(0,o.xq)({id:se,key:[E,se],url:null!==j&&void 0!==j?j:n,enabled:!!se}),ve=pe.data,he=void 0===ve?{}:ve,ge=pe.isLoading,be=(0,o.n7)({listKeyId:E}),je=be.mutate,ye=be.isLoading,Ne=(0,w.Z)({listKeyId:E}),Ze=Ne.mutate,we=Ne.isLoading,Ce=(0,o.V0)({listKeyId:E}),ke=Ce.mutate,Ee=Ce.isLoading,Fe=function(e){var t=e.data,a=e.setError,s=e.reset;!$&&se?Ze({url:"".concat(null!==j&&void 0!==j?j:n,"/").concat((0,c.get)(t,O)),attributes:(0,c.omit)(t,O)},{onSuccess:function(){re(null),s()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){a(t,{type:"validation",message:(0,c.head)(e)})}))}}):je({url:n,attributes:t},{onSuccess:function(){P(!1),s()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){a(t,{type:"validation",message:(0,c.head)(e)})}))}})};return fe?(0,g.jsx)(d.Fg,{to:"/error"}):xe?(0,g.jsx)(l.E,{}):(0,g.jsxs)("div",{className:"bg-white py-4 px-7 shadow-box",children:[_,(0,g.jsx)("div",{style:{transform:"rotateX(180deg)"},className:"overflow-x-auto max-h-[75vh] overflow-y-auto border border-[#E6E6E6] rounded-lg",children:(0,g.jsxs)("table",{style:{transform:"rotateX(180deg)"},className:"table",children:[(0,g.jsx)("thead",{className:"thead",children:(0,g.jsxs)("tr",{className:"tr",children:[L&&L.map((function(e){return(0,g.jsx)("th",{className:(0,i.Z)("th",(0,c.get)(e,"classnames","")),children:(0,c.get)(e,"title")},(0,c.get)(e,"title"))})),M&&(0,g.jsx)("th",{className:"th text-center",children:de("Actions")})]})}),(0,g.jsx)("tbody",{className:"tbody",children:(0,c.get)(me,W,[]).length>0?(0,c.get)(me,W,[]).map((function(e,t){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("tr",{onClick:function(){return K(e)},className:"tr",children:[L.map((function(n,a){return(0,g.jsx)("td",{className:(0,i.Z)("td",(0,c.get)(n,"classnames",""),{"!px-0":T}),children:(0,c.get)(n,"render")?(0,c.get)(n,"render")({value:(0,c.get)(e,(0,c.get)(n,"key")),row:e,index:t+(ee-1)*ie+1}):(0,c.get)(e,(0,c.get)(n,"key"))},(0,c.get)(n,"key",a))})),M&&(0,g.jsxs)("td",{className:"td flex justify-center !max-w-full",children:[(0,g.jsx)(N.Z,{className:"mx-3.5",color:"#2F68FC",size:22,onClick:function(){return re((0,c.get)(e,O))}}),(0,g.jsx)(Z.Z,{onClick:function(){return t=(0,c.get)(e,O),void k().fire({position:"center",icon:"error",backdrop:"rgba(0,0,0,0.9)",background:"none",title:de("Are you sure?"),showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#F25886",cancelButtonColor:"#006D85",confirmButtonText:de("Delete"),cancelButtonText:de("Cancel"),customClass:{title:"title-color"}}).then((function(e){e.isConfirmed&&ke({url:"".concat(null!==j&&void 0!==j?j:n,"/").concat(t)})}));var t},color:"#F25886",size:24})]})]},(0,c.get)(e,(0,c.get)(L,"[0].key",t)))})})):(0,g.jsx)("tr",{children:(0,g.jsx)("td",{colSpan:(null===L||void 0===L?void 0:L.length)||12,children:(0,g.jsx)(b,{})})})})]})}),(0,c.get)(me,"data.meta.total")>0&&(0,g.jsxs)("div",{className:"flex mt-3 justify-between items-center",children:[(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)(u.Z,{isClearable:!1,sm:!0,value:ie,setValue:ce,options:m.D5}),(0,g.jsxs)("span",{className:"ml-3 text-secondary-300 text-sm font-semibold",children:[de("Show")," 1-",(0,c.get)(ie,"value",0)," ",de("from")," ",(0,c.get)(me,"data.meta.total",0)]})]}),(0,g.jsx)(f(),{forcePage:ee-1,onPageChange:function(e){var t=e.selected;return te(t+1)},pageCount:(0,c.ceil)((0,c.get)(me,"data.meta.total",0)/(0,c.get)(ie,"value",1)),nextLabel:(0,g.jsx)("img",{src:v,alt:"next"}),previousLabel:(0,g.jsx)("img",{src:p,alt:"prev"}),className:"pagination"})]}),(0,g.jsxs)(y,{onClose:function(){P(!1),re(null)},classNames:z,title:de($?"Create":"Update"),open:!(!$&&!se),children:[ye&&(0,g.jsx)(l.p,{}),we&&(0,g.jsx)(l.p,{}),Ee&&(0,g.jsx)(l.p,{}),$?H(Fe,he):ge?(0,g.jsx)(l.p,{}):H(Fe,he)]})]})}},91830:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(72791),s=n(1413),r=n(29439),o=n(72509),l=n(61087),i=n(18720),c=n(48665),d=n(39230),u=n(78076),m=n(70188),x=n(763),f=n(40077),p=n(8347),v=n(97892),h=n.n(v),g=n(28182),b=n(80184),j=function(e){var t=e.children,n=e.status,a=void 0===n?"success":n;return(0,b.jsx)("span",{className:(0,g.Z)("py-1 px-3 rounded-2xl font-semibold bg-[#FEF5ED] text-[#F2994A]",{"!bg-[#EAF7F0] !text-[#27AE60]":a==m.U_.success,"!bg-red-100 !text-[#EB5757]":a==m.U_.failed}),children:t})},y=function(){var e=(0,d.$G)().t,t=(0,p.Z)({}).token,n=(0,a.useState)({reportType:null,reportStatus:null}),v=(0,r.Z)(n,2),g=v[0],y=v[1],N=[{title:"ID",key:"id",classnames:"!w-[80px] !min-w-0"},{title:e("File name"),key:"file_name",render:function(e){var n=e.row;return(0,x.isEqual)((0,x.get)(n,"status"),m.U_.success)?(0,b.jsx)("a",{className:"text-blue-700",href:"".concat(f.Z.FILE_URL,"api/reports/").concat((0,x.get)(n,"id"),"?token=").concat(t),target:"_self",children:(0,x.get)(n,"file_name")}):(0,b.jsx)("span",{className:"text-red-600",children:(0,x.get)(n,"file_name")})}},{title:e("Report type"),key:"type"},{title:e("Report status"),key:"status",render:function(e){var t=e.value;return(0,b.jsx)(j,{status:t,children:t})}},{title:e("Created date"),key:"created_at",render:function(e){var t=e.row;return h()((0,x.get)(t,"created_at")).format("DD-MM-YYYY HH:mm:ss")}}];return(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,b.jsx)("div",{className:"col-span-12",children:(0,b.jsx)(o.Z,{children:e("Reports")})}),(0,b.jsx)("div",{className:"col-span-12 mt-8",children:(0,b.jsx)(l.Z,{filters:(0,b.jsxs)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:[(0,b.jsx)("div",{className:"col-span-3",children:(0,b.jsx)(u.Z,{value:(0,x.get)(g,"reportType"),setValue:function(e){return y((function(t){return(0,s.Z)((0,s.Z)({},t),{},{reportType:e})}))},label:e("Type"),options:(0,x.keys)(m.H$).map((function(t){return{value:t,label:e(t)}}))})}),(0,b.jsx)("div",{className:"col-span-3",children:(0,b.jsx)(u.Z,{value:(0,x.get)(g,"reportStatus"),setValue:function(e){return y((function(t){return(0,s.Z)((0,s.Z)({},t),{},{reportStatus:e})}))},label:e("Status"),options:(0,x.keys)(m.U_).map((function(t){return{value:t,label:e(t)}}))})})]}),listKey:i.t.reports,url:c.n.reports,params:{status:(0,x.get)(g,"reportStatus.value"),type:(0,x.get)(g,"reportType.value")},columns:N})})]})})},N=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(y,{})})}}}]);
//# sourceMappingURL=830.e6a6d38f.chunk.js.map