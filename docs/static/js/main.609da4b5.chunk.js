(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(33),o=n.n(s),c=(n(45),n(2)),i=n.n(c),u=n(38),l=n(8),d=n(6),f=n(7),h=n(14),p=n(11),v=n(16),m=n(15),b=(n(47),n(48),n(137)),g=n(138),w=n(139),x={user:void 0,issues:[],selectedIssue:void 0},k=a.a.createContext(x),E=(k.Provider,k.Consumer,k),j=(n(49),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"MenuContainer"},a.a.createElement("header",null,a.a.createElement("div",{className:"Avatar",style:{backgroundImage:"url('".concat(this.context.user&&this.context.user.avatar_url||"https://picsum.photos/120/120","')")}}),a.a.createElement("h4",null,this.context.user&&this.context.user.name||"Loading..."),a.a.createElement("h5",null,this.context.user&&this.context.user.bio||"Loading...")))}}]),t}(a.a.Component));j.contextType=E;n(50);var y=n(34),O=n.n(y),I=n(35),S=n.n(I),C=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{minHeight:"100vh",overflowY:"auto",padding:"5px"}},a.a.createElement("div",{style:{borderBottom:"1px solid black",padding:"10px",marginBottom:"10px"}},a.a.createElement("h1",null,this.context.selectedIssue&&this.context.selectedIssue.title),a.a.createElement("small",null,this.context.selectedIssue&&this.context.selectedIssue.created_at&&S()(this.context.selectedIssue.created_at).format("LL"))),a.a.createElement("div",{style:{padding:"10px"}},a.a.createElement(O.a,{source:this.context.selectedIssue&&this.context.selectedIssue.body})))}}]),t}(a.a.Component);C.contextType=E;var B="https://api.github.com",W=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"getUser",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(B,"/users/rzorzal"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Erro ao recuperar informa\xe7\xf5es sobre o autor do Blog");case 5:return e.next=7,t.json();case 7:if(!(n=e.sent).message){e.next=10;break}throw new Error(n.message);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getIssues",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(B,"/repos/rzorzal/blog/issues?per_page=10&page=1&labels=posted"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Erro ao recuperar informa\xe7\xf5es sobre as issues do Blog");case 5:return e.next=7,t.json();case 7:if(!(n=e.sent).message){e.next=10;break}throw new Error(n.message);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSingleIssue",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(B,"/repos/rzorzal/blog/issues/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Erro ao recuperar informa\xe7\xf5es sobre uma issue do Blog");case 5:return e.next=7,n.json();case 7:if(!(r=e.sent).message){e.next=10;break}throw new Error(r.message);case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),z=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={user:void 0,issues:[],selectedIssue:void 0},n.selectIssue=n.selectIssue.bind(Object(v.a)(n)),n.onSelectedIssue=n.onSelectedIssue.bind(Object(v.a)(n)),n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([W.getUser(),W.getIssues()]).then(function(){var t=Object(l.a)(i.a.mark((function t(n){var r,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Object(u.a)(n,2),a=r[0],s=r[1],e.setState({user:a,issues:s,selectedIssue:s[0]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"selectIssue",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getSingleIssue(t);case 2:n=e.sent,this.setState({selectedIssue:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSelectedIssue",value:function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.selectedIssue(t.number);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(E.Provider,{value:this.state},a.a.createElement(b.a,{fluid:!0,className:"Root"},a.a.createElement(g.a,null,a.a.createElement(w.a,{className:"RemovePadding",xs:"12",md:"3",lg:"3"},a.a.createElement(j,{onSelectedIssue:this.onSelectedIssue})),a.a.createElement(w.a,{xs:"12",md:"9",lg:"9"},a.a.createElement(C,null))))))}}]),t}(a.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/blog","/service-worker.js");A?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()},40:function(e,t,n){e.exports=n(136)},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.609da4b5.chunk.js.map