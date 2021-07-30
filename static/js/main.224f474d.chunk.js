(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(17),a=n.n(o),s=(n(23),n(10)),r=n(11),d=n(7),j=(n(24),n(2)),l=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),i=n[0],o=n[1],a=Object(c.useState)(!0),s=Object(d.a)(a,2),r=s[0],j=s[1],l=Object(c.useState)(null),h=Object(d.a)(l,2),u=h[0],b=h[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){j(!1),o(e),b(null)})).catch((function(e){j(!1),b(e.message)}))}),1e3)}),[e]),{data:i,isPending:r,error:u}},h=n(8),u=n(1),b=function(e){var t=e.notes,n=e.title,c=e.handleDelete;return Object(u.jsxs)("div",{className:"blog-list",style:{textDecoration:"none"},children:[Object(u.jsx)("h2",{children:n}),t.map((function(e){return Object(u.jsxs)("div",{className:"blog-preview",children:[Object(u.jsxs)(h.b,{to:"/notes/".concat(e.id),children:[Object(u.jsx)("h2",{children:e.heading}),Object(u.jsx)("p",{children:e.description})]}),Object(u.jsx)("button",{onClick:function(){return c(e.id)},children:" Delete note"})]},e.id)}))]})},O=function(){var e=Object(j.g)().id,t=Object(c.useState)(null),n=Object(d.a)(t,2),i=n[0],o=n[1],a=l("http://localhost:3000/Notes/"+e),s=(a.data,a.error,a.isPending,Object(j.f)()),r=function(){fetch(" http://localhost:3000/notes").then((function(e){return e.json()})).then((function(e){o(e)}))};return Object(c.useEffect)((function(){r()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Home Page"}),i&&Object(u.jsx)(b,{notes:i,title:"All Notes!",handleDelete:function(e){fetch("http://localhost:3000/notes/"+e,{method:"DELETE"}).then((function(){s.push("/"),r()}))}})]})},f=function(){return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("h1",{children:"The Note App"}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)(h.b,{to:"/",children:"Home"}),Object(u.jsx)(h.b,{to:"/Create",children:"New Note"})]})]})},x=function(e){var t=e.handleSubmit,n=e.onChange,c=e.textState;return Object(u.jsxs)("div",{className:"create",children:[Object(u.jsx)("h2",{children:"Add a new Note"}),Object(u.jsx)("label",{children:"Note Heading:"}),Object(u.jsx)("input",{name:"heading",type:"text",required:!0,value:null===c||void 0===c?void 0:c.heading,onChange:function(e){return n(e)}}),Object(u.jsx)("label",{children:"Note Description:"}),Object(u.jsx)("textarea",{name:"description",value:null===c||void 0===c?void 0:c.description,onChange:function(e){return n(e)}}),Object(u.jsx)("button",{onClick:function(){return t()},children:"Add note"})]})},p=(n(34),function(){var e=Object(c.useState)({heading:"",description:""}),t=Object(d.a)(e,2),n=t[0],i=t[1],o=function(e){var t=e.target,c=t.name,o=t.value;i(Object(r.a)(Object(r.a)({},n),{},Object(s.a)({},c,o)))},a=Object(j.g)().id,h=l("http://localhost:3000/notes/"+a),b=h.data,O=h.isPending,f=h.error;return Object(c.useEffect)((function(){b&&i({heading:b.heading,description:b.description})}),[b]),Object(u.jsxs)("div",{className:"create",children:[O&&Object(u.jsx)("div",{children:"Loading..."}),f&&Object(u.jsx)("div",{children:f}),b&&Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Note Heading:"}),Object(u.jsx)("input",{name:"heading",type:"text",required:!0,value:null===n||void 0===n?void 0:n.heading,onChange:function(e){return o(e)}}),Object(u.jsx)("label",{children:"Note Description:"}),Object(u.jsx)("textarea",{name:"description",value:null===n||void 0===n?void 0:n.description,onChange:function(e){return o(e)}}),Object(u.jsx)("button",{onClick:function(e){var t=n;fetch("http://localhost:3000/notes/".concat(a),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){alert("Updated successfully"),console.log(e)}))}))},children:"Edit"})]})]})});var g=function(){Object(j.f)();var e=Object(c.useState)({heading:"",description:""}),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(O,{})}),Object(u.jsx)(j.a,{exact:!0,path:"/Create",children:Object(u.jsx)(x,{textState:n,handleSubmit:function(e){fetch("http://localhost:3000/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){alert("added"),console.log("New Blog added")})),i({heading:"",description:""})},onChange:function(e){var t=e.target,c=t.name,o=t.value;i(Object(r.a)(Object(r.a)({},n),{},Object(s.a)({},c,o)))}})}),Object(u.jsx)(j.a,{exact:!0,path:"/notes/:id",children:Object(u.jsx)(p,{})})]})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.224f474d.chunk.js.map