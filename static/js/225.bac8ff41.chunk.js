"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[225],{88961:function(e,t,a){a(72791);t.Z=a.p+"static/media/cloud.839b8c29871e642fc6240d4258d4aa9d.svg"},5745:function(e,t,a){a(72791);t.Z=a.p+"static/media/gender-female.803c024f65f7d961a3d4d63d9ab94784.svg"},18232:function(e,t,a){a(72791);t.Z=a.p+"static/media/gender-male.b99eb0c250b0e8d37d36ad2e2dcc0e32.svg"},96040:function(e,t,a){a(72791);t.Z=a.p+"static/media/monitor.28acd7f992eb6b5a99461be522562ae9.svg"},56225:function(e,t,a){var r=a(1413),s=a(45987),n=a(72791),d=a(28182),l=a(763),i=a(80184),o=["label","value","setValue","placeholder"];t.Z=function(e){var t=e.label,a=void 0===t?"":t,p=e.value,c=void 0===p?"":p,u=e.setValue,x=void 0===u?function(){}:u,h=e.placeholder,m=void 0===h?"":h,b=(0,s.Z)(e,o),v=(0,n.useMemo)((function(e){return(0,l.debounce)((function(e){x(e.target.value)}),1e3)}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"form-group mb-0",children:[(0,i.jsx)("label",{className:"form-label",htmlFor:"#",children:a}),(0,i.jsx)("input",(0,r.Z)((0,r.Z)({placeholder:m,defaultValue:c,onChange:v},b),{},{className:(0,d.Z)("form-input"),type:"search"}))]})})}},7225:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var r=a(72791),s=a(57689),n=a(29439),d=a(72509),l=a(60179),i=a(18720),o=a(48665),p=a(763),c=a(58525),u=a(30948),x=a(88961),h=a(96040),m=a(5745),b=a(18232),v=a(56225),j=a(39230),g=a(80184),y=[{title:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415 (\u041a\u041e\u0414)",key:"name",render:function(e){var t=e.value,a=e.row;return(0,g.jsxs)("div",{className:"px-3 relative",children:[t," ",(0,g.jsx)(u.h3,{className:"text-xs text-red-500 absolute -bottom-4 right-2",displayType:"text",thousandSeparator:"",value:(0,p.get)(a,"base_rate_by_group",0)})]})}},{title:"<1",key:"patient_groups.code",render:function(e){var t=e.row;return(0,g.jsxs)("div",{className:"text-left ",children:[(0,g.jsxs)("div",{className:"px-3  pb-2.5 border-b border-dashed border-b-[#006D85] ",children:[(0,g.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-14",children:"\u041d\u0430\u0441."}),(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[1].count",0),2)})]}),(0,g.jsxs)("div",{className:"pt-2.5 px-3 ",children:[(0,g.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-10 ",children:"\u0421\u0443\u043c\u043c\u0430."}),(0,g.jsx)(u.h3,{className:"",thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[1].payment",0),2)})]})]})}},{title:"1-5",key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[2].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[2].payment",0),2)})})]})}},{title:"6-14",key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[3].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[3].payment",0),2)})})]})}},{title:(0,g.jsxs)("span",{className:"inline-flex items-center",children:["15-39F ",(0,g.jsx)("img",{src:m.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[4].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[4].payment",0),2)})})]})}},{title:(0,g.jsxs)("span",{className:"inline-flex items-start",children:["15-39M ",(0,g.jsx)("img",{src:b.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[5].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[5].payment",0),2)})})]})}},{title:(0,g.jsxs)("span",{className:"inline-flex items-center",children:["40-49F ",(0,g.jsx)("img",{src:m.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[6].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[6].payment",0),2)})})]})}},{title:(0,g.jsxs)("span",{className:"inline-flex items-start",children:["40-49M ",(0,g.jsx)("img",{src:b.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[7].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[7].payment",0),2)})})]})}},{title:"50-65",key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[8].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[8].payment",0),2)})})]})}},{title:"65<",key:"patient_groups",render:function(e){var t=e.row;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[9].count",0),2)})}),(0,g.jsx)("div",{className:"pt-2.5 ",children:(0,g.jsx)(u.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[9].payment",0),2)})})]})}},{title:(0,g.jsxs)("div",{className:"flex justify-around",children:[(0,g.jsx)("span",{className:"mr-10 ml-3",children:"\u041f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c "}),(0,g.jsx)("span",{className:"mr-3",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443"})]}),key:"organization_level",render:function(e){var t=e.row;return(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85] relative after:absolute after:top-full after:content-[''] after:h-[50px]  after:border-r after:border-dashed after:border-r-[#006D85] after:w-[1px] after:left-1/2",children:(0,g.jsx)(u.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.get)(t,"total_count",0)})}),(0,g.jsxs)("div",{className:"flex justify-around ",children:[(0,g.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,g.jsx)(u.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.round)((0,p.get)(t,"total_payment_by_group",0),2)})}),(0,g.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,g.jsx)(u.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.round)((0,p.get)(t,"total_payment",0),2)})})]})]})}},{title:"\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042f",key:"organization_level",classnames:"!text-center",render:function(e){e.row;return(0,g.jsxs)("div",{className:"flex justify-around items-center  px-3",children:[(0,g.jsx)("img",{className:"mr-1",src:x.Z,alt:"cloud"}),(0,g.jsx)("img",{src:h.Z,alt:"cloud"})]})}}],f=function(e){var t=e.org_id,a=void 0===t?null:t,s=(0,j.$G)().t,p=(0,r.useState)(""),u=(0,n.Z)(p,2),x=u[0],h=u[1];return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,g.jsx)("div",{className:"col-span-8",children:(0,g.jsx)(d.Z,{children:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u0437\u0432\u0435\u043d\u0430"})}),(0,g.jsx)("div",{className:"col-span-4 text-right",children:(0,g.jsxs)("button",{className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,g.jsx)("img",{className:"mr-2.5",src:c.Z,alt:"export"}),"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"]})}),(0,g.jsx)("div",{className:"col-span-12 mt-8",children:(0,g.jsx)(l.Z,{doubleRow:!0,filters:(0,g.jsx)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:(0,g.jsx)("div",{className:"col-span-3",children:(0,g.jsx)(v.Z,{setValue:h,value:x,label:s("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435")})})}),listKey:i.t.outpatientReports,url:o.n.outpatientReports+"/organizations/".concat(a),params:{name:x},columns:y})})]})})},N=function(){var e=(0,s.UO)().org_id;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f,{org_id:e})})}}}]);
//# sourceMappingURL=225.bac8ff41.chunk.js.map