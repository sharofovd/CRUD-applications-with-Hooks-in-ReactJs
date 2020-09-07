(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),u=(n(14),n(15),n(8)),m=n(1),o=n(2),s=n(5),i=function(e){var t=Object(a.useState)({id:null,name:"",username:""}),n=Object(m.a)(t,2),l=n[0],c=n[1],u=function(e){var t=e.currentTarget,n=t.name,a=t.value;c(Object(s.a)({},l,Object(o.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.name&&l.username&&e.addUser(l)}},r.a.createElement("label",null,"Name:"),"\xa0\xa0",r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:u}),"\xa0\xa0",r.a.createElement("label",null,"Username:"),"\xa0\xa0",r.a.createElement("input",{type:"text",name:"username",value:l.username,onChange:u}),"\xa0\xa0",r.a.createElement("button",{class:"btn btn-primary"},"Add new user"))},d=function(e){var t=Object(a.useState)(e.currentUser),n=Object(m.a)(t,2),l=n[0],c=n[1];Object(a.useEffect)((function(){c(e.currentUser)}),[e]);var u=function(e){var t=e.target,n=t.name,a=t.value;c(Object(s.a)({},l,Object(o.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.name&&l.username&&e.updateUser(l.id,l)}},r.a.createElement("label",null,"Name:"),"\xa0\xa0",r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:u}),"\xa0\xa0",r.a.createElement("label",null,"Username:"),"\xa0\xa0",r.a.createElement("input",{type:"text",name:"username",value:l.username,onChange:u}),"\xa0\xa0",r.a.createElement("button",{className:"btn btn-primary"},"Update user"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"btn btn-secondary"},"Cancel"))},E=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("th",null,"Username:"),r.a.createElement("th",null,"Actions:"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.username),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.editRow(t)},className:"btn btn-success"},"Edit"),"\xa0\xa0",r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return n=t.id,void(window.confirm("Are you sure to delete this record?")&&e.deleteUser(n));var n}},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No users"))))};n(16);var b=function(){var e=Object(a.useState)([{id:1,name:"Dadaxon Sharofov",username:"shdo123"},{id:2,name:"Dilyor",username:"dilyor1991"}]),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(m.a)(c,2),s=o[0],b=o[1],f=Object(a.useState)({id:null,name:"",username:""}),v=Object(m.a)(f,2),h=v[0],p=v[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CRUD App with Hooks"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},s?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit user"),r.a.createElement(d,{editing:s,setEditing:b,currentUser:h,updateUser:function(e,t){b(!1),l(n.map((function(n){return n.id===e?t:n})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Add user"),r.a.createElement(i,{addUser:function(e){e.id=n.length+1,l([].concat(Object(u.a)(n),[e]))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View users"),r.a.createElement(E,{users:n,editRow:function(e){b(!0),p({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){b(!1),l(n.filter((function(t){return t.id!==e})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.fbf91287.chunk.js.map