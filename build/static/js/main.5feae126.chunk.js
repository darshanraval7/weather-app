(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(24),a(25),a(9)),i=a.n(o),u=a(1),m=a(11),s=a(6),p=(a(27),a(35)),h=a(32),f=a(33),d=a(36);a(14);var E=function(e){var t=e.data,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1],u="f9cea0d7c8732a96b81027b393719ca2";function E(){return(E=Object(m.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=localStorage.getItem("location"),e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(u)).then((function(e){return e.json()})).then((function(e){return e}));case 4:r=e.sent,t=r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return setInterval((function(){o((new Date).toLocaleTimeString())}),1e3),r.a.createElement("div",{className:"displayweather"},404!==t.cod?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{style:{width:"27rem"}},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,t.name," , ",t.sys.country,". Weather"),r.a.createElement(p.a.Text,null,"As of ",l),r.a.createElement("h1",null," ",Math.floor(t.main.temp-273.15),r.a.createElement("sup",null,"o")),r.a.createElement(p.a.Text,{style:{borderTop:"1px solid black",marginTop:"5px"}},t.weather[0].main,r.a.createElement(h.a,null,r.a.createElement(f.a,null,"High/Low: ",Math.floor(t.main.temp_max-273.15),"/",Math.floor(t.main.temp_min-273.15)),r.a.createElement(f.a,null,"Humidity: ",t.main.humidity," %"),r.a.createElement(f.a,null,"Pressure: ",t.main.pressure," hPa"),r.a.createElement(f.a,null,"Visibility: ",t.visibility/1e3," Km"))),r.a.createElement(d.a,{variant:"primary",onClick:function(e){return function(e){return E.apply(this,arguments)}(e)}},"Refresh")))):r.a.createElement("div",{className:"maincard"},r.a.createElement("h2",null,t.message)))},v=a(34);var b=function(){var e="f9cea0d7c8732a96b81027b393719ca2",t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),p=Object(s.a)(o,2),h=p[0],f=p[1],b=Object(n.useState)({city:""}),y=Object(s.a)(b,2),w=y[0],g=y[1];function x(){return(x=Object(m.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==w.city){t.next=5;break}alert("Add Location"),t.next=10;break;case 5:return localStorage.setItem("location",w.city),t.next=8,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(w.city,"&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return e}));case 8:n=t.sent,l({data:n});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return setInterval((function(){f((new Date).toLocaleTimeString())}),1e3),r.a.createElement("span",{className:"weather"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(v.a.Label,null,"Search Location"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Search Location",name:"city",onChange:function(e){return function(e){var t=e.target.value;g(Object(u.a)(Object(u.a)({},w),{},{city:t}))}(e)}}),r.a.createElement(v.a.Text,{className:"text-muted"},"Search Any Location & You'll Get Weather Information"),r.a.createElement("div",null,r.a.createElement(v.a.Text,{className:"text-muted"},"Current Time: ",h))),r.a.createElement(d.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){return x.apply(this,arguments)}(e)}},"Submit")),void 0!==c.data?r.a.createElement("div",null,r.a.createElement(E,{data:c.data})):null)};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5feae126.chunk.js.map