(this["webpackJsonphf-frontend"]=this["webpackJsonphf-frontend"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(11),a=n.n(c),i=n(75),u=n(73),o=n(14),s=n(5),j=n.n(s),p=n(8),d=n(9),l=n(144),f=n(147),h=n(149),b=n(150),O=n(151),x=n(152),v=n(155),m=n(156),w=n(66),y=n.n(w),g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL||"http://localhost:3001",k=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,C=function(){var e=Object(p.a)(j.a.mark((function e(t,n){var r,c,a,i,u,o,s,p=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>2&&void 0!==p[2]?p[2]:{},c=p.length>3?p[3]:void 0,a=p.length>4?p[4]:void 0,i={"Content-Type":"application/json"},c&&(i.authorization="Bearer ".concat(localStorage.getItem("hf-frontend@token"))),e.prev=5,e.next=8,y()({method:t,url:"".concat(g).concat(n),data:r,headers:i});case 8:(u=e.sent)&&a(u.data),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(5),window.alert((null===(o=e.t0.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message)||"Something wrong"),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("GET","/v1/recipe",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("GET","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/v1/recipe",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("PUT","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("DELETE","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/v1/recipe/review/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),A=n(2),D=Object(l.a)({root:{marginBottom:30},title:{fontSize:14},pos:{marginBottom:12}}),q=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),u=Object(d.a)(i,2),o=u[0],s=u[1],l=Object(r.useState)(1),w=Object(d.a)(l,2),y=w[0],g=w[1],k=Object(r.useState)(""),C=Object(d.a)(k,2),_=C[0],T=C[1],E=Object(r.useState)(!1),q=Object(d.a)(E,2),L=q[0],U=q[1],B=Object(r.useState)(5),I=Object(d.a)(B,2),N=I[0],z=I[1],M=D();Object(r.useEffect)((function(){F()}),[L]);var F=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({},(function(e){a(e.recipes),s(e.recipes.slice(10*(y-1),10*y))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({},t,(function(e){var n=c.filter((function(e){return e._id!=t}));a(n),F()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({message:_,rating:N},t,(function(e){U(!1),T("")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return e.history.push("/recipe/create/new")},children:"Create Recipe"}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return e.history.push("/menu")},children:"Menu"}),Object(A.jsx)(h.a,{children:"Recipes List"}),o&&Object(A.jsx)(v.a,{count:c.length%10===0?c.length/10:Math.floor(c.length/10)+1,page:y,onChange:function(e,t){return function(e){g(e);var t=c.slice(10*(e-1),10*e);s(t)}(t)}}),o&&o.map((function(t){var n;return Object(A.jsx)(b.a,{className:M.root,children:Object(A.jsxs)(O.a,{children:[Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Name "}),t.name]}),Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Description "}),t.description]}),Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Prep Time "}),t.prep_time_minutes||"unknown"]}),Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Cook Time "}),t.cook_time_minutes||"unknown"]}),L==t._id&&Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{type:"text",name:"message",value:_,required:!0,onChange:function(e){return T(e.target.value)}}),Object(A.jsx)(m.a,{name:"simple-controlled",value:N,onChange:function(e,t){z(t)}}),Object(A.jsx)("br",{}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return H(t._id)},children:Object(A.jsx)(h.a,{children:"Save Review"})}),Object(A.jsx)("br",{})]}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return e.history.push("/recipe/edit/".concat(t._id))},children:Object(A.jsx)(h.a,{children:"Update"})}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return G(t._id)},children:Object(A.jsx)(h.a,{children:"Delete"})}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return U(t._id)},children:Object(A.jsx)(h.a,{children:"Review"})}),Object(A.jsx)(h.a,{children:Object(A.jsx)("b",{children:"Reviews"})}),null===(n=t.reviews)||void 0===n?void 0:n.map((function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:e.message}),Object(A.jsx)(m.a,{name:"read-only",value:e.rating,readOnly:!0}),Object(A.jsx)(h.a,{children:e.user.email})]})}))]})})}))]})},L=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/auth/signup",t,!1,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/auth/login",t,!1,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),u=Object(d.a)(i,2),o=u[0],s=u[1],l=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k.test(c)){e.next=4;break}return window.alert("Invalid email!"),e.abrupt("return");case 4:U({email:c,password:o},(function(e){localStorage.setItem("hf-frontend@token",e.token),window.location.href="/recipe"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:"Email"}),Object(A.jsx)(x.a,{type:"text",name:"email",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(A.jsx)(h.a,{children:"Password"}),Object(A.jsx)(x.a,{type:"password",name:"password",value:o,required:!0,onChange:function(e){return s(e.target.value)}}),Object(A.jsx)("br",{}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:l,children:"Submit"}),Object(A.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){return e.history.push("/register")},children:"Register"})]})},I=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),u=Object(d.a)(i,2),o=u[0],s=u[1],j=Object(r.useState)(""),p=Object(d.a)(j,2),l=p[0],b=p[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:"Email"}),Object(A.jsx)(x.a,{type:"text",name:"email",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(A.jsx)(h.a,{children:"Password"}),Object(A.jsx)(x.a,{type:"password",name:"password",value:o,required:!0,onChange:function(e){return s(e.target.value)}}),Object(A.jsx)(h.a,{children:"Confirm Password"}),Object(A.jsx)(x.a,{type:"password",name:"new_password",value:l,required:!0,onChange:function(e){return b(e.target.value)}}),Object(A.jsx)("br",{}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),k.test(c)?o.length<8?window.alert("Password must be more than 8 characters!"):o==l?L({email:c,password:o},(function(e){localStorage.setItem("hf-frontend@token",e.token),window.location.href="/recipe"})):window.alert("Password doesn't match!"):window.alert("Invalid email!")},children:"Submit"}),Object(A.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){return e.history.push("/login")},children:"Login"})]})},N=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),u=Object(d.a)(i,2),o=u[0],s=u[1],l=Object(r.useState)(""),b=Object(d.a)(l,2),O=b[0],v=b[1],m=Object(r.useState)(""),w=Object(d.a)(m,2),y=w[0],g=w[1],k=e.match.params,C=k.id,S=k.type;Object(r.useEffect)((function(){C&&"edit"==S&&P(C)}),[]);var P=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({},t,(function(e){a(e.recipe.name),s(e.recipe.description),v(e.recipe.prep_time_minutes),g(e.recipe.cook_time_minutes)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var t=Object(p.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:c,description:o,prep_time_minutes:O,cook_time_minutes:y},t.next=3,T(n,(function(){e.history.push("/recipe")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(p.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:c,description:o,prep_time_minutes:O,cook_time_minutes:y},t.next=3,E(n,C,(function(){e.history.push("/recipe")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:"Name"}),Object(A.jsx)(x.a,{type:"text",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(A.jsx)(h.a,{children:"Description"}),Object(A.jsx)(x.a,{type:"text",value:o,required:!0,onChange:function(e){return s(e.target.value)}}),Object(A.jsx)(h.a,{children:"Prep Time"}),Object(A.jsx)(x.a,{type:"text",value:O,onChange:function(e){return v(e.target.value)}}),Object(A.jsx)(h.a,{children:"Cook Time"}),Object(A.jsx)(x.a,{type:"text",value:y,onChange:function(e){return g(e.target.value)}}),Object(A.jsx)("br",{}),"edit"==S?Object(A.jsx)(f.a,{onClick:D,variant:"contained",color:"secondary",children:Object(A.jsx)(h.a,{children:"Update"})}):"create"==S?Object(A.jsx)(f.a,{onClick:R,variant:"contained",color:"secondary",children:Object(A.jsx)(h.a,{children:"Create"})}):Object(A.jsx)(A.Fragment,{})]})},z=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("GET","/v1/menu",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("GET","/v1/menu/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/v1/menu",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("PUT","/v1/menu/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("DELETE","/v1/menu/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(p.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("POST","/v1/menu/review/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=Object(l.a)({root:{marginBottom:30},title:{fontSize:14},pos:{marginBottom:12}}),J=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),u=Object(d.a)(i,2),o=u[0],s=u[1],l=Object(r.useState)(1),w=Object(d.a)(l,2),y=w[0],g=w[1],k=Object(r.useState)(""),C=Object(d.a)(k,2),S=C[0],_=C[1],T=Object(r.useState)(!1),E=Object(d.a)(T,2),P=E[0],R=E[1],D=Object(r.useState)(5),q=Object(d.a)(D,2),L=q[0],U=q[1],B=W();Object(r.useEffect)((function(){I()}),[P]);var I=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z({},(function(e){a(e.menus),s(e.menus.slice(10*(y-1),10*y))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H({},t,(function(e){var n=c.filter((function(e){return e._id!=t}));a(n),I()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({message:S,rating:L},t,(function(e){R(!1),_("")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return e.history.push("/menu/create/new")},children:"Create Menu"}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return e.history.push("/recipe")},children:"Recipe"}),Object(A.jsx)(h.a,{children:"Menus List"}),o&&Object(A.jsx)(v.a,{count:c.length%10===0?c.length/10:Math.floor(c.length/10)+1,page:y,onChange:function(e,t){return function(e){g(e);var t=c.slice(10*(e-1),10*e);s(t)}(t)}}),o&&o.map((function(t){var n,r;return Object(A.jsx)(b.a,{className:B.root,children:Object(A.jsxs)(O.a,{children:[Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Name "}),t.name]}),Object(A.jsxs)(h.a,{children:[Object(A.jsx)("b",{children:"Description "}),t.description||"unknown"]}),Object(A.jsx)(h.a,{children:Object(A.jsx)("b",{children:"Recipes"})}),null===(n=t.recipes)||void 0===n?void 0:n.map((function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(h.a,{children:e.name})})})),P==t._id&&Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{type:"text",name:"message",value:S,required:!0,onChange:function(e){return _(e.target.value)}}),Object(A.jsx)(m.a,{name:"simple-controlled",value:L,onChange:function(e,t){U(t)}}),Object(A.jsx)("br",{}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return M(t._id)},children:Object(A.jsx)(h.a,{children:"Save Review"})}),Object(A.jsx)("br",{})]}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return e.history.push("/menu/edit/".concat(t._id))},children:Object(A.jsx)(h.a,{children:"Update"})}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return N(t._id)},children:Object(A.jsx)(h.a,{children:"Delete"})}),Object(A.jsx)(f.a,{variant:"contained",onClick:function(){return R(t._id)},children:Object(A.jsx)(h.a,{children:"Review"})}),Object(A.jsx)(h.a,{children:Object(A.jsx)("b",{children:"Reviews"})}),null===(r=t.reviews)||void 0===r?void 0:r.map((function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:e.message}),Object(A.jsx)(m.a,{name:"read-only",value:e.rating,readOnly:!0})]})}))]})})}))]})},Z=n(153),V=n(157),$=n(154),Q=n(158);var X=[{exact:!0,path:"/",component:q,needAuth:!0},{exact:!0,path:"/register",component:I,needAuth:!1},{exact:!0,path:"/recipe",component:q,needAuth:!0},{exact:!0,path:"/recipe/:type/:id",component:N,needAuth:!0},{exact:!0,path:"/menu",component:J,needAuth:!0},{exact:!0,path:"/menu/:type/:id",component:function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),u=Object(d.a)(i,2),o=u[0],s=u[1],l=Object(r.useState)([]),v=Object(d.a)(l,2),m=v[0],w=v[1],y=Object(r.useState)([]),g=Object(d.a)(y,2),k=g[0],C=g[1],_=Object(r.useState)(""),T=Object(d.a)(_,2),E=T[0],P=T[1],R=e.match.params,D=R.id,q=R.type;Object(r.useEffect)((function(){D&&"edit"==q?L(D):U()}),[]);var L=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({},t,(function(e){w(e.menu.recipes),a(e.menu.name),s(e.menu.description),U(e.menu.recipes)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,S({},(function(e){var n=t.map((function(e){return e._id})),r=e.recipes.filter((function(e){return!n.includes(e._id)}));C(r)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var t=Object(p.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:c,description:o,recipes:m},t.next=3,F(n,(function(){e.history.push("/menu")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(p.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:c,description:o,recipes:m},t.next=3,G(n,D,(function(){e.history.push("/menu")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{children:"Name"}),Object(A.jsx)(x.a,{type:"text",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(A.jsx)(h.a,{children:"Description"}),Object(A.jsx)(x.a,{type:"text",value:o,required:!0,onChange:function(e){return s(e.target.value)}}),m&&Object(A.jsx)(h.a,{children:"List of recipes"}),Object(A.jsxs)(Z.a,{style:{width:200},children:[Object(A.jsx)(V.a,{children:"Recipe"}),Object(A.jsx)($.a,{value:E,onChange:function(e){return P(e.target.value)},children:k.map((function(e){return Object(A.jsx)(Q.a,{value:e,children:e.name})}))})]}),E&&Object(A.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){var e=m;e.push(E),w(e),P("")},children:"Add Recipe"}),null===m||void 0===m?void 0:m.map((function(e){return Object(A.jsx)(b.a,{children:Object(A.jsxs)(O.a,{children:[Object(A.jsx)(h.a,{children:e.name}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return function(e){var t=m.filter((function(t){return t._id!==e}));w(t)}(e._id)},children:Object(A.jsx)(h.a,{children:"Remove"})})]})})})),Object(A.jsx)("br",{}),"edit"==q?Object(A.jsx)(f.a,{onClick:I,variant:"contained",color:"secondary",children:Object(A.jsx)(h.a,{children:"Update"})}):"create"==q?Object(A.jsx)(f.a,{onClick:B,variant:"contained",color:"secondary",children:Object(A.jsx)(h.a,{children:"Create"})}):Object(A.jsx)(A.Fragment,{})]})},needAuth:!0}],Y=function(){var e=localStorage.getItem("hf-frontend@token");return Object(A.jsx)(u.a,{children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.b,{exact:!0,path:"/login",component:B}),X.map((function(t,n){var r=t.component;return Object(A.jsx)(o.b,{path:t.path,exact:t.exact,render:function(n){return e||!t.needAuth?Object(A.jsx)(r,Object(i.a)({},n)):Object(A.jsx)(o.a,{to:"/login"})}},"router".concat(n))}))]})})};a.a.render(Object(A.jsx)(Y,{}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.30d8872d.chunk.js.map