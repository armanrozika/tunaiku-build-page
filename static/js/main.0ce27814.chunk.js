(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=(n(23),n(5)),s=n(6),o=n(8),u=n(7),m=n(9),f=n(33),p=n(32),h=n(10),d=n.n(h),v=n(11),E=n(31),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={films:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(v.a)(d.a.mark(function t(){var n,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.co/api/films?format=json");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({films:a});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state.films.results?this.state.films.results.map(function(e){var t=e.url.slice(27);return r.a.createElement(E.a,{className:"index__link",to:"/film/"+t,key:e.episode_id},e.title,r.a.createElement("p",null,"click for more"))}):r.a.createElement("p",null,"loading...");return r.a.createElement("div",{className:"index"},e)}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={filmInfo:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(v.a)(d.a.mark(function t(){var n,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.co/api/films/"+e.props.match.params.id+"?format=json");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({filmInfo:a});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state.filmInfo?r.a.createElement("div",{className:"film__content"},r.a.createElement("p",null,"Title: ",r.a.createElement("span",null,this.state.filmInfo.title)),r.a.createElement("p",null,"Release Date: ",r.a.createElement("span",null,this.state.filmInfo.release_date)),r.a.createElement("p",null,"Director: ",r.a.createElement("span",null,this.state.filmInfo.director)),r.a.createElement("p",null,"Producer: ",r.a.createElement("span",null,this.state.filmInfo.producer)),r.a.createElement("p",null,"Synopsis: ",r.a.createElement("span",null,this.state.filmInfo.opening_crawl))):r.a.createElement("p",null,"loading...");return r.a.createElement("div",{className:"film"},e)}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Star Wars Movies")),r.a.createElement(p.a,{exact:!0,path:"/",component:j}),r.a.createElement(p.a,{path:"/film/:id",component:w})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.0ce27814.chunk.js.map