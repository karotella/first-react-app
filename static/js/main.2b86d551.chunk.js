(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),f=n(5),d=(n(16),n(18),["Michal","Kasia","Jacek","Marta","Tomek","Ania"]),h=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={filteredUsers:d},e}return Object(f.a)(t,e),Object(s.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,n=this.getFilteredUsersForText(t);this.setState({filteredUsers:n})}},{key:"getFilteredUsersForText",value:function(e){return d.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{onInput:this.filterUsers.bind(this)}),a.a.createElement(m,{users:this.state.filteredUsers}))}}]),t}(a.a.Component),m=function(e){var t=e.users;return t.length>0?a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e},e)})):a.a.createElement("p",null,"No results!")},v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h,null))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(21)}},[[8,2,1]]]);
//# sourceMappingURL=main.2b86d551.chunk.js.map