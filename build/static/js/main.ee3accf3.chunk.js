(this.webpackJsonpreacttodoapp=this.webpackJsonpreacttodoapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(5),o=a.n(i),r=(a(14),a(4)),c=a(6),d=a(7),l=a(1),u=a(9),g=a(8),j=a.p+"static/media/logo.6ce24c58.svg",k=(a(15),a(0));function m(e){return Object(k.jsx)("input",{id:"addTask",onKeyPress:e.addTask,placeholder:"+ Aggiungi un'attivit\xe0"})}function b(e){return Object(k.jsx)("span",{onClick:e.toggle,className:e.valDone?"done":"markdone"})}function f(e){return Object(k.jsxs)("span",{className:"bullMenu",onClick:function(e){e.preventDefault();var t=e.target.childNodes[0];void 0!==t&&(t.nodeValue||t.classList.toggle("d-block"))},children:[Object(k.jsxs)("div",{className:"subMenu",children:[Object(k.jsx)("p",{onClick:function(e){var t=e.target.parentNode.parentNode.childNodes[1],a=e.target.parentNode;t.classList.toggle("d-block"),a.classList.toggle("d-block")},children:"Modifica"}),Object(k.jsxs)("p",{onClick:e.delete,children:[Object(k.jsx)("span",{className:"delete"})," Elimina"]})]}),Object(k.jsx)(h,{modify:e.modify,val:e.val})]})}function h(e){return Object(k.jsx)("input",{className:"modTask",onKeyPress:e.modify,placeholder:"\u270e "+e.val})}var v=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state=JSON.parse(window.localStorage.getItem("stateTasks"))||{tasks:[]},n.addTask=n.addTask.bind(Object(l.a)(n)),n.toggleDone=n.toggleDone.bind(Object(l.a)(n)),n.modifyTask=n.modifyTask.bind(Object(l.a)(n)),n.deleteTask=n.deleteTask.bind(Object(l.a)(n)),n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){window.localStorage.setItem("stateTasks",JSON.stringify(this.state))}},{key:"sortTasks",value:function(e){return e.sort((function(e,t){return e.done-t.done}))}},{key:"addTask",value:function(e){var t=this;if("Enter"===e.key&&e.target.value.trim().length<3&&alert("Inserisci minimo 3 caratteri."),"Enter"===e.key&&e.target.value.trim().length>=3){var a={name:e.target.value.trim(),id:Date.now(),done:!1};this.setState((function(e){return{tasks:t.sortTasks([a].concat(e.tasks))}})),e.target.value=""}}},{key:"toggleDone",value:function(e){var t=parseInt(e.target.parentNode.id),a=Object(r.a)(this.state.tasks).map((function(e){return e.id===t?Object.assign(e,{done:!e.done}):e})),n=a.filter((function(e){return e.id===t}))[0].done,s=document.querySelector("img.logo");n&&(s.style.animation="none",s.offsetWidth,s.style.animation="logo-spin 1600ms ease-out 1"),this.sortTasks(a),this.setState({tasks:a})}},{key:"modifyTask",value:function(e){var t=parseInt(e.target.parentNode.parentNode.id);if("Enter"===e.key&&e.target.value.trim().length<3&&alert("Devi inserire minimo 3 caratteri."),"Enter"===e.key&&e.target.value.trim().length>=3){var a=Object(r.a)(this.state.tasks).map((function(a){return a.id===t?Object.assign(a,{name:e.target.value}):a}));this.setState({tasks:a}),e.target.classList.remove("d-block"),e.target.value=""}}},{key:"deleteTask",value:function(e){var t=parseInt(e.target.parentNode.parentNode.parentNode.id);this.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}}))}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("section",{children:[Object(k.jsx)("label",{htmlFor:"addTask",children:"Cose da fare oggi?"}),Object(k.jsx)(m,{addTask:this.addTask}),Object(k.jsx)("ul",{children:this.state.tasks.map((function(t){return Object(k.jsxs)("li",{id:t.id,className:t.done?"done":void 0,children:[Object(k.jsx)(b,{toggle:e.toggleDone,valDone:t.done}),Object(k.jsx)("span",{className:"nameTask",children:t.name}),Object(k.jsx)(f,{modify:e.modifyTask,val:t.name,delete:e.deleteTask})]},t.id)}))})]})}}]),a}(s.a.Component);var p=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)("header",{className:"header",children:[Object(k.jsx)("img",{src:j,className:"logo",alt:"React logo"}),Object(k.jsx)("h1",{children:"React ToDoApp!"}),Object(k.jsx)(v,{}),Object(k.jsxs)("small",{className:"copy",children:["\xa9 developed by ",Object(k.jsx)("a",{href:"/",children:"denie/den"})," 2021"]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(k.jsx)(p,{}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.ee3accf3.chunk.js.map