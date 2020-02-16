(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a.n(n),i=a(0),r=a.n(i),s=a(1),l=a.n(s),c=a(5),h=a(277),d=a(21),u=a(22),m=a(276),p=a(26),f=a(278),y=a.n(f),g=a(279),w=a.n(g),b=a(280),v=a.n(b),E=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return r.a.createElement(h.a,{className:e.root},r.a.createElement(p.a,{stagger:!0},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(u.a,null,"Charity Donation"))),r.a.createElement("p",null,r.a.createElement(u.a,null,"Music has always been a platform for artists to support and raise awareness to causes near and dear to them. Through their creative outlets countless established and aspiring musicians/artists alike have utilized the powerful tool that is a public platform to fuel societal-consciousness of causes that might otherwise go neglected.")),r.a.createElement(m.a,null,r.a.createElement("img",{src:y.a,alt:"Josh Mullis's family"})),r.a.createElement("p",null,r.a.createElement(m.a,null,"For Soul Extract’s Josh Mullis that cause is the ",r.a.createElement(d.a,{href:"http://newdayfosterhome.com/foster",target:"newdayfosterhome"},"New Day Foster Home"),", a non-profit organization based in China that’s been providing “life saving surgeries and a loving home” to orphaned children since late 2000. Mullis’ family became involved with New Day in 2011 when they made the life-changing choice to adopt a child from China, which at the time still held a strictly enforced “one child law”.")),r.a.createElement(m.a,{style:{display:"block"}},r.a.createElement(d.a,{href:"http://newdayfosterhome.com/foster",target:"newdayfosterhome",style:{display:"block"}},r.a.createElement("img",{src:w.a,alt:"New Day Forster Home"}))),r.a.createElement(m.a,null,r.a.createElement("blockquote",null,r.a.createElement("p",null,"For Soul Extract’s Josh Mullis that cause is the New Day Foster Home, a non-profit organization based in China that’s been providing “life saving surgeries and a loving home” to orphaned children since late 2000. Mullis’ family became involved with New Day in 2011 when they made the life-changing choice to adopt a child from China, which at the time still held a strictly enforced “one child law”."),r.a.createElement("p",null,"Ansley was born with myelomeningocele, the most severe form of Spina Bifida.  This birth defect affects the spine and spinal cord and many children end up incontinent and/or unable to walk. She is now living a happy, normal life thanks to the New Day Foster Home.")),r.a.createElement("p",null,"Enlarging their family also broadened the horizons of the Mullis clan and Josh became inspired to direct his craft toward the greater good,"),r.a.createElement("blockquote",null,"The whole experience inspired me to dedicate my music project to this organization any way I can.  Whether it be donating partial proceeds or sponsoring a child."),r.a.createElement("p",null,"With a new album, ",r.a.createElement("em",null,"Circadian Algorithm"),", out next week (November 13th), the sky is the limit for Soul Extract/Mullis, who credits his humanitarian efforts as a continual source of motivation:"),r.a.createElement("blockquote",null,"When I become frustrated with the music creation process, this keeps me going and has created a sense of purpose with this project."),r.a.createElement("p",null,"If fans of Soul Extract are looking to get involved with the New Day Foster Home, Mullis definitely has some ideas:"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"For starters, if you’re listening to ",r.a.createElement(d.a,{href:"https://fanlink.to/circalgorithm",target:"circalgorithm"},"Circadian Algorithm")," via streaming outlets or have purchased it, you are helping New Day as partial proceeds are sent directly to them. They also have an awesome Instagram account (",r.a.createElement(d.a,{href:"https://www.instagram.com/newdaycharities",target:"@newdaycharities"},"@newdaycharities"),"), where they post regularly on fun things they do with the children, surgery updates, etc."),r.a.createElement("p",null,"I’d say that’s a good place to start and if your heart pulls you in that direction, they have a donation page here:")),r.a.createElement(d.a,{href:"http://www.newdayfosterhome.com/en/help-us/one-time-donations",target:"newdayfosterhome-donation"},r.a.createElement("img",{src:v.a,alt:"New Day Foster Home logo"})),r.a.createElement("p",null,"We’re elated to have Soul Extract on the FiXT roster and more than happy to bolster his efforts in making the world a better place, one badass album at a time."),r.a.createElement("p",{style:{margin:0}},"Source: ",r.a.createElement(d.a,{href:"https://www.fixtonline.com/artist-update-feature-soul-extract",target:"article-source"},"fixtonline.com/artist-update-feature-soul-extract"),".")))))},t}(r.a.Component);E.propTypes={classes:l.a.object},t.default=Object(c.a)(function(e){return{root:{}}})(E)},276:function(e,t,a){"use strict";var n=a(5),o=a(7),i=a(9),r=a(6),s=a.n(r),l=(a(8),a(3)),c=a.n(l),h=a(0),d=a.n(h),u=a(1),m=a.n(u),p=a(4),f=a.n(p),y=a(2),g=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},a.enter=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.enter;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},a.exit=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.exit;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},a.animate=function(e){this.unanimate(),Object(y.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},a.unanimate=function(){y.a.remove(this.element)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=(t.energy,t.audio,t.sounds,t.className),o=t.children,i=t.node,r=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(i,Object.assign({ref:function(t){return e.element=t},className:f()(a.root,n)},r),o)},t}(d.a.PureComponent);g.displayName="Fader",g.propTypes={theme:m.a.any.isRequired,classes:m.a.any.isRequired,energy:m.a.any.isRequired,audio:m.a.any.isRequired,sounds:m.a.any.isRequired,className:m.a.any,children:m.a.any,node:m.a.string},g.defaultProps={node:"span"};a.d(t,"a",function(){return w});var w=Object(o.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(g)))},277:function(e,t,a){"use strict";var n=a(5),o=(a(8),a(6)),i=a.n(o),r=a(3),s=a.n(r),l=a(0),c=a.n(l),h=a(1),d=a.n(h),u=a(4),m=a.n(u),p=a(276),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},a.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.className,o=t.children,r=i()(t,["theme","classes","className","children"]);return c.a.createElement(p.a,Object.assign({className:m()(a.root,n),node:"main",ref:function(t){return e.element=t}},r),c.a.createElement("div",{className:a.frame}),c.a.createElement("div",{className:a.content},o))},t}(c.a.Component);f.displayName="Main",f.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var y=a(13);a.d(t,"a",function(){return g});var g=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(y.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)},278:function(e,t,a){e.exports=a.p+"static/josh-mullis-family-216d66e5c4951f8117c63397b17e87a2.jpg"},279:function(e,t,a){e.exports=a.p+"static/new-day-foster-home-c6007070cf0f0ec1a375728395ddf55a.jpg"},280:function(e,t,a){e.exports=a.p+"static/new-day-foster-home-logo-2b92da1d734e48fdbdd3fea405ffb938.jpg"}}]);
//# sourceMappingURL=component---src-pages-charity-js-8b95ce0249327fece742.js.map