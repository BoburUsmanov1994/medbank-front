"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[638],{58525:function(e,r,t){t(72791);r.Z=t.p+"static/media/download.5c6fa236248d121782afeb4b8fd485fb.svg"},5745:function(e,r,t){t(72791);r.Z=t.p+"static/media/gender-female.803c024f65f7d961a3d4d63d9ab94784.svg"},18232:function(e,r,t){t(72791);r.Z=t.p+"static/media/gender-male.b99eb0c250b0e8d37d36ad2e2dcc0e32.svg"},13769:function(e,r,t){t.d(r,{aN:function(){return g},II:function(){return l},Ph:function(){return b}});var n=t(1413),a=t(45987),s=(t(72791),t(28182)),o=t(763),i=t(80184),d=["register","name","errors","property","params","label"],l=function(e){var r,t,l=e.register,p=e.name,c=e.errors,u=e.property,x=e.params,h=e.label,m=void 0===h?"":h,b=(0,a.Z)(e,d);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",htmlFor:"#",children:m}),(0,i.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},l(p,(0,n.Z)({},x))),b),{},{className:(0,s.Z)("form-input",{"border-red-600":(0,o.hasIn)(c,p)}),type:(0,o.get)(u,"type","text"),disabled:(0,o.get)(u,"disabled",!1),step:(0,o.get)(u,"step","any")})),"required"==(null===(r=c[p])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=c[p])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,o.get)(c,"".concat(p,".message"))})]})})},p=t(93646),c=t(38630),u=t(55202),x=t(61134),h=(t(18485),function(e){return p.c.DropdownIndicator&&(0,i.jsx)(p.c.DropdownIndicator,(0,n.Z)((0,n.Z)({},e),{},{children:(0,i.jsx)("img",{src:u.Z,alt:"arrow"})}))}),m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(r,t,a){return(0,n.Z)((0,n.Z)({},r),{},{background:"#fff",borderColor:e?"red":"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",display:"flex",overflow:"hidden",padding:"4px 12px",width:"100%",minWidth:"200px",minHeight:"48px",fontSize:"16px",fontWeight:"400","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,r){return(0,n.Z)((0,n.Z)({},e),{},{display:"none"})}}},b=function(e){var r,t,a=e.control,d=e.name,l=e.errors,p=e.placeholder,u=void 0===p?"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d":p,b=e.params,v=e.label,f=void 0===v?"":v,y=e.options,j=void 0===y?[]:y;return(0,i.jsxs)("div",{className:(0,s.Z)("form-group"),children:[f&&(0,i.jsx)("label",{className:(0,s.Z)("form-label"),htmlFor:f,children:f}),(0,i.jsx)(x.Qr,{control:a,name:d,rules:b,render:function(e){var r=e.field;return(0,i.jsx)(c.ZP,(0,n.Z)((0,n.Z)({},r),{},{clearIndicator:!0,styles:m((0,o.hasIn)(l,d)),id:f,options:j,components:{DropdownIndicator:h},placeholder:u}))}}),"required"==(null===(r=l[d])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=l[d])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,o.get)(l,"".concat(d,".message"))})]})},v=t(59513),f=t.n(v),y=(t(68639),t(97892)),j=t.n(y),g=function(e){var r,t,n=e.control,a=e.disabled,d=void 0!==a&&a,l=e.name,p=e.errors,c=e.params,u=e.property,h=e.defaultValue,m=void 0===h?new Date:h,b=e.label,v=e.dateFormat,y=void 0===v?"yyyy/MM/dd":v;return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:null!==b&&void 0!==b?b:l}),(0,i.jsx)(x.Qr,{control:n,name:l,rules:c,defaultValue:m,render:function(e){var r=e.field;return(0,i.jsx)(f(),{dateFormat:y,selected:j()(r.value).toDate(),onChange:function(e){return r.onChange(e)},readOnly:d,showMonthYearPicker:(0,o.get)(u,"showMonthYearPicker"),className:(0,s.Z)("form-input pr-10",{"border-red-600":(0,o.hasIn)(p,l)})})}}),"required"==(null===(r=p[l])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=p[l])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,o.get)(p,"".concat(l,".message"))})]})}},52018:function(e,r,t){var n=t(1413),a=t(72791),s=t(61134),o=t(80184);r.Z=function(e){var r=e.defaultValues,t=e.children,i=e.onSubmit,d=(0,s.cI)({defaultValues:r}),l=d.handleSubmit,p=d.formState.errors,c=d.setError,u=d.clearErrors,x=d.reset;return(0,o.jsx)("form",{onSubmit:l((function(e){i({data:e,setError:c,clearErrors:u,reset:x})})),children:a.Children.map(t,(function(e){return e.props.name?a.createElement(e.type,(0,n.Z)({},(0,n.Z)((0,n.Z)({},e.props),{},{control:d.control,setValue:d.setValue,register:d.register,key:e.props.name,errors:p}))):e}))})}},50638:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var n=t(72791),a=t(29439),s=t(72509),o=t(60179),i=t(18720),d=t(48665),l=t(763),p=t(58525),c=t(30948),u=t(57689),x=t(5745),h=t(18232),m=t(39230),b=t(94502),v=t(63917),f=t(70188),y=t(98130),j=t(54179),g=t(13769),N=t(52018),w=t(97892),Z=t.n(w),_=t(80184),k=function(){var e=(0,u.s0)(),r=(0,m.$G)().t,t=(0,n.useState)(!1),w=(0,a.Z)(t,2),k=w[0],S=w[1],T=(0,b.n7)({listKeyId:i.t.reports}),D=T.mutate,C=T.isLoading,I=(0,b.n7)({listKeyId:i.t.reports}),M=I.mutate,O=I.isLoading,E=[{title:r("Month"),key:"month",render:function(e){var r=e.value;return(0,_.jsx)("span",{className:"px-3",children:r})}},{title:"<1",key:"patient_groups.code",render:function(e){var r=e.row;return(0,_.jsxs)("div",{className:"text-left ",children:[(0,_.jsxs)("div",{className:"px-3  pb-2.5 border-b border-dashed border-b-[#006D85] ",children:[(0,_.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-14",children:"\u041d\u0430\u0441."}),(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[0].count",0),2)})]}),(0,_.jsxs)("div",{className:"pt-2.5 px-3 ",children:[(0,_.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-10 ",children:"\u0421\u0443\u043c\u043c\u0430."}),(0,_.jsx)(c.h3,{className:"",thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[0].payment",0),2)})]})]})}},{title:"1-5",key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[1].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5 ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[1].payment",0),2)})})]})}},{title:"6-14",key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[2].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[2].payment",0),2)})})]})}},{title:(0,_.jsxs)("span",{className:"inline-flex items-center",children:["15-39F ",(0,_.jsx)("img",{src:x.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[3].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[3].payment",0),2)})})]})}},{title:(0,_.jsxs)("span",{className:"inline-flex items-start",children:["15-39M ",(0,_.jsx)("img",{src:h.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85] ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[4].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[4].payment",0),2)})})]})}},{title:(0,_.jsxs)("span",{className:"inline-flex items-center",children:["40-49F ",(0,_.jsx)("img",{src:x.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[5].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5 ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[5].payment",0),2)})})]})}},{title:(0,_.jsxs)("span",{className:"inline-flex items-start",children:["40-49M ",(0,_.jsx)("img",{src:h.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[6].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5 ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[6].payment",0),2)})})]})}},{title:"50-65",key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[7].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5 ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[7].payment",0),2)})})]})}},{title:"65<",key:"patient_groups",render:function(e){var r=e.row;return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[8].count",0),2)})}),(0,_.jsx)("div",{className:"pt-2.5 ",children:(0,_.jsx)(c.h3,{thousandSeparator:" ",displayType:"text",value:(0,l.round)((0,l.get)(r,"patient_groups[8].payment",0),2)})})]})}},{title:(0,_.jsxs)("div",{className:"flex justify-around",children:[(0,_.jsxs)("span",{className:"mr-10 ml-3",children:[r("By groups")," "]}),(0,_.jsx)("span",{className:"mr-3",children:r("In count")})]}),key:"organization_level",render:function(e){var r=e.row;return(0,_.jsxs)("div",{className:"text-center",children:[(0,_.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85] relative after:absolute after:top-full after:content-[''] after:h-[50px]  after:border-r after:border-dashed after:border-r-[#006D85] after:w-[1px] after:left-1/2",children:(0,_.jsx)(c.h3,{displayType:"text",thousandSeparator:" ",value:(0,l.get)(r,"total_count",0)})}),(0,_.jsxs)("div",{className:"flex justify-around ",children:[(0,_.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,_.jsx)(c.h3,{displayType:"text",thousandSeparator:" ",value:(0,l.round)((0,l.get)(r,"total_payment_by_group",0),2)})}),(0,_.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,_.jsx)(c.h3,{displayType:"text",thousandSeparator:" ",value:(0,l.round)((0,l.get)(r,"total_payment",0),2)})})]})]})}}];return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,_.jsx)("div",{className:"col-span-8",children:(0,_.jsx)(s.Z,{children:r("Outpatient Reports")})}),(0,_.jsxs)("div",{className:"col-span-4 text-right",children:[(0,_.jsxs)("button",{onClick:function(){return S(!0)},className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg mr-3",children:[(0,_.jsx)(y.Z,{className:"mr-2.5",size:20}),r("Generate")]}),(0,_.jsxs)("button",{onClick:function(){D({url:"".concat(d.n.reports,"/").concat(f.H$.patient_general_practitioner_report)},{onSuccess:function(){e("/reports")}})},className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,_.jsx)("img",{className:"mr-2.5",src:p.Z,alt:"export"}),r("Export")]})]}),(0,_.jsxs)("div",{className:"col-span-12 mt-8",children:[C&&(0,_.jsx)(v.E,{}),(0,_.jsx)(o.Z,{doubleRow:!0,onRowClick:function(r){return e("/dispensaries/outpatient-reports/".concat((0,l.head)((0,l.split)((0,l.get)(r,"month",""),"/",2)),"/").concat((0,l.last)((0,l.split)((0,l.get)(r,"month",""),"/",2))))},listKey:i.t.outpatientReports,url:d.n.outpatientReports,columns:E})]})]}),(0,_.jsxs)(j.Z,{onClose:function(){S(!1)},classNames:"overflow-y-visible relative",title:"",open:k,children:[O&&(0,_.jsx)(v.p,{}),(0,_.jsxs)(N.Z,{onSubmit:function(e){var r=e.data,t=(void 0===r?{}:r).month,n=void 0===t?new Date:t;M({url:d.n.outpatientReports,attributes:{month:Z()(n).format("YYYY-MM")}},{onSuccess:function(){S(!1)}})},children:[(0,_.jsx)(g.aN,{property:{showMonthYearPicker:!0},dateFormat:"yyyy/MM",name:"month",label:r("Month"),params:{required:!0}}),(0,_.jsx)("button",{type:"submit",className:"w-full p-3.5 rounded-lg bg-primary block  text-white font-bold text-center h-12 mt-6",children:r("Generate")})]})]})]})},S=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(k,{})})}},98130:function(e,r,t){var n=t(72791),a=t(52007),s=t.n(a);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=(0,n.forwardRef)((function(e,r){var t=e.color,a=void 0===t?"currentColor":t,s=e.size,d=void 0===s?24:s,l=i(e,["color","size"]);return n.createElement("svg",o({ref:r,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("polyline",{points:"1 4 1 10 7 10"}),n.createElement("polyline",{points:"23 20 23 14 17 14"}),n.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.displayName="RefreshCcw",r.Z=d}}]);
//# sourceMappingURL=638.bc05d597.chunk.js.map