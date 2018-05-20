
          window.__NEXT_REGISTER_PAGE('/_error', function() {
            var comp = module.exports=webpackJsonp([10],{216:function(e,t,r){e.exports=r(217)},217:function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(14),o=u(n),s=r(4),a=u(s),l=r(5),d=u(l),f=r(15),i=u(f),c=r(16),p=u(c),_=r(1),h=u(_),v=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return h.default.createElement("p",null,this.props.statusCode?"An error "+this.props.statusCode+" occurred on server":"An error occurred on client")}}],[{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{statusCode:t?t.statusCode:r?r.status:null}}}]),t}(h.default.Component);t.default=v}},[216]);
            return { page: comp.default }
          })
        