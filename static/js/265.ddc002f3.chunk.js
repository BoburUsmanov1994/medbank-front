"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[265],{56225:function(e,t,a){var l=a(1413),n=a(45987),r=a(72791),s=a(28182),i=a(763),o=a(80184),c=["label","value","setValue","placeholder"];t.Z=function(e){var t=e.label,a=void 0===t?"":t,d=e.value,u=void 0===d?"":d,m=e.setValue,v=void 0===m?function(){}:m,h=e.placeholder,f=void 0===h?"":h,g=(0,n.Z)(e,c),x=(0,r.useMemo)((function(e){return(0,i.debounce)((function(e){v(e.target.value)}),1e3)}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-group mb-0",children:[(0,o.jsx)("label",{className:"form-label",htmlFor:"#",children:a}),(0,o.jsx)("input",(0,l.Z)((0,l.Z)({placeholder:f,defaultValue:u,onChange:x},g),{},{className:(0,s.Z)("form-input"),type:"search"}))]})})}},54179:function(e,t,a){var l=a(72791),n=a(10658),r=a(28182),s=a(80184);t.Z=function(e){var t=e.children,a=e.onClose,i=void 0===a?function(){}:a,o=e.open,c=void 0!==o&&o,d=e.title,u=void 0===d?"":d,m=e.classNames,v=void 0===m?"":m;return(0,l.useEffect)((function(){document.body.style.overflow=c?"hidden":"auto"}),[c]),(0,s.jsx)(s.Fragment,{children:c&&(0,s.jsxs)("div",{className:"h-screen fixed top-0 left-0 w-full z-50",children:[(0,s.jsx)("div",{onClick:i,className:"absolute top-0 left-0 h-full w-full z-5 bg-[#d9d9d9ab]"}),(0,s.jsxs)("div",{className:(0,r.Z)("bg-white p-6 z-10 absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded shadow-card max-h-[85vh] overflow-y-auto",v),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-xl font-bold mb-6",children:u}),(0,s.jsx)(n.Z,{onClick:i,className:"absolute right-3 top-3 cursor-pointer"})]}),t]})]})})}},70188:function(e,t,a){a.d(t,{D5:function(){return o},H$:function(){return d},Iu:function(){return s},U_:function(){return u},Up:function(){return c},gg:function(){return i}});var l=a(763),n=a(97892),r=a.n(n),s=(0,l.range)(2e3,r()().add(1,"year").format("YYYY")).map((function(e){return{value:e,label:e}})),i=[{value:"01",label:"January"},{value:"02",label:"February"},{value:"03",label:"March"},{value:"04",label:"April"},{value:"05",label:"May"},{value:"06",label:"June"},{value:"07",label:"July"},{value:"08",label:"August"},{value:"09",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}],o=[{value:15,label:"15"},{value:25,label:"25"},{value:50,label:"50"}],c=[{value:1,label:"Andijon viloyati"},{value:2,label:"Buxoro viloyati"},{value:3,label:"Jizzax viloyati"},{value:4,label:"Qashqadaryo viloyati"},{value:5,label:"Navoiy viloyati"},{value:6,label:"Namangan viloyati"},{value:7,label:"Samarqand viloyati"},{value:8,label:"Surxandaryo viloyati"},{value:9,label:"Sirdaryo viloyati"},{value:10,label:"Toshkent shahri"},{value:11,label:"Toshkent viloyati"},{value:12,label:"Farg'ona viloyati"},{value:13,label:"Xorazm viloyati"},{value:14,label:"Qoraqalpog'iston Respublikasi"}],d={patient_general_practitioner_report:"patient_general_practitioner_report",statistical_form_066_report:"statistical_form_066_report"},u={success:"success",failed:"failed",pending:"pending"}},52018:function(e,t,a){var l=a(1413),n=a(72791),r=a(61134),s=a(80184);t.Z=function(e){var t=e.defaultValues,a=e.children,i=e.onSubmit,o=(0,r.cI)({defaultValues:t}),c=o.handleSubmit,d=o.formState.errors,u=o.setError,m=o.clearErrors,v=o.reset;return(0,s.jsx)("form",{onSubmit:c((function(e){i({data:e,setError:u,clearErrors:m,reset:v})})),children:n.Children.map(a,(function(e){return e.props.name?n.createElement(e.type,(0,l.Z)({},(0,l.Z)((0,l.Z)({},e.props),{},{control:o.control,setValue:o.setValue,register:o.register,key:e.props.name,errors:d}))):e}))})}},60179:function(e,t,a){a.d(t,{Z:function(){return E}});var l=a(1413),n=a(29439),r=a(72791),s=a(94502),i=a(63917),o=a(28182),c=a(763),d=a(57689),u=a(78076),m=a(70188),v=a(96048),h=a.n(v);var f=a.p+"static/media/prev.0ba7b31192ae832f345d4a127d088f8d.svg";var g=a.p+"static/media/next.bebff1c891b224785dd8a6b5e39612fd.svg",x=a(39230),b=a(80184),p=function(){var e=(0,x.$G)().t;return(0,b.jsx)("div",{className:"p-5 pt-7 text-center font-semibold",children:e("No data")})},y=a(54179),j=a(59828),N=a(38965),k=a(84965),Z=a(21830),C=a.n(Z),w=a(46671),S=a.n(w),E=function(e){var t=e.url,a=void 0===t?"/":t,v=e.viewUrl,Z=void 0===v?null:v,w=e.listKey,E=void 0===w?"":w,F=e.params,z=void 0===F?{}:F,_=e.filters,K=void 0===_?null:_,V=e.columns,B=void 0===V?[]:V,M=e.onRowClick,A=void 0===M?function(){}:M,L=e.doubleRow,D=void 0!==L&&L,I=e.modalClassNames,T=void 0===I?"":I,U=e.hasActionColumn,q=void 0!==U&&U,J=e.ModalBody,Y=void 0===J?null:J,$=e.openCreateModal,G=void 0!==$&&$,O=e.setOpenCreateModal,R=void 0===O?function(){}:O,P=e.dataKey,Q=void 0===P?"data.data":P,H=e.rowKey,X=void 0===H?"id":H,W=e.doubleScrollbar,ee=void 0!==W&&W,te=(0,r.useState)(1),ae=(0,n.Z)(te,2),le=ae[0],ne=ae[1],re=(0,r.useState)(null),se=(0,n.Z)(re,2),ie=se[0],oe=se[1],ce=(0,r.useState)(null),de=(0,n.Z)(ce,2),ue=de[0],me=de[1],ve=(0,r.useState)({value:50,label:"50"}),he=(0,n.Z)(ve,2),fe=he[0],ge=he[1],xe=(0,x.$G)().t,be=(0,s.i7)({key:E,url:a,params:{params:(0,l.Z)((0,l.Z)({},z),{},{page:le,per_page:(0,c.get)(fe,"value")})}}),pe=be.data,ye=be.isLoading,je=be.isError,Ne=(0,s.xq)({id:ie,key:[E,ie],url:null!==Z&&void 0!==Z?Z:a,enabled:!!ie}),ke=Ne.data,Ze=void 0===ke?{}:ke,Ce=Ne.isLoading,we=(0,s.n7)({listKeyId:E}),Se=we.mutate,Ee=we.isLoading,Fe=(0,k.Z)({listKeyId:E}),ze=Fe.mutate,_e=Fe.isLoading,Ke=(0,s.V0)({listKeyId:E}),Ve=Ke.mutate,Be=Ke.isLoading,Me=function(e){var t=e.data,l=e.setError,n=e.reset;!G&&ie?ze({url:"".concat(null!==Z&&void 0!==Z?Z:a,"/").concat((0,c.get)(t,X)),attributes:(0,c.omit)(t,X)},{onSuccess:function(){oe(null),n()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){l(t,{type:"validation",message:(0,c.head)(e)})}))}}):Se({url:a,attributes:t},{onSuccess:function(){R(!1),n()},onError:function(e){(0,c.forEach)((0,c.get)(e,"response.data.errors",{}),(function(e,t){l(t,{type:"validation",message:(0,c.head)(e)})}))}})},Ae=function(e){C().fire({position:"center",icon:"error",backdrop:"rgba(0,0,0,0.9)",background:"none",title:xe("Are you sure?"),showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#F25886",cancelButtonColor:"#006D85",confirmButtonText:xe("Delete"),cancelButtonText:xe("Cancel"),customClass:{title:"title-color"}}).then((function(t){t.isConfirmed&&Ve({url:"".concat(null!==Z&&void 0!==Z?Z:a,"/").concat(e)})}))};return je?(0,b.jsx)(d.Fg,{to:"/error"}):ye?(0,b.jsx)(i.E,{}):(0,b.jsxs)("div",{className:"bg-white py-4 px-7 shadow-box",children:[(0,b.jsx)("div",{className:"relative z-20",children:K}),(0,b.jsx)("div",{className:"max-h-[75vh] overflow-y-auto ",children:ee?(0,b.jsx)(S(),{children:(0,b.jsxs)("table",{className:"table relative   border border-[#E6E6E6] rounded-lg",children:[(0,b.jsx)("thead",{className:"thead sticky top-0 z-10 bg-white",children:(0,b.jsxs)("tr",{className:"tr",children:[B&&B.map((function(e,t){return(0,b.jsx)("th",{className:(0,o.Z)("th",(0,c.get)(e,"classnames",""),{"sticky left-0 z-50 bg-white":0===t}),children:(0,c.get)(e,"title")},(0,c.get)(e,"title"))})),q&&(0,b.jsx)("th",{className:"th text-center",children:xe("Actions")})]})}),(0,b.jsx)("tbody",{className:"tbody",children:(0,c.get)(pe,Q,[]).length>0?(0,c.get)(pe,Q,[]).map((function(e,t){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("tr",{onClick:function(){return A(e)},className:"tr",children:[B.map((function(a,l){return(0,b.jsx)("td",{className:(0,o.Z)("td",(0,c.get)(a,"classnames",""),{"!px-0":D},{"sticky left-0 z-50 bg-white !hover:bg-[#E6F1F3]":0===l}),children:(0,c.get)(a,"render")?(0,c.get)(a,"render")({value:(0,c.get)(e,(0,c.get)(a,"key")),row:e,index:t+(le-1)*fe+1}):(0,c.get)(e,(0,c.get)(a,"key"))},(0,c.get)(a,"key",l))})),q&&(0,b.jsxs)("td",{className:"td flex justify-center !max-w-full",children:[(0,b.jsx)(j.Z,{className:"mx-3.5",color:"#2F68FC",size:22,onClick:function(){return oe((0,c.get)(e,X))}}),(0,b.jsx)(N.Z,{onClick:function(){return Ae((0,c.get)(e,X))},color:"#F25886",size:24})]})]},(0,c.get)(e,(0,c.get)(B,"[0].key",t)))})})):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:(null===B||void 0===B?void 0:B.length)||12,children:(0,b.jsx)(p,{})})})})]})}):(0,b.jsxs)("table",{className:"table relative   border border-[#E6E6E6] rounded-lg",children:[(0,b.jsx)("thead",{className:"thead sticky top-0 z-10 bg-white",children:(0,b.jsxs)("tr",{className:"tr",children:[B&&B.map((function(e,t){return(0,b.jsx)("th",{className:(0,o.Z)("th",(0,c.get)(e,"classnames",""),{"sticky left-0 z-50 bg-white":0===t}),children:(0,c.get)(e,"title")},(0,c.get)(e,"title"))})),q&&(0,b.jsx)("th",{className:"th text-center",children:xe("Actions")})]})}),(0,b.jsx)("tbody",{className:"tbody",children:(0,c.get)(pe,Q,[]).length>0?(0,c.get)(pe,Q,[]).map((function(e,t){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("tr",{onClick:function(){me(t),A(e)},className:(0,o.Z)("tr group",{selected:t===ue}),children:[B.map((function(a,l){return(0,b.jsx)("td",{className:(0,o.Z)("td",(0,c.get)(a,"classnames",""),{"!px-0":D},{"sticky left-0 z-50 bg-white":0===l}),children:(0,c.get)(a,"render")?(0,c.get)(a,"render")({value:(0,c.get)(e,(0,c.get)(a,"key")),row:e,index:t+(le-1)*fe+1}):(0,c.get)(e,(0,c.get)(a,"key"))},(0,c.get)(a,"key",l))})),q&&(0,b.jsxs)("td",{className:"td flex justify-center !max-w-full",children:[(0,b.jsx)(j.Z,{className:"mx-3.5",color:"#2F68FC",size:22,onClick:function(){return oe((0,c.get)(e,X))}}),(0,b.jsx)(N.Z,{onClick:function(){return Ae((0,c.get)(e,X))},color:"#F25886",size:24})]})]},(0,c.get)(e,(0,c.get)(B,"[0].key",t)))})})):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:(null===B||void 0===B?void 0:B.length)||12,children:(0,b.jsx)(p,{})})})})]})}),(0,c.get)(pe,"data.meta.total")>0&&(0,b.jsxs)("div",{className:"flex mt-3 justify-between items-center",children:[(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(u.Z,{isClearable:!1,sm:!0,value:fe,setValue:ge,options:m.D5}),(0,b.jsxs)("span",{className:"ml-3 text-secondary-300 text-sm font-semibold",children:[xe("Show")," 1-",(0,c.get)(fe,"value",0)," ",xe("from")," ",(0,c.get)(pe,"data.meta.total",0)]})]}),(0,b.jsx)(h(),{forcePage:le-1,onPageChange:function(e){var t=e.selected;return ne(t+1)},pageCount:(0,c.ceil)((0,c.get)(pe,"data.meta.total",0)/(0,c.get)(fe,"value",1)),nextLabel:(0,b.jsx)("img",{src:g,alt:"next"}),previousLabel:(0,b.jsx)("img",{src:f,alt:"prev"}),className:"pagination"})]}),(0,b.jsxs)(y.Z,{onClose:function(){R(!1),oe(null)},classNames:T,title:xe(G?"Create":"Update"),open:!(!G&&!ie),children:[Ee&&(0,b.jsx)(i.p,{}),_e&&(0,b.jsx)(i.p,{}),Be&&(0,b.jsx)(i.p,{}),G?Y(Me,Ze):Ce?(0,b.jsx)(i.p,{}):Y(Me,Ze)]})]})}},15265:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(72791),n=a(1413),r=a(93433),s=a(29439),i=a(72509),o=a(60179),c=a(18720),d=a(48665),u=a(52018),m=a(763),v=a(56225),h=a(39230),f=a(94502),g=a(63917),x=a(80184),b=function(){var e=(0,l.useState)(""),t=(0,s.Z)(e,2),a=t[0],b=t[1],p=(0,f.i7)({key:c.t.locales,url:d.n.locales}),y=p.data,j=p.isLoading,N=(0,h.$G)().t,k=(0,l.useState)(!1),Z=(0,s.Z)(k,2),C=Z[0],w=Z[1],S=(0,m.get)(y,"data",[]).map((function(e){return{title:(0,m.get)(e,"display"),key:(0,m.get)(e,"code")}}));return S=[{title:"Key",key:"key"}].concat((0,r.Z)(S)),j?(0,x.jsx)(g.E,{}):(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,x.jsx)("div",{className:"col-span-8",children:(0,x.jsx)(i.Z,{children:N("Translations")})}),(0,x.jsx)("div",{className:"col-span-12 mt-8",children:(0,x.jsx)(o.Z,{filters:(0,x.jsx)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:(0,x.jsx)("div",{className:"col-span-3",children:(0,x.jsx)(v.Z,{setValue:b,value:a,placeholder:N("\u041f\u043e\u0438\u0441\u043a")})})}),ModalBody:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,x.jsxs)(u.Z,{onSubmit:function(t){return e(t)},defaultValues:(0,n.Z)({},(0,m.get)(t,"data",{})),children:[(0,x.jsx)(v.Z,{property:{disabled:!0},name:"key",placeholder:N("Key"),label:N("Key")}),(0,m.get)(y,"data",[]).map((function(e){return(0,x.jsx)(v.Z,{name:(0,m.get)(e,"code"),placeholder:(0,m.get)(e,"display"),label:(0,m.get)(e,"display")})})),(0,x.jsx)("button",{type:"submit",className:"w-full p-3.5 rounded-lg bg-primary block  text-white font-bold text-center h-12 mt-6",children:N("Save")})]})},openCreateModal:C,setOpenCreateModal:w,hasActionColumn:!0,listKey:c.t.translations,url:d.n.translations,columns:S,dataKey:"data.data",rowKey:"key",params:{search:a},viewUrl:d.n.translationsKey})})]})})},p=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(b,{})})}}}]);
//# sourceMappingURL=265.ddc002f3.chunk.js.map