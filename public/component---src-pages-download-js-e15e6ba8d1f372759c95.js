(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),i=t(0),o=t.n(i),s=t(1),l=t.n(s),c=t(5),u=t(277),m=t(26),d=t(17),p=t(276),h=t(22),f=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.classes;return o.a.createElement(u.a,{className:e.root},o.a.createElement(m.a,{stagger:!0},o.a.createElement("h1",null,o.a.createElement(d.a,null,"Download")),o.a.createElement("div",{className:e.albums},o.a.createElement("div",{className:e.album},o.a.createElement(p.a,{className:e.albumCover},o.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},o.a.createElement("img",{alt:"Kali Linux",src:"/images/kalilinux.jpg"}))),o.a.createElement(p.a,{className:e.albumCover},o.a.createElement(h.a,{href:"https://www.kali.org/",target:"kalilinux"},o.a.createElement("center",null,"Kali Linux ")))),o.a.createElement("div",{className:e.album},o.a.createElement(p.a,{className:e.albumCover},o.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},o.a.createElement("img",{alt:"Parrot Security",src:"/images/parrot.jpg"}))),o.a.createElement(p.a,{className:e.albumCover},o.a.createElement(h.a,{href:"https://parrotlinux.org/",target:"parrotos"},o.a.createElement("center",null,"Parrot Security ")))))))},a}(o.a.Component);f.propTypes={classes:l.a.object},a.default=Object(c.a)(function(e){return{root:{},albums:{display:"flex",flexDirection:"row",flexWrap:"wrap"},album:{padding:[0,0,20],width:"100%"},albumCover:{display:"block",margin:[0,0,20],width:"100%","& img":{margin:0,width:"100%",maxWidth:"100%"}},albumFrame:{display:"block",width:"100%"},"@media screen and (min-width: 768px)":{album:{padding:10,width:"50%"}}}})(f)},276:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(9),o=t(6),s=t.n(o),l=(t(8),t(3)),c=t.n(l),u=t(0),m=t.n(u),d=t(1),p=t.n(d),h=t(4),f=t.n(h),g=t(2),y=function(e){function a(){return e.apply(this,arguments)||this}c()(a,e);var t=a.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},t.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){g.a.remove(this.element)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=(a.energy,a.audio,a.sounds,a.className),r=a.children,i=a.node,o=s()(a,["theme","classes","energy","audio","sounds","className","children","node"]);return m.a.createElement(i,Object.assign({ref:function(a){return e.element=a},className:f()(t.root,n)},o),r)},a}(m.a.PureComponent);y.displayName="Fader",y.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},y.defaultProps={node:"span"};t.d(a,"a",function(){return b});var b=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(y)))},277:function(e,a,t){"use strict";var n=t(5),r=(t(8),t(6)),i=t.n(r),o=t(3),s=t.n(o),l=t(0),c=t.n(l),u=t(1),m=t.n(u),d=t(4),p=t.n(d),h=t(276),f=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&a.element.exit()},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.className,r=a.children,o=i()(a,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:p()(t.root,n),node:"main",ref:function(a){return e.element=a}},o),c.a.createElement("div",{className:t.frame}),c.a.createElement("div",{className:t.content},r))},a}(c.a.Component);f.displayName="Main",f.propTypes={theme:m.a.object.isRequired,classes:m.a.object.isRequired,className:m.a.any,children:m.a.any};var g=t(13);t.d(a,"a",function(){return y});var y=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)}}]);
//# sourceMappingURL=component---src-pages-download-js-e15e6ba8d1f372759c95.js.map