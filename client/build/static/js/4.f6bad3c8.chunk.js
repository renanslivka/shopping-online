(this["webpackJsonpshopping-online"]=this["webpackJsonpshopping-online"]||[]).push([[4],{106:function(n,e,t){},133:function(n,e,t){"use strict";t.r(e);var a=t(48),r=t(12),o=t(3),i=t.n(o),u=t(38),c=t(94),l=t(0),s=t.n(l),p=t(95),m=t(45),d=(t(106),t(4)),f=t(5);function b(){var n=Object(d.a)(["\n  margin: 10px 0;\n"]);return b=function(){return n},n}function h(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  justify-content: center;\n  margin: 180px auto;\n  @media screen and (max-width: 800px) {\n    margin: 110px auto;\n    width: 80%;\n  }\n"]);return h=function(){return n},n}var v=f.c.div(h()),y=f.c.h2(b()),g=t(19),w=t(14);e.default=Object(g.b)(null,(function(n){return{signUpStart:function(e){return n(Object(w.j)(e))}}}))((function(n){var e=n.signUpStart,t=Object(l.useState)({displayName:"",email:"",password:"",confirmPassword:""}),o=Object(c.a)(t,2),d=o[0],f=o[1],b=d.displayName,h=d.email,g=d.password,w=d.confirmPassword,x=function(){var n=Object(u.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),g===w){n.next=4;break}return alert("passwords don't match"),n.abrupt("return");case 4:if(!(g.length<=5)){n.next=7;break}return alert("passwords must be at list 6 character"),n.abrupt("return");case 7:e({displayName:b,email:h,password:g});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(n){var e=n.target,t=e.name,o=e.value;f(Object(r.a)({},d,Object(a.a)({},t,o)))};return s.a.createElement(v,null,s.a.createElement(y,null,"I do not have a account"),s.a.createElement("span",null,"Sign up with your email and password"),s.a.createElement("form",{className:"sign-up-form",onSubmit:x},s.a.createElement(p.a,{type:"text",name:"displayName",value:b,onChange:j,label:"Display Name",required:!0}),s.a.createElement(p.a,{type:"email",name:"email",value:h,onChange:j,label:"Email",required:!0}),s.a.createElement(p.a,{type:"password",name:"password",value:g,onChange:j,label:"Password",required:!0}),s.a.createElement(p.a,{type:"password",name:"confirmPassword",value:w,onChange:j,label:"Confirm Password",required:!0}),s.a.createElement(m.a,{type:"submit"},"SIGN UP")))}))},94:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(49);function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(a=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==u.return||u.return()}finally{if(r)throw o}}return t}}(n,e)||Object(a.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},95:function(n,e,t){"use strict";var a=t(44),r=t(0),o=t.n(r),i=t(4),u=t(5);function c(){var n=Object(i.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(i.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(['\n  position: relative;\n  margin: 45px 0;\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n']);return s=function(){return n},n}function p(){var n=Object(i.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return p=function(){return n},n}var m=Object(u.b)(p(),"black"),d=u.c.div(s()),f=u.c.input(l(),"grey","grey",m),b=u.c.label(c(),"grey",m);e.a=function(n){var e=n.handleChange,t=n.label,r=Object(a.a)(n,["handleChange","label"]);return o.a.createElement(d,null,o.a.createElement(f,Object.assign({onChange:e},r)),t?o.a.createElement(b,{className:r.value.length?"shrink":""},t):null)}}}]);
//# sourceMappingURL=4.f6bad3c8.chunk.js.map