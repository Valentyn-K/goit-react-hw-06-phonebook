(this["webpackJsonphw6-phonebook-with-redux"]=this["webpackJsonphw6-phonebook-with-redux"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={ADD_CONTACT:"ADD_CONTACT",DELETE_CONTACT:"DELETE_CONTACT",FILTER_CONTACTS:"FILTER_CONTACTS",GET_CONTACTS_FROM_LOCAL_STORAGE:"GET_CONTACTS_FROM_LOCAL_STORE"}},26:function(e,t,n){e.exports={appWraper:"App_appWraper__2sG0H"}},27:function(e,t,n){e.exports={enter:"decreaseScale_enter__3v5Y-",enterActive:"decreaseScale_enterActive__3-9x0",exit:"decreaseScale_exit__3GjYB",exitActive:"decreaseScale_exitActive__1NM8K"}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l}));var a=n(10),c=n(55),r=n(9),i=Object(r.b)(a.a.ADD_CONTACT,(function(e,t){return{payload:{name:e,number:t,id:Object(c.a)()}}})),o=Object(r.b)(a.a.DELETE_CONTACT,(function(e){return{payload:e}})),u=Object(r.b)(a.a.FILTER_CONTACTS,(function(e){return{payload:e}})),l=Object(r.b)(a.a.GET_CONTACTS_FROM_LOCAL_STORAGE,(function(e){return{payload:e}}))},34:function(e,t,n){"use strict";var a,c=n(22),r=n(31),i=n(9),o=n(10),u=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Cavin Clein",number:"111-12-56"},{id:"id-6",name:"Cris Dior",number:"222-89-12"},{id:"id-7",name:"Gus Gussi",number:"333-17-79"},{id:"id-8",name:"Va Voronin",number:"444-91-26"}],l=Object(i.c)(u,(a={},Object(c.a)(a,o.a.ADD_CONTACT,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=(t.type,t.payload);return[].concat(Object(r.a)(e),[{name:n.name,number:n.number,id:n.id}])})),Object(c.a)(a,o.a.DELETE_CONTACT,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=(t.type,t.payload);return e.filter((function(e){return e.id!==n}))})),Object(c.a)(a,o.a.GET_CONTACTS_FROM_LOCAL_STORAGE,(function(){var e=arguments.length>1?arguments[1]:void 0,t=(e.type,e.payload);return Object(r.a)(t)})),a)),s=Object(i.c)("",Object(c.a)({},o.a.FILTER_CONTACTS,(function(){var e=arguments.length>1?arguments[1]:void 0,t=(e.type,e.payload);return t}))),d=Object(i.a)({reducer:{contacts:l,filter:s}});t.a=d},36:function(e,t,n){e.exports={enter:"pop_enter__2ChZX",enterActive:"pop_enterActive__1kYDh",exit:"pop_exit__TL_1k",exitActive:"pop_exitActive__vjRLq"}},44:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=n(23),u=n(32),l=n(29),s=n(26),d=n.n(s),m=n(68),O=n(69),_=n(36),b=n.n(_),T=n(27),p=n.n(T),E=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,85))})),C=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,84))})),f=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,86))})),A=function(e){var t=e.contacts,n=e.getContactsFromLocalStorage,r=Object(a.useState)(!1),i=Object(l.a)(r,2),o=i[0],u=i[1],s=Object(a.useState)(!1),_=Object(l.a)(s,2),T=_[0],A=_[1],v=function(){A(!T)};return Object(a.useEffect)((function(){u(!0)})),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&n(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]),c.a.createElement("div",{className:d.a.appWraper},c.a.createElement(O.a,{in:o,timeout:500,unmountOnExit:!0,classNames:b.a},c.a.createElement("h1",{className:d.a.appTitle},"Phonebook")),c.a.createElement(m.a,{variant:"outlined",color:"secondary",className:d.a.addFormButton,onClick:v},T?"Hide form":"Add contact"),c.a.createElement(a.Suspense,{fallback:c.a.createElement("h3",null,"Loading...")},c.a.createElement(O.a,{in:T,timeout:1e3,unmountOnExit:!0,classNames:p.a},c.a.createElement(E,{onCloseForm:v})),c.a.createElement(O.a,{in:t.length>0,timeout:1e3,unmountOnExit:!0,classNames:p.a},c.a.createElement("h2",null,"Contacts")),c.a.createElement(O.a,{in:t.length>1,timeout:1e3,unmountOnExit:!0,classNames:p.a},c.a.createElement(f,null)),t.length>0&&c.a.createElement(C,null)))},v=Object(o.b)((function(e){return{contacts:e.contacts}}),(function(e){return{getContactsFromLocalStorage:function(t){return e(u.d(t))}}}))(A),h=n(34);i.a.render(c.a.createElement(o.a,{store:h.a},c.a.createElement(v,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0c01d9f1.chunk.js.map