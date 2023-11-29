"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[265],{13769:function(e,r,t){t.d(r,{aN:function(){return j},II:function(){return d},Ph:function(){return h}});var n=t(1413),a=t(45987),o=(t(72791),t(28182)),l=t(763),s=t(80184),i=["register","name","errors","property","params","label"],d=function(e){var r,t,d=e.register,c=e.name,u=e.errors,p=e.property,m=e.params,x=e.label,f=void 0===x?"":x,h=(0,a.Z)(e,i);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",htmlFor:"#",children:f}),(0,s.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},d(c,(0,n.Z)({},m))),h),{},{className:(0,o.Z)("form-input",{"border-red-600":(0,l.hasIn)(u,c)}),type:(0,l.get)(p,"type","text"),disabled:(0,l.get)(p,"disabled",!1),step:(0,l.get)(p,"step","any")})),"required"==(null===(r=u[c])||void 0===r?void 0:r.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=u[c])||void 0===t?void 0:t.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(u,"".concat(c,".message"))})]})})},c=t(93646),u=t(38630),p=t(55202),m=t(61134),x=(t(18485),function(e){return c.c.DropdownIndicator&&(0,s.jsx)(c.c.DropdownIndicator,(0,n.Z)((0,n.Z)({},e),{},{children:(0,s.jsx)("img",{src:p.Z,alt:"arrow"})}))}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(r,t,a){return(0,n.Z)((0,n.Z)({},r),{},{background:"#fff",borderColor:e?"red":"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",display:"flex",overflow:"hidden",padding:"4px 12px",width:"100%",minWidth:"200px",minHeight:"48px",fontSize:"16px",fontWeight:"400","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,r){return(0,n.Z)((0,n.Z)({},e),{},{display:"none"})}}},h=function(e){var r,t,a=e.control,i=e.name,d=e.errors,c=e.placeholder,p=void 0===c?"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d":c,h=e.params,v=e.label,g=void 0===v?"":v,y=e.options,b=void 0===y?[]:y;return(0,s.jsxs)("div",{className:(0,o.Z)("form-group"),children:[g&&(0,s.jsx)("label",{className:(0,o.Z)("form-label"),htmlFor:g,children:g}),(0,s.jsx)(m.Qr,{control:a,name:i,rules:h,render:function(e){var r=e.field;return(0,s.jsx)(u.ZP,(0,n.Z)((0,n.Z)({},r),{},{clearIndicator:!0,styles:f((0,l.hasIn)(d,i)),id:g,options:b,components:{DropdownIndicator:x},placeholder:p}))}}),"required"==(null===(r=d[i])||void 0===r?void 0:r.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=d[i])||void 0===t?void 0:t.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(d,"".concat(i,".message"))})]})},v=t(59513),g=t.n(v),y=(t(68639),t(97892)),b=t.n(y),j=function(e){var r,t,n=e.control,a=e.disabled,i=void 0!==a&&a,d=e.name,c=e.errors,u=e.params,p=e.property,x=e.defaultValue,f=void 0===x?new Date:x,h=e.label,v=e.dateFormat,y=void 0===v?"yyyy/MM/dd":v;return(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",children:null!==h&&void 0!==h?h:d}),(0,s.jsx)(m.Qr,{control:n,name:d,rules:u,defaultValue:f,render:function(e){var r=e.field;return(0,s.jsx)(g(),{dateFormat:y,selected:b()(r.value).toDate(),onChange:function(e){return r.onChange(e)},readOnly:i,showMonthYearPicker:(0,l.get)(p,"showMonthYearPicker"),className:(0,o.Z)("form-input pr-10",{"border-red-600":(0,l.hasIn)(c,d)})})}}),"required"==(null===(r=c[d])||void 0===r?void 0:r.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(t=c[d])||void 0===t?void 0:t.type)&&(0,s.jsx)("span",{className:"text-red-600 text-xs",children:(0,l.get)(c,"".concat(d,".message"))})]})}},52018:function(e,r,t){var n=t(1413),a=t(72791),o=t(61134),l=t(80184);r.Z=function(e){var r=e.defaultValues,t=e.children,s=e.onSubmit,i=(0,o.cI)({defaultValues:r}),d=i.handleSubmit,c=i.formState.errors,u=i.setError,p=i.clearErrors,m=i.reset;return(0,l.jsx)("form",{onSubmit:d((function(e){s({data:e,setError:u,clearErrors:p,reset:m})})),children:a.Children.map(t,(function(e){return e.props.name?a.createElement(e.type,(0,n.Z)({},(0,n.Z)((0,n.Z)({},e.props),{},{control:i.control,setValue:i.setValue,register:i.register,key:e.props.name,errors:c}))):e}))})}},15265:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(72791),a=t(1413),o=t(93433),l=t(29439),s=t(72509),i=t(61087),d=t(18720),c=t(48665),u=t(52018),p=t(763),m=t(13769),x=t(39230),f=t(94502),h=t(63917),v=t(80184),g=function(){var e=(0,f.i7)({key:d.t.locales,url:c.n.locales}),r=e.data,t=e.isLoading,g=(0,x.$G)().t,y=(0,n.useState)(!1),b=(0,l.Z)(y,2),j=b[0],Z=b[1],N=(0,p.get)(r,"data",[]).map((function(e){return{title:(0,p.get)(e,"display"),key:(0,p.get)(e,"code")}}));return N=[{title:"Key",key:"key"}].concat((0,o.Z)(N)),t?(0,v.jsx)(h.E,{}):(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,v.jsx)("div",{className:"col-span-8",children:(0,v.jsx)(s.Z,{children:g("Translations")})}),(0,v.jsx)("div",{className:"col-span-12 mt-8",children:(0,v.jsx)(i.Z,{ModalBody:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,v.jsxs)(u.Z,{onSubmit:function(r){return e(r)},defaultValues:(0,a.Z)({},(0,p.get)(t,"data",{})),children:[(0,v.jsx)(m.II,{property:{disabled:!0},name:"key",placeholder:g("Key"),label:g("Key")}),(0,p.get)(r,"data",[]).map((function(e){return(0,v.jsx)(m.II,{name:(0,p.get)(e,"code"),placeholder:(0,p.get)(e,"display"),label:(0,p.get)(e,"display")})})),(0,v.jsx)("button",{type:"submit",className:"w-full p-3.5 rounded-lg bg-primary block w-full text-white font-bold text-center h-12 mt-6",children:g("Save")})]})},openCreateModal:j,setOpenCreateModal:Z,hasActionColumn:!0,listKey:d.t.translations,url:c.n.translations,columns:N,dataKey:"data.data",rowKey:"key",viewUrl:c.n.translationsKey})})]})})},y=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(g,{})})}}}]);
//# sourceMappingURL=265.321180b0.chunk.js.map