"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[513],{88961:function(e,t,a){a(72791);t.Z=a.p+"static/media/cloud.839b8c29871e642fc6240d4258d4aa9d.svg"},58525:function(e,t,a){a(72791);t.Z=a.p+"static/media/download.5c6fa236248d121782afeb4b8fd485fb.svg"},72808:function(e,t,a){a(72791);t.Z=a.p+"static/media/filter.d86b4b19e5c4fa1de7f8c3f086a2d1a2.svg"},5745:function(e,t,a){a(72791);t.Z=a.p+"static/media/gender-female.803c024f65f7d961a3d4d63d9ab94784.svg"},18232:function(e,t,a){a(72791);t.Z=a.p+"static/media/gender-male.b99eb0c250b0e8d37d36ad2e2dcc0e32.svg"},96040:function(e,t,a){a(72791);t.Z=a.p+"static/media/monitor.28acd7f992eb6b5a99461be522562ae9.svg"},71513:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var r=a(72791),s=a(57689),n=a(1413),d=a(29439),i=a(72509),o=a(61087),l=a(18720),c=a(48665),p=a(763),u=a(58525),x=a(72808),h=a(78076),m=a(97892),v=a.n(m),b=a(70188),g=a(2703),j=a(30948),y=a(88961),f=a(96040),N=a(5745),_=a(18232),k=a(39230),S=a(80184),Z=function(e){var t=e.year,a=void 0===t?parseInt(v()().format("YYYY")):t,m=e.month,Z=void 0===m?v()().format("MM"):m,T=e.state,w=void 0===T?1:T,D=(0,k.$G)().t,z=(0,s.s0)(),R=(0,r.useState)({year:a,month:Z,state:w}),C=(0,d.Z)(R,2),M=C[0],Y=C[1],F=[{title:D("\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415 (\u041a\u041e\u0414)"),key:"name",render:function(e){var t=e.value,a=e.row;return(0,S.jsxs)("div",{className:"px-3 relative",children:[t," ",(0,S.jsx)(j.h3,{className:"text-xs text-red-500 absolute -bottom-3 right-2",displayType:"text",thousandSeparator:" ",value:(0,p.get)(a,"total_count",0)})]})}},{title:"<1",key:"patient_groups.code",render:function(e){var t=e.row;return(0,S.jsxs)("div",{className:"text-left ",children:[(0,S.jsxs)("div",{className:"px-3  pb-2.5 border-b border-dashed border-b-[#006D85] ",children:[(0,S.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-14",children:"\u041d\u0430\u0441."}),(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[1].count",0),2)})]}),(0,S.jsxs)("div",{className:"pt-2.5 px-3 ",children:[(0,S.jsx)("span",{className:"bg-[#D9D9D9] inline-block rounded-[20px] px-2 py-1 text-xs font-semibold text-black mr-10 ",children:"\u0421\u0443\u043c\u043c\u0430."}),(0,S.jsx)(j.h3,{className:"",thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[1].payment",0),2)})]})]})}},{title:"1-5",key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[2].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[2].payment",0),2)})})]})}},{title:"6-14",key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[3].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[3].payment",0),2)})})]})}},{title:(0,S.jsxs)("span",{className:"inline-flex items-center",children:["15-39F ",(0,S.jsx)("img",{src:N.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[4].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[4].payment",0),2)})})]})}},{title:(0,S.jsxs)("span",{className:"inline-flex items-start",children:["15-39M ",(0,S.jsx)("img",{src:_.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[5].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[5].payment",0),2)})})]})}},{title:(0,S.jsxs)("span",{className:"inline-flex items-center",children:["40-49F ",(0,S.jsx)("img",{src:N.Z,alt:"female"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[6].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[6].payment",0),2)})})]})}},{title:(0,S.jsxs)("span",{className:"inline-flex items-start",children:["40-49M ",(0,S.jsx)("img",{src:_.Z,alt:"male"})]}),key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[7].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[7].payment",0),2)})})]})}},{title:"50-65",key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[8].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[8].payment",0),2)})})]})}},{title:"65<",key:"patient_groups",render:function(e){var t=e.row;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85]",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[9].count",0),2)})}),(0,S.jsx)("div",{className:"pt-2.5 ",children:(0,S.jsx)(j.h3,{thousandSeparator:" ",displayType:"text",value:(0,p.round)((0,p.get)(t,"patient_groups[9].payment",0),2)})})]})}},{title:(0,S.jsxs)("div",{className:"flex justify-around",children:[(0,S.jsx)("span",{className:"mr-10 ml-3",children:D("\u041f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c ")}),(0,S.jsx)("span",{className:"mr-3",children:D("\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443")})]}),key:"organization_level",render:function(e){var t=e.row;return(0,S.jsxs)("div",{className:"text-center",children:[(0,S.jsx)("div",{className:"pb-2.5 border-b border-dashed border-b-[#006D85] relative after:absolute after:top-full after:content-[''] after:h-[50px]  after:border-r after:border-dashed after:border-r-[#006D85] after:w-[1px] after:left-1/2",children:(0,S.jsx)(j.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.get)(t,"total_count",0)})}),(0,S.jsxs)("div",{className:"flex justify-around ",children:[(0,S.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,S.jsx)(j.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.round)((0,p.get)(t,"total_payment_by_group",0),2)})}),(0,S.jsx)("span",{className:"pt-2.5 w-1/2 ",children:(0,S.jsx)(j.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.round)((0,p.get)(t,"total_payment",0),2)})})]})]})}},{title:D("\u041e\u0431\u0449\u0438\u0439"),key:"organization_level",classnames:"!text-center",render:function(e){var t=e.row;return(0,S.jsx)(j.h3,{displayType:"text",thousandSeparator:" ",value:(0,p.round)((0,p.get)(t,"total_payment_by_group",0),2)+(0,p.round)((0,p.get)(t,"total_payment",0),2)})}},{title:D("\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042f"),key:"organization_level",classnames:"!text-center",render:function(e){e.row;return(0,S.jsxs)("div",{className:"flex justify-around items-center  px-3",children:[(0,S.jsx)("img",{className:"mr-1",src:y.Z,alt:"cloud"}),(0,S.jsx)("img",{src:f.Z,alt:"cloud"})]})}}];return(0,r.useEffect)((function(){Y({year:(0,g.o)(b.Iu,a),month:(0,g.o)(b.gg,Z),state:(0,g.o)(b.Up,w)})}),[a,Z,w]),(0,S.jsx)("div",{children:(0,S.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,S.jsx)("div",{className:"col-span-8",children:(0,S.jsx)(i.Z,{children:D("Primary care organizations")})}),(0,S.jsx)("div",{className:"col-span-4 text-right",children:(0,S.jsxs)("button",{className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,S.jsx)("img",{className:"mr-2.5",src:u.Z,alt:"export"}),D("Export")]})}),(0,S.jsx)("div",{className:"col-span-12 mt-8",children:(0,S.jsx)(o.Z,{onRowClick:function(e){return z("/dispensaries/organizations/".concat((0,p.get)(e,"id",1)))},doubleRow:!0,filters:(0,S.jsxs)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:[(0,S.jsx)("div",{className:"col-span-3",children:(0,S.jsx)(h.Z,{value:(0,p.get)(M,"state"),setValue:function(e){return z("/dispensaries/organizations/".concat(a,"/").concat(Z,"/").concat((0,p.get)(e,"value")))},label:D("Region"),options:b.Up})}),(0,S.jsx)("div",{className:"col-span-3",children:(0,S.jsx)(h.Z,{setValue:function(e){return Y((function(t){return(0,n.Z)((0,n.Z)({},t),{},{month:e})}))},label:D("\u0420\u041c\u041e/\u0413\u041c\u041e"),options:[]})}),(0,S.jsxs)("div",{className:"col-span-3 flex items-center",children:[(0,S.jsx)("div",{className:"mr-5 w-full",children:(0,S.jsx)(h.Z,{setValue:function(e){return Y((function(t){return(0,n.Z)((0,n.Z)({},t),{},{month:e})}))},label:D("Name"),options:[]})}),(0,S.jsx)("img",{onClick:function(){return z("/dispensaries/organizations/".concat(a,"/").concat(Z,"/1"))},className:"cursor-pointer translate-y-1/2",src:x.Z,alt:"filter"})]})]}),listKey:l.t.outpatientReports,url:c.n.outpatientReports+"/".concat((0,p.get)(M,"year.value",a)).concat((0,p.get)(M,"month.value",Z),"/states/").concat((0,p.get)(M,"state.value",w),"/organizations"),columns:F})})]})})},T=function(){var e=(0,s.UO)(),t=e.year,a=e.month,r=e.state;return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(Z,{year:t,month:a,state:r})})}},2703:function(e,t,a){a.d(t,{o:function(){return s}});var r=a(763),s=function(e,t){return(0,r.find)(e,(function(e){return(0,r.get)(e,"value")==t}))}}}]);
//# sourceMappingURL=513.878a5e3d.chunk.js.map