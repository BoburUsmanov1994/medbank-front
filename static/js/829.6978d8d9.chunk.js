"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[829],{3769:function(e,r,t){t.d(r,{aN:function(){return j},II:function(){return d},Ph:function(){return x}});var n=t(1413),a=t(4925),o=(t(2791),t(8182)),l=t(763),i=t(184),s=["register","name","errors","property","params","label"],d=function(e){var r,t,d=e.register,c=e.name,u=e.errors,m=e.property,p=e.params,h=e.label,f=void 0===h?"":h,x=(0,a.Z)(e,s);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",htmlFor:"#",children:f}),(0,i.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},d(c,(0,n.Z)({},p))),x),{},{className:(0,o.Z)("form-input",{"border-red-600":(0,l.hasIn)(u,c)}),type:(0,l.get)(m,"type","text"),disabled:(0,l.get)(m,"disabled",!1),step:(0,l.get)(m,"step","any")})),"required"==(null===(r=u[c])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=u[c])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(u,"".concat(c,".message"))})]})})},c=t(7978),u=t(8630),m=t(5202),p=t(1134),h=(t(8485),function(e){return c.c.DropdownIndicator&&(0,i.jsx)(c.c.DropdownIndicator,(0,n.Z)((0,n.Z)({},e),{},{children:(0,i.jsx)("img",{src:m.Z,alt:"arrow"})}))}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(r,t,a){return(0,n.Z)((0,n.Z)({},r),{},{background:"#fff",borderColor:e?"red":"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",display:"flex",overflow:"hidden",padding:"4px 12px",width:"100%",minWidth:"200px",minHeight:"48px",fontSize:"16px",fontWeight:"400","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,r){return(0,n.Z)((0,n.Z)({},e),{},{display:"none"})}}},x=function(e){var r,t,a=e.control,s=e.name,d=e.errors,c=e.placeholder,m=void 0===c?"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d":c,x=e.params,v=e.label,g=void 0===v?"":v,y=e.options,b=void 0===y?[]:y;return(0,i.jsxs)("div",{className:(0,o.Z)("form-group"),children:[g&&(0,i.jsx)("label",{className:(0,o.Z)("form-label"),htmlFor:g,children:g}),(0,i.jsx)(p.Qr,{control:a,name:s,rules:x,render:function(e){var r=e.field;return(0,i.jsx)(u.ZP,(0,n.Z)((0,n.Z)({},r),{},{clearIndicator:!0,styles:f((0,l.hasIn)(d,s)),id:g,options:b,components:{DropdownIndicator:h},placeholder:m}))}}),"required"==(null===(r=d[s])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=d[s])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(d,"".concat(s,".message"))})]})},v=t(9513),g=t.n(v),y=(t(8639),t(7892)),b=t.n(y),j=function(e){var r,t,n=e.control,a=e.disabled,s=void 0!==a&&a,d=e.name,c=e.errors,u=e.params,m=e.property,h=e.defaultValue,f=void 0===h?new Date:h,x=e.label,v=e.dateFormat,y=void 0===v?"yyyy/MM/dd":v;return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:null!==x&&void 0!==x?x:d}),(0,i.jsx)(p.Qr,{control:n,name:d,rules:u,defaultValue:f,render:function(e){var r=e.field;return(0,i.jsx)(g(),{dateFormat:y,selected:b()(r.value).toDate(),onChange:function(e){return r.onChange(e)},readOnly:s,showMonthYearPicker:(0,l.get)(m,"showMonthYearPicker"),className:(0,o.Z)("form-input pr-10",{"border-red-600":(0,l.hasIn)(c,d)})})}}),"required"==(null===(r=c[d])||void 0===r?void 0:r.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=c[d])||void 0===t?void 0:t.type)&&(0,i.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(c,"".concat(d,".message"))})]})}},2018:function(e,r,t){var n=t(1413),a=t(2791),o=t(1134),l=t(184);r.Z=function(e){var r=e.defaultValues,t=e.children,i=e.onSubmit,s=(0,o.cI)({defaultValues:r}),d=s.handleSubmit,c=s.formState.errors,u=s.setError,m=s.clearErrors,p=s.reset;return(0,l.jsx)("form",{onSubmit:d((function(e){i({data:e,setError:u,clearErrors:m,reset:p})})),children:a.Children.map(t,(function(e){return e.props.name?a.createElement(e.type,(0,n.Z)({},(0,n.Z)((0,n.Z)({},e.props),{},{control:s.control,setValue:s.setValue,register:s.register,key:e.props.name,errors:c}))):e}))})}},5829:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(2791),a=t(1413),o=t(4925),l=t(9439),i=t(2509),s=t(2256),d=t(8720),c=t(8665),u=t(7652),m=t(948),p=t(2018),h=t(763),f=t(3769),x=t(7892),v=t.n(x),g=t(2703),y=t(9230),b=t(184),j=["data"],Z=function(){var e=(0,n.useState)(!1),r=(0,l.Z)(e,2),t=r[0],x=r[1],Z=(0,y.$G)().t,w=[{title:"ID",key:"id",classnames:"!w-[80px] !min-w-0"},{title:Z("Month"),key:"month"},{title:Z("Code"),key:"code"},{title:Z("Ratio"),key:"ratio"},{title:Z("Gender"),key:"gender"},{title:Z("From age"),key:"from_age_in_month",render:function(e){var r=e.value;return(0,b.jsx)(m.h3,{displayType:"text",thousandSeparator:" ",value:r})}},{title:Z("To age"),key:"to_age_in_month",render:function(e){var r=e.value;return(0,b.jsx)(m.h3,{displayType:"text",thousandSeparator:" ",value:r})}}];return(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,b.jsx)("div",{className:"col-span-8",children:(0,b.jsx)(i.Z,{children:Z("\u0413\u0440\u0443\u043f\u043f\u044b \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f")})}),(0,b.jsx)("div",{className:"col-span-4 text-right",children:(0,b.jsxs)("button",{onClick:function(){return x(!0)},className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,b.jsx)(u.Z,{size:20,className:"mr-1.5"}),Z("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")]})}),(0,b.jsx)("div",{className:"col-span-12 mt-8",children:(0,b.jsx)(s.Z,{ModalBody:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,b.jsxs)(p.Z,{onSubmit:function(r){var t=r.data,n=(0,o.Z)(r,j);return e((0,a.Z)({data:(0,a.Z)((0,a.Z)({},t),{},{gender:(0,h.get)(t,"gender.value"),month:v()((0,h.get)(t,"month")).format("YYYY-MM")})},n))},defaultValues:(0,a.Z)((0,a.Z)({},(0,h.get)(r,"data.data",{})),{},{month:v()((0,h.get)((0,h.get)(r,"data.data",{}),"month")),gender:(0,g.o)([{value:"male",label:Z("Male")},{value:"female",label:Z("Female")}],(0,h.get)((0,h.get)(r,"data.data",{}),"gender"))}),children:[(0,b.jsx)(f.II,{name:"code",placeholder:Z("Code"),label:Z("Code"),params:{required:!0}}),(0,b.jsx)(f.II,{name:"ratio",property:{type:"number"},placeholder:Z("Ratio"),label:Z("Ratio"),params:{required:!0}}),(0,b.jsx)(f.Ph,{name:"gender",label:Z("Gender"),params:{required:!0},options:[{value:"male",label:Z("Male")},{value:"female",label:Z("Female")}]}),(0,b.jsx)(f.II,{name:"from_age_in_month",property:{type:"number",step:1},placeholder:Z("From age"),label:Z("From age in month"),params:{required:!0}}),(0,b.jsx)(f.II,{name:"to_age_in_month",property:{type:"number",step:1},placeholder:Z("To age"),label:Z("To age in month"),params:{required:!0}}),(0,b.jsx)(f.aN,{property:{showMonthYearPicker:!0},dateFormat:"yyyy-MM",name:"month",label:Z("Month"),params:{required:!0}}),(0,b.jsx)("button",{type:"submit",className:"w-full p-3.5 rounded-lg bg-primary block w-full text-white font-bold text-center h-12 mt-6",children:Z(t?"Create":"Save")})]})},openCreateModal:t,setOpenCreateModal:x,hasActionColumn:!0,listKey:d.t.patientGroups,url:c.n.patientGroups,columns:w})})]})})},w=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(Z,{})})}},2703:function(e,r,t){t.d(r,{o:function(){return a}});var n=t(763),a=function(e,r){return(0,n.find)(e,(function(e){return(0,n.get)(e,"value")==r}))}},7652:function(e,r,t){var n=t(2791),a=t(2007),o=t.n(a);function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=(0,n.forwardRef)((function(e,r){var t=e.color,a=void 0===t?"currentColor":t,o=e.size,s=void 0===o?24:o,d=i(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="PlusCircle",r.Z=s}}]);
//# sourceMappingURL=829.6978d8d9.chunk.js.map