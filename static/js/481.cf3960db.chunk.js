"use strict";(self.webpackChunkmedbank=self.webpackChunkmedbank||[]).push([[481],{2399:function(e,t,a){a(72791);t.Z=a.p+"static/media/Folders.b3dc12e3fe1a81a0608401f324b3eba9.svg"},72808:function(e,t,a){a(72791);t.Z=a.p+"static/media/filter.d86b4b19e5c4fa1de7f8c3f086a2d1a2.svg"},96040:function(e,t,a){a(72791);t.Z=a.p+"static/media/monitor.28acd7f992eb6b5a99461be522562ae9.svg"},22481:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(72791),s=a(57689),r=a(1413),i=a(29439),o=a(72509),c=a(60179),l=a(18720),u=a(48665),d=a(763),m=a(58525),p=a(72808),f=a(78076),x=a(97892),h=a.n(x),v=a(70188),g=a(2703),y=a(30948),j=a(2399),b=a(96040),Z=a(80184),k=[{title:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415",key:"name"},{title:"\u0421\u041b\u0423\u0427\u0410\u0418 \u0424\u0413\u041c\u0421",key:"fgms_count",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0421\u0423\u041c\u041c\u0410 \u0414\u041b\u042f \u041e\u041f\u041b\u0410\u0422\u042b",key:"fgms_payment",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0414\u0420\u0423\u0413\u0418\u0415 \u0421\u041b\u0423\u0427\u0410\u0418",key:"total_count",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0421\u0423\u041c\u041c\u0410",key:"total_payment",render:function(e){var t=e.value;return(0,Z.jsx)(y.h3,{thousandSeparator:" ",displayType:"text",value:t})}},{title:"\u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042f",key:"organization_level",classnames:"!text-center",render:function(e){e.row;return(0,Z.jsxs)("div",{className:"flex justify-around items-center px-3",children:[(0,Z.jsx)("img",{className:"mr-1",src:j.Z,alt:"cloud"}),(0,Z.jsx)("img",{src:b.Z,alt:"cloud"})]})}}],N=function(e){var t=e.year,a=void 0===t?parseInt(h()().format("YYYY")):t,x=e.month,y=void 0===x?h()().format("MM"):x,j=e.state,b=void 0===j?1:j,N=(0,s.s0)(),w=(0,n.useState)({year:a,month:y,state:b}),S=(0,i.Z)(w,2),_=S[0],z=S[1];return(0,n.useEffect)((function(){z({year:(0,g.o)(v.Iu,a),month:(0,g.o)(v.gg,y),state:(0,g.o)(v.Up,b)})}),[a,y,b]),(0,Z.jsx)("div",{children:(0,Z.jsxs)("div",{className:"grid grid-cols-12 items-center",children:[(0,Z.jsx)("div",{className:"col-span-8",children:(0,Z.jsx)(o.Z,{children:"\u0420\u0430\u0441\u0447\u0435\u0442\u044b \u043f\u043e \u043f\u0440\u043e\u043b\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043b\u0443\u0447\u0430\u044f\u043c \u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439"})}),(0,Z.jsx)("div",{className:"col-span-4 text-right",children:(0,Z.jsxs)("button",{className:"inline-flex items-center py-2.5 pl-2.5 pr-5 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,Z.jsx)("img",{className:"mr-2.5",src:m.Z,alt:"export"}),"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"]})}),(0,Z.jsx)("div",{className:"col-span-12 mt-8",children:(0,Z.jsx)(c.Z,{onRowClick:function(e){return N("/hospitals/organizations/groups/".concat(a,"/").concat(y,"/").concat((0,d.get)(e,"id",1)))},filters:(0,Z.jsxs)("div",{className:"grid grid-cols-12 mb-5 gap-x-8",children:[(0,Z.jsx)("div",{className:"col-span-3",children:(0,Z.jsx)(f.Z,{setValue:function(e){return z((function(t){return(0,r.Z)((0,r.Z)({},t),{},{month:e})}))},label:"\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435",options:[]})}),(0,Z.jsxs)("div",{className:"col-span-3 flex items-center",children:[(0,Z.jsx)("div",{className:"mr-5 w-full",children:(0,Z.jsx)(f.Z,{setValue:function(e){return z((function(t){return(0,r.Z)((0,r.Z)({},t),{},{month:e})}))},label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",options:[]})}),(0,Z.jsx)("img",{onClick:function(){return N("/hospitals/organizations/".concat(a,"/").concat(y,"/1"))},className:"cursor-pointer translate-y-1/2",src:p.Z,alt:"filter"})]})]}),listKey:l.t.inpatientReports,url:u.n.inpatientReports+"/".concat((0,d.get)(_,"year.value",a)).concat((0,d.get)(_,"month.value",y),"/states/").concat((0,d.get)(_,"state.value",b),"/organizations"),columns:k})})]})})},w=function(){var e=(0,s.UO)(),t=e.year,a=e.month,n=e.state;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(N,{year:t,month:a,state:n})})}}}]);
//# sourceMappingURL=481.cf3960db.chunk.js.map