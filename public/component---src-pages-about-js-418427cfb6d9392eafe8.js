(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(0),i=a.n(o),s=a(1),l=a.n(s),c=a(5),u=(a(22),a(278)),m=a(17),d=a(277),p=a(26),h=a(279),f=a.n(h),g=a(280),y=a.n(g),b=a(281),v=a.n(b),E=a(282),w=a.n(E),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement(u.a,{className:e.root},i.a.createElement("article",null,i.a.createElement(p.a,{stagger:!0},i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(m.a,null,"About CybSec"))),i.a.createElement("p",null,i.a.createElement(m.a,{style:{fontWeight:"bold"}},"Who We Are?")),i.a.createElement(d.a,null,i.a.createElement("img",{src:f.a,alt:"Team photo"})),i.a.createElement("p",null,i.a.createElement(m.a,null,"CybSecNITW is a group of information security enthusiasts from National Institute of Technology, Warangal. We are a bunch of self-motivated security enthusiasts who love learning and sharing their knowledge with everyone genuinely interested in information security.")),i.a.createElement("p",null,i.a.createElement(m.a,{style:{fontWeight:"bold"}},"What We Do?")),i.a.createElement(d.a,null,i.a.createElement("img",{src:v.a,alt:"Our work"}),i.a.createElement("p",null,i.a.createElement(m.a,null,"Meetings : We have weekly meetups where we have information security-related discussions and participate in CTFs. Everyone is invited to our meetings. ")),i.a.createElement("p",null,i.a.createElement(m.a,null,"Capture The Flag : We actively participate in CTFs. These are security competitions which require practical knowledge of topics like binary exploitation, reverse engineering, cryptography, web security, forensics, steganography, etc. We also organise our own Capture The Flag competitions PhantomCTF."))),i.a.createElement("p",null,i.a.createElement(m.a,{style:{fontWeight:"bold"}},"Our Teams And Their Roles")),i.a.createElement(d.a,null,i.a.createElement("p",{align:"center"},i.a.createElement("iframe",{src:"https://prezi.com/embed/flqwr3pjs9ej/",id:"iframe_container",style:{margin:"auto",display:"block"},frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",allow:"autoplay; fullscreen",height:"315",width:"100%"}))),i.a.createElement("p",null,i.a.createElement(m.a,{style:{fontWeight:"bold"}},"How To Join?")),i.a.createElement(d.a,null,i.a.createElement("img",{src:w.a,alt:"Join Us"}),i.a.createElement("p",null,i.a.createElement(m.a,null,"CybSecNITW is an open group. Everyone (from NITW) can join in our meetings and participate with us in CTFs (subject to rules on team size in CTFs, of course). If you come regularly to the meetings, you get added to the internal team."))),i.a.createElement("p",null,i.a.createElement(m.a,{style:{fontWeight:"bold"}},"Where We Work?")),i.a.createElement(d.a,null,i.a.createElement("img",{src:y.a,alt:"Innovation Garage"}),i.a.createElement("p",null,i.a.createElement(m.a,null,"Innovation Garage - the Hogwarts of innovative souls. The working hub for brilliant minds with the coolest projects - It’s a place to hack. It’s a room to innovate. Most importantly, it’s a space where you challenge yourself to break the boundaries. The working space is packed with devout and enthusiastic students, each showing off their creative best in their fields of passion. The synergy of the atmosphere further inspires the individuals to commit to their work. Ever since its inception in 2015, it has given rise to lots of projects, friendships, mentors, startups and reasons for many to work harder than ever before."))))))},t}(i.a.Component);k.propTypes={classes:l.a.object},t.default=Object(c.a)(function(e){return{root:{}}})(k)},277:function(e,t,a){"use strict";var n=a(5),r=a(7),o=a(9),i=a(6),s=a.n(i),l=(a(8),a(3)),c=a.n(l),u=a(0),m=a.n(u),d=a(1),p=a.n(d),h=a(4),f=a.n(h),g=a(2),y=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},a.enter=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.enter;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},a.exit=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.exit;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},a.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},a.unanimate=function(){g.a.remove(this.element)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=(t.energy,t.audio,t.sounds,t.className),r=t.children,o=t.node,i=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return m.a.createElement(o,Object.assign({ref:function(t){return e.element=t},className:f()(a.root,n)},i),r)},t}(m.a.PureComponent);y.displayName="Fader",y.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},y.defaultProps={node:"span"};a.d(t,"a",function(){return b});var b=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(o.a)()(y)))},278:function(e,t,a){"use strict";var n=a(5),r=(a(8),a(6)),o=a.n(r),i=a(3),s=a.n(i),l=a(0),c=a.n(l),u=a(1),m=a.n(u),d=a(4),p=a.n(d),h=a(277),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},a.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.className,r=t.children,i=o()(t,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:p()(a.root,n),node:"main",ref:function(t){return e.element=t}},i),c.a.createElement("div",{className:a.frame}),c.a.createElement("div",{className:a.content},r))},t}(c.a.Component);f.displayName="Main",f.propTypes={theme:m.a.object.isRequired,classes:m.a.object.isRequired,className:m.a.any,children:m.a.any};var g=a(13);a.d(t,"a",function(){return y});var y=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)},279:function(e,t,a){e.exports=a.p+"static/team-67f5547e63cd737cf136adbe971b6556.jpeg"},280:function(e,t,a){e.exports=a.p+"static/ig-a6eae85e9db4fca4a17a816c82a627ab.jpg"},281:function(e,t,a){e.exports=a.p+"static/provide-4d3b0e8df634986ee35bf192fc1fa9f3.jpg"},282:function(e,t,a){e.exports=a.p+"static/join-b848d9712de80b3b7539fab492698ddf.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-418427cfb6d9392eafe8.js.map