"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[502],{2399:function(e,t,n){n(72791);t.Z=n.p+"static/media/Folders.b3dc12e3fe1a81a0608401f324b3eba9.svg"},72808:function(e,t,n){n(72791);t.Z=n.p+"static/media/filter.d86b4b19e5c4fa1de7f8c3f086a2d1a2.svg"},96040:function(e,t,n){n(72791);t.Z=n.p+"static/media/monitor.28acd7f992eb6b5a99461be522562ae9.svg"},90502:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(72791),s=n(1413),r=n(29439),o=n(72509),i=n(60179),c=n(18720),l=n(48665),u=n(763),d=n(58525),m=n(72808),p=n(78076),f=n(97892),x=n.n(f),h=n(70188),v=n(2703),g=n(57689),y=n(30948),j=n(2399),b=n(96040),Z=n(80184),N=[{title:"\u0420\u0415\u0413\u0418\u041e\u041d(\u0420\u041c\u041e/\u0413\u041c\u041e)/\u0413\u0420\u0423\u041f\u041f\u042b",key:"name"},{title:"\u0421\u041b\u0423\u0427\u0410\u0418 \u0424\u0413\u041c\u0421",key:"fgms_count",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0421\u0423\u041c\u041c\u0410 \u0414\u041b\u042f \u041e\u041f\u041b\u0410\u0422\u042b",key:"fgms_payment",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0414\u0420\u0423\u0413\u0418\u0415 \u0421\u041b\u0423\u0427\u0410\u0418",key:"total_count",render:function(e){var t=e.row;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:(0,u.get)(t,"total_count",0)-(0,u.get)(t,"fgms_count",0)})}},{title:"\u0421\u0423\u041c\u041c\u0410",key:"total_payment",render:function(e){var t=e.row;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:(0,u.get)(t,"total_payment",0)-(0,u.get)(t,"fgms_payment",0)})}},{title:"\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042f",key:"organization_level",classnames:"!text-center",render:function(e){e.row;return(0,Z.jsxs)("div",{className:"flex justify-around items-center px-3",children:[(0,Z.jsx)("img",{className:"mr-1",src:j.Z,alt:"cloud"}),(0,Z.jsx)("img",{src:b.Z,alt:"cloud"})]})}}],k=function(e){var t=e.year,n=void 0===t?parseInt(x()().format("YYYY")):t,f=e.month,y=void 0===f?x()().format("MM"):f,j=(0,g.s0)(),b=(0,a.useState)({year:n,month:y}),k=(0,r.Z)(b,2),_=k[0],Y=k[1];return(0,a.useEffect)((function(){Y({year:(0,v.o)(h.Iu,n),month:(0,v.o)(h.gg,y)})}),[n,y]),(0,Z.jsx)("div",{children:(0,Z.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,Z.jsx)("div",{className:"col-span-8",children:(0,Z.jsx)(o.Z,{children:"\u0420\u0430\u0441\u0447\u0435\u0442\u044b \u043f\u043e \u043f\u0440\u043e\u043b\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043b\u0443\u0447\u0430\u044f\u043c \u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439"})}),(0,Z.jsx)("div",{className:"col-span-4 text-right",children:(0,Z.jsxs)("button",{className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,Z.jsx)("img",{className:"mr-2.5",src:d.Z,alt:"export"}),"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"]})}),(0,Z.jsx)("div",{className:"col-span-12 mt-8",children:(0,Z.jsx)(i.Z,{onRowClick:function(e){return j("/hospitals/organizations/".concat(n,"/").concat(y,"/").concat((0,u.get)(e,"id",1)))},filters:(0,Z.jsxs)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:[(0,Z.jsx)("div",{className:"col-span-3",children:(0,Z.jsx)(p.Z,{setValue:function(e){return j("/hospitals/inpatient-reports/".concat((0,u.get)(e,"value"),"/").concat(y))},value:(0,u.get)(_,"year"),label:"\u0413\u043e\u0434",options:h.Iu})}),(0,Z.jsx)("div",{className:"col-span-3",children:(0,Z.jsx)(p.Z,{setValue:function(e){return j("/hospitals/inpatient-reports/".concat(n,"/").concat((0,u.get)(e,"value")))},value:(0,u.get)(_,"month"),label:"\u041c\u0435\u0441\u044f\u0446",options:h.gg})}),(0,Z.jsx)("div",{className:"col-span-3",children:(0,Z.jsx)(p.Z,{setValue:function(e){return Y((function(t){return(0,s.Z)((0,s.Z)({},t),{},{month:e})}))},label:"\u0420\u0435\u0433\u0438\u043e\u043d",options:[]})}),(0,Z.jsxs)("div",{className:"col-span-3 flex items-center",children:[(0,Z.jsx)("div",{className:"mr-5 w-full",children:(0,Z.jsx)(p.Z,{setValue:function(e){return Y((function(t){return(0,s.Z)((0,s.Z)({},t),{},{month:e})}))},label:"\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435",options:[]})}),(0,Z.jsx)("img",{onClick:function(){return j("/hospitals/inpatient-reports/".concat(parseInt(x()().format("YYYY")),"/").concat(x()().format("MM")))},className:"cursor-pointer translate-y-1/2",src:m.Z,alt:"filter"})]})]}),listKey:c.t.inpatientReports,url:l.n.inpatientReports+"/".concat((0,u.get)(_,"year.value",n)).concat((0,u.get)(_,"month.value",y),"/states"),columns:N})})]})})},_=function(){var e=(0,g.UO)(),t=e.year,n=e.month;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(k,{year:t,month:n})})}}}]);
//# sourceMappingURL=502.9f6d0c01.chunk.js.map