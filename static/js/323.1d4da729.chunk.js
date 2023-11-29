"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[323],{13769:function(e,t,r){r.d(t,{aN:function(){return j},II:function(){return d},Ph:function(){return h}});var n=r(1413),a=r(45987),o=(r(72791),r(28182)),i=r(763),l=r(80184),s=["register","name","errors","property","params","label"],d=function(e){var t,r,d=e.register,u=e.name,c=e.errors,p=e.property,m=e.params,g=e.label,f=void 0===g?"":g,h=(0,a.Z)(e,s);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{className:"form-label",htmlFor:"#",children:f}),(0,l.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},d(u,(0,n.Z)({},m))),h),{},{className:(0,o.Z)("form-input",{"border-red-600":(0,i.hasIn)(c,u)}),type:(0,i.get)(p,"type","text"),disabled:(0,i.get)(p,"disabled",!1),step:(0,i.get)(p,"step","any")})),"required"==(null===(t=c[u])||void 0===t?void 0:t.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(r=c[u])||void 0===r?void 0:r.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:(0,i.get)(c,"".concat(u,".message"))})]})})},u=r(93646),c=r(38630),p=r(55202),m=r(61134),g=(r(18485),function(e){return u.c.DropdownIndicator&&(0,l.jsx)(u.c.DropdownIndicator,(0,n.Z)((0,n.Z)({},e),{},{children:(0,l.jsx)("img",{src:p.Z,alt:"arrow"})}))}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{control:function(t,r,a){return(0,n.Z)((0,n.Z)({},t),{},{background:"#fff",borderColor:e?"red":"rgba(0, 0, 0, 0.1)",borderRadius:"8px",outline:"none",display:"flex",overflow:"hidden",padding:"4px 12px",width:"100%",minWidth:"200px",minHeight:"48px",fontSize:"16px",fontWeight:"400","&:hover":{borderColor:"#006D85",outline:"none"},"&:focus":{borderColor:"#006D85",outline:"none"}})},indicatorSeparator:function(e,t){return(0,n.Z)((0,n.Z)({},e),{},{display:"none"})}}},h=function(e){var t,r,a=e.control,s=e.name,d=e.errors,u=e.placeholder,p=void 0===u?"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d":u,h=e.params,v=e.label,x=void 0===v?"":v,y=e.options,b=void 0===y?[]:y;return(0,l.jsxs)("div",{className:(0,o.Z)("form-group"),children:[x&&(0,l.jsx)("label",{className:(0,o.Z)("form-label"),htmlFor:x,children:x}),(0,l.jsx)(m.Qr,{control:a,name:s,rules:h,render:function(e){var t=e.field;return(0,l.jsx)(c.ZP,(0,n.Z)((0,n.Z)({},t),{},{clearIndicator:!0,styles:f((0,i.hasIn)(d,s)),id:x,options:b,components:{DropdownIndicator:g},placeholder:p}))}}),"required"==(null===(t=d[s])||void 0===t?void 0:t.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(r=d[s])||void 0===r?void 0:r.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:(0,i.get)(d,"".concat(s,".message"))})]})},v=r(59513),x=r.n(v),y=(r(68639),r(97892)),b=r.n(y),j=function(e){var t,r,n=e.control,a=e.disabled,s=void 0!==a&&a,d=e.name,u=e.errors,c=e.params,p=e.property,g=e.defaultValue,f=void 0===g?new Date:g,h=e.label,v=e.dateFormat,y=void 0===v?"yyyy/MM/dd":v;return(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{className:"form-label",children:null!==h&&void 0!==h?h:d}),(0,l.jsx)(m.Qr,{control:n,name:d,rules:c,defaultValue:f,render:function(e){var t=e.field;return(0,l.jsx)(x(),{dateFormat:y,selected:b()(t.value).toDate(),onChange:function(e){return t.onChange(e)},readOnly:s,showMonthYearPicker:(0,i.get)(p,"showMonthYearPicker"),className:(0,o.Z)("form-input pr-10",{"border-red-600":(0,i.hasIn)(u,d)})})}}),"required"==(null===(t=u[d])||void 0===t?void 0:t.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:"This field is required"}),"validation"==(null===(r=u[d])||void 0===r?void 0:r.type)&&(0,l.jsx)("span",{className:"text-red-600 text-xs",children:(0,i.get)(u,"".concat(d,".message"))})]})}},52018:function(e,t,r){var n=r(1413),a=r(72791),o=r(61134),i=r(80184);t.Z=function(e){var t=e.defaultValues,r=e.children,l=e.onSubmit,s=(0,o.cI)({defaultValues:t}),d=s.handleSubmit,u=s.formState.errors,c=s.setError,p=s.clearErrors,m=s.reset;return(0,i.jsx)("form",{onSubmit:d((function(e){l({data:e,setError:c,clearErrors:p,reset:m})})),children:a.Children.map(r,(function(e){return e.props.name?a.createElement(e.type,(0,n.Z)({},(0,n.Z)((0,n.Z)({},e.props),{},{control:s.control,setValue:s.setValue,register:s.register,key:e.props.name,errors:u}))):e}))})}},48323:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(72791),a=r(1413),o=r(45987),i=r(29439),l=r(72509),s=r(61087),d=r(18720),u=r(48665),c=r(37652),p=r(30948),m=r(52018),g=r(763),f=r(13769),h=r(94502),v=r(2703),x=r(97892),y=r.n(x),b=r(39230),j=r(80184),Z=["data"],_=function(){var e=(0,n.useState)(!1),t=(0,i.Z)(e,2),r=t[0],x=t[1],_=(0,b.$G)().t,w=(0,h.i7)({key:d.t.organizationLevel,url:u.n.organizationLevel}).data,k=(0,h.i7)({key:d.t.organizationType,url:u.n.organizationType}).data,z=[{title:"ID",key:"id",classnames:"!w-[80px] !min-w-0"},{title:_("Month"),key:"month"},{title:_("Organization level"),key:"organization_level"},{title:_("Organization type"),key:"organization_type"},{title:_("Amount by count"),key:"amount_by_count",render:function(e){var t=e.value;return(0,j.jsx)(p.h3,{displayType:"text",thousandSeparator:" ",value:t})}},{title:_("Amount by group"),key:"amount_by_group",render:function(e){var t=e.value;return(0,j.jsx)(p.h3,{displayType:"text",thousandSeparator:" ",value:t})}}];return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,j.jsx)("div",{className:"col-span-8",children:(0,j.jsx)(l.Z,{children:_("\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u0441\u0442\u0430\u0432\u043a\u0438")})}),(0,j.jsx)("div",{className:"col-span-4 text-right",children:(0,j.jsxs)("button",{onClick:function(){return x(!0)},className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,j.jsx)(c.Z,{size:20,className:"mr-1.5"}),_("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")]})}),(0,j.jsx)("div",{className:"col-span-12 mt-8",children:(0,j.jsx)(s.Z,{ModalBody:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,j.jsxs)(m.Z,{onSubmit:function(t){var r=t.data,n=(0,o.Z)(t,Z);return e((0,a.Z)({data:(0,a.Z)((0,a.Z)({},r),{},{month:parseInt(y()((0,g.get)(r,"month")).format("MM")),organization_level_id:(0,g.get)(r,"organization_level_id.value"),organization_type_id:(0,g.get)(r,"organization_type_id.value")})},n))},defaultValues:(0,a.Z)((0,a.Z)({},(0,g.get)(t,"data.data",{})),{},{organization_level_id:(0,v.o)((0,g.get)(w,"data",[]).map((function(e){return{value:(0,g.get)(e,"id"),label:(0,g.get)((0,g.head)((0,g.get)(e,"translations",[])),"name")}})),parseInt((0,g.get)((0,g.get)(t,"data.data",{}),"organization_level_id"))),organization_type_id:(0,v.o)((0,g.get)(k,"data",[]).map((function(e){return{value:(0,g.get)(e,"id"),label:(0,g.get)((0,g.head)((0,g.get)(e,"translations",[])),"name")}})),parseInt((0,g.get)((0,g.get)(t,"data.data",{}),"organization_type_id")))}),children:[(0,j.jsx)(f.Ph,{name:"organization_level_id",label:_("Organization level"),params:{required:!0},options:(0,g.get)(w,"data",[]).map((function(e){return{value:(0,g.get)(e,"id"),label:(0,g.get)((0,g.head)((0,g.get)(e,"translations",[])),"name")}}))}),(0,j.jsx)(f.Ph,{name:"organization_type_id",label:_("Organization type"),params:{required:!0},options:(0,g.get)(k,"data",[]).map((function(e){return{value:(0,g.get)(e,"id"),label:(0,g.get)((0,g.head)((0,g.get)(e,"translations",[])),"name")}}))}),(0,j.jsx)(f.II,{name:"amount_by_group",property:{type:"number",step:1},placeholder:_("Amount by group"),label:_("Amount by group")}),(0,j.jsx)(f.II,{name:"amount_by_count",property:{type:"number",step:1},placeholder:_("Amount by count"),label:_("Amount by count")}),(0,j.jsx)(f.aN,{property:{showMonthYearPicker:!0},dateFormat:"MM",name:"month",label:_("Month"),params:{required:!0}}),(0,j.jsx)("button",{type:"submit",className:"w-full p-3.5 rounded-lg bg-primary block w-full text-white font-bold text-center h-12 mt-6",children:_(r?"Create":"Save")})]})},openCreateModal:r,setOpenCreateModal:x,hasActionColumn:!0,listKey:d.t.baseRates,url:u.n.baseRates,columns:z})})]})})},w=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(_,{})})}},2703:function(e,t,r){r.d(t,{o:function(){return a}});var n=r(763),a=function(e,t){return(0,n.find)(e,(function(e){return(0,n.get)(e,"value")==t}))}},37652:function(e,t,r){var n=r(72791),a=r(52007),o=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,o=e.size,s=void 0===o?24:o,d=l(e,["color","size"]);return n.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="PlusCircle",t.Z=s}}]);
//# sourceMappingURL=323.1d4da729.chunk.js.map