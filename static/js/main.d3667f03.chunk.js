(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},50:function(e,t,a){e.exports=a(93)},63:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),c=a(5),s=a(6),u=a(8),l=a(7),m=a(9),v=a(98),d=a(99),p=a(97),g=a(12),h=a(13),f=a(44),E=a(21),b=a(45),O=a(14),j=a.n(O),y=a(20),N="https://api.themoviedb.org/3/search/movie?query=",S="https://api.themoviedb.org/3/movie/popular",w="https://api.themoviedb.org/3/movie/",M="?api_key=f0ec5dea593ad4b500ce7d88c8dede74",_="&api_key=f0ec5dea593ad4b500ce7d88c8dede74",k="https://image.tmdb.org/t/p/",R="https://www.youtube.com/embed/",C="w45/",x=function(e){return void 0!==e?e.substring(0,10).split("-").reverse().join("/"):null},I=function(e){return void 0!==e?Object.keys(e).map(function(t){var a=e[t].name;return r.a.createElement("li",{key:t,index:t,className:"genre-item"},a)}):null},L=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),D="SEARCH_MOVIE",P="SEARCH_MOVIE_SUCCESS",q="SEARCH_MOVIE_FAILURE",A="GET_MOVIE",F="GET_MOVIE_SUCCESS",U="GET_MOVIE_FAILURE",V="GET_POPULAR_MOVIES",T="GET_POPULAR_MOVIES_SUCCESS",B="GET_MOVIE_FAILURE";function G(e){return{type:F,data:e}}function H(e){return{type:T,data:e}}function J(e){var t="".concat(w).concat(e).concat(M,"&language=pt-BR&append_to_response=videos");return function(){var e=Object(y.a)(j.a.mark(function e(a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:A}),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",a(G(r)));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",a((o=e.t0,{type:U,error:o})));case 14:case"end":return e.stop()}var o},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()}var W={isLoading:!1,movie:[],popularMovies:[],error:{}},$=Object(h.c)({searchMovieList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(E.a)({},e,{isLoading:!0});case P:return Object(E.a)({},e,{isLoading:!1,movie:t.data});case q:return Object(E.a)({},e,{isLoading:!1,error:t.data});default:return e}},movieData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object.assign({},e,{isLoading:!0,movie:[],error:null});case F:return Object.assign({},e,{isLoading:!1,movie:t.data,error:!1});case U:return Object.assign({},e,{isLoading:!1,movie:[],error:t.data});default:return e}},getPopularMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object.assign({},e,{isLoading:!0,popularMovies:[],error:null});case T:return Object.assign({},e,{isLoading:!1,popularMovies:t.data,error:!1});case B:return Object.assign({},e,{isLoading:!1,popularMovies:[],error:t.data});default:return e}},routing:b.routerReducer}),z=(a(63),a(65),function(e){var t=e.avarage,a=function(){var e=t/10*100;return Math.round(e)}();return r.a.createElement("div",{className:e.nameOfClass},"".concat(a,"%"))});z.defaultProps={avarage:"0"};var K=z,Q=(a(36),function(){return r.a.createElement("header",{className:"header-content"},r.a.createElement("a",{href:"/"},r.a.createElement("h1",{className:"header-title"},"Movies")))}),X=(a(68),a(46)),Y=a.n(X),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).translateMovieStatus=function(e){var t;switch(e){case"Released":t="Lan\xe7ado";break;case"Post Production":t="P\xf3s produ\xe7\xe3o";break;default:t="N\xe3o encontrado"}return t},a.translateMovieLanguage=function(e){var t;switch(e){case"pt":t="Portugu\xeas";break;case"es":t="Espanhol";break;case"hi":t="Hindi";break;case"en":t="Ingl\xeas";break;default:t="N\xe3o informado"}return t},a.convertAndFormatRuntime=function(e){if(null!==e){var t=e/60,a=Math.floor(t),n=60*(t-a),r=Math.round(n);return"".concat(a,"h ").concat(r,"min")}return"N\xe3o informado"},a.formatBudget=function(e){return e?L.format(e):"N\xe3o informado"},a.formatRevenue=function(e){return e?L.format(e):"N\xe3o informado"},a.formatProfit=function(e,t){return e?L.format(e-t):"N\xe3o informado"},a.formatMovieTrailerUrl=function(e){if(void 0===e)return null;if(e.results[0]){var t=e.results[0].key;return"".concat(R).concat(t)}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(J(this.props.match.params.movieId)),i.a.findDOMNode(this).scrollIntoView()}},{key:"render",value:function(){var e=this.props.movieData.movie,t=e.title,a=e.overview,o=e.poster_path,i=e.vote_average,c=e.runtime,s=e.budget,u=e.revenue,l=e.status,m=e.release_date,v=e.genres,d=e.original_language,p=e.videos,g=x(m),h=I(v),f=this.translateMovieStatus(l),E=this.translateMovieLanguage(d),b=this.convertAndFormatRuntime(c),O=this.formatBudget(s),j=this.formatRevenue(u),y=this.formatProfit(u,s),N=this.formatMovieTrailerUrl(p);return r.a.createElement(n.Fragment,null,r.a.createElement(Q,null),r.a.createElement("div",{className:"movie-details-container"},r.a.createElement("div",{className:"movie-title-container"},r.a.createElement("h1",{className:"movie-title-text"},t),r.a.createElement("p",{className:"formatted-release-date"},g)),r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"overview-container"},r.a.createElement("h3",{className:"overview-title"},"Sinopse"),r.a.createElement("p",{className:"movie-details-overview-text"},a),r.a.createElement("h3",{className:"overview-title"},"Informa\xe7\xf5es"),r.a.createElement("div",{className:"info-items-container"},r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Situa\xe7\xe3o"),r.a.createElement("span",null,f)),r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Idioma"),r.a.createElement("span",null,E)),r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Dura\xe7\xe3o"),r.a.createElement("span",null,b)),r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Or\xe7amento"),r.a.createElement("span",null,O)),r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Receita"),r.a.createElement("span",null,j)),r.a.createElement("div",{className:"info-item"},r.a.createElement("h6",null,"Lucro"),r.a.createElement("span",null,y))),r.a.createElement("div",{className:"movie-info-footer"},r.a.createElement("ul",{className:"movie-details-genres"},h),r.a.createElement(K,{avarage:i,nameOfClass:"big_circle"}))),r.a.createElement("img",{src:"".concat(k).concat("w342/").concat(o),alt:"Movie poster"})),r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(Y.a,{url:N}))))}}]),t}(n.Component);Z.defaultProps={title:"Movie Title",overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptate eligendi eum deserunt! Ullam aut excepturi neque ratione, eveniet rem fugiat quam sit numquam quae eum deserunt dolorum temporibus eius.",poster_path:"https://via.placeholder.com/340x510.png",vote_average:0,runtime:0,budget:0,revenue:0,status:"",release_date:"N\xe3o informado",genres:[],original_language:"",videos:""};var ee=Object(g.b)(function(e){return{movieData:e.movieData}})(Z),te=a(95),ae=a(96),ne=a(47),re=a.n(ne),oe=(a(86),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e,t){var n=t.newValue;t.method;a.setState({value:n})},a.getSuggestionValue=function(e){return e.title},a.onSuggestionsFetchRequested=function(e){var t=e.value.trim();if(t.length>0){var n="".concat(N).concat(t).concat(_,"&language=pt-BR");fetch(n).then(function(e){return e.json()}).then(function(e){return e.results}).then(function(e){var t=e.map(function(e){var t={};return t.id=e.id,t.title=e.title,t.image=e.poster_path,t.year=""===e.release_date?"0000":e.release_date.substring(0,4),t});a.setState({suggestions:t})}).catch(function(e){return console.log(e," - Exception")})}else a.setState({suggestions:[]})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.renderSuggestion=function(e){return r.a.createElement(te.a,{className:"link-text",to:"/search/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("img",{className:"result-poster",src:null==e.image?null:"".concat(k).concat(C).concat(e.image),alt:"Movie Poster"}),r.a.createElement("div",{className:"result-text"},r.a.createElement("div",{className:"search-result-name"},e.title),e.year))},a.onSuggestionSelected=function(e,t){var n=t.suggestion,r=t.method,o=a.props.dispatch;"enter"===r&&e.preventDefault(),o(J(n.id)),a.setState({value:""}),a.props.history.push("/search/".concat(n.id))},a.state={value:"",suggestions:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={value:t,onChange:this.onChange,placeholder:"Busque um filme pelo nome..."};return r.a.createElement(re.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionSelected:this.onSuggestionSelected,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:n})}}]),t}(n.Component)),ie=Object(ae.a)(Object(g.b)(null,null)(oe)),ce=(a(89),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movieData,t=e.id,a=e.title,n=e.overview,o=e.poster_path,i=e.vote_average,c=e.release_date,s=e.genres,u=x(c),l=I(s);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-content"},r.a.createElement("img",{src:"".concat(k).concat("w342/").concat(o),alt:""}),r.a.createElement("div",{className:"card-info"},r.a.createElement("div",{className:"header-container"},r.a.createElement(te.a,{to:"/movie/".concat(t),style:{textDecoration:"none"}},r.a.createElement("h1",{className:"title-text"},a)),r.a.createElement(K,{avarage:i,nameOfClass:"circle"})),r.a.createElement("p",{className:"release-date-text"},u),r.a.createElement("div",{className:"movie-details"},r.a.createElement("p",{className:"overview-text"},n),r.a.createElement("ul",{className:"genre-list-container"},l)))))}}]),t}(n.Component));ce.defaultProps={title:"Movie Title",overview:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptate eligendi eum deserunt! Ullam aut excepturi neque ratione, eveniet rem fugiat quam sit numquam quae eum deserunt dolorum temporibus eius.",poster_path:"https://via.placeholder.com/340x510.png",vote_average:0,release_date:"N\xe3o informado",genres:[]};var se=ce,ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderMovieItem=function(e){if(e.length>0)return Object.keys(e).map(function(t){var a=e[t];return r.a.createElement(se,{key:t,index:t,movieData:a})})},a.returnRandomNumber=function(){return Math.floor(10*Math.random())+10},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(e){var t="".concat(S).concat(M,"&language=pt-BR&page=").concat(e);return function(){var e=Object(y.a)(j.a.mark(function e(a){var n,r,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:V}),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,o=r.results,e.abrupt("return",a(H(o)));case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",a((i=e.t0,{type:B,error:i})));case 15:case"end":return e.stop()}var i},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()}(this.returnRandomNumber()))}},{key:"render",value:function(){var e=this.props.popularMovies,t=this.renderMovieItem(e);return r.a.createElement(n.Fragment,null,t)}}]),t}(n.Component);var le=Object(g.b)(function(e){return{popularMovies:e.getPopularMovies.popularMovies}})(ue),me=(a(91),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(ie,null),r.a.createElement(le,null))}}]),t}(n.Component)),ve=Object(h.d)($,Object(h.a)(f.a)),de=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:me}),r.a.createElement(p.a,{path:"/movie/:movieId",render:function(t){return r.a.createElement(ee,Object.assign({},t,{movieData:e.props.movieData}))}}),r.a.createElement(p.a,{path:"/search/:movieId",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(Q,null),r.a.createElement(ie,null),r.a.createElement(se,Object.assign({},t,{movieData:e.props.movieData.movie})))}})))}}]),t}(n.Component),pe=Object(g.b)(function(e){return{movieData:e.movieData}},null)(de),ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{store:ve},r.a.createElement(pe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.d3667f03.chunk.js.map