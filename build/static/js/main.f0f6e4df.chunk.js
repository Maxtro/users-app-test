(this["webpackJsonpusers-app-test"]=this["webpackJsonpusers-app-test"]||[]).push([[0],{110:function(e,t,n){e.exports=n(235)},115:function(e,t,n){},14:function(e,t,n){e.exports={users_page:"users_users_page__39tmG",user:"users_user__3JDJw",button:"users_button__32rc0",button_add:"users_button_add__2tA0g",selected:"users_selected__1kR0l",pagenator:"users_pagenator__5ThDg",link:"users_link__29OJ6"}},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(50),u=n.n(c),o=(n(115),n(10)),s=n(11),l=n(21),i={users:[],currentUser:{},userId:1,editMode:!1,total_pages:0,page:1},m=function(){return{type:"USERS/LOAD_USERS"}},E=function(e){return{type:"USERS/SET_USERS_DATA",users:e}},d=function(e){return{type:"USERS/SET_TOTAL_PAGE",totalPages:e}},p=function(e){return{type:"USERS/SET_CURRENT_PAGE",currentPage:e}},f=function(){return{type:"USERS/LOAD_CURRENT_USER"}},b=function(e){return{type:"USERS/SET_CURRENT_USER",currentUser:e}},S=function(e){return{type:"USERS/SET_USER_ID",userId:e}},_=function(){return{type:"USERS/UPDATE_USER"}},U=function(e){return{type:"USERS/SET_EDIT_MODE",editMode:e}},v=function(){return{type:"USERS/DELETE_USER"}},g=function(){return{type:"USERS/ADD_USER"}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/SET_USERS_DATA":return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case"USERS/SET_TOTAL_PAGE":return Object(l.a)(Object(l.a)({},e),{},{total_pages:t.totalPages});case"USERS/SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{page:t.currentPage});case"USERS/SET_CURRENT_USER":return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.currentUser});case"USERS/SET_USER_ID":return Object(l.a)(Object(l.a)({},e),{},{userId:t.userId});case"USERS/SET_EDIT_MODE":return Object(l.a)(Object(l.a)({},e),{},{editMode:t.editMode});default:return e}},O=function(e){return e.reducer.page},h=function(e){return e.reducer.userId},j=function(e){return e.form.editUser},x=function(e){return e.form.addUser},y=function(e){return e.reducer.users},T=function(e){return e.reducer.total_pages},k=function(e){return e.reducer.page},D=function(e){return e.reducer.currentUser},w=function(e){return e.reducer.editMode},A=n(17),C=n(14),M=n.n(C),P=function(e){for(var t=e.users,n=e.totalPages,a=e.currentPage,c=e.setCurrentPage,u=e.setCurrentUser,o=function(){var e=function(){u()};return r.a.createElement("div",null,t.map((function(t){return r.a.createElement("div",{className:M.a.user,key:t.id},r.a.createElement("div",null,r.a.createElement("b",null,t.first_name)," ",t.last_name),r.a.createElement("div",null,r.a.createElement(A.b,{to:"/user/".concat(t.id)},r.a.createElement("button",{onClick:e,className:M.a.button},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))})))},s=[],l=1;l<=n;l++)s.push(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},s.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement("span",{onClick:function(){c(e)},className:a===e?M.a.selected:M.a.pagenator},e),"\xa0")}))),r.a.createElement(o,{users:t}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(A.b,{to:"/add-user"},r.a.createElement("button",{className:"".concat(M.a.button_add," ").concat(M.a.button)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))))},N=r.a.memo((function(e){return r.a.createElement(P,e)})),I=Object(s.b)((function(e){return{users:y(e),totalPages:T(e),currentPage:k(e)}}),(function(e){return{setCurrentPage:function(t){e(p(t)),e(m())},setCurrentUser:function(){e(b({}))}}}))(N),L=n(9),F=n(236),G=n(237),J=function(e){var t=e.currentUser,n=e.handleSubmit,a=e.editMode,c=e.setEditMode,u=e.deleteUser,o=function(){c(!0)},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:t.avatar,style:{borderRadius:10},alt:""})),r.a.createElement("div",null,r.a.createElement("b",null,t.first_name),r.a.createElement("div",null,t.last_name),r.a.createElement("div",{style:{fontSize:13}},t.email),r.a.createElement("p",null),r.a.createElement("div",null," ",r.a.createElement("button",{onClick:o},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),r.a.createElement("p",null),r.a.createElement("div",null,r.a.createElement(A.b,{to:"/"},r.a.createElement("button",{onClick:function(){u()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))))},l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:t.avatar,style:{borderRadius:10},alt:""})),r.a.createElement("form",{onSubmit:n},r.a.createElement(G.a,{placeholder:t.first_name,component:"input",type:"text",name:"first_name"}),r.a.createElement(G.a,{placeholder:t.last_name,component:"input",type:"text",name:"last_name"}),r.a.createElement(G.a,{placeholder:t.email,component:"input",type:"text",name:"email"}),r.a.createElement("p",null),r.a.createElement("div",null," ",r.a.createElement("button",{type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:M.a.user},t?a?r.a.createElement(l,null):r.a.createElement(s,null):null),r.a.createElement(A.b,{to:"/"},r.a.createElement("div",{className:M.a.link},"\u041d\u0430\u0437\u0430\u0434")))},B=Object(F.a)({form:"editUser"})(J),W=Object(L.d)(Object(s.b)((function(e){return{currentUser:D(e),editMode:w(e)}}),(function(e){return{setEditMode:function(t){e(U(t))},deleteUser:function(){e(v())}}})),o.f)((function(e){var t=e.match.params.id,n=Object(s.c)();Object(a.useEffect)((function(){n(S(t)),n(f())}),[n,t]);return r.a.createElement(B,{currentUser:e.currentUser,onSubmit:function(){n(_()),n(S(t)),n(f()),e.setEditMode(!1)},editMode:e.editMode,setEditMode:e.setEditMode,deleteUser:e.deleteUser})})),q=n(108),z=function(e){var t=e.handleSubmit,n=Object(a.useState)(!1),c=Object(q.a)(n,2),u=c[0],s=c[1],l=function(e,t){e.preventDefault();var n=e.target.files[0];t.onChange(n)};return u?r.a.createElement(o.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:M.a.user},r.a.createElement("form",{onSubmit:t},r.a.createElement(G.a,{placeholder:"First name",component:"input",type:"text",name:"first_name"}),r.a.createElement(G.a,{placeholder:"Last name",component:"input",type:"text",name:"last_name"}),r.a.createElement(G.a,{placeholder:"Email",component:"input",type:"text",name:"email"}),r.a.createElement(G.a,{name:"avatar",type:"file",component:function(e){var t=e.input,n=e.type;return r.a.createElement("input",{name:t.name,type:n,onChange:function(e){return l(e,t)}})}}),r.a.createElement("p",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){setTimeout((function(){s(!0)}),1e3)},type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))),r.a.createElement(A.b,{to:"/"},r.a.createElement("div",{className:M.a.link},"\u041d\u0430\u0437\u0430\u0434")))},$=Object(F.a)({form:"addUser"})(z),H=Object(s.b)(null,(function(e){return{addUser:function(){e(g())}}}))((function(e){return r.a.createElement($,{onSubmit:function(){e.addUser()}})}));var K=function(){var e=Object(s.c)();return Object(a.useEffect)((function(){e(m())}),[e]),r.a.createElement("div",null,r.a.createElement("div",{className:M.a.users_page},r.a.createElement(o.b,{exact:!0,path:"/",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(o.b,{path:"/user/:id",component:W}),r.a.createElement(o.b,{path:"/add-user",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(109),V=n(238),X=n(20),Y=n.n(X),Z=n(15),ee=n(107),te=n.n(ee).a.create({baseURL:"https://reqres.in/api/users"}),ne=function(e){return te.get("?page=".concat(e))},ae=function(e){return te.get("".concat(e))},re=function(e,t){te.put("".concat(e),t).then((function(e){return console.log(e)}))},ce=function(e){te.delete("".concat(e)).then((function(e){return console.log(e)}))},ue=function(e){te.post(null,e).then((function(e){return console.log(e)}))},oe=Y.a.mark(de),se=Y.a.mark(pe),le=Y.a.mark(fe),ie=Y.a.mark(be),me=Y.a.mark(Se),Ee=Y.a.mark(_e);function de(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.c)("USERS/LOAD_USERS",pe);case 2:return e.next=4,Object(Z.c)("USERS/LOAD_CURRENT_USER",fe);case 4:return e.next=6,Object(Z.c)("USERS/UPDATE_USER",be);case 6:return e.next=8,Object(Z.c)("USERS/DELETE_USER",Se);case 8:return e.next=10,Object(Z.c)("USERS/ADD_USER",_e);case 10:case"end":return e.stop()}}),oe)}function pe(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Z.b)(O);case 2:return e=n.sent,n.next=5,ne(e);case 5:return t=n.sent,n.next=8,Object(Z.a)(d(t.data.total_pages));case 8:return n.next=10,Object(Z.a)(E(t.data.data));case 10:case"end":return n.stop()}}),se)}function fe(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Z.b)(h);case 2:return e=n.sent,n.prev=3,n.next=6,ae(e);case 6:return t=n.sent,n.next=9,Object(Z.a)(b(t.data.data));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.log(n.t0);case 14:case"end":return n.stop()}}),le,null,[[3,11]])}function be(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Z.b)(h);case 2:return e=n.sent,n.next=5,Object(Z.b)(j);case 5:return t=n.sent,n.prev=6,n.next=9,re(e,t.values);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(6),console.log(n.t0);case 14:case"end":return n.stop()}}),ie,null,[[6,11]])}function Se(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.b)(h);case 2:return e=t.sent,t.prev=3,t.next=6,ce(e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:case"end":return t.stop()}}),me,null,[[3,8]])}function _e(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.b)(x);case 2:return e=t.sent,t.prev=3,t.next=6,ue(e.values);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:case"end":return t.stop()}}),Ee,null,[[3,8]])}var Ue=Object(L.c)({reducer:R,form:V.a}),ve=Object(Q.a)(),ge=Object(L.e)(Ue,Object(L.a)(ve));ve.run(de);var Re=ge;u.a.render(r.a.createElement(A.a,null,r.a.createElement(s.a,{store:Re},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.f0f6e4df.chunk.js.map