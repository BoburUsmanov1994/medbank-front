"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[481],{2399:function(e,t,n){n(72791);t.Z=n.p+"static/media/Folders.b3dc12e3fe1a81a0608401f324b3eba9.svg"},58525:function(e,t,n){n(72791);t.Z=n.p+"static/media/download.5c6fa236248d121782afeb4b8fd485fb.svg"},72808:function(e,t,n){n(72791);t.Z=n.p+"static/media/filter.d86b4b19e5c4fa1de7f8c3f086a2d1a2.svg"},96040:function(e,t,n){n(72791);t.Z=n.p+"static/media/monitor.28acd7f992eb6b5a99461be522562ae9.svg"},22481:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(72791),r=n(57689),s=n(1413),i=n(29439),o=n(72509),c=n(60179),l=n(18720),u=n(48665),d=n(763),m=n(58525),f=n(72808),p=n(78076),x=n(97892),v=n.n(x),h=n(70188),g=n(2703),y=n(30948),j=n(2399),b=n(96040),Z=n(80184),k=[{title:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415",key:"name"},{title:"\u0421\u041b\u0423\u0427\u0410\u0418 \u0424\u0413\u041c\u0421",key:"fgms_count",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0421\u0423\u041c\u041c\u0410 \u0414\u041b\u042f \u041e\u041f\u041b\u0410\u0422\u042b",key:"fgms_payment",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0414\u0420\u0423\u0413\u0418\u0415 \u0421\u041b\u0423\u0427\u0410\u0418",key:"total_count",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0421\u0423\u041c\u041c\u0410",key:"total_payment",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042f",key:"organization_level",classnames:"!text-center",render:function(e){e.row;return(0,Z.jsxs)("div",{className:"flex justify-around items-center px-3",children:[(0,Z.jsx)("img",{className:"mr-1",src:j.Z,alt:"cloud"}),(0,Z.jsx)("img",{src:b.Z,alt:"cloud"})]})}}],N=function(e){var t=e.year,n=void 0===t?parseInt(v()().format("YYYY")):t,x=e.month,y=void 0===x?v()().format("MM"):x,j=e.state,b=void 0===j?1:j,N=(0,r.s0)(),w=(0,a.useState)({year:n,month:y,state:b}),S=(0,i.Z)(w,2),_=S[0],z=S[1];return(0,a.useEffect)((function(){z({year:(0,g.o)(h.Iu,n),month:(0,g.o)(h.gg,y),state:(0,g.o)(h.Up,b)})}),[n,y,b]),(0,Z.jsx)("div",{children:(0,Z.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,Z.jsx)("div",{className:"col-span-8",children:(0,Z.jsx)(o.Z,{children:"\u0420\u0430\u0441\u0447\u0435\u0442\u044b \u043f\u043e \u043f\u0440\u043e\u043b\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043b\u0443\u0447\u0430\u044f\u043c \u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439"})}),(0,Z.jsx)("div",{className:"col-span-4 text-right",children:(0,Z.jsxs)("button",{className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,Z.jsx)("img",{className:"mr-2.5",src:m.Z,alt:"export"}),"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"]})}),(0,Z.jsx)("div",{className:"col-span-12 mt-8",children:(0,Z.jsx)(c.Z,{onRowClick:function(e){return N("/hospitals/organizations/groups/".concat(n,"/").concat(y,"/").concat((0,d.get)(e,"id",1)))},filters:(0,Z.jsxs)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:[(0,Z.jsx)("div",{className:"col-span-3",children:(0,Z.jsx)(p.Z,{setValue:function(e){return z((function(t){return(0,s.Z)((0,s.Z)({},t),{},{month:e})}))},label:"\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435",options:[]})}),(0,Z.jsxs)("div",{className:"col-span-3 flex items-center",children:[(0,Z.jsx)("div",{className:"mr-5 w-full",children:(0,Z.jsx)(p.Z,{setValue:function(e){return z((function(t){return(0,s.Z)((0,s.Z)({},t),{},{month:e})}))},label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",options:[]})}),(0,Z.jsx)("img",{onClick:function(){return N("/hospitals/organizations/".concat(n,"/").concat(y,"/1"))},className:"cursor-pointer translate-y-1/2",src:f.Z,alt:"filter"})]})]}),listKey:l.t.inpatientReports,url:u.n.inpatientReports+"/".concat((0,d.get)(_,"year.value",n)).concat((0,d.get)(_,"month.value",y),"/states/").concat((0,d.get)(_,"state.value",b),"/organizations"),columns:k})})]})})},w=function(){var e=(0,r.UO)(),t=e.year,n=e.month,a=e.state;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(N,{year:t,month:n,state:a})})}},2703:function(e,t,n){n.d(t,{o:function(){return r}});var a=n(763),r=function(e,t){return(0,a.find)(e,(function(e){return(0,a.get)(e,"value")==t}))}}}]);
//# sourceMappingURL=481.d5a03069.chunk.js.map