var rw=Object.create;var Oh=Object.defineProperty,sw=Object.defineProperties,ow=Object.getOwnPropertyDescriptor,aw=Object.getOwnPropertyDescriptors,cw=Object.getOwnPropertyNames,Ny=Object.getOwnPropertySymbols,lw=Object.getPrototypeOf,Ly=Object.prototype.hasOwnProperty,uw=Object.prototype.propertyIsEnumerable;var Oy=(n,e,t)=>e in n?Oh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Se=(n,e)=>{for(var t in e||={})Ly.call(e,t)&&Oy(n,t,e[t]);if(Ny)for(var t of Ny(e))uw.call(e,t)&&Oy(n,t,e[t]);return n},Ft=(n,e)=>sw(n,aw(e));var dw=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var fw=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of cw(e))!Ly.call(n,r)&&r!==t&&Oh(n,r,{get:()=>e[r],enumerable:!(i=ow(e,r))||i.enumerable});return n};var hw=(n,e,t)=>(t=n!=null?rw(lw(n)):{},fw(e||!n||!n.__esModule?Oh(t,"default",{value:n,enumerable:!0}):t,n));var kr=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Fy=dw((Qk,Pl)=>{"use strict";(function(n,e,t,i){"use strict";var r=["","webkit","Moz","MS","ms","o"],s=e.createElement("div"),o="function",a=Math.round,c=Math.abs,l=Date.now;function u(y,M,D){return setTimeout(T(y,D),M)}function d(y,M,D){return Array.isArray(y)?(f(y,D[M],D),!0):!1}function f(y,M,D){var B;if(y)if(y.forEach)y.forEach(M,D);else if(y.length!==i)for(B=0;B<y.length;)M.call(D,y[B],B,y),B++;else for(B in y)y.hasOwnProperty(B)&&M.call(D,y[B],B,y)}function h(y,M,D){var B="DEPRECATED METHOD: "+M+`
`+D+` AT 
`;return function(){var ie=new Error("get-stack-trace"),_e=ie&&ie.stack?ie.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",ct=n.console&&(n.console.warn||n.console.log);return ct&&ct.call(n.console,B,_e),y.apply(this,arguments)}}var g;typeof Object.assign!="function"?g=function(M){if(M===i||M===null)throw new TypeError("Cannot convert undefined or null to object");for(var D=Object(M),B=1;B<arguments.length;B++){var ie=arguments[B];if(ie!==i&&ie!==null)for(var _e in ie)ie.hasOwnProperty(_e)&&(D[_e]=ie[_e])}return D}:g=Object.assign;var v=h(function(M,D,B){for(var ie=Object.keys(D),_e=0;_e<ie.length;)(!B||B&&M[ie[_e]]===i)&&(M[ie[_e]]=D[ie[_e]]),_e++;return M},"extend","Use `assign`."),m=h(function(M,D){return v(M,D,!0)},"merge","Use `assign`.");function p(y,M,D){var B=M.prototype,ie;ie=y.prototype=Object.create(B),ie.constructor=y,ie._super=B,D&&g(ie,D)}function T(y,M){return function(){return y.apply(M,arguments)}}function C(y,M){return typeof y==o?y.apply(M&&M[0]||i,M):y}function b(y,M){return y===i?M:y}function N(y,M,D){f(S(M),function(B){y.addEventListener(B,D,!1)})}function I(y,M,D){f(S(M),function(B){y.removeEventListener(B,D,!1)})}function A(y,M){for(;y;){if(y==M)return!0;y=y.parentNode}return!1}function O(y,M){return y.indexOf(M)>-1}function S(y){return y.trim().split(/\s+/g)}function E(y,M,D){if(y.indexOf&&!D)return y.indexOf(M);for(var B=0;B<y.length;){if(D&&y[B][D]==M||!D&&y[B]===M)return B;B++}return-1}function P(y){return Array.prototype.slice.call(y,0)}function j(y,M,D){for(var B=[],ie=[],_e=0;_e<y.length;){var ct=M?y[_e][M]:y[_e];E(ie,ct)<0&&B.push(y[_e]),ie[_e]=ct,_e++}return D&&(M?B=B.sort(function(un,Cn){return un[M]>Cn[M]}):B=B.sort()),B}function G(y,M){for(var D,B,ie=M[0].toUpperCase()+M.slice(1),_e=0;_e<r.length;){if(D=r[_e],B=D?D+ie:M,B in y)return B;_e++}return i}var Y=1;function K(){return Y++}function X(y){var M=y.ownerDocument||y;return M.defaultView||M.parentWindow||n}var ne=/mobile|tablet|ip(ad|hone|od)|android/i,$="ontouchstart"in n,he=G(n,"PointerEvent")!==i,Me=$&&ne.test(navigator.userAgent),Te="touch",rt="pen",xt="mouse",Z="kinect",oe=25,ce=1,ae=2,ye=4,ze=8,Oe=1,Pt=2,Tt=4,tt=8,R=16,Vt=Pt|Tt,Qe=tt|R,at=Vt|Qe,Ce=["x","y"],St=["clientX","clientY"];function xe(y,M){var D=this;this.manager=y,this.callback=M,this.element=y.element,this.target=y.options.inputTarget,this.domHandler=function(B){C(y.options.enable,[y])&&D.handler(B)},this.init()}xe.prototype={handler:function(){},init:function(){this.evEl&&N(this.element,this.evEl,this.domHandler),this.evTarget&&N(this.target,this.evTarget,this.domHandler),this.evWin&&N(X(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(X(this.element),this.evWin,this.domHandler)}};function w(y){var M,D=y.options.inputClass;return D?M=D:he?M=Q:Me?M=On:$?M=ps:M=He,new M(y,_)}function _(y,M,D){var B=D.pointers.length,ie=D.changedPointers.length,_e=M&ce&&B-ie===0,ct=M&(ye|ze)&&B-ie===0;D.isFirst=!!_e,D.isFinal=!!ct,_e&&(y.session={}),D.eventType=M,z(y,D),y.emit("hammer.input",D),y.recognize(D),y.session.prevInput=D}function z(y,M){var D=y.session,B=M.pointers,ie=B.length;D.firstInput||(D.firstInput=q(M)),ie>1&&!D.firstMultiple?D.firstMultiple=q(M):ie===1&&(D.firstMultiple=!1);var _e=D.firstInput,ct=D.firstMultiple,an=ct?ct.center:_e.center,un=M.center=we(B);M.timeStamp=l(),M.deltaTime=M.timeStamp-_e.timeStamp,M.angle=re(an,un),M.distance=Ne(an,un),J(D,M),M.offsetDirection=Pe(M.deltaX,M.deltaY);var Cn=ue(M.deltaTime,M.deltaX,M.deltaY);M.overallVelocityX=Cn.x,M.overallVelocityY=Cn.y,M.overallVelocity=c(Cn.x)>c(Cn.y)?Cn.x:Cn.y,M.scale=ct?ke(ct.pointers,B):1,M.rotation=ct?Ee(ct.pointers,B):0,M.maxPointers=D.prevInput?M.pointers.length>D.prevInput.maxPointers?M.pointers.length:D.prevInput.maxPointers:M.pointers.length,ee(D,M);var Li=y.element;A(M.srcEvent.target,Li)&&(Li=M.srcEvent.target),M.target=Li}function J(y,M){var D=M.center,B=y.offsetDelta||{},ie=y.prevDelta||{},_e=y.prevInput||{};(M.eventType===ce||_e.eventType===ye)&&(ie=y.prevDelta={x:_e.deltaX||0,y:_e.deltaY||0},B=y.offsetDelta={x:D.x,y:D.y}),M.deltaX=ie.x+(D.x-B.x),M.deltaY=ie.y+(D.y-B.y)}function ee(y,M){var D=y.lastInterval||M,B=M.timeStamp-D.timeStamp,ie,_e,ct,an;if(M.eventType!=ze&&(B>oe||D.velocity===i)){var un=M.deltaX-D.deltaX,Cn=M.deltaY-D.deltaY,Li=ue(B,un,Cn);_e=Li.x,ct=Li.y,ie=c(Li.x)>c(Li.y)?Li.x:Li.y,an=Pe(un,Cn),y.lastInterval=M}else ie=D.velocity,_e=D.velocityX,ct=D.velocityY,an=D.direction;M.velocity=ie,M.velocityX=_e,M.velocityY=ct,M.direction=an}function q(y){for(var M=[],D=0;D<y.pointers.length;)M[D]={clientX:a(y.pointers[D].clientX),clientY:a(y.pointers[D].clientY)},D++;return{timeStamp:l(),pointers:M,center:we(M),deltaX:y.deltaX,deltaY:y.deltaY}}function we(y){var M=y.length;if(M===1)return{x:a(y[0].clientX),y:a(y[0].clientY)};for(var D=0,B=0,ie=0;ie<M;)D+=y[ie].clientX,B+=y[ie].clientY,ie++;return{x:a(D/M),y:a(B/M)}}function ue(y,M,D){return{x:M/y||0,y:D/y||0}}function Pe(y,M){return y===M?Oe:c(y)>=c(M)?y<0?Pt:Tt:M<0?tt:R}function Ne(y,M,D){D||(D=Ce);var B=M[D[0]]-y[D[0]],ie=M[D[1]]-y[D[1]];return Math.sqrt(B*B+ie*ie)}function re(y,M,D){D||(D=Ce);var B=M[D[0]]-y[D[0]],ie=M[D[1]]-y[D[1]];return Math.atan2(ie,B)*180/Math.PI}function Ee(y,M){return re(M[1],M[0],St)+re(y[1],y[0],St)}function ke(y,M){return Ne(M[0],M[1],St)/Ne(y[0],y[1],St)}var Be={mousedown:ce,mousemove:ae,mouseup:ye},be="mousedown",ut="mousemove mouseup";function He(){this.evEl=be,this.evWin=ut,this.pressed=!1,xe.apply(this,arguments)}p(He,xe,{handler:function(M){var D=Be[M.type];D&ce&&M.button===0&&(this.pressed=!0),D&ae&&M.which!==1&&(D=ye),this.pressed&&(D&ye&&(this.pressed=!1),this.callback(this.manager,D,{pointers:[M],changedPointers:[M],pointerType:xt,srcEvent:M}))}});var It={pointerdown:ce,pointermove:ae,pointerup:ye,pointercancel:ze,pointerout:ze},L={2:Te,3:rt,4:xt,5:Z},de="pointerdown",W="pointermove pointerup pointercancel";n.MSPointerEvent&&!n.PointerEvent&&(de="MSPointerDown",W="MSPointerMove MSPointerUp MSPointerCancel");function Q(){this.evEl=de,this.evWin=W,xe.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}p(Q,xe,{handler:function(M){var D=this.store,B=!1,ie=M.type.toLowerCase().replace("ms",""),_e=It[ie],ct=L[M.pointerType]||M.pointerType,an=ct==Te,un=E(D,M.pointerId,"pointerId");_e&ce&&(M.button===0||an)?un<0&&(D.push(M),un=D.length-1):_e&(ye|ze)&&(B=!0),!(un<0)&&(D[un]=M,this.callback(this.manager,_e,{pointers:D,changedPointers:[M],pointerType:ct,srcEvent:M}),B&&D.splice(un,1))}});var ge={touchstart:ce,touchmove:ae,touchend:ye,touchcancel:ze},pe="touchstart",$e="touchstart touchmove touchend touchcancel";function kt(){this.evTarget=pe,this.evWin=$e,this.started=!1,xe.apply(this,arguments)}p(kt,xe,{handler:function(M){var D=ge[M.type];if(D===ce&&(this.started=!0),!!this.started){var B=on.call(this,M,D);D&(ye|ze)&&B[0].length-B[1].length===0&&(this.started=!1),this.callback(this.manager,D,{pointers:B[0],changedPointers:B[1],pointerType:Te,srcEvent:M})}}});function on(y,M){var D=P(y.touches),B=P(y.changedTouches);return M&(ye|ze)&&(D=j(D.concat(B),"identifier",!0)),[D,B]}var Mt={touchstart:ce,touchmove:ae,touchend:ye,touchcancel:ze},Yn="touchstart touchmove touchend touchcancel";function On(){this.evTarget=Yn,this.targetIds={},xe.apply(this,arguments)}p(On,xe,{handler:function(M){var D=Mt[M.type],B=Il.call(this,M,D);B&&this.callback(this.manager,D,{pointers:B[0],changedPointers:B[1],pointerType:Te,srcEvent:M})}});function Il(y,M){var D=P(y.touches),B=this.targetIds;if(M&(ce|ae)&&D.length===1)return B[D[0].identifier]=!0,[D,D];var ie,_e,ct=P(y.changedTouches),an=[],un=this.target;if(_e=D.filter(function(Cn){return A(Cn.target,un)}),M===ce)for(ie=0;ie<_e.length;)B[_e[ie].identifier]=!0,ie++;for(ie=0;ie<ct.length;)B[ct[ie].identifier]&&an.push(ct[ie]),M&(ye|ze)&&delete B[ct[ie].identifier],ie++;if(an.length)return[j(_e.concat(an),"identifier",!0),an]}var Al=2500,Oi=25;function ps(){xe.apply(this,arguments);var y=T(this.handler,this);this.touch=new On(this.manager,y),this.mouse=new He(this.manager,y),this.primaryTouch=null,this.lastTouches=[]}p(ps,xe,{handler:function(M,D,B){var ie=B.pointerType==Te,_e=B.pointerType==xt;if(!(_e&&B.sourceCapabilities&&B.sourceCapabilities.firesTouchEvents)){if(ie)Rl.call(this,D,B);else if(_e&&ro.call(this,B))return;this.callback(M,D,B)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Rl(y,M){y&ce?(this.primaryTouch=M.changedPointers[0].identifier,Na.call(this,M)):y&(ye|ze)&&Na.call(this,M)}function Na(y){var M=y.changedPointers[0];if(M.identifier===this.primaryTouch){var D={x:M.clientX,y:M.clientY};this.lastTouches.push(D);var B=this.lastTouches,ie=function(){var _e=B.indexOf(D);_e>-1&&B.splice(_e,1)};setTimeout(ie,Al)}}function ro(y){for(var M=y.srcEvent.clientX,D=y.srcEvent.clientY,B=0;B<this.lastTouches.length;B++){var ie=this.lastTouches[B],_e=Math.abs(M-ie.x),ct=Math.abs(D-ie.y);if(_e<=Oi&&ct<=Oi)return!0}return!1}var Oa=G(s.style,"touchAction"),ms=Oa!==i,La="compute",Fa="auto",ka="manipulation",Ki="none",gs="pan-x",vs="pan-y",so=U();function Ua(y,M){this.manager=y,this.set(M)}Ua.prototype={set:function(y){y==La&&(y=this.compute()),ms&&this.manager.element.style&&so[y]&&(this.manager.element.style[Oa]=y),this.actions=y.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var y=[];return f(this.manager.recognizers,function(M){C(M.options.enable,[M])&&(y=y.concat(M.getTouchAction()))}),x(y.join(" "))},preventDefaults:function(y){var M=y.srcEvent,D=y.offsetDirection;if(this.manager.session.prevented){M.preventDefault();return}var B=this.actions,ie=O(B,Ki)&&!so[Ki],_e=O(B,vs)&&!so[vs],ct=O(B,gs)&&!so[gs];if(ie){var an=y.pointers.length===1,un=y.distance<2,Cn=y.deltaTime<250;if(an&&un&&Cn)return}if(!(ct&&_e)&&(ie||_e&&D&Vt||ct&&D&Qe))return this.preventSrc(M)},preventSrc:function(y){this.manager.session.prevented=!0,y.preventDefault()}};function x(y){if(O(y,Ki))return Ki;var M=O(y,gs),D=O(y,vs);return M&&D?Ki:M||D?M?gs:vs:O(y,ka)?ka:Fa}function U(){if(!ms)return!1;var y={},M=n.CSS&&n.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(D){y[D]=M?n.CSS.supports("touch-action",D):!0}),y}var H=1,V=2,k=4,te=8,se=te,ve=16,fe=32;function De(y){this.options=g({},this.defaults,y||{}),this.id=K(),this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=H,this.simultaneous={},this.requireFail=[]}De.prototype={defaults:{},set:function(y){return g(this.options,y),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(y){if(d(y,"recognizeWith",this))return this;var M=this.simultaneous;return y=ot(y,this),M[y.id]||(M[y.id]=y,y.recognizeWith(this)),this},dropRecognizeWith:function(y){return d(y,"dropRecognizeWith",this)?this:(y=ot(y,this),delete this.simultaneous[y.id],this)},requireFailure:function(y){if(d(y,"requireFailure",this))return this;var M=this.requireFail;return y=ot(y,this),E(M,y)===-1&&(M.push(y),y.requireFailure(this)),this},dropRequireFailure:function(y){if(d(y,"dropRequireFailure",this))return this;y=ot(y,this);var M=E(this.requireFail,y);return M>-1&&this.requireFail.splice(M,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(y){return!!this.simultaneous[y.id]},emit:function(y){var M=this,D=this.state;function B(ie){M.manager.emit(ie,y)}D<te&&B(M.options.event+Ue(D)),B(M.options.event),y.additionalEvent&&B(y.additionalEvent),D>=te&&B(M.options.event+Ue(D))},tryEmit:function(y){if(this.canEmit())return this.emit(y);this.state=fe},canEmit:function(){for(var y=0;y<this.requireFail.length;){if(!(this.requireFail[y].state&(fe|H)))return!1;y++}return!0},recognize:function(y){var M=g({},y);if(!C(this.options.enable,[this,M])){this.reset(),this.state=fe;return}this.state&(se|ve|fe)&&(this.state=H),this.state=this.process(M),this.state&(V|k|te|ve)&&this.tryEmit(M)},process:function(y){},getTouchAction:function(){},reset:function(){}};function Ue(y){return y&ve?"cancel":y&te?"end":y&k?"move":y&V?"start":""}function Ie(y){return y==R?"down":y==tt?"up":y==Pt?"left":y==Tt?"right":""}function ot(y,M){var D=M.manager;return D?D.get(y):y}function Xe(){De.apply(this,arguments)}p(Xe,De,{defaults:{pointers:1},attrTest:function(y){var M=this.options.pointers;return M===0||y.pointers.length===M},process:function(y){var M=this.state,D=y.eventType,B=M&(V|k),ie=this.attrTest(y);return B&&(D&ze||!ie)?M|ve:B||ie?D&ye?M|te:M&V?M|k:V:fe}});function Ut(){Xe.apply(this,arguments),this.pX=null,this.pY=null}p(Ut,Xe,{defaults:{event:"pan",threshold:10,pointers:1,direction:at},getTouchAction:function(){var y=this.options.direction,M=[];return y&Vt&&M.push(vs),y&Qe&&M.push(gs),M},directionTest:function(y){var M=this.options,D=!0,B=y.distance,ie=y.direction,_e=y.deltaX,ct=y.deltaY;return ie&M.direction||(M.direction&Vt?(ie=_e===0?Oe:_e<0?Pt:Tt,D=_e!=this.pX,B=Math.abs(y.deltaX)):(ie=ct===0?Oe:ct<0?tt:R,D=ct!=this.pY,B=Math.abs(y.deltaY))),y.direction=ie,D&&B>M.threshold&&ie&M.direction},attrTest:function(y){return Xe.prototype.attrTest.call(this,y)&&(this.state&V||!(this.state&V)&&this.directionTest(y))},emit:function(y){this.pX=y.deltaX,this.pY=y.deltaY;var M=Ie(y.direction);M&&(y.additionalEvent=this.options.event+M),this._super.emit.call(this,y)}});function Lt(){Xe.apply(this,arguments)}p(Lt,Xe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Ki]},attrTest:function(y){return this._super.attrTest.call(this,y)&&(Math.abs(y.scale-1)>this.options.threshold||this.state&V)},emit:function(y){if(y.scale!==1){var M=y.scale<1?"in":"out";y.additionalEvent=this.options.event+M}this._super.emit.call(this,y)}});function dt(){De.apply(this,arguments),this._timer=null,this._input=null}p(dt,De,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Fa]},process:function(y){var M=this.options,D=y.pointers.length===M.pointers,B=y.distance<M.threshold,ie=y.deltaTime>M.time;if(this._input=y,!B||!D||y.eventType&(ye|ze)&&!ie)this.reset();else if(y.eventType&ce)this.reset(),this._timer=u(function(){this.state=se,this.tryEmit()},M.time,this);else if(y.eventType&ye)return se;return fe},reset:function(){clearTimeout(this._timer)},emit:function(y){this.state===se&&(y&&y.eventType&ye?this.manager.emit(this.options.event+"up",y):(this._input.timeStamp=l(),this.manager.emit(this.options.event,this._input)))}});function Ae(){Xe.apply(this,arguments)}p(Ae,Xe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Ki]},attrTest:function(y){return this._super.attrTest.call(this,y)&&(Math.abs(y.rotation)>this.options.threshold||this.state&V)}});function $t(){Xe.apply(this,arguments)}p($t,Xe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Vt|Qe,pointers:1},getTouchAction:function(){return Ut.prototype.getTouchAction.call(this)},attrTest:function(y){var M=this.options.direction,D;return M&(Vt|Qe)?D=y.overallVelocity:M&Vt?D=y.overallVelocityX:M&Qe&&(D=y.overallVelocityY),this._super.attrTest.call(this,y)&&M&y.offsetDirection&&y.distance>this.options.threshold&&y.maxPointers==this.options.pointers&&c(D)>this.options.velocity&&y.eventType&ye},emit:function(y){var M=Ie(y.offsetDirection);M&&this.manager.emit(this.options.event+M,y),this.manager.emit(this.options.event,y)}});function ht(){De.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}p(ht,De,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ka]},process:function(y){var M=this.options,D=y.pointers.length===M.pointers,B=y.distance<M.threshold,ie=y.deltaTime<M.time;if(this.reset(),y.eventType&ce&&this.count===0)return this.failTimeout();if(B&&ie&&D){if(y.eventType!=ye)return this.failTimeout();var _e=this.pTime?y.timeStamp-this.pTime<M.interval:!0,ct=!this.pCenter||Ne(this.pCenter,y.center)<M.posThreshold;this.pTime=y.timeStamp,this.pCenter=y.center,!ct||!_e?this.count=1:this.count+=1,this._input=y;var an=this.count%M.taps;if(an===0)return this.hasRequireFailures()?(this._timer=u(function(){this.state=se,this.tryEmit()},M.interval,this),V):se}return fe},failTimeout:function(){return this._timer=u(function(){this.state=fe},this.options.interval,this),fe},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==se&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function qt(y,M){return M=M||{},M.recognizers=b(M.recognizers,qt.defaults.preset),new er(y,M)}qt.VERSION="2.0.7",qt.defaults={domEvents:!1,touchAction:La,enable:!0,inputTarget:null,inputClass:null,preset:[[Ae,{enable:!1}],[Lt,{enable:!1},["rotate"]],[$t,{direction:Vt}],[Ut,{direction:Vt},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[dt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Fr=1,vn=2;function er(y,M){this.options=g({},qt.defaults,M||{}),this.options.inputTarget=this.options.inputTarget||y,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=y,this.input=w(this),this.touchAction=new Ua(this,this.options.touchAction),Nt(this,!0),f(this.options.recognizers,function(D){var B=this.add(new D[0](D[1]));D[2]&&B.recognizeWith(D[2]),D[3]&&B.requireFailure(D[3])},this)}er.prototype={set:function(y){return g(this.options,y),y.touchAction&&this.touchAction.update(),y.inputTarget&&(this.input.destroy(),this.input.target=y.inputTarget,this.input.init()),this},stop:function(y){this.session.stopped=y?vn:Fr},recognize:function(y){var M=this.session;if(!M.stopped){this.touchAction.preventDefaults(y);var D,B=this.recognizers,ie=M.curRecognizer;(!ie||ie&&ie.state&se)&&(ie=M.curRecognizer=null);for(var _e=0;_e<B.length;)D=B[_e],M.stopped!==vn&&(!ie||D==ie||D.canRecognizeWith(ie))?D.recognize(y):D.reset(),!ie&&D.state&(V|k|te)&&(ie=M.curRecognizer=D),_e++}},get:function(y){if(y instanceof De)return y;for(var M=this.recognizers,D=0;D<M.length;D++)if(M[D].options.event==y)return M[D];return null},add:function(y){if(d(y,"add",this))return this;var M=this.get(y.options.event);return M&&this.remove(M),this.recognizers.push(y),y.manager=this,this.touchAction.update(),y},remove:function(y){if(d(y,"remove",this))return this;if(y=this.get(y),y){var M=this.recognizers,D=E(M,y);D!==-1&&(M.splice(D,1),this.touchAction.update())}return this},on:function(y,M){if(y!==i&&M!==i){var D=this.handlers;return f(S(y),function(B){D[B]=D[B]||[],D[B].push(M)}),this}},off:function(y,M){if(y!==i){var D=this.handlers;return f(S(y),function(B){M?D[B]&&D[B].splice(E(D[B],M),1):delete D[B]}),this}},emit:function(y,M){this.options.domEvents&&Ln(y,M);var D=this.handlers[y]&&this.handlers[y].slice();if(!(!D||!D.length)){M.type=y,M.preventDefault=function(){M.srcEvent.preventDefault()};for(var B=0;B<D.length;)D[B](M),B++}},destroy:function(){this.element&&Nt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Nt(y,M){var D=y.element;if(D.style){var B;f(y.options.cssProps,function(ie,_e){B=G(D.style,_e),M?(y.oldCssProps[B]=D.style[B],D.style[B]=ie):D.style[B]=y.oldCssProps[B]||""}),M||(y.oldCssProps={})}}function Ln(y,M){var D=e.createEvent("Event");D.initEvent(y,!0,!0),D.gesture=M,M.target.dispatchEvent(D)}g(qt,{INPUT_START:ce,INPUT_MOVE:ae,INPUT_END:ye,INPUT_CANCEL:ze,STATE_POSSIBLE:H,STATE_BEGAN:V,STATE_CHANGED:k,STATE_ENDED:te,STATE_RECOGNIZED:se,STATE_CANCELLED:ve,STATE_FAILED:fe,DIRECTION_NONE:Oe,DIRECTION_LEFT:Pt,DIRECTION_RIGHT:Tt,DIRECTION_UP:tt,DIRECTION_DOWN:R,DIRECTION_HORIZONTAL:Vt,DIRECTION_VERTICAL:Qe,DIRECTION_ALL:at,Manager:er,Input:xe,TouchAction:Ua,TouchInput:On,MouseInput:He,PointerEventInput:Q,TouchMouseInput:ps,SingleTouchInput:kt,Recognizer:De,AttrRecognizer:Xe,Tap:ht,Pan:Ut,Swipe:$t,Pinch:Lt,Rotate:Ae,Press:dt,on:N,off:I,each:f,merge:m,extend:v,assign:g,inherit:p,bindFn:T,prefixed:G});var Fn=typeof n<"u"?n:typeof self<"u"?self:{};Fn.Hammer=qt,typeof define=="function"&&define.amd?define(function(){return qt}):typeof Pl<"u"&&Pl.exports?Pl.exports=qt:n[t]=qt})(window,document,"Hammer")});var N8=hw(Fy());function pw(n,e){return Object.is(n,e)}var Kt=null,Nl=!1,Lh=1,Fi=Symbol("SIGNAL");function pt(n){let e=Kt;return Kt=n,e}function Uy(){return Kt}var Ol={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Fh(n){if(Nl)throw new Error("");if(Kt===null)return;Kt.consumerOnSignalRead(n);let e=Kt.nextProducerIndex++;if(Fl(Kt),e<Kt.producerNode.length&&Kt.producerNode[e]!==n&&Ba(Kt)){let t=Kt.producerNode[e];Ll(t,Kt.producerIndexOfThis[e])}Kt.producerNode[e]!==n&&(Kt.producerNode[e]=n,Kt.producerIndexOfThis[e]=Ba(Kt)?Hy(n,Kt,e):0),Kt.producerLastReadVersion[e]=n.version}function mw(){Lh++}function gw(n){if(!(Ba(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Lh)){if(!n.producerMustRecompute(n)&&!Uh(n)){ky(n);return}n.producerRecomputeValue(n),ky(n)}}function By(n){if(n.liveConsumerNode===void 0)return;let e=Nl;Nl=!0;try{for(let t of n.liveConsumerNode)t.dirty||vw(t)}finally{Nl=e}}function Vy(){return Kt?.consumerAllowSignalWrites!==!1}function vw(n){n.dirty=!0,By(n),n.consumerMarkedDirty?.(n)}function ky(n){n.dirty=!1,n.lastCleanEpoch=Lh}function kh(n){return n&&(n.nextProducerIndex=0),pt(n)}function zy(n,e){if(pt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Ba(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ll(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Uh(n){Fl(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(gw(t),i!==t.version))return!0}return!1}function Bh(n){if(Fl(n),Ba(n))for(let e=0;e<n.producerNode.length;e++)Ll(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Hy(n,e,t){if(Gy(n),n.liveConsumerNode.length===0&&jy(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Hy(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Ll(n,e){if(Gy(n),n.liveConsumerNode.length===1&&jy(n))for(let i=0;i<n.producerNode.length;i++)Ll(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Fl(r),r.producerIndexOfThis[i]=e}}function Ba(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Fl(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Gy(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function jy(n){return n.producerNode!==void 0}function yw(){throw new Error}var Wy=yw;function $y(){Wy()}function qy(n){Wy=n}var _w=null;function Xy(n){let e=Object.create(Vh);e.value=n;let t=()=>(Fh(e),e.value);return t[Fi]=e,t}function kl(n,e){Vy()||$y(),n.equal(n.value,e)||(n.value=e,xw(n))}function Yy(n,e){Vy()||$y(),kl(n,e(n.value))}var Vh=Ft(Se({},Ol),{equal:pw,value:void 0,kind:"signal"});function xw(n){n.version++,mw(),By(n),_w?.()}function qe(n){return typeof n=="function"}function oo(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ul=oo(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Va(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Zt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(qe(i))try{i()}catch(s){e=s instanceof Ul?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Zy(s)}catch(o){e=e??[],o instanceof Ul?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ul(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Zy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Va(t,e)}remove(e){let{_finalizers:t}=this;t&&Va(t,e),e instanceof n&&e._removeParent(this)}};Zt.EMPTY=(()=>{let n=new Zt;return n.closed=!0,n})();var zh=Zt.EMPTY;function Bl(n){return n instanceof Zt||n&&"closed"in n&&qe(n.remove)&&qe(n.add)&&qe(n.unsubscribe)}function Zy(n){qe(n)?n():n.unsubscribe()}var mi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ao={setTimeout(n,e,...t){let{delegate:i}=ao;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ao;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Vl(n){ao.setTimeout(()=>{let{onUnhandledError:e}=mi;if(e)e(n);else throw n})}function za(){}var Jy=Hh("C",void 0,void 0);function Qy(n){return Hh("E",void 0,n)}function Ky(n){return Hh("N",n,void 0)}function Hh(n,e,t){return{kind:n,value:e,error:t}}var ys=null;function co(n){if(mi.useDeprecatedSynchronousErrorHandling){let e=!ys;if(e&&(ys={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ys;if(ys=null,t)throw i}}else n()}function e0(n){mi.useDeprecatedSynchronousErrorHandling&&ys&&(ys.errorThrown=!0,ys.error=n)}var _s=class extends Zt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Bl(e)&&e.add(this)):this.destination=bw}static create(e,t,i){return new lo(e,t,i)}next(e){this.isStopped?jh(Ky(e),this):this._next(e)}error(e){this.isStopped?jh(Qy(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?jh(Jy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Mw=Function.prototype.bind;function Gh(n,e){return Mw.call(n,e)}var Wh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){zl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){zl(i)}else zl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){zl(t)}}},lo=class extends _s{constructor(e,t,i){super();let r;if(qe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&mi.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Gh(e.next,s),error:e.error&&Gh(e.error,s),complete:e.complete&&Gh(e.complete,s)}):r=e}this.destination=new Wh(r)}};function zl(n){mi.useDeprecatedSynchronousErrorHandling?e0(n):Vl(n)}function Ew(n){throw n}function jh(n,e){let{onStoppedNotification:t}=mi;t&&ao.setTimeout(()=>t(n,e))}var bw={closed:!0,next:za,error:Ew,complete:za};var uo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Zn(n){return n}function $h(...n){return qh(n)}function qh(n){return n.length===0?Zn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var At=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=ww(t)?t:new lo(t,i,r);return co(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=t0(i),new i((r,s)=>{let o=new lo({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[uo](){return this}pipe(...t){return qh(t)(this)}toPromise(t){return t=t0(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function t0(n){var e;return(e=n??mi.Promise)!==null&&e!==void 0?e:Promise}function Sw(n){return n&&qe(n.next)&&qe(n.error)&&qe(n.complete)}function ww(n){return n&&n instanceof _s||Sw(n)&&Bl(n)}function Xh(n){return qe(n?.lift)}function mt(n){return e=>{if(Xh(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function gt(n,e,t,i,r){return new Yh(n,e,t,i,r)}var Yh=class extends _s{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function fo(){return mt((n,e)=>{let t=null;n._refCount++;let i=gt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var ho=class extends At{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Xh(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Zt;let t=this.getSubject();e.add(this.source.subscribe(gt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Zt.EMPTY)}return e}refCount(){return fo()(this)}};var n0=oo(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var dn=(()=>{class n extends At{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Hl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new n0}next(t){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?zh:(this.currentObservers=null,s.push(t),new Zt(()=>{this.currentObservers=null,Va(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new At;return t.source=this,t}}return n.create=(e,t)=>new Hl(e,t),n})(),Hl=class extends dn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:zh}};var fn=class extends dn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var kn=new At(n=>n.complete());function i0(n){return n&&qe(n.schedule)}function r0(n){return n[n.length-1]}function s0(n){return qe(r0(n))?n.pop():void 0}function Ur(n){return i0(r0(n))?n.pop():void 0}function a0(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function o0(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function xs(n){return this instanceof xs?(this.v=n,this):new xs(n)}function c0(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(m,p){s.push([h,v,m,p])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof xs?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function l0(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof o0=="function"?o0(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Gl=n=>n&&typeof n.length=="number"&&typeof n!="function";function jl(n){return qe(n?.then)}function Wl(n){return qe(n[uo])}function $l(n){return Symbol.asyncIterator&&qe(n?.[Symbol.asyncIterator])}function ql(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Tw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Xl=Tw();function Yl(n){return qe(n?.[Xl])}function Zl(n){return c0(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield xs(t.read());if(r)return yield xs(void 0);yield yield xs(i)}}finally{t.releaseLock()}})}function Jl(n){return qe(n?.getReader)}function cn(n){if(n instanceof At)return n;if(n!=null){if(Wl(n))return Cw(n);if(Gl(n))return Dw(n);if(jl(n))return Iw(n);if($l(n))return u0(n);if(Yl(n))return Aw(n);if(Jl(n))return Rw(n)}throw ql(n)}function Cw(n){return new At(e=>{let t=n[uo]();if(qe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Dw(n){return new At(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Iw(n){return new At(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Vl)})}function Aw(n){return new At(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function u0(n){return new At(e=>{Pw(n,e).catch(t=>e.error(t))})}function Rw(n){return u0(Zl(n))}function Pw(n,e){var t,i,r,s;return a0(this,void 0,void 0,function*(){try{for(t=l0(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Un(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Ql(n,e=0){return mt((t,i)=>{t.subscribe(gt(i,r=>Un(i,n,()=>i.next(r),e),()=>Un(i,n,()=>i.complete(),e),r=>Un(i,n,()=>i.error(r),e)))})}function Kl(n,e=0){return mt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function d0(n,e){return cn(n).pipe(Kl(e),Ql(e))}function f0(n,e){return cn(n).pipe(Kl(e),Ql(e))}function h0(n,e){return new At(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function p0(n,e){return new At(t=>{let i;return Un(t,e,()=>{i=n[Xl](),Un(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>qe(i?.return)&&i.return()})}function eu(n,e){if(!n)throw new Error("Iterable cannot be null");return new At(t=>{Un(t,e,()=>{let i=n[Symbol.asyncIterator]();Un(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function m0(n,e){return eu(Zl(n),e)}function g0(n,e){if(n!=null){if(Wl(n))return d0(n,e);if(Gl(n))return h0(n,e);if(jl(n))return f0(n,e);if($l(n))return eu(n,e);if(Yl(n))return p0(n,e);if(Jl(n))return m0(n,e)}throw ql(n)}function en(n,e){return e?g0(n,e):cn(n)}function Ye(...n){let e=Ur(n);return en(n,e)}function po(n,e){let t=qe(n)?n:()=>n,i=r=>r.error(t());return new At(e?r=>e.schedule(i,0,r):i)}function Zh(n){return!!n&&(n instanceof At||qe(n.lift)&&qe(n.subscribe))}var tr=oo(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function vt(n,e){return mt((t,i)=>{let r=0;t.subscribe(gt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Nw}=Array;function Ow(n,e){return Nw(e)?n(...e):n(e)}function v0(n){return vt(e=>Ow(n,e))}var{isArray:Lw}=Array,{getPrototypeOf:Fw,prototype:kw,keys:Uw}=Object;function y0(n){if(n.length===1){let e=n[0];if(Lw(e))return{args:e,keys:null};if(Bw(e)){let t=Uw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Bw(n){return n&&typeof n=="object"&&Fw(n)===kw}function _0(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function tu(...n){let e=Ur(n),t=s0(n),{args:i,keys:r}=y0(n);if(i.length===0)return en([],e);let s=new At(Vw(i,e,r?o=>_0(r,o):Zn));return t?s.pipe(v0(t)):s}function Vw(n,e,t=Zn){return i=>{x0(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)x0(e,()=>{let l=en(n[c],e),u=!1;l.subscribe(gt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function x0(n,e,t){n?Un(t,n,e):e()}function M0(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;cn(t(v,u++)).subscribe(gt(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?Un(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(gt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function tn(n,e,t=1/0){return qe(e)?tn((i,r)=>vt((s,o)=>e(i,s,r,o))(cn(n(i,r))),t):(typeof e=="number"&&(t=e),mt((i,r)=>M0(i,r,n,t)))}function Jh(n=1/0){return tn(Zn,n)}function E0(){return Jh(1)}function mo(...n){return E0()(en(n,Ur(n)))}function nu(n){return new At(e=>{cn(n()).subscribe(e)})}function gi(n,e){return mt((t,i)=>{let r=0;t.subscribe(gt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Br(n){return mt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(gt(t,void 0,void 0,o=>{s=cn(n(o,Br(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function b0(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(gt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function go(n,e){return qe(e)?tn(n,e,1):tn(n,1)}function Vr(n){return mt((e,t)=>{let i=!1;e.subscribe(gt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function nr(n){return n<=0?()=>kn:mt((e,t)=>{let i=0;e.subscribe(gt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function iu(n=zw){return mt((e,t)=>{let i=!1;e.subscribe(gt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function zw(){return new tr}function Ha(n){return mt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ir(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gi((r,s)=>n(r,s,i)):Zn,nr(1),t?Vr(e):iu(()=>new tr))}function vo(n){return n<=0?()=>kn:mt((e,t)=>{let i=[];e.subscribe(gt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Qh(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gi((r,s)=>n(r,s,i)):Zn,vo(1),t?Vr(e):iu(()=>new tr))}function Kh(n,e){return mt(b0(n,e,arguments.length>=2,!0))}function ep(...n){let e=Ur(n);return mt((t,i)=>{(e?mo(n,t,e):mo(n,t)).subscribe(i)})}function vi(n,e){return mt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(gt(i,c=>{r?.unsubscribe();let l=0,u=s++;cn(n(c,u)).subscribe(r=gt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function tp(n){return mt((e,t)=>{cn(n).subscribe(gt(t,()=>t.complete(),za)),!t.closed&&e.subscribe(t)})}function hn(n,e,t){let i=qe(n)||e||t?{next:n,error:e,complete:t}:n;return i?mt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(gt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Zn}var p_="https://g.co/ng/security#xss",Le=class extends Error{code;constructor(e,t){super(pm(e,t)),this.code=e}};function pm(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var m_=Symbol("InputSignalNode#UNSET"),Hw=Ft(Se({},Vh),{transformFn:void 0,applyValueToInputSignal(n,e){kl(n,e)}});function g_(n,e){let t=Object.create(Hw);t.value=n,t.transformFn=e?.transform;function i(){if(Fh(t),t.value===m_)throw new Le(-950,!1);return t.value}return i[Fi]=t,i}function oc(n){return{toString:n}.toString()}var ru="__parameters__";function Gw(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function v_(n,e,t){return oc(()=>{let i=Gw(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(ru)?c[ru]:Object.defineProperty(c,ru,{value:[]})[ru];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var rr=globalThis;function Ot(n){for(let e in n)if(n[e]===Ot)return e;throw Error("Could not find renamed property on target object.")}function Vn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Vn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function S0(n,e){return n?e?`${n} ${e}`:n:e||""}var jw=Ot({__forward_ref__:Ot});function y_(n){return n.__forward_ref__=y_,n.toString=function(){return Vn(this())},n}function si(n){return __(n)?n():n}function __(n){return typeof n=="function"&&n.hasOwnProperty(jw)&&n.__forward_ref__===y_}function Ve(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ac(n){return{providers:n.providers||[],imports:n.imports||[]}}function zu(n){return w0(n,M_)||w0(n,E_)}function x_(n){return zu(n)!==null}function w0(n,e){return n.hasOwnProperty(e)?n[e]:null}function Ww(n){let e=n&&(n[M_]||n[E_]);return e||null}function T0(n){return n&&(n.hasOwnProperty(C0)||n.hasOwnProperty($w))?n[C0]:null}var M_=Ot({\u0275prov:Ot}),C0=Ot({\u0275inj:Ot}),E_=Ot({ngInjectableDef:Ot}),$w=Ot({ngInjectorDef:Ot}),je=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ve({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function b_(n){return n&&!!n.\u0275providers}var qw=Ot({\u0275cmp:Ot}),Xw=Ot({\u0275dir:Ot}),Yw=Ot({\u0275pipe:Ot}),Zw=Ot({\u0275mod:Ot}),mu=Ot({\u0275fac:Ot}),$a=Ot({__NG_ELEMENT_ID__:Ot}),D0=Ot({__NG_ENV_ID__:Ot});function Hu(n){return typeof n=="string"?n:n==null?"":String(n)}function Jw(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Hu(n)}function Qw(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Le(-200,n)}function mm(n,e){throw new Le(-201,!1)}var st=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(st||{}),pp;function S_(){return pp}function Bn(n){let e=pp;return pp=n,e}function w_(n,e,t){let i=zu(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&st.Optional)return null;if(e!==void 0)return e;mm(n,"Injector")}var Kw={},qa=Kw,mp="__NG_DI_FLAG__",gu="ngTempTokenPath",eT="ngTokenPath",tT=/\n/gm,nT="\u0275",I0="__source",Mo;function iT(){return Mo}function zr(n){let e=Mo;return Mo=n,e}function rT(n,e=st.Default){if(Mo===void 0)throw new Le(-203,!1);return Mo===null?w_(n,void 0,e):Mo.get(n,e&st.Optional?null:void 0,e)}function Ze(n,e=st.Default){return(S_()||rT)(si(n),e)}function me(n,e=st.Default){return Ze(n,Gu(e))}function Gu(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function gp(n){let e=[];for(let t=0;t<n.length;t++){let i=si(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Le(900,!1);let r,s=st.Default;for(let o=0;o<i.length;o++){let a=i[o],c=sT(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ze(r,s))}else e.push(Ze(i))}return e}function T_(n,e){return n[mp]=e,n.prototype[mp]=e,n}function sT(n){return n[mp]}function oT(n,e,t,i){let r=n[gu];throw e[I0]&&r.unshift(e[I0]),n.message=aT(`
`+n.message,r,t,i),n[eT]=r,n[gu]=null,n}function aT(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==nT?n.slice(2):n;let r=Vn(e);if(Array.isArray(e))r=e.map(Vn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Vn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(tT,`
  `)}`}var gm=T_(v_("Optional"),8);var cT=T_(v_("SkipSelf"),4);function bs(n,e){let t=n.hasOwnProperty(mu);return t?n[mu]:null}function lT(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function uT(n){return n.flat(Number.POSITIVE_INFINITY)}function vm(n,e){n.forEach(t=>Array.isArray(t)?vm(t,e):e(t))}function C_(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function vu(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function dT(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function fT(n,e,t){let i=cc(n,e);return i>=0?n[i|1]=t:(i=~i,dT(n,i,e,t)),i}function np(n,e){let t=cc(n,e);if(t>=0)return n[t|1]}function cc(n,e){return hT(n,e,1)}function hT(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var bo={},_i=[],So=new je(""),D_=new je("",-1),I_=new je(""),yu=class{get(e,t=qa){if(t===qa){let i=new Error(`NullInjectorError: No provider for ${Vn(e)}!`);throw i.name="NullInjectorError",i}return t}};function A_(n,e){let t=n[Zw]||null;if(!t&&e===!0)throw new Error(`Type ${Vn(n)} does not have '\u0275mod' property.`);return t}function Ss(n){return n[qw]||null}function R_(n){return n[Xw]||null}function P_(n){return n[Yw]||null}function N_(n){let e=Ss(n)||R_(n)||P_(n);return e!==null&&e.standalone}function ym(n){return{\u0275providers:n}}function _m(...n){return{\u0275providers:O_(!0,n),\u0275fromNgModule:!0}}function O_(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return vm(e,o=>{let a=o;vp(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&L_(r,s),t}function L_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];xm(r,s=>{e(s,i)})}}function vp(n,e,t,i){if(n=si(n),!n)return!1;let r=null,s=T0(n),o=!s&&Ss(n);if(!s&&!o){let c=n.ngModule;if(s=T0(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)vp(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{vm(s.imports,u=>{vp(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&L_(l,e)}if(!a){let l=bs(r)||(()=>new r);e({provide:r,useFactory:l,deps:_i},r),e({provide:I_,useValue:r,multi:!0},r),e({provide:So,useValue:()=>Ze(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;xm(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function xm(n,e){for(let t of n)b_(t)&&(t=t.\u0275providers),Array.isArray(t)?xm(t,e):e(t)}var pT=Ot({provide:String,useValue:Ot});function F_(n){return n!==null&&typeof n=="object"&&pT in n}function mT(n){return!!(n&&n.useExisting)}function gT(n){return!!(n&&n.useFactory)}function yp(n){return typeof n=="function"}var ju=new je(""),lu={},vT={},ip;function Mm(){return ip===void 0&&(ip=new yu),ip}var ai=class{},Xa=class extends ai{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,xp(e,o=>this.processProvider(o)),this.records.set(D_,yo(void 0,this)),r.has("environment")&&this.records.set(ai,yo(void 0,this));let s=this.records.get(ju);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(I_,_i,st.Self))}destroy(){ja(this),this._destroyed=!0;let e=pt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),pt(e)}}onDestroy(e){return ja(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ja(this);let t=zr(this),i=Bn(void 0),r;try{return e()}finally{zr(t),Bn(i)}}get(e,t=qa,i=st.Default){if(ja(this),e.hasOwnProperty(D0))return e[D0](this);i=Gu(i);let r,s=zr(this),o=Bn(void 0);try{if(!(i&st.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=bT(e)&&zu(e);l&&this.injectableDefInScope(l)?c=yo(_p(e),lu):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&st.Self?Mm():this.parent;return t=i&st.Optional&&t===qa?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[gu]=a[gu]||[]).unshift(Vn(e)),s)throw a;return oT(a,e,"R3InjectorError",this.source)}else throw a}finally{Bn(o),zr(s)}}resolveInjectorInitializers(){let e=pt(null),t=zr(this),i=Bn(void 0),r;try{let s=this.get(So,_i,st.Self);for(let o of s)o()}finally{zr(t),Bn(i),pt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Vn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=si(e);let t=yp(e)?e:si(e&&e.provide),i=_T(e);if(!yp(e)&&e.multi===!0){let r=this.records.get(t);r||(r=yo(void 0,lu,!0),r.factory=()=>gp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=pt(null);try{return t.value===lu&&(t.value=vT,t.value=t.factory()),typeof t.value=="object"&&t.value&&ET(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{pt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=si(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function _p(n){let e=zu(n),t=e!==null?e.factory:bs(n);if(t!==null)return t;if(n instanceof je)throw new Le(204,!1);if(n instanceof Function)return yT(n);throw new Le(204,!1)}function yT(n){if(n.length>0)throw new Le(204,!1);let t=Ww(n);return t!==null?()=>t.factory(n):()=>new n}function _T(n){if(F_(n))return yo(void 0,n.useValue);{let e=xT(n);return yo(e,lu)}}function xT(n,e,t){let i;if(yp(n)){let r=si(n);return bs(r)||_p(r)}else if(F_(n))i=()=>si(n.useValue);else if(gT(n))i=()=>n.useFactory(...gp(n.deps||[]));else if(mT(n))i=()=>Ze(si(n.useExisting));else{let r=si(n&&(n.useClass||n.provide));if(MT(n))i=()=>new r(...gp(n.deps));else return bs(r)||_p(r)}return i}function ja(n){if(n.destroyed)throw new Le(205,!1)}function yo(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function MT(n){return!!n.deps}function ET(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function bT(n){return typeof n=="function"||typeof n=="object"&&n instanceof je}function xp(n,e){for(let t of n)Array.isArray(t)?xp(t,e):t&&b_(t)?xp(t.\u0275providers,e):e(t)}function Ei(n,e){n instanceof Xa&&ja(n);let t,i=zr(n),r=Bn(void 0);try{return e()}finally{zr(i),Bn(r)}}function ST(){return S_()!==void 0||iT()!=null}function wT(n){return typeof n=="function"}var lr=0,Ke=1,Ge=2,xn=3,xi=4,bi=5,Ya=6,_u=7,pn=8,Za=9,sr=10,Mn=11,Ja=12,A0=13,Ro=14,Mi=15,ws=16,_o=17,or=18,Wu=19,k_=20,Hr=21,rp=22,xu=23,Qn=24,zn=25,U_=1;var Ts=7,Mu=8,wo=9,yn=10;function Gr(n){return Array.isArray(n)&&typeof n[U_]=="object"}function ur(n){return Array.isArray(n)&&n[U_]===!0}function B_(n){return(n.flags&4)!==0}function Rs(n){return n.componentOffset>-1}function Em(n){return(n.flags&1)===1}function Po(n){return!!n.template}function Eu(n){return(n[Ge]&512)!==0}function lc(n){return(n[Ge]&256)===256}var Mp=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function V_(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var bm=(()=>{let n=()=>z_;return n.ngInherit=!0,n})();function z_(n){return n.type.prototype.ngOnChanges&&(n.setInput=CT),TT}function TT(){let n=G_(this),e=n?.current;if(e){let t=n.previous;if(t===bo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function CT(n,e,t,i,r){let s=this.declaredInputs[i],o=G_(n)||DT(n,{previous:bo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Mp(l&&l.currentValue,t,c===bo),V_(n,e,r,t)}var H_="__ngSimpleChanges__";function G_(n){return n[H_]||null}function DT(n,e){return n[H_]=e}var R0=null;var oi=function(n,e,t){R0?.(n,e,t)},j_="svg",IT="math";function Ui(n){for(;Array.isArray(n);)n=n[lr];return n}function W_(n,e){return Ui(e[n])}function zi(n,e){return Ui(e[n.index])}function Sm(n,e){return n.data[e]}function AT(n,e){return n[e]}function Bi(n,e){let t=e[n];return Gr(t)?t:t[lr]}function RT(n){return(n[Ge]&4)===4}function wm(n){return(n[Ge]&128)===128}function PT(n){return ur(n[xn])}function To(n,e){return e==null?null:n[e]}function $_(n){n[_o]=0}function Tm(n){n[Ge]&1024||(n[Ge]|=1024,wm(n)&&qu(n))}function NT(n,e){for(;n>0;)e=e[Ro],n--;return e}function $u(n){return!!(n[Ge]&9216||n[Qn]?.dirty)}function Ep(n){n[sr].changeDetectionScheduler?.notify(9),n[Ge]&64&&(n[Ge]|=1024),$u(n)&&qu(n)}function qu(n){n[sr].changeDetectionScheduler?.notify(0);let e=Cs(n);for(;e!==null&&!(e[Ge]&8192||(e[Ge]|=8192,!wm(e)));)e=Cs(e)}function q_(n,e){if(lc(n))throw new Le(911,!1);n[Hr]===null&&(n[Hr]=[]),n[Hr].push(e)}function OT(n,e){if(n[Hr]===null)return;let t=n[Hr].indexOf(e);t!==-1&&n[Hr].splice(t,1)}function Cs(n){let e=n[xn];return ur(e)?e[xn]:e}function X_(n){return n[_u]??=[]}function Y_(n){return n.cleanup??=[]}function LT(n,e,t,i){let r=X_(e);r.push(t),n.firstCreatePass&&Y_(n).push(i,r.length-1)}var nt={lFrame:nx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var bp=!1;function FT(){return nt.lFrame.elementDepthCount}function kT(){nt.lFrame.elementDepthCount++}function UT(){nt.lFrame.elementDepthCount--}function Cm(){return nt.bindingsEnabled}function BT(){return nt.skipHydrationRootTNode!==null}function VT(n){return nt.skipHydrationRootTNode===n}function zT(){nt.skipHydrationRootTNode=null}function Et(){return nt.lFrame.lView}function li(){return nt.lFrame.tView}function Hi(n){return nt.lFrame.contextLView=n,n[pn]}function Gi(n){return nt.lFrame.contextLView=null,n}function ji(){let n=Z_();for(;n!==null&&n.type===64;)n=n.parent;return n}function Z_(){return nt.lFrame.currentTNode}function HT(){let n=nt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function uc(n,e){let t=nt.lFrame;t.currentTNode=n,t.isParent=e}function J_(){return nt.lFrame.isParent}function GT(){nt.lFrame.isParent=!1}function Q_(){return bp}function P0(n){let e=bp;return bp=n,e}function Dm(){let n=nt.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function jT(n){return nt.lFrame.bindingIndex=n}function Xu(){return nt.lFrame.bindingIndex++}function WT(n){let e=nt.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function $T(){return nt.lFrame.inI18n}function qT(n,e){let t=nt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Sp(e)}function XT(){return nt.lFrame.currentDirectiveIndex}function Sp(n){nt.lFrame.currentDirectiveIndex=n}function YT(n){let e=nt.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function K_(){return nt.lFrame.currentQueryIndex}function Im(n){nt.lFrame.currentQueryIndex=n}function ZT(n){let e=n[Ke];return e.type===2?e.declTNode:e.type===1?n[bi]:null}function ex(n,e,t){if(t&st.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&st.Host);)if(r=ZT(s),r===null||(s=s[Ro],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=nt.lFrame=tx();return i.currentTNode=e,i.lView=n,!0}function Am(n){let e=tx(),t=n[Ke];nt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function tx(){let n=nt.lFrame,e=n===null?null:n.child;return e===null?nx(n):e}function nx(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function ix(){let n=nt.lFrame;return nt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var rx=ix;function Rm(){let n=ix();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function JT(n){return(nt.lFrame.contextLView=NT(n,nt.lFrame.contextLView))[pn]}function Ps(){return nt.lFrame.selectedIndex}function Ds(n){nt.lFrame.selectedIndex=n}function QT(){let n=nt.lFrame;return Sm(n.tView,n.selectedIndex)}function Pm(){nt.lFrame.currentNamespace=j_}function Nm(){KT()}function KT(){nt.lFrame.currentNamespace=null}function eC(){return nt.lFrame.currentNamespace}var sx=!0;function Om(){return sx}function Lm(n){sx=n}function tC(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=z_(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function ox(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function uu(n,e,t){ax(n,e,3,t)}function du(n,e,t,i){(n[Ge]&3)===t&&ax(n,e,t,i)}function sp(n,e){let t=n[Ge];(t&3)===e&&(t&=16383,t+=1,n[Ge]=t)}function ax(n,e,t,i){let r=i!==void 0?n[_o]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[_o]+=65536),(a<s||s==-1)&&(nC(n,t,e,c),n[_o]=(n[_o]&4294901760)+c+2),c++}function N0(n,e){oi(4,n,e);let t=pt(null);try{e.call(n)}finally{pt(t),oi(5,n,e)}}function nC(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ge]>>14<n[_o]>>16&&(n[Ge]&3)===e&&(n[Ge]+=16384,N0(a,s)):N0(a,s)}var Eo=-1,Qa=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function iC(n){return n instanceof Qa}function rC(n){return(n.flags&8)!==0}function sC(n){return(n.flags&16)!==0}function oC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];cC(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function aC(n){return n===3||n===4||n===6}function cC(n){return n.charCodeAt(0)===64}function Fm(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?O0(n,t,r,null,e[++i]):O0(n,t,r,null,null))}}return n}function O0(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var op={},wp=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Gu(i);let r=this.injector.get(e,op,i);return r!==op||t===op?r:this.parentInjector.get(e,t,i)}};function cx(n){return n!==Eo}function bu(n){return n&32767}function lC(n){return n>>16}function Su(n,e){let t=lC(n),i=e;for(;t>0;)i=i[Ro],t--;return i}var Tp=!0;function wu(n){let e=Tp;return Tp=n,e}var uC=256,lx=uC-1,ux=5,dC=0,ki={};function fC(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty($a)&&(i=t[$a]),i==null&&(i=t[$a]=dC++);let r=i&lx,s=1<<r;e.data[n+(r>>ux)]|=s}function dx(n,e){let t=fx(n,e);if(t!==-1)return t;let i=e[Ke];i.firstCreatePass&&(n.injectorIndex=e.length,ap(i.data,n),ap(e,null),ap(i.blueprint,null));let r=km(n,e),s=n.injectorIndex;if(cx(r)){let o=bu(r),a=Su(r,e),c=a[Ke].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function ap(n,e){n.push(0,0,0,0,0,0,0,0,e)}function fx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function km(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=vx(r),i===null)return Eo;if(t++,r=r[Ro],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Eo}function hC(n,e,t){fC(n,e,t)}function hx(n,e,t){if(t&st.Optional||n!==void 0)return n;mm(e,"NodeInjector")}function px(n,e,t,i){if(t&st.Optional&&i===void 0&&(i=null),!(t&(st.Self|st.Host))){let r=n[Za],s=Bn(void 0);try{return r?r.get(e,i,t&st.Optional):w_(e,i,t&st.Optional)}finally{Bn(s)}}return hx(i,e,t)}function mx(n,e,t,i=st.Default,r){if(n!==null){if(e[Ge]&2048&&!(i&st.Self)){let o=vC(n,e,t,i,ki);if(o!==ki)return o}let s=gx(n,e,t,i,ki);if(s!==ki)return s}return px(e,t,i,r)}function gx(n,e,t,i,r){let s=mC(t);if(typeof s=="function"){if(!ex(e,n,i))return i&st.Host?hx(r,t,i):px(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&st.Optional))mm(t);else return o}finally{rx()}}else if(typeof s=="number"){let o=null,a=fx(n,e),c=Eo,l=i&st.Host?e[Mi][bi]:null;for((a===-1||i&st.SkipSelf)&&(c=a===-1?km(n,e):e[a+8],c===Eo||!F0(i,!1)?a=-1:(o=e[Ke],a=bu(c),e=Su(c,e)));a!==-1;){let u=e[Ke];if(L0(s,a,u.data)){let d=pC(a,e,t,o,i,l);if(d!==ki)return d}c=e[a+8],c!==Eo&&F0(i,e[Ke].data[a+8]===l)&&L0(s,a,e)?(o=u,a=bu(c),e=Su(c,e)):a=-1}}return r}function pC(n,e,t,i,r,s){let o=e[Ke],a=o.data[n+8],c=i==null?Rs(a)&&Tp:i!=o&&(a.type&3)!==0,l=r&st.Host&&s===a,u=fu(a,o,t,c,l);return u!==null?Tu(e,o,u,a):ki}function fu(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Po(h)&&h.type===t)return c}return null}function Tu(n,e,t,i){let r=n[t],s=e.data;if(iC(r)){let o=r;o.resolving&&Qw(Jw(s[t]));let a=wu(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Bn(o.injectImpl):null,u=ex(n,i,st.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&tC(t,s[t],e)}finally{l!==null&&Bn(l),wu(a),o.resolving=!1,rx()}}return r}function mC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty($a)?n[$a]:void 0;return typeof e=="number"?e>=0?e&lx:gC:e}function L0(n,e,t){let i=1<<n;return!!(t[e+(n>>ux)]&i)}function F0(n,e){return!(n&st.Self)&&!(n&st.Host&&e)}var Es=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return mx(this._tNode,this._lView,e,Gu(i),t)}};function gC(){return new Es(ji(),Et())}function Um(n){return oc(()=>{let e=n.prototype.constructor,t=e[mu]||Cp(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[mu]||Cp(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Cp(n){return __(n)?()=>{let e=Cp(si(n));return e&&e()}:bs(n)}function vC(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ge]&2048&&!Eu(o);){let a=gx(s,o,t,i|st.Self,ki);if(a!==ki)return a;let c=s.parent;if(!c){let l=o[k_];if(l){let u=l.get(t,ki,i);if(u!==ki)return u}c=vx(o),o=o[Ro]}s=c}return r}function vx(n){let e=n[Ke],t=e.type;return t===2?e.declTNode:t===1?n[bi]:null}function k0(n,e=null,t=null,i){let r=yx(n,e,t,i);return r.resolveInjectorInitializers(),r}function yx(n,e=null,t=null,i,r=new Set){let s=[t||_i,_m(n)];return i=i||(typeof n=="object"?void 0:Vn(n)),new Xa(s,e||Mm(),i||null,r)}var ci=class n{static THROW_IF_NOT_FOUND=qa;static NULL=new yu;static create(e,t){if(Array.isArray(e))return k0({name:""},t,e,"");{let i=e.name??"";return k0({name:i},e.parent,e.providers,i)}}static \u0275prov=Ve({token:n,providedIn:"any",factory:()=>Ze(D_)});static __NG_ELEMENT_ID__=-1};var yC=new je("");yC.__NG_ELEMENT_ID__=n=>{let e=ji();if(e===null)throw new Le(204,!1);if(e.type&2)return e.value;if(n&st.Optional)return null;throw new Le(204,!1)};var _x=!1,Yu=(()=>{class n{static __NG_ELEMENT_ID__=_C;static __NG_ENV_ID__=t=>t}return n})(),Dp=class extends Yu{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return q_(this._lView,e),()=>OT(this._lView,e)}};function _C(){return new Dp(Et())}var Ka=class{},Bm=new je("",{providedIn:"root",factory:()=>!1});var xx=new je(""),Mx=new je(""),No=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new fn(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();var Ip=class extends dn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,ST()&&(this.destroyRef=me(Yu,{optional:!0})??void 0,this.pendingTasks=me(No,{optional:!0})??void 0)}emit(e){let t=pt(null);try{super.next(e)}finally{pt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Zt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},Jn=Ip;function Cu(...n){}function Ex(n){let e,t;function i(){n=Cu;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function U0(n){return queueMicrotask(()=>n()),()=>{n=Cu}}var Vm="isAngularZone",Du=Vm+"_ID",xC=0,_n=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Jn(!1);onMicrotaskEmpty=new Jn(!1);onStable=new Jn(!1);onError=new Jn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=_x}=e;if(typeof Zone>"u")throw new Le(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,bC(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Vm)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Le(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Le(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,MC,Cu,Cu);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},MC={};function zm(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function EC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Ex(()=>{n.callbackScheduled=!1,Ap(n),n.isCheckStableRunning=!0,zm(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Ap(n)}function bC(n){let e=()=>{EC(n)},t=xC++;n._inner=n._inner.fork({name:"angular",properties:{[Vm]:!0,[Du]:t,[Du+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(SC(c))return i.invokeTask(s,o,a,c);try{return B0(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),V0(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return B0(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!wC(c)&&e(),V0(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Ap(n),zm(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Ap(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function B0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function V0(n){n._nesting--,zm(n)}var Rp=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Jn;onMicrotaskEmpty=new Jn;onStable=new Jn;onError=new Jn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function SC(n){return bx(n,"__ignore_ng_zone__")}function wC(n){return bx(n,"__scheduler_tick__")}function bx(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var jr=class{_console=console;handleError(e){this._console.error("ERROR",e)}},TC=new je("",{providedIn:"root",factory:()=>{let n=me(_n),e=me(jr);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function z0(n,e){return g_(n,e)}function CC(n){return g_(m_,n)}var Sx=(z0.required=CC,z0);function DC(){return Oo(ji(),Et())}function Oo(n,e){return new qr(zi(n,e))}var qr=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=DC}return n})();function IC(n){return n instanceof qr?n.nativeElement:n}var H0=new Set;function dc(n){H0.has(n)||(H0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function dr(n,e){dc("NgSignals");let t=Xy(n),i=t[Fi];return e?.equal&&(i.equal=e.equal),t.set=r=>kl(i,r),t.update=r=>Yy(i,r),t.asReadonly=AC.bind(t),t}function AC(){let n=this[Fi];if(n.readonlyFn===void 0){let e=()=>this();e[Fi]=n,n.readonlyFn=e}return n.readonlyFn}function RC(){return this._results[Symbol.iterator]()}var Pp=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new dn}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=uT(e);(this._changesDetected=!lT(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=RC};function wx(n){return(n.flags&128)===128}var Tx=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Tx||{}),Cx=new Map,PC=0;function NC(){return PC++}function OC(n){Cx.set(n[Wu],n)}function Np(n){Cx.delete(n[Wu])}var G0="__ngContext__";function Lo(n,e){Gr(e)?(n[G0]=e[Wu],OC(e)):n[G0]=e}function Dx(n){return Ax(n[Ja])}function Ix(n){return Ax(n[xi])}function Ax(n){for(;n!==null&&!ur(n);)n=n[xi];return n}var Op;function Rx(n){Op=n}function Px(){if(Op!==void 0)return Op;if(typeof document<"u")return document;throw new Le(210,!1)}var Hm=new je("",{providedIn:"root",factory:()=>LC}),LC="ng",Gm=new je(""),fc=new je("",{providedIn:"platform",factory:()=>"unknown"});var jm=new je("",{providedIn:"root",factory:()=>Px().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var FC="h",kC="b";var Nx=!1,UC=new je("",{providedIn:"root",factory:()=>Nx});var Ox=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Ox||{}),Zu=new je("");var BC=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();var VC=()=>null;function Lx(n,e,t=!1){return VC(n,e,t)}function Fx(n,e){let t=n.contentQueries;if(t!==null){let i=pt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Im(s),a.contentQueries(2,e[o],o)}}}finally{pt(i)}}}function Lp(n,e,t){Im(0);let i=pt(null);try{e(n,t)}finally{pt(i)}}function kx(n,e,t){if(B_(e)){let i=pt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{pt(i)}}}var Vi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Vi||{}),su;function zC(){if(su===void 0&&(su=null,rr.trustedTypes))try{su=rr.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return su}function Ju(n){return zC()?.createHTML(n)||n}var ou;function HC(){if(ou===void 0&&(ou=null,rr.trustedTypes))try{ou=rr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return ou}function j0(n){return HC()?.createHTML(n)||n}var Iu=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${p_})`}};function hc(n){return n instanceof Iu?n.changingThisBreaksApplicationSecurity:n}function Wm(n,e){let t=GC(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${p_})`)}return t===e}function GC(n){return n instanceof Iu&&n.getTypeName()||null}function jC(n){let e=new kp(n);return WC()?new Fp(e):e}var Fp=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(Ju(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch{return null}}},kp=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=Ju(e),t}};function WC(){try{return!!new window.DOMParser().parseFromString(Ju(""),"text/html")}catch{return!1}}var $C=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function $m(n){return n=String(n),n.match($C)?n:"unsafe:"+n}function fr(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function pc(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var Ux=fr("area,br,col,hr,img,wbr"),Bx=fr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Vx=fr("rp,rt"),qC=pc(Vx,Bx),XC=pc(Bx,fr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),YC=pc(Vx,fr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),W0=pc(Ux,XC,YC,qC),zx=fr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ZC=fr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),JC=fr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),QC=pc(zx,ZC,JC),KC=fr("script,style,template"),Up=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,i=!0,r=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){r.push(t),t=nD(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let s=tD(t);if(s){t=s;break}t=r.pop()}}return this.buf.join("")}startElement(e){let t=$0(e).toLowerCase();if(!W0.hasOwnProperty(t))return this.sanitizedSomething=!0,!KC.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let s=i.item(r),o=s.name,a=o.toLowerCase();if(!QC.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=s.value;zx[a]&&(c=$m(c)),this.buf.push(" ",o,'="',q0(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=$0(e).toLowerCase();W0.hasOwnProperty(t)&&!Ux.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(q0(e))}};function eD(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function tD(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw Hx(e);return e}function nD(n){let e=n.firstChild;if(e&&eD(n,e))throw Hx(e);return e}function $0(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function Hx(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var iD=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,rD=/([^\#-~ |!])/g;function q0(n){return n.replace(/&/g,"&amp;").replace(iD,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(rD,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var au;function Gx(n,e){let t=null;try{au=au||jC(n);let i=e?String(e):"";t=au.getInertBodyElement(i);let r=5,s=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=s,s=t.innerHTML,t=au.getInertBodyElement(i)}while(i!==s);let a=new Up().sanitizeChildren(X0(t)||t);return Ju(a)}finally{if(t){let i=X0(t)||t;for(;i.firstChild;)i.firstChild.remove()}}}function X0(n){return"content"in n&&sD(n)?n.content:null}function sD(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var Qu=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(Qu||{});function jx(n){let e=Wx();return e?j0(e.sanitize(Qu.HTML,n)||""):Wm(n,"HTML")?j0(hc(n)):Gx(Px(),Hu(n))}function mc(n){let e=Wx();return e?e.sanitize(Qu.URL,n)||"":Wm(n,"URL")?hc(n):$m(Hu(n))}function Wx(){let n=Et();return n&&n[sr].sanitizer}function $x(n){return n instanceof Function?n():n}function oD(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var qx="ng-template";function aD(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&oD(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(qm(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function qm(n){return n.type===4&&n.value!==qx}function cD(n,e,t){let i=n.type===4&&!t?qx:n.value;return e===i}function lD(n,e,t){let i=4,r=n.attrs,s=r!==null?fD(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!yi(i)&&!yi(c))return!1;if(o&&yi(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!cD(n,c,t)||c===""&&e.length===1){if(yi(i))return!1;o=!0}}else if(i&8){if(r===null||!aD(n,r,c,t)){if(yi(i))return!1;o=!0}}else{let l=e[++a],u=uD(c,r,qm(n),t);if(u===-1){if(yi(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(yi(i))return!1;o=!0}}}}return yi(i)||o}function yi(n){return(n&1)===0}function uD(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return hD(e,n)}function dD(n,e,t=!1){for(let i=0;i<e.length;i++)if(lD(n,e[i],t))return!0;return!1}function fD(n){for(let e=0;e<n.length;e++){let t=n[e];if(aC(t))return e}return n.length}function hD(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Y0(n,e){return n?":not("+e.trim()+")":e}function pD(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!yi(o)&&(e+=Y0(s,r),r=""),i=o,s=s||!yi(i);t++}return r!==""&&(e+=Y0(s,r)),e}function mD(n){return n.map(pD).join(",")}function gD(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!yi(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Xr={};function vD(n,e){return n.createText(e)}function yD(n,e,t){n.setValue(e,t)}function Xx(n,e,t){return n.createElement(e,t)}function Au(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Yx(n,e,t){n.appendChild(e,t)}function Z0(n,e,t,i,r){i!==null?Au(n,e,t,i,r):Yx(n,e,t)}function _D(n,e,t){n.removeChild(null,e,t)}function xD(n,e,t){n.setAttribute(e,"style",t)}function MD(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Zx(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&oC(n,e,i),r!==null&&MD(n,e,r),s!==null&&xD(n,e,s)}function Xm(n,e,t,i,r,s,o,a,c,l,u){let d=zn+i,f=d+r,h=ED(d,f),g=typeof l=="function"?l():l;return h[Ke]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function ED(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Xr);return t}function bD(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Xm(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Ym(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[lr]=r,d[Ge]=i|4|128|8|64|1024,(l!==null||n&&n[Ge]&2048)&&(d[Ge]|=2048),$_(d),d[xn]=d[Ro]=n,d[pn]=t,d[sr]=o||n&&n[sr],d[Mn]=a||n&&n[Mn],d[Za]=c||n&&n[Za]||null,d[bi]=s,d[Wu]=NC(),d[Ya]=u,d[k_]=l,d[Mi]=e.type==2?n[Mi]:d,d}function SD(n,e,t){let i=zi(e,n),r=bD(t),s=n[sr].rendererFactory,o=Zm(n,Ym(n,r,null,Jx(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Jx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Qx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Zm(n,e){return n[Ja]?n[A0][xi]=e:n[Ja]=e,n[A0]=e,e}function yt(n=1){Kx(li(),Et(),Ps()+n,!1)}function Kx(n,e,t,i){if(!i)if((e[Ge]&3)===3){let s=n.preOrderCheckHooks;s!==null&&uu(e,s,t)}else{let s=n.preOrderHooks;s!==null&&du(e,s,0,t)}Ds(t)}var Ku=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Ku||{});function eM(n,e,t,i){let r=pt(null);try{let[s,o,a]=n.inputs[t],c=null;o&Ku.SignalBased&&(c=e[s][Fi]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):V_(e,c,s,i)}finally{pt(r)}}function tM(n,e,t,i,r){let s=Ps(),o=i&2;try{Ds(-1),o&&e.length>zn&&Kx(n,e,zn,!1),oi(o?2:0,r),t(i,r)}finally{Ds(s),oi(o?3:1,r)}}function nM(n,e,t){Cm()&&(Lo(zi(t,e),e),iM(n,e,t))}function iM(n,e,t){RD(n,e,t),(t.flags&64)===64&&PD(n,e,t)}function rM(n,e,t=zi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function wD(n,e,t,i){let s=i.get(UC,Nx)||t===Vi.ShadowDom,o=n.selectRootElement(e,s);return TD(o),o}function TD(n){CD(n)}var CD=()=>null;function DD(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function ID(n,e,t,i,r,s,o,a){let c=e.inputs,l;if(!a&&c!=null&&(l=c[i]))Jm(n,t,l,i,r),Rs(e)&&AD(t,e.index);else if(e.type&3){let u=zi(e,t);i=DD(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(u,i,r)}else e.type&12}function AD(n,e){let t=Bi(e,n);t[Ge]&16||(t[Ge]|=64)}function RD(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Rs(t)&&SD(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||dx(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Tu(e,n,o,t);if(Lo(c,e),s!==null&&OD(e,o-i,c,a,t,s),Po(a)){let l=Bi(t.index,e);l[pn]=Tu(e,n,o,t)}}}function PD(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=XT();try{Ds(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Sp(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ND(c,l)}}finally{Ds(-1),Sp(o)}}function ND(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function sM(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];dD(e,s.selectors,!1)&&(i??=[],Po(s)?i.unshift(s):i.push(s))}return i}function OD(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];eM(i,t,c,l)}}function oM(n,e){let t=n[Za],i=t?t.get(jr,null):null;i&&i.handleError(e)}function Jm(n,e,t,i,r){for(let s=0;s<t.length;s+=2){let o=t[s],a=t[s+1],c=e[o],l=n.data[o];eM(l,c,a,r)}}function LD(n,e){let t=Bi(e,n),i=t[Ke];FD(i,t);let r=t[lr];r!==null&&t[Ya]===null&&(t[Ya]=Lx(r,t[Za])),Qm(i,t,t[pn])}function FD(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Qm(n,e,t){Am(e);try{let i=n.viewQuery;i!==null&&Lp(1,i,t);let r=n.template;r!==null&&tM(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[or]?.finishViewCreation(n),n.staticContentQueries&&Fx(n,e),n.staticViewQueries&&Lp(2,n.viewQuery,t);let s=n.components;s!==null&&kD(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ge]&=-5,Rm()}}function kD(n,e){for(let t=0;t<e.length;t++)LD(n,e[t])}function ed(n,e,t,i){let r=pt(null);try{let s=e.tView,a=n[Ge]&4096?4096:16,c=Ym(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[ws]=l;let u=n[or];return u!==null&&(c[or]=u.createEmbeddedView(s)),Qm(s,c,t),c}finally{pt(r)}}function ec(n,e){return!e||e.firstChild===null||wx(n)}var UD;function Km(n,e){return UD(n,e)}var ar=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(ar||{});function aM(n){return(n.flags&32)===32}function xo(n,e,t,i,r){if(i!=null){let s,o=!1;ur(i)?s=i:Gr(i)&&(o=!0,i=i[lr]);let a=Ui(i);n===0&&t!==null?r==null?Yx(e,t,a):Au(e,t,a,r||null,!0):n===1&&t!==null?Au(e,t,a,r||null,!0):n===2?_D(e,a,o):n===3&&e.destroyNode(a),s!=null&&ZD(e,n,s,t,r)}}function BD(n,e){cM(n,e),e[lr]=null,e[bi]=null}function VD(n,e,t,i,r,s){i[lr]=r,i[bi]=e,nd(n,i,t,1,r,s)}function cM(n,e){e[sr].changeDetectionScheduler?.notify(10),nd(n,e,e[Mn],2,null,null)}function zD(n){let e=n[Ja];if(!e)return cp(n[Ke],n);for(;e;){let t=null;if(Gr(e))t=e[Ja];else{let i=e[yn];i&&(t=i)}if(!t){for(;e&&!e[xi]&&e!==n;)Gr(e)&&cp(e[Ke],e),e=e[xn];e===null&&(e=n),Gr(e)&&cp(e[Ke],e),t=e&&e[xi]}e=t}}function eg(n,e){let t=n[wo],i=t.indexOf(e);t.splice(i,1)}function td(n,e){if(lc(e))return;let t=e[Mn];t.destroyNode&&nd(n,e,t,3,null,null),zD(e)}function cp(n,e){if(lc(e))return;let t=pt(null);try{e[Ge]&=-129,e[Ge]|=256,e[Qn]&&Bh(e[Qn]),GD(n,e),HD(n,e),e[Ke].type===1&&e[Mn].destroy();let i=e[ws];if(i!==null&&ur(e[xn])){i!==e[xn]&&eg(i,e);let r=e[or];r!==null&&r.detachView(n)}Np(e)}finally{pt(t)}}function HD(n,e){let t=n.cleanup,i=e[_u];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[_u]=null);let r=e[Hr];if(r!==null){e[Hr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[xu];if(s!==null){e[xu]=null;for(let o of s)o.destroy()}}function GD(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Qa)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];oi(4,a,c);try{c.call(a)}finally{oi(5,a,c)}}else{oi(4,r,s);try{s.call(r)}finally{oi(5,r,s)}}}}}function jD(n,e,t){return WD(n,e.parent,t)}function WD(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[lr];if(Rs(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Vi.None||r===Vi.Emulated)return null}return zi(i,t)}function $D(n,e,t){return XD(n,e,t)}function qD(n,e,t){return n.type&40?zi(n,t):null}var XD=qD,J0;function tg(n,e,t,i){let r=jD(n,i,e),s=e[Mn],o=i.parent||e[bi],a=$D(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Z0(s,r,t[c],a,!1);else Z0(s,r,t,a,!1);J0!==void 0&&J0(s,i,e,t,r)}function Wa(n,e){if(e!==null){let t=e.type;if(t&3)return zi(e,n);if(t&4)return Bp(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Wa(n,i);{let r=n[e.index];return ur(r)?Bp(-1,r):Ui(r)}}else{if(t&128)return Wa(n,e.next);if(t&32)return Km(e,n)()||Ui(n[e.index]);{let i=lM(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Cs(n[Mi]);return Wa(r,i)}else return Wa(n,e.next)}}}return null}function lM(n,e){if(e!==null){let i=n[Mi][bi],r=e.projection;return i.projection[r]}return null}function Bp(n,e){let t=yn+n+1;if(t<e.length){let i=e[t],r=i[Ke].firstChild;if(r!==null)return Wa(i,r)}return e[Ts]}function ng(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Lo(Ui(a),i),t.flags|=2),!aM(t))if(c&8)ng(n,e,t.child,i,r,s,!1),xo(e,n,r,a,s);else if(c&32){let l=Km(t,i),u;for(;u=l();)xo(e,n,r,u,s);xo(e,n,r,a,s)}else c&16?YD(n,e,i,t,r,s):xo(e,n,r,a,s);t=o?t.projectionNext:t.next}}function nd(n,e,t,i,r,s){ng(t,i,n.firstChild,e,r,s,!1)}function YD(n,e,t,i,r,s){let o=t[Mi],c=o[bi].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];xo(e,n,r,u,s)}else{let l=c,u=o[xn];wx(i)&&(l.flags|=128),ng(n,e,l,u,r,s,!0)}}function ZD(n,e,t,i,r){let s=t[Ts],o=Ui(t);s!==o&&xo(e,n,i,s,r);for(let a=yn;a<t.length;a++){let c=t[a];nd(c[Ke],c,n,e,i,s)}}function JD(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:ar.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=ar.Important),n.setStyle(t,i,r,s))}}function Ru(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Ui(s)),ur(s)&&QD(s,i);let o=t.type;if(o&8)Ru(n,e,t.child,i);else if(o&32){let a=Km(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=lM(e,t);if(Array.isArray(a))i.push(...a);else{let c=Cs(e[Mi]);Ru(c[Ke],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function QD(n,e){for(let t=yn;t<n.length;t++){let i=n[t],r=i[Ke].firstChild;r!==null&&Ru(i[Ke],i,r,e)}n[Ts]!==n[lr]&&e.push(n[Ts])}var uM=[];function KD(n){return n[Qn]??eI(n)}function eI(n){let e=uM.pop()??Object.create(nI);return e.lView=n,e}function tI(n){n.lView[Qn]!==n&&(n.lView=null,uM.push(n))}var nI=Ft(Se({},Ol),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{qu(n.lView)},consumerOnSignalRead(){this.lView[Qn]=this}});function iI(n){let e=n[Qn]??Object.create(rI);return e.lView=n,e}var rI=Ft(Se({},Ol),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Cs(n.lView);for(;e&&!dM(e[Ke]);)e=Cs(e);e&&Tm(e)},consumerOnSignalRead(){this.lView[Qn]=this}});function dM(n){return n.type!==2}function fM(n){if(n[xu]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[xu])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ge]&8192)}}var sI=100;function hM(n,e=!0,t=0){let r=n[sr].rendererFactory,s=!1;s||r.begin?.();try{oI(n,t)}catch(o){throw e&&oM(n,o),o}finally{s||r.end?.()}}function oI(n,e){let t=Q_();try{P0(!0),Vp(n,e);let i=0;for(;$u(n);){if(i===sI)throw new Le(103,!1);i++,Vp(n,1)}}finally{P0(t)}}function aI(n,e,t,i){if(lc(e))return;let r=e[Ge],s=!1,o=!1;Am(e);let a=!0,c=null,l=null;s||(dM(n)?(l=KD(e),c=kh(l)):Uy()===null?(a=!1,l=iI(e),c=kh(l)):e[Qn]&&(Bh(e[Qn]),e[Qn]=null));try{$_(e),jT(n.bindingStartIndex),t!==null&&tM(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&uu(e,h,null)}else{let h=n.preOrderHooks;h!==null&&du(e,h,0,null),sp(e,0)}if(o||cI(e),fM(e),pM(e,0),n.contentQueries!==null&&Fx(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&uu(e,h)}else{let h=n.contentHooks;h!==null&&du(e,h,1),sp(e,1)}uI(n,e);let d=n.components;d!==null&&gM(e,d,0);let f=n.viewQuery;if(f!==null&&Lp(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&uu(e,h)}else{let h=n.viewHooks;h!==null&&du(e,h,2),sp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[rp]){for(let h of e[rp])h();e[rp]=null}s||(e[Ge]&=-73)}catch(u){throw s||qu(e),u}finally{l!==null&&(zy(l,c),a&&tI(l)),Rm()}}function pM(n,e){for(let t=Dx(n);t!==null;t=Ix(t))for(let i=yn;i<t.length;i++){let r=t[i];mM(r,e)}}function cI(n){for(let e=Dx(n);e!==null;e=Ix(e)){if(!(e[Ge]&2))continue;let t=e[wo];for(let i=0;i<t.length;i++){let r=t[i];Tm(r)}}}function lI(n,e,t){let i=Bi(e,n);mM(i,t)}function mM(n,e){wm(n)&&Vp(n,e)}function Vp(n,e){let i=n[Ke],r=n[Ge],s=n[Qn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Uh(s)),o||=!1,s&&(s.dirty=!1),n[Ge]&=-9217,o)aI(i,n,i.template,n[pn]);else if(r&8192){fM(n),pM(n,1);let a=i.components;a!==null&&gM(n,a,1)}}function gM(n,e,t){for(let i=0;i<e.length;i++)lI(n,e[i],t)}function uI(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ds(~r);else{let s=r,o=t[++i],a=t[++i];qT(o,s);let c=e[s];oi(24,c),a(2,c),oi(25,c)}}}finally{Ds(-1)}}function ig(n,e){let t=Q_()?64:1088;for(n[sr].changeDetectionScheduler?.notify(e);n;){n[Ge]|=t;let i=Cs(n);if(Eu(n)&&!i)return n;n=i}return null}function vM(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function yM(n,e){let t=yn+e;if(t<n.length)return n[t]}function id(n,e,t,i=!0){let r=e[Ke];if(dI(r,e,n,t),i){let o=Bp(t,n),a=e[Mn],c=a.parentNode(n[Ts]);c!==null&&VD(r,n[bi],a,e,c,o)}let s=e[Ya];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function _M(n,e){let t=tc(n,e);return t!==void 0&&td(t[Ke],t),t}function tc(n,e){if(n.length<=yn)return;let t=yn+e,i=n[t];if(i){let r=i[ws];r!==null&&r!==n&&eg(r,i),e>0&&(n[t-1][xi]=i[xi]);let s=vu(n,yn+e);BD(i[Ke],i);let o=s[or];o!==null&&o.detachView(s[Ke]),i[xn]=null,i[xi]=null,i[Ge]&=-129}return i}function dI(n,e,t,i){let r=yn+i,s=t.length;i>0&&(t[r-1][xi]=e),i<s-yn?(e[xi]=t[r],C_(t,yn+i,e)):(t.push(e),e[xi]=null),e[xn]=t;let o=e[ws];o!==null&&t!==o&&xM(o,e);let a=e[or];a!==null&&a.insertView(n),Ep(e),e[Ge]|=128}function xM(n,e){let t=n[wo],i=e[xn];if(Gr(i))n[Ge]|=2;else{let r=i[xn][Mi];e[Mi]!==r&&(n[Ge]|=2)}t===null?n[wo]=[e]:t.push(e)}var Is=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Ke];return Ru(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[pn]}get dirty(){return!!(this._lView[Ge]&9280)||!!this._lView[Qn]?.dirty}set context(e){this._lView[pn]=e}get destroyed(){return lc(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[xn];if(ur(e)){let t=e[Mu],i=t?t.indexOf(this):-1;i>-1&&(tc(e,i),vu(t,i))}this._attachedToViewContainer=!1}td(this._lView[Ke],this._lView)}onDestroy(e){q_(this._lView,e)}markForCheck(){ig(this._cdRefInjectingView||this._lView,4)}markForRefresh(){Tm(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ge]&=-129}reattach(){Ep(this._lView),this._lView[Ge]|=128}detectChanges(){this._lView[Ge]|=1024,hM(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Le(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Eu(this._lView),t=this._lView[ws];t!==null&&!e&&eg(t,this._lView),cM(this._lView[Ke],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Le(902,!1);this._appRef=e;let t=Eu(this._lView),i=this._lView[ws];i!==null&&!t&&xM(i,this._lView),Ep(this._lView)}},Co=(()=>{class n{static __NG_ELEMENT_ID__=pI}return n})(),fI=Co,hI=class extends fI{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=ed(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Is(r)}};function pI(){return rg(ji(),Et())}function rg(n,e){return n.type&4?new hI(e,n,Oo(n,e)):null}function sg(n,e,t,i,r){let s=n.data[e];if(s===null)s=mI(n,e,t,i,r),$T()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=HT();s.injectorIndex=o===null?-1:o.injectorIndex}return uc(s,!0),s}function mI(n,e,t,i,r){let s=Z_(),o=J_(),a=o?s:s&&s.parent,c=n.data[e]=vI(n,a,t,e,i,r);return gI(n,c,s,o),c}function gI(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function vI(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return BT()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var NH=new RegExp(`^(\\d+)*(${kC}|${FC})*(.*)`);var yI=()=>null;function nc(n,e){return yI(n,e)}var zp=class{},Pu=class{},Hp=class{resolveComponentFactory(e){throw Error(`No component factory found for ${Vn(e)}.`)}},Do=class{static NULL=new Hp},Io=class{},rd=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>_I()}return n})();function _I(){let n=Et(),e=ji(),t=Bi(e.index,n);return(Gr(t)?t:n)[Mn]}var xI=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>null})}return n})();function Q0(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=S0(r,a);else if(s==2){let c=a,l=e[++o];i=S0(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Wi(n,e=st.Default){let t=Et();if(t===null)return Ze(n,e);let i=ji();return mx(i,t,si(n),e)}function MM(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let[a,c]=EI(n,t,o);SI(n,e,t,a,s,c)}s!==null&&i!==null&&MI(t,i,s)}function MI(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Le(-301,!1);i.push(e[r],s)}}function EI(n,e,t){let i=[],r=null;for(let s of t)s.findHostDirectiveDefs!==null&&(r??=new Map,s.findHostDirectiveDefs(s,i,r)),Po(s)&&(i.push(s),bI(n,e,i.length-1));return Rs(e)?i.push(...t.slice(1)):i.push(...t),[i,r]}function bI(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function SI(n,e,t,i,r,s){for(let l=0;l<i.length;l++)hC(dx(t,e),n,i[l].type);RI(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Qx(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Fm(t.mergedAttrs,u.hostAttrs),CI(n,t,e,c,u),AI(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}wI(n,t,s)}function wI(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;c=K0(0,d.inputs,u,c,h),l=K0(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!qm(e)?TI(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function K0(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a=s;if(r!==null){if(!r.hasOwnProperty(s))continue;a=r[s]}n===0?e_(i,t,a,s):e_(i,t,a,o)}return i}function e_(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function TI(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i??=[],i.push(o[a+1],t[r+1]);break}}r+=2}return i}function CI(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=bs(r.type,!0)),o=new Qa(s,Po(r),Wi);n.blueprint[i]=o,t[i]=o,DI(n,e,i,Qx(n,t,r.hostVars,Xr),r)}function DI(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;II(o)!=a&&o.push(a),o.push(t,i,s)}}function II(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function AI(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Po(e)&&(t[""]=n)}}function RI(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function EM(n,e,t,i,r,s,o,a){let c=e.consts,l=To(c,o),u=sg(e,n,2,i,l);return s&&MM(e,t,u,To(c,a),r),u.mergedAttrs=Fm(u.mergedAttrs,u.attrs),u.attrs!==null&&Q0(u,u.attrs,!1),u.mergedAttrs!==null&&Q0(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function bM(n,e){ox(n,e),B_(e)&&n.queries.elementEnd(e)}var Nu=class extends Do{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ss(e);return new ic(t,this.ngModule)}};function PI(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Ku.SignalBased)!==0};return r&&(s.transform=r),s})}function NI(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function OI(n,e,t){let i=e instanceof ai?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new wp(t,i):t}function LI(n){let e=n.get(Io,null);if(e===null)throw new Le(407,!1);let t=n.get(xI,null),i=n.get(Ka,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function FI(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Xx(e,t,t==="svg"?j_:t==="math"?IT:null)}var ic=class extends Pu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){return PI(this.componentDef.inputs)}get outputs(){return NI(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=mD(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){let s=pt(null);try{let o=this.componentDef,a=i?["ng-version","19.1.7"]:gD(this.componentDef.selectors[0]),c=Xm(0,null,null,1,0,null,null,null,null,[a],null),l=OI(o,r||this.ngModule,e),u=LI(l),d=u.rendererFactory.createRenderer(null,o),f=i?wD(d,i,o.encapsulation,l):FI(o,d),h=Ym(null,c,null,512|Jx(o),null,null,u,d,l,null,Lx(f,l,!0));h[zn]=f,Am(h);let g=null;try{let v=EM(zn,c,h,"#host",()=>[this.componentDef],!0,0);f&&(Zx(d,f,v),Lo(f,h)),iM(c,h,v),kx(c,v,h),bM(c,v),t!==void 0&&kI(v,this.ngContentSelectors,t),g=Bi(v.index,h),h[pn]=g[pn],Qm(c,h,null)}catch(v){throw g!==null&&Np(g),Np(h),v}finally{Rm()}return new Gp(this.componentType,h)}finally{pt(s)}}},Gp=class extends zp{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=Sm(t[Ke],zn),this.location=Oo(this._tNode,t),this.instance=Bi(this._tNode.index,t)[pn],this.hostView=this.changeDetectorRef=new Is(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Jm(s[Ke],s,r,e,t),this.previousInputValues.set(e,t);let o=Bi(this._tNode.index,s);ig(o,1)}}get injector(){return new Es(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function kI(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ns=(()=>{class n{static __NG_ELEMENT_ID__=UI}return n})();function UI(){let n=ji();return wM(n,Et())}var BI=Ns,SM=class extends BI{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Oo(this._hostTNode,this._hostLView)}get injector(){return new Es(this._hostTNode,this._hostLView)}get parentInjector(){let e=km(this._hostTNode,this._hostLView);if(cx(e)){let t=Su(e,this._hostLView),i=bu(e),r=t[Ke].data[i+8];return new Es(r,t)}else return new Es(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=t_(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-yn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=nc(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,ec(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!wT(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ic(Ss(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(ai,null);v&&(s=v)}let u=Ss(c.componentType??{}),d=nc(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,ec(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(PT(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[xn],l=new SM(c,c[bi],c[xn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return id(o,r,s,i),e.attachToViewContainerRef(),C_(lp(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=t_(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=tc(this._lContainer,t);i&&(vu(lp(this._lContainer),t),td(i[Ke],i))}detach(e){let t=this._adjustIndex(e,-1),i=tc(this._lContainer,t);return i&&vu(lp(this._lContainer),t)!=null?new Is(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function t_(n){return n[Mu]}function lp(n){return n[Mu]||(n[Mu]=[])}function wM(n,e){let t,i=e[n.index];return ur(i)?t=i:(t=vM(i,e,null,n),e[n.index]=t,Zm(e,t)),zI(t,e,n,i),new SM(t,n,e)}function VI(n,e){let t=n[Mn],i=t.createComment(""),r=zi(e,n),s=t.parentNode(r);return Au(t,s,i,t.nextSibling(r),!1),i}var zI=jI,HI=()=>!1;function GI(n,e,t){return HI(n,e,t)}function jI(n,e,t,i){if(n[Ts])return;let r;t.type&8?r=Ui(i):r=VI(e,t),n[Ts]=r}var jp=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Wp=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)og(e,t).matches!==null&&this.queries[t].setDirty()}},$p=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=QI(e):this.predicate=e}},qp=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Xp=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,WI(t,s)),this.matchTNodeWithReadOption(e,t,fu(t,e,s,!1,!1))}else i===Co?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,fu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===qr||r===Ns||r===Co&&t.type&4)this.addMatch(t.index,-2);else{let s=fu(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function WI(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function $I(n,e){return n.type&11?Oo(n,e):n.type&4?rg(n,e):null}function qI(n,e,t,i){return t===-1?$I(e,n):t===-2?XI(n,e,i):Tu(n,n[Ke],t,e)}function XI(n,e,t){if(t===qr)return Oo(e,n);if(t===Co)return rg(e,n);if(t===Ns)return wM(e,n)}function TM(n,e,t,i){let r=e[or].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(qI(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Yp(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=TM(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=yn;d<u.length;d++){let f=u[d];f[ws]===f[xn]&&Yp(f[Ke],f,l,i)}if(u[wo]!==null){let d=u[wo];for(let f=0;f<d.length;f++){let h=d[f];Yp(h[Ke],h,l,i)}}}}}return i}function YI(n,e){return n[or].queries[e].queryList}function ZI(n,e,t){let i=new Pp((t&4)===4);return LT(n,e,i,i.destroy),(e[or]??=new Wp).queries.push(new jp(i))-1}function JI(n,e,t){let i=li();return i.firstCreatePass&&(KI(i,new $p(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),ZI(i,Et(),e)}function QI(n){return n.split(",").map(e=>e.trim())}function KI(n,e,t){n.queries===null&&(n.queries=new qp),n.queries.track(new Xp(e,t))}function og(n,e){return n.queries.getByIndex(e)}function eA(n,e){let t=n[Ke],i=og(t,e);return i.crossesNgTemplate?Yp(t,n,e,[]):TM(t,n,i,e)}var Wr=class{},rc=class{};var Zp=class extends Wr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Nu(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=A_(e);this._bootstrapComponents=$x(s.bootstrap),this._r3Injector=yx(e,t,[{provide:Wr,useValue:this},{provide:Do,useValue:this.componentFactoryResolver},...i],Vn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Jp=class extends rc{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Zp(this.moduleType,e,[])}};var Ou=class extends Wr{injector;componentFactoryResolver=new Nu(this);instance=null;constructor(e){super();let t=new Xa([...e.providers,{provide:Wr,useValue:this},{provide:Do,useValue:this.componentFactoryResolver}],e.parent||Mm(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ag(n,e,t=null){return new Ou({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var tA=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=O_(!1,t.type),r=i.length>0?ag([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ve({token:n,providedIn:"environment",factory:()=>new n(Ze(ai))})}return n})();function En(n){return oc(()=>{let e=DM(n),t=Ft(Se({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Tx.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(tA).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Vi.Emulated,styles:n.styles||_i,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&dc("NgStandalone"),IM(t);let i=n.dependencies;return t.directiveDefs=n_(i,!1),t.pipeDefs=n_(i,!0),t.id=oA(t),t})}function nA(n){return Ss(n)||R_(n)}function iA(n){return n!==null}function gc(n){return oc(()=>({type:n.type,bootstrap:n.bootstrap||_i,declarations:n.declarations||_i,imports:n.imports||_i,exports:n.exports||_i,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function rA(n,e){if(n==null)return bo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Ku.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function sA(n){if(n==null)return bo;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function vc(n){return oc(()=>{let e=DM(n);return IM(e),e})}function CM(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function DM(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||bo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||_i,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:rA(n.inputs,e),outputs:sA(n.outputs),debugInfo:null}}function IM(n){n.features?.forEach(e=>e(n))}function n_(n,e){if(!n)return null;let t=e?P_:nA;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(iA)}function oA(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function AM(n){return cA(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function aA(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function cA(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function cg(n,e,t){return n[e]=t}function lA(n,e){return n[e]}function cr(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Lu(n,e,t,i){let r=cr(n,e,t);return cr(n,e+1,i)||r}function uA(n,e,t,i,r){let s=Lu(n,e,t,i);return cr(n,e+2,r)||s}function dA(n,e,t,i,r,s){let o=Lu(n,e,t,i);return Lu(n,e+2,r,s)||o}function fA(n,e,t,i,r,s,o,a,c){let l=e.consts,u=sg(e,n,4,o||null,a||null);Cm()&&MM(e,t,u,To(l,c),sM),u.mergedAttrs=Fm(u.mergedAttrs,u.attrs),ox(e,u);let d=u.tView=Xm(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Qp(n,e,t,i,r,s,o,a,c,l){let u=t+zn,d=e.firstCreatePass?fA(u,e,n,i,r,s,o,a,c):e.data[u];uc(d,!1);let f=hA(e,n,d,t);Om()&&tg(e,n,f,d),Lo(f,n);let h=vM(f,n,f,d);return n[u]=h,Zm(n,h),GI(h,d,n),Em(d)&&nM(e,n,d),c!=null&&rM(n,d,l),d}function hr(n,e,t,i,r,s,o,a){let c=Et(),l=li(),u=To(l.consts,s);return Qp(c,l,n,e,t,i,r,u,o,a),hr}var hA=pA;function pA(n,e,t,i){return Lm(!0),e[Mn].createComment("")}var lg=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var RM=new je("");function yc(n){return!!n&&typeof n.then=="function"}function PM(n){return!!n&&typeof n.subscribe=="function"}var NM=new je("");var OM=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=me(NM,{optional:!0})??[];injector=me(ci);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Ei(this.injector,r);if(yc(s))t.push(s);else if(PM(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mA=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new Kp})}return n})(),Kp=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},ug=new je("");function gA(){qy(()=>{throw new Le(600,!1)})}function vA(n){return n.isBoundToModule}var yA=10;var $r=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=me(TC);afterRenderManager=me(BC);zonelessEnabled=me(Bm);rootEffectScheduler=me(mA);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new dn;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=me(No).hasPendingTasks.pipe(vt(t=>!t));constructor(){me(Zu,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=me(ai);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Pu;if(!this._injector.get(OM).done){let f=!r&&N_(t),h=!1;throw new Le(405,h)}let o;r?o=t:o=this._injector.get(Do).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=vA(o)?void 0:this._injector.get(Wr),c=i||o.selector,l=o.create(ci.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(RM,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),hu(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(Ox.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Le(101,!1);let t=pt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,pt(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Io,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<yA;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)_A(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>$u(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;hu(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(ug,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>hu(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Le(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hu(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function _A(n,e,t,i){if(!t&&!$u(n))return;hM(n,e,t&&!i?0:1)}function xA(n,e,t,i){return cr(n,Xu(),t)?e+Hu(t)+i:Xr}function cu(n,e){return n<<17|e<<2}function As(n){return n>>17&32767}function MA(n){return(n&2)==2}function EA(n,e){return n&131071|e<<17}function em(n){return n|2}function Ao(n){return(n&131068)>>2}function up(n,e){return n&-131069|e<<2}function bA(n){return(n&1)===1}function tm(n){return n|1}function SA(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=As(o),c=Ao(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||cc(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=As(n[a+1]);n[i+1]=cu(f,a),f!==0&&(n[f+1]=up(n[f+1],i)),n[a+1]=EA(n[a+1],i)}else n[i+1]=cu(a,0),a!==0&&(n[a+1]=up(n[a+1],i)),a=i;else n[i+1]=cu(c,0),a===0?a=i:n[c+1]=up(n[c+1],i),c=i;l&&(n[i+1]=em(n[i+1])),i_(n,u,i,!0),i_(n,u,i,!1),wA(e,u,n,i,s),o=cu(a,c),s?e.classBindings=o:e.styleBindings=o}function wA(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&cc(s,e)>=0&&(t[i+1]=tm(t[i+1]))}function i_(n,e,t,i){let r=n[t+1],s=e===null,o=i?As(r):Ao(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];TA(c,e)&&(a=!0,n[o+1]=i?tm(l):em(l)),o=i?As(l):Ao(l)}a&&(n[t+1]=i?em(r):tm(r))}function TA(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?cc(n,e)>=0:!1}function bn(n,e,t){let i=Et(),r=Xu();if(cr(i,r,e)){let s=li(),o=QT();ID(s,o,i,n,e,i[Mn],t,!1)}return bn}function r_(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Jm(n,t,s[o],o,i)}function Os(n,e){return CA(n,e,null,!0),Os}function CA(n,e,t,i){let r=Et(),s=li(),o=WT(2);if(s.firstUpdatePass&&IA(s,n,o,i),e!==Xr&&cr(r,o,e)){let a=s.data[Ps()];OA(s,a,r,r[Mn],n,r[o+1]=LA(e,t),i,o)}}function DA(n,e){return e>=n.expandoStartIndex}function IA(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Ps()],o=DA(n,t);FA(s,i)&&e===null&&!o&&(e=!1),e=AA(r,s,e,i),SA(r,s,e,t,o,i)}}function AA(n,e,t,i){let r=YT(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=dp(null,n,e,t,i),t=sc(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=dp(r,n,e,t,i),s===null){let c=RA(n,e,i);c!==void 0&&Array.isArray(c)&&(c=dp(null,n,e,c[1],i),c=sc(c,e.attrs,i),PA(n,e,i,c))}else s=NA(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function RA(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ao(i)!==0)return n[As(i)]}function PA(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[As(r)]=i}function NA(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=sc(i,o,t)}return sc(i,e.attrs,t)}function dp(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=sc(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function sc(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),fT(n,o,t?!0:e[++s]))}return n===void 0?null:n}function OA(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=bA(l)?s_(c,e,t,r,Ao(l),o):void 0;if(!Fu(u)){Fu(s)||MA(l)&&(s=s_(c,null,t,r,a,o));let d=W_(Ps(),t);JD(i,o,d,r,s)}}function s_(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Xr&&(f=d?_i:void 0);let h=d?np(f,i):u===i?f:void 0;if(l&&!Fu(h)&&(h=np(c,i)),Fu(h)&&(a=h,o))return a;let g=n[r+1];r=o?As(g):Ao(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=np(c,i))}return a}function Fu(n){return n!==void 0}function LA(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Vn(hc(n)))),n}function FA(n,e){return(n.flags&(e?8:16))!==0}var nm=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function fp(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function kA(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=fp(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let f=n.at(o),h=e[c],g=fp(o,f,c,h,t);if(g!==0){g<0&&n.updateValue(o,h),o--,c--;continue}let v=t(s,l),m=t(o,f),p=t(s,u);if(Object.is(p,m)){let T=t(c,h);Object.is(T,v)?(n.swap(s,o),n.updateValue(o,h),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new ku,r??=a_(n,s,o,t),im(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(v,n.detach(s)),o--;else{let T=n.create(s,e[s]);n.attach(s,T),s++,o++}}for(;s<=c;)o_(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,f=fp(s,u,s,d,t);if(f!==0)f<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new ku,r??=a_(n,s,o,t);let h=t(s,d);if(im(n,i,s,h))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(h))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)o_(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function im(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function o_(n,e,t,i,r){if(im(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function a_(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var ku=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Fo(n,e){dc("NgControlFlow");let t=Et(),i=Xu(),r=t[i]!==Xr?t[i]:-1,s=r!==-1?Uu(t,zn+r):void 0,o=0;if(cr(t,i,n)){let a=pt(null);try{if(s!==void 0&&_M(s,o),n!==-1){let c=zn+n,l=Uu(t,c),u=am(t[Ke],c),d=nc(l,u.tView.ssrId),f=ed(t,u,e,{dehydratedView:d});id(l,f,o,ec(u,d))}}finally{pt(a)}}else if(s!==void 0){let a=yM(s,o);a!==void 0&&(a[pn]=e)}}var rm=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-yn}};var sm=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Yr(n,e,t,i,r,s,o,a,c,l,u,d,f){dc("NgControlFlow");let h=Et(),g=li(),v=c!==void 0,m=Et(),p=a?o.bind(m[Mi][pn]):o,T=new sm(v,p);m[zn+n]=T,Qp(h,g,n+1,e,t,i,r,To(g.consts,s)),v&&Qp(h,g,n+2,c,l,u,d,To(g.consts,f))}var om=class extends nm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-yn}at(e){return this.getLView(e)[pn].$implicit}attach(e,t){let i=t[Ya];this.needsIndexUpdate||=e!==this.length,id(this.lContainer,t,e,ec(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,UA(this.lContainer,e)}create(e,t){let i=nc(this.lContainer,this.templateTNode.tView.ssrId),r=ed(this.hostLView,this.templateTNode,new rm(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){td(e[Ke],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[pn].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[pn].$index=e}getLView(e){return BA(this.lContainer,e)}};function Zr(n){let e=pt(null),t=Ps();try{let i=Et(),r=i[Ke],s=i[t],o=t+1,a=Uu(i,o);if(s.liveCollection===void 0){let l=am(r,o);s.liveCollection=new om(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(kA(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=Xu(),u=c.length===0;if(cr(i,l,u)){let d=t+2,f=Uu(i,d);if(u){let h=am(r,d),g=nc(f,h.tView.ssrId),v=ed(i,h,void 0,{dehydratedView:g});id(f,v,0,ec(h,g))}else _M(f,0)}}}finally{pt(e)}}function Uu(n,e){return n[e]}function UA(n,e){return tc(n,e)}function BA(n,e){return yM(n,e)}function am(n,e){return Sm(n,e)}function Re(n,e,t,i){let r=Et(),s=li(),o=zn+n,a=r[Mn],c=s.firstCreatePass?EM(o,s,r,e,sM,Cm(),t,i):s.data[o],l=VA(s,r,c,a,e,n);r[o]=l;let u=Em(c);return uc(c,!0),Zx(a,l,c),!aM(c)&&Om()&&tg(s,r,l,c),FT()===0&&Lo(l,r),kT(),u&&(nM(s,r,c),kx(s,c,r)),i!==null&&rM(r,c),Re}function Fe(){let n=ji();J_()?GT():(n=n.parent,uc(n,!1));let e=n;VT(e)&&zT(),UT();let t=li();return t.firstCreatePass&&bM(t,e),e.classesWithoutHost!=null&&rC(e)&&r_(t,e,Et(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&sC(e)&&r_(t,e,Et(),e.stylesWithoutHost,!1),Fe}function bt(n,e,t,i){return Re(n,e,t,i),Fe(),bt}var VA=(n,e,t,i,r,s)=>(Lm(!0),Xx(i,r,eC()));function pr(){return Et()}var Ms=void 0;function zA(n){let e=n,t=Math.floor(Math.abs(n)),i=n.toString().replace(/^[^.]*\.?/,"").length;return t===1&&i===0?1:5}var HA=["en",[["a","p"],["AM","PM"],Ms],[["AM","PM"],Ms,Ms],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ms,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ms,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Ms,"{1} 'at' {0}",Ms],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",zA],hp={};function dg(n){let e=GA(n),t=c_(e);if(t)return t;let i=e.split("-")[0];if(t=c_(i),t)return t;if(i==="en")return HA;throw new Le(701,!1)}function c_(n){return n in hp||(hp[n]=rr.ng&&rr.ng.common&&rr.ng.common.locales&&rr.ng.common.locales[n]),hp[n]}var ko=function(n){return n[n.LocaleId=0]="LocaleId",n[n.DayPeriodsFormat=1]="DayPeriodsFormat",n[n.DayPeriodsStandalone=2]="DayPeriodsStandalone",n[n.DaysFormat=3]="DaysFormat",n[n.DaysStandalone=4]="DaysStandalone",n[n.MonthsFormat=5]="MonthsFormat",n[n.MonthsStandalone=6]="MonthsStandalone",n[n.Eras=7]="Eras",n[n.FirstDayOfWeek=8]="FirstDayOfWeek",n[n.WeekendRange=9]="WeekendRange",n[n.DateFormat=10]="DateFormat",n[n.TimeFormat=11]="TimeFormat",n[n.DateTimeFormat=12]="DateTimeFormat",n[n.NumberSymbols=13]="NumberSymbols",n[n.NumberFormats=14]="NumberFormats",n[n.CurrencyCode=15]="CurrencyCode",n[n.CurrencySymbol=16]="CurrencySymbol",n[n.CurrencyName=17]="CurrencyName",n[n.Currencies=18]="Currencies",n[n.Directionality=19]="Directionality",n[n.PluralCase=20]="PluralCase",n[n.ExtraData=21]="ExtraData",n}(ko||{});function GA(n){return n.toLowerCase().replace(/_/g,"-")}var Bu="en-US";var jA=Bu;function WA(n){typeof n=="string"&&(jA=n.toLowerCase().replace(/_/g,"-"))}var $A=(n,e,t)=>{};function Kn(n,e,t,i){let r=Et(),s=li(),o=ji();return XA(s,r,r[Mn],o,n,e,i),Kn}function qA(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[_u],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function XA(n,e,t,i,r,s,o){let a=Em(i),l=n.firstCreatePass&&Y_(n),u=e[pn],d=X_(e),f=!0;if(i.type&3||o){let v=zi(i,e),m=o?o(v):v,p=d.length,T=o?b=>o(Ui(b[i.index])):i.index,C=null;if(!o&&a&&(C=qA(n,e,r,i.index)),C!==null){let b=C.__ngLastListenerFn__||C;b.__ngNextListenerFn__=s,C.__ngLastListenerFn__=s,f=!1}else{s=u_(i,e,u,s),$A(v,r,s);let b=t.listen(m,r,s);d.push(s,b),l&&l.push(r,T,p,p+1)}}else s=u_(i,e,u,s);let h=i.outputs,g;if(f&&h!==null&&(g=h[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],T=g[m+1],N=e[p][T].subscribe(s),I=d.length;d.push(s,N),l&&l.push(r,i.index,I,-(I+1))}}}function l_(n,e,t,i){let r=pt(null);try{return oi(6,e,t),t(i)!==!1}catch(s){return oM(n,s),!1}finally{oi(7,e,t),pt(r)}}function u_(n,e,t,i){return function r(s){if(s===Function)return i;let o=Rs(n)?Bi(n.index,e):e;ig(o,5);let a=l_(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=l_(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function Hn(n=1){return JT(n)}function Gn(n,e,t){JI(n,e,t)}function Dn(n){let e=Et(),t=li(),i=K_();Im(i+1);let r=og(t,i);if(n.dirty&&RT(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=eA(e,i);n.reset(s,IC),n.notifyOnChanges()}return!0}return!1}function In(){return YI(Et(),K_())}function YA(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function Ct(n,e=""){let t=Et(),i=li(),r=n+zn,s=i.firstCreatePass?sg(i,r,1,e,null):i.data[r],o=ZA(i,t,s,e,n);t[r]=o,Om()&&tg(i,t,o,s),uc(s,!1)}var ZA=(n,e,t,i,r)=>(Lm(!0),vD(e[Mn],i));function jn(n){return _c("",n,""),jn}function _c(n,e,t){let i=Et(),r=xA(i,n,e,t);return r!==Xr&&JA(i,Ps(),r),_c}function JA(n,e,t){let i=W_(e,n);yD(n[Mn],i,t)}function LM(n,e,t,i){return QA(Et(),Dm(),n,e,t,i)}function FM(n,e,t,i,r,s,o,a,c,l){let u=Dm()+n,d=Et(),f=dA(d,u,t,i,r,s);return uA(d,u+4,o,a,c)||f?cg(d,u+7,l?e.call(l,t,i,r,s,o,a,c):e(t,i,r,s,o,a,c)):lA(d,u+7)}function kM(n,e){let t=n[e];return t===Xr?void 0:t}function QA(n,e,t,i,r,s){let o=e+t;return cr(n,o,r)?cg(n,o+1,s?i.call(s,r):i(r)):kM(n,o+1)}function KA(n,e,t,i,r,s,o){let a=e+t;return Lu(n,a,r,s)?cg(n,a+2,o?i.call(o,r,s):i(r,s)):kM(n,a+2)}function UM(n,e){let t=li(),i,r=n+zn;t.firstCreatePass?(i=e1(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=bs(i.type,!0)),o,a=Bn(Wi);try{let c=wu(!1),l=s();return wu(c),YA(t,Et(),r,l),l}finally{Bn(a)}}function e1(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function BM(n,e,t,i){let r=n+zn,s=Et(),o=AT(s,r);return t1(s,r)?KA(s,Dm(),e,o.transform,t,i,o):o.transform(t,i)}function t1(n,e){return n[Ke].data[e].pure}var cm=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},fg=(()=>{class n{compileModuleSync(t){return new Jp(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=A_(t),s=$x(r.declarations).reduce((o,a)=>{let c=Ss(a);return c&&o.push(new ic(c)),o},[]);return new cm(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var n1=(()=>{class n{zone=me(_n);changeDetectionScheduler=me(Ka);applicationRef=me($r);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function i1({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new _n(Ft(Se({},r1()),{scheduleInRootZone:t})),[{provide:_n,useFactory:n},{provide:So,multi:!0,useFactory:()=>{let i=me(n1,{optional:!0});return()=>i.initialize()}},{provide:So,multi:!0,useFactory:()=>{let i=me(s1);return()=>{i.initialize()}}},e===!0?{provide:xx,useValue:!0}:[],{provide:Mx,useValue:t??_x}]}function r1(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var s1=(()=>{class n{subscription=new Zt;initialized=!1;zone=me(_n);pendingTasks=me(No);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{_n.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{_n.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var o1=(()=>{class n{appRef=me($r);taskService=me(No);ngZone=me(_n);zonelessEnabled=me(Bm);tracing=me(Zu,{optional:!0});disableScheduling=me(xx,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Zt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Du):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(me(Mx,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Rp||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?U0:Ex;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Du+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,U0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function a1(){return typeof $localize<"u"&&$localize.locale||Bu}var sd=new je("",{providedIn:"root",factory:()=>me(sd,st.Optional|st.SkipSelf)||a1()});var lm=new je(""),c1=new je("");function Ga(n){return!n.moduleRef}function l1(n){let e=Ga(n)?n.r3Injector:n.moduleRef.injector,t=e.get(_n);return t.run(()=>{Ga(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(jr,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Ga(n)){let s=()=>e.destroy(),o=n.platformInjector.get(lm);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(lm);o.add(s),n.moduleRef.onDestroy(()=>{hu(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return d1(i,t,()=>{let s=e.get(OM);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(sd,Bu);if(WA(o||Bu),!e.get(c1,!0))return Ga(n)?e.get($r):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ga(n)){let c=e.get($r);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return u1(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function u1(n,e){let t=n.injector.get($r);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Le(-403,!1);e.push(n)}function d1(n,e,t){try{let i=t();return yc(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var pu=null;function f1(n=[],e){return ci.create({name:e,providers:[{provide:ju,useValue:"platform"},{provide:lm,useValue:new Set([()=>pu=null])},...n]})}function h1(n=[]){if(pu)return pu;let e=f1(n);return pu=e,gA(),p1(e),e}function p1(n){let e=n.get(Gm,null);Ei(n,()=>{e?.forEach(t=>t())})}var xc=(()=>{class n{static __NG_ELEMENT_ID__=m1}return n})();function m1(n){return g1(ji(),Et(),(n&16)===16)}function g1(n,e,t){if(Rs(n)&&!t){let i=Bi(n.index,e);return new Is(i,i)}else if(n.type&175){let i=e[Mi];return new Is(i,e)}return null}var um=class{constructor(){}supports(e){return AM(e)}create(e){return new dm(e)}},v1=(n,e)=>e,dm=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||v1}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<d_(i,r,s)?t:i,a=d_(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<s.length?s[f]:s[f]=0,g=h+f;u<=g&&g<l&&(s[f]=h+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!AM(e))throw new Le(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,aA(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new fm(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Vu),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Vu),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},fm=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},hm=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Vu=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new hm,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function d_(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function f_(){return new hg([new um])}var hg=(()=>{class n{factories;static \u0275prov=Ve({token:n,providedIn:"root",factory:f_});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||f_()),deps:[[n,new cT,new gm]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Le(901,!1)}}return n})();function VM(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=h1(i),s=[i1({}),{provide:Ka,useExisting:o1},...t||[]],o=new Ou({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return l1({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var h_=class{[Fi];constructor(e){this[Fi]=e}destroy(){this[Fi].destroy()}};var qM=null;function Uo(){return qM}function XM(n){qM??=n}var od=class{};var Wn=new je(""),yg=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(x1),providedIn:"platform"})}return n})();var x1=(()=>{class n extends yg{_location;_history;_doc=me(Wn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Uo().getBaseHref(this._doc)}onPopState(t){let i=Uo().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Uo().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function _g(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function zM(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function mr(n){return n&&n[0]!=="?"?`?${n}`:n}var Bo=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(ZM),providedIn:"root"})}return n})(),YM=new je(""),ZM=(()=>{class n extends Bo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??me(Wn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return _g(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+mr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+mr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+mr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ze(yg),Ze(YM,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),JM=(()=>{class n extends Bo{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=_g(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+mr(s))||this._platformLocation.pathname;this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+mr(s))||this._platformLocation.pathname;this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ze(yg),Ze(YM,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),bc=(()=>{class n{_subject=new dn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=b1(zM(HM(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+mr(i))}normalize(t){return n.stripTrailingSlash(E1(this._basePath,HM(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=mr;static joinWithSlash=_g;static stripTrailingSlash=zM;static \u0275fac=function(i){return new(i||n)(Ze(Bo))};static \u0275prov=Ve({token:n,factory:()=>M1(),providedIn:"root"})}return n})();function M1(){return new bc(Ze(Bo))}function E1(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function HM(n){return n.replace(/\/index.html$/,"")}function b1(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var QM=function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n}(QM||{});var gr={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Mc(n,e){let t=dg(n),i=t[ko.NumberSymbols][e];if(typeof i>"u"){if(e===gr.CurrencyDecimal)return t[ko.NumberSymbols][gr.Decimal];if(e===gr.CurrencyGroup)return t[ko.NumberSymbols][gr.Group]}return i}function S1(n,e){return dg(n)[ko.NumberFormats][e]}var w1=/^(\d+)?\.((\d+)(-(\d+))?)?$/,GM=22,ad=".",Ec="0",T1=";",C1=",",pg="#";function D1(n,e,t,i,r,s,o=!1){let a="",c=!1;if(!isFinite(n))a=Mc(t,gr.Infinity);else{let l=P1(n);o&&(l=R1(l));let u=e.minInt,d=e.minFrac,f=e.maxFrac;if(s){let T=s.match(w1);if(T===null)throw new Error(`${s} is not a valid digit info`);let C=T[1],b=T[3],N=T[5];C!=null&&(u=mg(C)),b!=null&&(d=mg(b)),N!=null?f=mg(N):b!=null&&d>f&&(f=d)}N1(l,d,f);let h=l.digits,g=l.integerLen,v=l.exponent,m=[];for(c=h.every(T=>!T);g<u;g++)h.unshift(0);for(;g<0;g++)h.unshift(0);g>0?m=h.splice(g,h.length):(m=h,h=[0]);let p=[];for(h.length>=e.lgSize&&p.unshift(h.splice(-e.lgSize,h.length).join(""));h.length>e.gSize;)p.unshift(h.splice(-e.gSize,h.length).join(""));h.length&&p.unshift(h.join("")),a=p.join(Mc(t,i)),m.length&&(a+=Mc(t,r)+m.join("")),v&&(a+=Mc(t,gr.Exponential)+"+"+v)}return n<0&&!c?a=e.negPre+a+e.negSuf:a=e.posPre+a+e.posSuf,a}function I1(n,e,t){let i=S1(e,QM.Decimal),r=A1(i,Mc(e,gr.MinusSign));return D1(n,r,e,gr.Group,gr.Decimal,t)}function A1(n,e="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},i=n.split(T1),r=i[0],s=i[1],o=r.indexOf(ad)!==-1?r.split(ad):[r.substring(0,r.lastIndexOf(Ec)+1),r.substring(r.lastIndexOf(Ec)+1)],a=o[0],c=o[1]||"";t.posPre=a.substring(0,a.indexOf(pg));for(let u=0;u<c.length;u++){let d=c.charAt(u);d===Ec?t.minFrac=t.maxFrac=u+1:d===pg?t.maxFrac=u+1:t.posSuf+=d}let l=a.split(C1);if(t.gSize=l[1]?l[1].length:0,t.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){let u=r.length-t.posPre.length-t.posSuf.length,d=s.indexOf(pg);t.negPre=s.substring(0,d).replace(/'/g,""),t.negSuf=s.slice(d+u).replace(/'/g,"")}else t.negPre=e+t.posPre,t.negSuf=t.posSuf;return t}function R1(n){if(n.digits[0]===0)return n;let e=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(e===0?n.digits.push(0,0):e===1&&n.digits.push(0),n.integerLen+=2),n}function P1(n){let e=Math.abs(n)+"",t=0,i,r,s,o,a;for((r=e.indexOf(ad))>-1&&(e=e.replace(ad,"")),(s=e.search(/e/i))>0?(r<0&&(r=s),r+=+e.slice(s+1),e=e.substring(0,s)):r<0&&(r=e.length),s=0;e.charAt(s)===Ec;s++);if(s===(a=e.length))i=[0],r=1;else{for(a--;e.charAt(a)===Ec;)a--;for(r-=s,i=[],o=0;s<=a;s++,o++)i[o]=Number(e.charAt(s))}return r>GM&&(i=i.splice(0,GM-1),t=r-1,r=1),{digits:i,exponent:t,integerLen:r}}function N1(n,e,t){if(e>t)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${t}).`);let i=n.digits,r=i.length-n.integerLen,s=Math.min(Math.max(e,r),t),o=s+n.integerLen,a=i[o];if(o>0){i.splice(Math.max(n.integerLen,o));for(let d=o;d<i.length;d++)i[d]=0}else{r=Math.max(0,r),n.integerLen=1,i.length=Math.max(1,o=s+1),i[0]=0;for(let d=1;d<o;d++)i[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)i.unshift(0),n.integerLen++;i.unshift(1),n.integerLen++}else i[o-1]++;for(;r<Math.max(0,s);r++)i.push(0);let c=s!==0,l=e+n.integerLen,u=i.reduceRight(function(d,f,h,g){return f=f+d,g[h]=f<10?f:f-10,c&&(g[h]===0&&h>=l?g.pop():c=!1),f>=10?1:0},0);u&&(i.unshift(u),n.integerLen++)}function mg(n){let e=parseInt(n);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+n);return e}function KM(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var gg=/\s+/,jM=[],Vo=(()=>{class n{_ngEl;_renderer;initialClasses=jM;rawClass;stateMap=new Map;constructor(t,i){this._ngEl=t,this._renderer=i}set klass(t){this.initialClasses=t!=null?t.trim().split(gg):jM}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(gg):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(gg).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||n)(Wi(qr),Wi(rd))};static \u0275dir=vc({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var vg=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},eE=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new vg(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),WM(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);WM(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Wi(Ns),Wi(Co),Wi(hg))};static \u0275dir=vc({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function WM(n,e){n.context.$implicit=e.item}function O1(n,e){return new Le(2100,!1)}var tE=(()=>{class n{_locale;constructor(t){this._locale=t}transform(t,i,r){if(!L1(t))return null;r||=this._locale;try{let s=F1(t);return I1(s,r,i)}catch(s){throw O1(n,s.message)}}static \u0275fac=function(i){return new(i||n)(Wi(sd,16))};static \u0275pipe=CM({name:"number",type:n,pure:!0})}return n})();function L1(n){return!(n==null||n===""||n!==n)}function F1(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new Error(`${n} is not a number`);return n}var Sc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=gc({type:n});static \u0275inj=ac({})}return n})(),nE="browser",k1="server";function xg(n){return n===k1}var cd=class{};var Eg=class extends od{supportsDOMEvents=!0},bg=class n extends Eg{static makeCurrent(){XM(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=U1();return t==null?null:B1(t)}resetBaseElement(){wc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return KM(document.cookie,e)}},wc=null;function U1(){return wc=wc||document.querySelector("base"),wc?wc.getAttribute("href"):null}function B1(n){return new URL(n,document.baseURI).pathname}var V1=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),ud=new je(""),lE=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Le(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ze(ud),Ze(_n))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Tc=class{_doc;constructor(e){this._doc=e}manager},ld="ng-app-id";function rE(n){for(let e of n)e.remove()}function sE(n,e){let t=e.createElement("style");return t.textContent=n,t}function z1(n,e,t,i){let r=n.head?.querySelectorAll(`style[${ld}="${e}"],link[${ld}="${e}"]`);if(r)for(let s of r)s.removeAttribute(ld),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Sg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var uE=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=xg(s),z1(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,sE);i?.forEach(r=>this.addUsage(r,this.external,Sg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(rE(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])rE(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,sE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Sg(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(ld,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ze(Wn),Ze(Hm),Ze(jm,8),Ze(fc))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Mg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cg=/%COMP%/g;var dE="%COMP%",H1=`_nghost-${dE}`,G1=`_ngcontent-${dE}`,j1=!0,W1=new je("",{providedIn:"root",factory:()=>j1});function $1(n){return G1.replace(Cg,n)}function q1(n){return H1.replace(Cg,n)}function fE(n,e){return e.map(t=>t.replace(Cg,n))}var oE=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=xg(a),this.defaultRenderer=new Cc(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Vi.ShadowDom&&(i=Ft(Se({},i),{encapsulation:Vi.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof dd?r.applyToHost(t):r instanceof Dc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case Vi.Emulated:s=new dd(c,l,i,this.appId,u,o,a,d,f);break;case Vi.ShadowDom:return new wg(c,l,t,i,o,a,this.nonce,d,f);default:s=new Dc(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ze(lE),Ze(uE),Ze(Hm),Ze(W1),Ze(Wn),Ze(fc),Ze(_n),Ze(jm),Ze(Zu,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Cc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Mg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(aE(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(aE(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Le(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Mg[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Mg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ar.DashCase|ar.Important)?e.style.setProperty(t,i,r&ar.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ar.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Uo().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);let s=this.decoratePreventDefault(i);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function aE(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var wg=class extends Cc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=fE(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Sg(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Dc=class extends Cc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?fE(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},dd=class extends Dc{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=$1(u),this.hostAttr=q1(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},X1=(()=>{class n extends Tc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Ze(Wn))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),cE=["alt","control","meta","shift"],Y1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Z1={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},J1=(()=>{class n extends Tc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Uo().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),cE.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=Y1[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),cE.forEach(o=>{if(o!==r){let a=Z1[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ze(Wn))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})();function hE(n,e){return VM(Se({rootComponent:n},Q1(e)))}function Q1(n){return{appProviders:[...iR,...n?.providers??[]],platformProviders:nR}}function K1(){bg.makeCurrent()}function eR(){return new jr}function tR(){return Rx(document),document}var nR=[{provide:fc,useValue:nE},{provide:Gm,useValue:K1,multi:!0},{provide:Wn,useFactory:tR,deps:[]}];var iR=[{provide:ju,useValue:"root"},{provide:jr,useFactory:eR,deps:[]},{provide:ud,useClass:X1,multi:!0,deps:[Wn]},{provide:ud,useClass:J1,multi:!0,deps:[Wn]},oE,uE,lE,{provide:Io,useExisting:oE},{provide:cd,useClass:V1,deps:[]},[]];var pE=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ze(Wn))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rR={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Tg=new je(""),mE=new je(""),sR=(()=>{class n{events=[];overrides={};options;buildHammer(t){let i=new Hammer(t,this.options);i.get("pinch").set({enable:!0}),i.get("rotate").set({enable:!0});for(let r in this.overrides)i.get(r).set(this.overrides[r]);return i}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),oR=(()=>{class n extends Tc{_config;_injector;loader;_loaderPromise=null;constructor(t,i,r,s){super(t),this._config=i,this._injector=r,this.loader=s}supports(t){return!(!rR.hasOwnProperty(t.toLowerCase())&&!this.isCustomEvent(t)||!window.Hammer&&!this.loader)}addEventListener(t,i,r){let s=this.manager.getZone();if(i=i.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||s.runOutsideAngular(()=>this.loader());let o=!1,a=()=>{o=!0};return s.runOutsideAngular(()=>this._loaderPromise.then(()=>{if(!window.Hammer){a=()=>{};return}o||(a=this.addEventListener(t,i,r))}).catch(()=>{a=()=>{}})),()=>{a()}}return s.runOutsideAngular(()=>{let o=this._config.buildHammer(t),a=function(c){s.runGuarded(function(){r(c)})};return o.on(i,a),()=>{o.off(i,a),typeof o.destroy=="function"&&o.destroy()}})}isCustomEvent(t){return this._config.events.indexOf(t)>-1}static \u0275fac=function(i){return new(i||n)(Ze(Wn),Ze(Tg),Ze(ci),Ze(mE,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),fd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=gc({type:n});static \u0275inj=ac({providers:[{provide:ud,useClass:oR,multi:!0,deps:[Wn,Tg,ci,[new gm,mE]]},{provide:Tg,useClass:sR,deps:[]}]})}return n})();var et="primary",jc=Symbol("RouteTitle"),Pg=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function $o(n){return new Pg(n)}function cR(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function lR(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!qi(n[t],e[t]))return!1;return!0}function qi(n,e){let t=n?Ng(n):void 0,i=e?Ng(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!bE(n[r],e[r]))return!1;return!0}function Ng(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function bE(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function SE(n){return n.length>0?n[n.length-1]:null}function Jr(n){return Zh(n)?n:yc(n)?en(Promise.resolve(n)):Ye(n)}var uR={exact:TE,subset:CE},wE={exact:dR,subset:fR,ignored:()=>!0};function gE(n,e,t){return uR[t.paths](n.root,e.root,t.matrixParams)&&wE[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function dR(n,e){return qi(n,e)}function TE(n,e,t){if(!Fs(n.segments,e.segments)||!md(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!TE(n.children[i],e.children[i],t))return!1;return!0}function fR(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>bE(n[t],e[t]))}function CE(n,e,t){return DE(n,e,e.segments,t)}function DE(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Fs(r,t)||e.hasChildren()||!md(r,t,i))}else if(n.segments.length===t.length){if(!Fs(n.segments,t)||!md(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!CE(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Fs(n.segments,r)||!md(n.segments,r,i)||!n.children[et]?!1:DE(n.children[et],e,s,i)}}function md(n,e,t){return e.every((i,r)=>wE[t](n[r].parameters,i.parameters))}var yr=class{root;queryParams;fragment;_queryParamMap;constructor(e=new wt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=$o(this.queryParams),this._queryParamMap}toString(){return mR.serialize(this)}},wt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gd(this)}},Ls=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=$o(this.parameters),this._parameterMap}toString(){return AE(this)}};function hR(n,e){return Fs(n,e)&&n.every((t,i)=>qi(t.parameters,e[i].parameters))}function Fs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function pR(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===et&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==et&&(t=t.concat(e(r,i)))}),t}var sv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>new Oc,providedIn:"root"})}return n})(),Oc=class{parse(e){let t=new Lg(e);return new yr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ic(e.root,!0)}`,i=yR(e.queryParams),r=typeof e.fragment=="string"?`#${gR(e.fragment)}`:"";return`${t}${i}${r}`}},mR=new Oc;function gd(n){return n.segments.map(e=>AE(e)).join("/")}function Ic(n,e){if(!n.hasChildren())return gd(n);if(e){let t=n.children[et]?Ic(n.children[et],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==et&&i.push(`${r}:${Ic(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=pR(n,(i,r)=>r===et?[Ic(n.children[et],!1)]:[`${r}:${Ic(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[et]!=null?`${gd(n)}/${t[0]}`:`${gd(n)}/(${t.join("//")})`}}function IE(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hd(n){return IE(n).replace(/%3B/gi,";")}function gR(n){return encodeURI(n)}function Og(n){return IE(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vd(n){return decodeURIComponent(n)}function vE(n){return vd(n.replace(/\+/g,"%20"))}function AE(n){return`${Og(n.path)}${vR(n.parameters)}`}function vR(n){return Object.entries(n).map(([e,t])=>`;${Og(e)}=${Og(t)}`).join("")}function yR(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${hd(t)}=${hd(r)}`).join("&"):`${hd(t)}=${hd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var _R=/^[^\/()?;#]+/;function Dg(n){let e=n.match(_R);return e?e[0]:""}var xR=/^[^\/()?;=#]+/;function MR(n){let e=n.match(xR);return e?e[0]:""}var ER=/^[^=?&#]+/;function bR(n){let e=n.match(ER);return e?e[0]:""}var SR=/^[^&#]+/;function wR(n){let e=n.match(SR);return e?e[0]:""}var Lg=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new wt([],{}):new wt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[et]=new wt(e,t)),i}parseSegment(){let e=Dg(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Le(4009,!1);return this.capture(e),new Ls(vd(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=MR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Dg(this.remaining);r&&(i=r,this.capture(i))}e[vd(t)]=vd(i)}parseQueryParam(e){let t=bR(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=wR(this.remaining);o&&(i=o,this.capture(i))}let r=vE(t),s=vE(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Dg(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Le(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=et);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[et]:new wt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Le(4011,!1)}};function RE(n){return n.segments.length>0?new wt([],{[et]:n}):n}function PE(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=PE(r);if(i===et&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new wt(n.segments,e);return TR(t)}function TR(n){if(n.numberOfChildren===1&&n.children[et]){let e=n.children[et];return new wt(n.segments.concat(e.segments),e.children)}return n}function Lc(n){return n instanceof yr}function CR(n,e,t=null,i=null){let r=NE(n);return OE(r,e,t,i)}function NE(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new wt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=RE(i);return e??r}function OE(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Ig(r,r,r,t,i);let s=DR(e);if(s.toRoot())return Ig(r,r,new wt([],{}),t,i);let o=IR(s,r,n),a=o.processChildren?Rc(o.segmentGroup,o.index,s.commands):FE(o.segmentGroup,o.index,s.commands);return Ig(r,o.segmentGroup,a,t,i)}function yd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Fc(n){return typeof n=="object"&&n!=null&&n.outlets}function Ig(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=LE(n,e,t);let a=RE(PE(o));return new yr(a,s,r)}function LE(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=LE(s,e,t)}),new wt(n.segments,i)}var _d=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&yd(i[0]))throw new Le(4003,!1);let r=i.find(Fc);if(r&&r!==SE(i))throw new Le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function DR(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new _d(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new _d(t,e,i)}var Go=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function IR(n,e,t){if(n.isAbsolute)return new Go(e,!0,0);if(!t)return new Go(e,!1,NaN);if(t.parent===null)return new Go(t,!0,0);let i=yd(n.commands[0])?0:1,r=t.segments.length-1+i;return AR(t,r,n.numberOfDoubleDots)}function AR(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Le(4005,!1);r=i.segments.length}return new Go(i,!1,r-s)}function RR(n){return Fc(n[0])?n[0].outlets:{[et]:n}}function FE(n,e,t){if(n??=new wt([],{}),n.segments.length===0&&n.hasChildren())return Rc(n,e,t);let i=PR(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new wt(n.segments.slice(0,i.pathIndex),{});return s.children[et]=new wt(n.segments.slice(i.pathIndex),n.children),Rc(s,0,r)}else return i.match&&r.length===0?new wt(n.segments,{}):i.match&&!n.hasChildren()?Fg(n,e,t):i.match?Rc(n,0,r):Fg(n,e,t)}function Rc(n,e,t){if(t.length===0)return new wt(n.segments,{});{let i=RR(t),r={};if(Object.keys(i).some(s=>s!==et)&&n.children[et]&&n.numberOfChildren===1&&n.children[et].segments.length===0){let s=Rc(n.children[et],e,t);return new wt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=FE(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new wt(n.segments,r)}}function PR(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Fc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!_E(c,l,o))return s;i+=2}else{if(!_E(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Fg(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Fc(s)){let c=NR(s.outlets);return new wt(i,c)}if(r===0&&yd(t[0])){let c=n.segments[e];i.push(new Ls(c.path,yE(t[0]))),r++;continue}let o=Fc(s)?s.outlets[et]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&yd(a)?(i.push(new Ls(o,yE(a))),r+=2):(i.push(new Ls(o,{})),r++)}return new wt(i,{})}function NR(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Fg(new wt([],{}),0,i))}),e}function yE(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function _E(n,e,t){return n==t.path&&qi(e,t.parameters)}var Pc="imperative",mn=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(mn||{}),ui=class{id;url;constructor(e,t){this.id=e,this.url=t}},kc=class extends ui{type=mn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ks=class extends ui{urlAfterRedirects;type=mn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ti=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(ti||{}),kg=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(kg||{}),vr=class extends ui{reason;code;type=mn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Us=class extends ui{reason;code;type=mn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Uc=class extends ui{error;target;type=mn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},xd=class extends ui{urlAfterRedirects;state;type=mn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ug=class extends ui{urlAfterRedirects;state;type=mn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bg=class extends ui{urlAfterRedirects;state;shouldActivate;type=mn.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Vg=class extends ui{urlAfterRedirects;state;type=mn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zg=class extends ui{urlAfterRedirects;state;type=mn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hg=class{route;type=mn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Gg=class{route;type=mn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},jg=class{snapshot;type=mn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wg=class{snapshot;type=mn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$g=class{snapshot;type=mn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qg=class{snapshot;type=mn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Bc=class{},qo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function OR(n,e){return n.providers&&!n._injector&&(n._injector=ag(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Si(n){return n.outlet||et}function LR(n,e){let t=n.filter(i=>Si(i)===e);return t.push(...n.filter(i=>Si(i)!==e)),t}function Wc(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Xg=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Wc(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Cd(this.rootInjector)}},Cd=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Xg(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ze(ai))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Md=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Yg(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Yg(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Zg(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Zg(e,this._root).map(t=>t.value)}};function Yg(n,e){if(n===e.value)return e;for(let t of e.children){let i=Yg(n,t);if(i)return i}return null}function Zg(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Zg(n,t);if(i.length)return i.unshift(e),i}return[]}var ei=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ho(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Ed=class extends Md{snapshot;constructor(e,t){super(e),this.snapshot=t,ov(this,e)}toString(){return this.snapshot.toString()}};function kE(n){let e=FR(n),t=new fn([new Ls("",{})]),i=new fn({}),r=new fn({}),s=new fn({}),o=new fn(""),a=new Xo(t,i,s,o,r,et,n,e.root);return a.snapshot=e.root,new Ed(new ei(a,[]),e)}function FR(n){let e={},t={},i={},r="",s=new jo([],e,i,r,t,et,n,null,{});return new Sd("",new ei(s,[]))}var Xo=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(vt(l=>l[jc]))??Ye(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(vt(e=>$o(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(vt(e=>$o(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function bd(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Se(Se({},e.params),n.params),data:Se(Se({},e.data),n.data),resolve:Se(Se(Se(Se({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Se({},n.params),data:Se({},n.data),resolve:Se(Se({},n.data),n._resolvedData??{})},r&&BE(r)&&(i.resolve[jc]=r.title),i}var jo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[jc]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=$o(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=$o(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Sd=class extends Md{url;constructor(e,t){super(t),this.url=e,ov(this,t)}toString(){return UE(this._root)}};function ov(n,e){e.value._routerState=n,e.children.forEach(t=>ov(n,t))}function UE(n){let e=n.children.length>0?` { ${n.children.map(UE).join(", ")} } `:"";return`${n.value}${e}`}function Ag(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,qi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),qi(e.params,t.params)||n.paramsSubject.next(t.params),lR(e.url,t.url)||n.urlSubject.next(t.url),qi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Jg(n,e){let t=qi(n.params,e.params)&&hR(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Jg(n.parent,e.parent))}function BE(n){return typeof n.title=="string"||n.title===null}var kR=new je(""),av=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=et;activateEvents=new Jn;deactivateEvents=new Jn;attachEvents=new Jn;detachEvents=new Jn;routerOutletData=Sx(void 0);parentContexts=me(Cd);location=me(Ns);changeDetector=me(xc);inputBinder=me(cv,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Le(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Le(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Qg(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=vc({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[bm]})}return n})(),Qg=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Xo?this.route:e===Cd?this.childContexts:e===kR?this.outletData:this.parent.get(e,t)}},cv=new je("");function UR(n,e,t){let i=Vc(n,e._root,t?t._root:void 0);return new Ed(i,e)}function Vc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=BR(n,e,t);return new ei(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Vc(n,a)),o}}let i=VR(e.value),r=e.children.map(s=>Vc(n,s));return new ei(i,r)}}function BR(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Vc(n,i,r);return Vc(n,i)})}function VR(n){return new Xo(new fn(n.url),new fn(n.params),new fn(n.queryParams),new fn(n.fragment),new fn(n.data),n.outlet,n.component,n)}var zc=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},VE="ngNavigationCancelingError";function wd(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Lc(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=zE(!1,ti.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function zE(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[VE]=!0,t.cancellationCode=e,t}function zR(n){return HE(n)&&Lc(n.url)}function HE(n){return!!n&&n[VE]}var HR=(n,e,t,i)=>vt(r=>(new Kg(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Kg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Ag(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ho(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ho(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ho(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ho(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new qg(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Wg(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Ag(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Ag(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Td=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Wo=class{component;route;constructor(e,t){this.component=e,this.route=t}};function GR(n,e,t){let i=n._root,r=e?e._root:null;return Ac(i,r,t,[i.value])}function jR(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Zo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!x_(n)?n:e.get(n):i}function Ac(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ho(e);return n.children.forEach(o=>{WR(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Nc(a,t.getContext(o),r)),r}function WR(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=$R(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Td(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ac(n,e,a?a.children:null,i,r):Ac(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Wo(a.outlet.component,o))}else o&&Nc(e,a,r),r.canActivateChecks.push(new Td(i)),s.component?Ac(n,null,a?a.children:null,i,r):Ac(n,null,t,i,r);return r}function $R(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Fs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Fs(n.url,e.url)||!qi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Jg(n,e)||!qi(n.queryParams,e.queryParams);case"paramsChange":default:return!Jg(n,e)}}function Nc(n,e,t){let i=Ho(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Nc(o,e.children.getContext(s),t):Nc(o,null,t):Nc(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Wo(e.outlet.component,r)):t.canDeactivateChecks.push(new Wo(null,r)):t.canDeactivateChecks.push(new Wo(null,r))}function $c(n){return typeof n=="function"}function qR(n){return typeof n=="boolean"}function XR(n){return n&&$c(n.canLoad)}function YR(n){return n&&$c(n.canActivate)}function ZR(n){return n&&$c(n.canActivateChild)}function JR(n){return n&&$c(n.canDeactivate)}function QR(n){return n&&$c(n.canMatch)}function GE(n){return n instanceof tr||n?.name==="EmptyError"}var pd=Symbol("INITIAL_VALUE");function Yo(){return vi(n=>tu(n.map(e=>e.pipe(nr(1),ep(pd)))).pipe(vt(e=>{for(let t of e)if(t!==!0){if(t===pd)return pd;if(t===!1||KR(t))return t}return!0}),gi(e=>e!==pd),nr(1)))}function KR(n){return Lc(n)||n instanceof zc}function eP(n,e){return tn(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ye(Ft(Se({},t),{guardsResult:!0})):tP(o,i,r,n).pipe(tn(a=>a&&qR(a)?nP(i,s,n,e):Ye(a)),vt(a=>Ft(Se({},t),{guardsResult:a})))})}function tP(n,e,t,i){return en(n).pipe(tn(r=>aP(r.component,r.route,t,e,i)),ir(r=>r!==!0,!0))}function nP(n,e,t,i){return en(e).pipe(go(r=>mo(rP(r.route.parent,i),iP(r.route,i),oP(n,r.path,t),sP(n,r.route,t))),ir(r=>r!==!0,!0))}function iP(n,e){return n!==null&&e&&e(new $g(n)),Ye(!0)}function rP(n,e){return n!==null&&e&&e(new jg(n)),Ye(!0)}function sP(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ye(!0);let r=i.map(s=>nu(()=>{let o=Wc(e)??t,a=Zo(s,o),c=YR(a)?a.canActivate(e,n):Ei(o,()=>a(e,n));return Jr(c).pipe(ir())}));return Ye(r).pipe(Yo())}function oP(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>jR(o)).filter(o=>o!==null).map(o=>nu(()=>{let a=o.guards.map(c=>{let l=Wc(o.node)??t,u=Zo(c,l),d=ZR(u)?u.canActivateChild(i,n):Ei(l,()=>u(i,n));return Jr(d).pipe(ir())});return Ye(a).pipe(Yo())}));return Ye(s).pipe(Yo())}function aP(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ye(!0);let o=s.map(a=>{let c=Wc(e)??r,l=Zo(a,c),u=JR(l)?l.canDeactivate(n,e,t,i):Ei(c,()=>l(n,e,t,i));return Jr(u).pipe(ir())});return Ye(o).pipe(Yo())}function cP(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ye(!0);let s=r.map(o=>{let a=Zo(o,n),c=XR(a)?a.canLoad(e,t):Ei(n,()=>a(e,t));return Jr(c)});return Ye(s).pipe(Yo(),jE(i))}function jE(n){return $h(hn(e=>{if(typeof e!="boolean")throw wd(n,e)}),vt(e=>e===!0))}function lP(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ye(!0);let s=r.map(o=>{let a=Zo(o,n),c=QR(a)?a.canMatch(e,t):Ei(n,()=>a(e,t));return Jr(c)});return Ye(s).pipe(Yo(),jE(i))}var Hc=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Gc=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function zo(n){return po(new Hc(n))}function uP(n){return po(new Le(4e3,!1))}function dP(n){return po(zE(!1,ti.GuardRejected))}var ev=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ye(i);if(r.numberOfChildren>1||!r.children[et])return uP(`${e.redirectTo}`);r=r.children[et]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:v}=r,m=Ei(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:v}));if(m instanceof yr)throw new Gc(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Gc(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new yr(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new wt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Le(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},tv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function fP(n,e,t,i,r){let s=WE(n,e,t);return s.matched?(i=OR(e,i),lP(i,e,t,r).pipe(vt(o=>o===!0?s:Se({},tv)))):Ye(s)}function WE(n,e,t){if(e.path==="**")return hP(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Se({},tv):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||cR)(t,n,e);if(!r)return Se({},tv);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Se(Se({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function hP(n){return{matched:!0,parameters:n.length>0?SE(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function xE(n,e,t,i){return t.length>0&&gP(n,t,i)?{segmentGroup:new wt(e,mP(i,new wt(t,n.children))),slicedSegments:[]}:t.length===0&&vP(n,t,i)?{segmentGroup:new wt(n.segments,pP(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new wt(n.segments,n.children),slicedSegments:t}}function pP(n,e,t,i){let r={};for(let s of t)if(Dd(n,e,s)&&!i[Si(s)]){let o=new wt([],{});r[Si(s)]=o}return Se(Se({},i),r)}function mP(n,e){let t={};t[et]=e;for(let i of n)if(i.path===""&&Si(i)!==et){let r=new wt([],{});t[Si(i)]=r}return t}function gP(n,e,t){return t.some(i=>Dd(n,e,i)&&Si(i)!==et)}function vP(n,e,t){return t.some(i=>Dd(n,e,i))}function Dd(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function yP(n,e,t){return e.length===0&&!n.children[t]}var nv=class{};function _P(n,e,t,i,r,s,o="emptyOnly"){return new iv(n,e,t,i,r,o,s).recognize()}var xP=31,iv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new ev(this.urlSerializer,this.urlTree)}noMatchError(e){return new Le(4002,`'${e.segmentGroup}'`)}recognize(){let e=xE(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(vt(({children:t,rootSnapshot:i})=>{let r=new ei(i,t),s=new Sd("",r),o=CR(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new jo([],Object.freeze({}),Object.freeze(Se({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),et,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,et,t).pipe(vt(i=>({children:i,rootSnapshot:t})),Br(i=>{if(i instanceof Gc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Hc?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(vt(o=>o instanceof ei?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return en(s).pipe(go(o=>{let a=i.children[o],c=LR(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Kh((o,a)=>(o.push(...a),o)),Vr(null),Qh(),tn(o=>{if(o===null)return zo(i);let a=$E(o);return MP(a),Ye(a)}))}processSegment(e,t,i,r,s,o,a){return en(t).pipe(go(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Br(l=>{if(l instanceof Hc)return Ye(null);throw l}))),ir(c=>!!c),Br(c=>{if(GE(c))return yP(i,r,s)?Ye(new nv):zo(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Si(i)!==o&&(o===et||!Dd(r,s,i))?zo(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):zo(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=WE(t,r,s);if(!c)return zo(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>xP&&(this.allowRedirects=!1));let h=new jo(s,l,Object.freeze(Se({},this.urlTree.queryParams)),this.urlTree.fragment,ME(r),Si(r),r.component??r._loadedComponent??null,r,EE(r)),g=bd(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(tn(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=fP(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(vi(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(vi(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new jo(f,d,Object.freeze(Se({},this.urlTree.queryParams)),this.urlTree.fragment,ME(i),Si(i),i.component??i._loadedComponent??null,i,EE(i)),v=bd(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:p}=xE(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(vt(C=>new ei(g,C)));if(l.length===0&&p.length===0)return Ye(new ei(g,[]));let T=Si(i)===s;return this.processSegment(u,l,m,p,T?et:s,!0,g).pipe(vt(C=>new ei(g,C instanceof ei?[C]:[])))}))):zo(t)))}getChildConfig(e,t,i){return t.children?Ye({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ye({routes:t._loadedRoutes,injector:t._loadedInjector}):cP(e,t,i,this.urlSerializer).pipe(tn(r=>r?this.configLoader.loadChildren(e,t).pipe(hn(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):dP(t))):Ye({routes:[],injector:e})}};function MP(n){n.sort((e,t)=>e.value.outlet===et?-1:t.value.outlet===et?1:e.value.outlet.localeCompare(t.value.outlet))}function EP(n){let e=n.value.routeConfig;return e&&e.path===""}function $E(n){let e=[],t=new Set;for(let i of n){if(!EP(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=$E(i.children);e.push(new ei(i.value,r))}return e.filter(i=>!t.has(i))}function ME(n){return n.data||{}}function EE(n){return n.resolve||{}}function bP(n,e,t,i,r,s){return tn(o=>_P(n,e,t,i,o.extractedUrl,r,s).pipe(vt(({state:a,tree:c})=>Ft(Se({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function SP(n,e){return tn(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ye(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of qE(c))o.add(l);let a=0;return en(o).pipe(go(c=>s.has(c)?wP(c,i,n,e):(c.data=bd(c,c.parent,n).resolve,Ye(void 0))),hn(()=>a++),vo(1),tn(c=>a===o.size?Ye(t):kn))})}function qE(n){let e=n.children.map(t=>qE(t)).flat();return[n,...e]}function wP(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!BE(r)&&(s[jc]=r.title),TP(s,n,e,i).pipe(vt(o=>(n._resolvedData=o,n.data=bd(n,n.parent,t).resolve,null)))}function TP(n,e,t,i){let r=Ng(n);if(r.length===0)return Ye({});let s={};return en(r).pipe(tn(o=>CP(n[o],e,t,i).pipe(ir(),hn(a=>{if(a instanceof zc)throw wd(new Oc,a);s[o]=a}))),vo(1),vt(()=>s),Br(o=>GE(o)?kn:po(o)))}function CP(n,e,t,i){let r=Wc(e)??i,s=Zo(n,r),o=s.resolve?s.resolve(e,t):Ei(r,()=>s(e,t));return Jr(o)}function Rg(n){return vi(e=>{let t=n(e);return t?en(t).pipe(vt(()=>e)):Ye(e)})}var XE=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===et);return i}getResolvedTitleForRoute(t){return t.data[jc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(DP),providedIn:"root"})}return n})(),DP=(()=>{class n extends XE{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ze(pE))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lv=new je("",{providedIn:"root",factory:()=>({})}),IP=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=En({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&bt(0,"router-outlet")},dependencies:[av],encapsulation:2})}return n})();function uv(n){let e=n.children&&n.children.map(uv),t=e?Ft(Se({},n),{children:e}):Se({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==et&&(t.component=IP),t}var dv=new je(""),AP=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=me(fg);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ye(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Jr(t.loadComponent()).pipe(vt(YE),hn(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Ha(()=>{this.componentLoaders.delete(t)})),r=new ho(i,()=>new dn).pipe(fo());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Ye({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=RP(i,this.compiler,t,this.onLoadEndListener).pipe(Ha(()=>{this.childrenLoaders.delete(i)})),o=new ho(s,()=>new dn).pipe(fo());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function RP(n,e,t,i){return Jr(n.loadChildren()).pipe(vt(YE),tn(r=>r instanceof rc||Array.isArray(r)?Ye(r):en(e.compileModuleAsync(r))),vt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(dv,[],{optional:!0,self:!0}).flat()),{routes:o.map(uv),injector:s}}))}function PP(n){return n&&typeof n=="object"&&"default"in n}function YE(n){return PP(n)?n.default:n}var fv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(NP),providedIn:"root"})}return n})(),NP=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),OP=new je("");var LP=new je(""),FP=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new dn;transitionAbortSubject=new dn;configLoader=me(AP);environmentInjector=me(ai);destroyRef=me(Yu);urlSerializer=me(sv);rootContexts=me(Cd);location=me(bc);inputBindingEnabled=me(cv,{optional:!0})!==null;titleStrategy=me(XE);options=me(lv,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=me(fv);createViewTransition=me(OP,{optional:!0});navigationErrorHandler=me(LP,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ye(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Hg(r)),i=r=>this.events.next(new Gg(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Ft(Se(Se({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new fn({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Pc,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(gi(s=>s.id!==0),vt(s=>Ft(Se({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),vi(s=>{let o=!1,a=!1;return Ye(s).pipe(vi(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",ti.SupersededByNewNavigation),kn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Ft(Se({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Us(c.id,this.urlSerializer.serialize(c.rawUrl),d,kg.IgnoredSameUrlNavigation)),c.resolve(!1),kn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ye(c).pipe(vi(d=>{let f=this.transitions?.getValue();return this.events.next(new kc(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?kn:Promise.resolve(d)}),bP(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),hn(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Ft(Se({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new xd(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:v}=c,m=new kc(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=kE(this.rootComponentType).snapshot;return this.currentTransition=s=Ft(Se({},c),{targetSnapshot:p,urlAfterRedirects:f,extras:Ft(Se({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Ye(s)}else{let d="";return this.events.next(new Us(c.id,this.urlSerializer.serialize(c.extractedUrl),d,kg.IgnoredByUrlHandlingStrategy)),c.resolve(!1),kn}}),hn(c=>{let l=new Ug(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),vt(c=>(this.currentTransition=s=Ft(Se({},c),{guards:GR(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),eP(this.environmentInjector,c=>this.events.next(c)),hn(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw wd(this.urlSerializer,c.guardsResult);let l=new Bg(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),gi(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",ti.GuardRejected),!1)),Rg(c=>{if(c.guards.canActivateChecks.length)return Ye(c).pipe(hn(l=>{let u=new Vg(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),vi(l=>{let u=!1;return Ye(l).pipe(SP(this.paramsInheritanceStrategy,this.environmentInjector),hn({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",ti.NoDataFromResolver)}}))}),hn(l=>{let u=new zg(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Rg(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(hn(f=>{u.component=f}),vt(()=>{})));for(let f of u.children)d.push(...l(f));return d};return tu(l(c.targetSnapshot.root)).pipe(Vr(null),nr(1))}),Rg(()=>this.afterPreactivation()),vi(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?en(u).pipe(vt(()=>s)):Ye(s)}),vt(c=>{let l=UR(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Ft(Se({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),hn(()=>{this.events.next(new Bc)}),HR(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),nr(1),hn({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ks(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),tp(this.transitionAbortSubject.pipe(hn(c=>{throw c}))),Ha(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",ti.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Br(c=>{if(this.destroyed)return s.resolve(!1),kn;if(a=!0,HE(c))this.events.next(new vr(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),zR(c)?this.events.next(new qo(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new Uc(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=Ei(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof zc){let{message:d,cancellationCode:f}=wd(this.urlSerializer,u);this.events.next(new vr(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new qo(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return kn}))}))}cancelNavigationTransition(t,i,r){let s=new vr(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function kP(n){return n!==Pc}var UP=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(BP),providedIn:"root"})}return n})(),rv=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},BP=(()=>{class n extends rv{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Um(n)))(r||n)}})();static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ZE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:()=>me(VP),providedIn:"root"})}return n})(),VP=(()=>{class n extends ZE{location=me(bc);urlSerializer=me(sv);options=me(lv,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=me(fv);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new yr;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=kE(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof kc)this.stateMemento=this.createStateMemento();else if(t instanceof Us)this.rawUrlTree=i.initialUrl;else if(t instanceof xd){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Bc?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof vr&&(t.code===ti.GuardRejected||t.code===ti.NoDataFromResolver)?this.restoreHistory(i):t instanceof Uc?this.restoreHistory(i,!0):t instanceof ks&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof yr?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=Se(Se({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=Se(Se({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Um(n)))(r||n)}})();static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zP(n,e){n.events.pipe(gi(t=>t instanceof ks||t instanceof vr||t instanceof Uc||t instanceof Us),vt(t=>t instanceof ks||t instanceof Us?0:(t instanceof vr?t.code===ti.Redirect||t.code===ti.SupersededByNewNavigation:!1)?2:1),gi(t=>t!==2),nr(1)).subscribe(()=>{e()})}var HP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},GP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},JE=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=me(lg);stateManager=me(ZE);options=me(lv,{optional:!0})||{};pendingTasks=me(No);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=me(FP);urlSerializer=me(sv);location=me(bc);urlHandlingStrategy=me(fv);_events=new dn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=me(UP);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=me(dv,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!me(cv,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Zt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof vr&&i.code!==ti.Redirect&&i.code!==ti.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ks)this.navigated=!0;else if(i instanceof qo){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=Se({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kP(r.source)},o);this.scheduleNavigation(a,Pc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}WP(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Pc,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=Se({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(uv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=Se(Se({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=NE(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return OE(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Lc(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Pc,null,i)}navigate(t,i={skipLocationChange:!1}){return jP(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=Se({},HP):i===!1?r=Se({},GP):r=i,Lc(t))return gE(this.currentUrlTree,t,r);let s=this.parseUrl(t);return gE(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return zP(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jP(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Le(4008,!1)}function WP(n){return!(n instanceof Bc)&&!(n instanceof qo)}var $P=new je("");function QE(n,...e){return ym([{provide:dv,multi:!0,useValue:n},[],{provide:Xo,useFactory:qP,deps:[JE]},{provide:ug,multi:!0,useFactory:YP},e.map(t=>t.\u0275providers)])}function qP(n){return n.routerState.root}function XP(n,e){return{\u0275kind:n,\u0275providers:e}}function YP(){let n=me(ci);return e=>{let t=n.get($r);if(e!==t.components[0])return;let i=n.get(JE),r=n.get(ZP);n.get(JP)===1&&i.initialNavigation(),n.get(QP,null,st.Optional)?.setUpPreloading(),n.get($P,null,st.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ZP=new je("",{factory:()=>new dn}),JP=new je("",{providedIn:"root",factory:()=>1});var QP=new je("");function KE(){return XP(6,[{provide:Bo,useClass:JM}])}var Id=class n{title="bkedwards4";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"content"]],template:function(t,i){t&1&&(Re(0,"main",0),bt(1,"router-outlet"),Fe())},dependencies:[av],styles:["body[_ngcontent-%COMP%]{margin:0}.top-bar[_ngcontent-%COMP%]{background-color:#001737;font-family:Cormorant Garamond,serif;color:#fff;display:flex;align-items:center;padding:.75rem 1.5rem;margin:0;justify-content:space-between}.bottom-bar[_ngcontent-%COMP%]{position:relative;background-color:#001737;color:#fff;display:flex;justify-content:space-between;align-items:center;width:100%;min-height:100px;padding:.75rem 1.5rem}.socials[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:center}.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:#fff;text-decoration:none;font-size:30px}.bottom-text[_ngcontent-%COMP%]{font-size:25px}.bottom-text[_ngcontent-%COMP%]:hover{color:#f7cd83}.top-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logo[_ngcontent-%COMP%]{height:100px;border-radius:50%;border:4px solid #f7cd83}.logo-link[_ngcontent-%COMP%]{display:inline-block;cursor:pointer}.center-logo[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);display:flex;align-items:center}.content[_ngcontent-%COMP%]{min-height:calc(100vh - 120px);overflow-y:auto}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;transition:color .3s}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#f7cd83}"]})};var KP=(n,e,t,i,r,s,o)=>({selected:n,prev:e,next:t,prev2:i,next2:r,hideLeft:s,hideRight:o}),eN=(n,e)=>e.title;function tN(n,e){if(n&1){let t=pr();Re(0,"div",5)(1,"div",9),Kn("panright",function(){let r=Hi(t).$index,s=Hn();return Gi(s.showPrev(r))})("panleft",function(){let r=Hi(t).$index,s=Hn();return Gi(s.showNext(r))}),bt(2,"img",10),Re(3,"span",11)(4,"strong"),Ct(5),Fe()(),Re(6,"p",12),Ct(7),Fe(),Re(8,"div",13),bt(9,"i",14),Re(10,"span",15),Ct(11),Fe()(),Re(12,"a",16),Ct(13,"View Project"),Fe()()()}if(n&2){let t=e.$implicit,i=e.$index,r=Hn();bn("ngClass",FM(6,KP,r.getIndex(i)===0,r.getIndex(i)===-1,r.getIndex(i)===1,r.getIndex(i)===-2,r.getIndex(i)===2,r.getIndex(i)<-2,r.getIndex(i)>2)),yt(2),bn("src",t.image,mc),yt(3),jn(t.title),yt(2),jn(t.description),yt(4),jn(t.skills),yt(),bn("href",t.link,mc)}}function nN(n,e){if(n&1){let t=pr();Re(0,"button",17),Kn("click",function(){let r=Hi(t).index,s=Hn();return Gi(s.goTo(r))}),Fe()}if(n&2){let t=e.index,i=Hn();Os("active",t===i.currentIndex)}}var Ad=class n{projects=[{title:"Portfolio Website",image:"assets/projects/portfolio.png",description:`Developed this very website to showcase my software development 
                    skills! Implemented component-based Angular architecture and 
                    THREE.js rendering with lazy loading. Deployed as a static web 
                    application using GitHub Pages.`,link:"https://github.com/bkedwards/bkedwards.github.io",skills:"Angular, TypeScript, HTML, CSS"},{title:"Mixed Reality Simulations of Internal Detonation",image:"/assets/projects/detonation.png",description:`Created a Mixed Reality application using Unreal Engine and 
                    C++ for the Hololens 2 to visualize simulated physics of 
                    internal detonations.`,link:"https://docs.google.com/presentation/d/1HnIzL86wSxwg6z3ommjDDJ8uL28oPE1M/edit?usp=sharing&ouid=117641056441104918980&rtpof=true&sd=true",skills:"Unreal Engine, C++"},{title:"ASL Detection Model",image:"assets/projects/asl.png",description:`Created a real-time detector for letters of the ASL alphabet. 
                    Used OpenCV to capture and process data, MediaPipe to draw hand 
                    landmarks, and a Random Forest Classifier to train a model to 
                    predict hand gestures with 99.2% accuracy on test set.`,link:"https://github.com/bkedwards/asl_detector",skills:"Python, OpenCV, MediaPipe"},{title:"UNC Landmark Classifier",image:"assets/projects/old-well.jpg",description:`Created an image classifier for five of UNC-CH\u2019s most famous 
                    landmarks. Trained a convolutional neural network with twelve 
                    layers and achieved an 85% accuracy on the test set`,link:"https://github.com/bkedwards/unc_landmark_classifier",skills:"Python, TensorFlow"},{title:"Hierarchical Splat Renderer",image:"assets/projects/gaussians.png",description:`Built a package in Unity to render real-time Hierarchical 3D 
                    Gaussians. The package is based on the 2024 paper by 
                    Kerbl et. al and combines Aras-P's 3DGS package for Unity with 
                    the hierarchy selection-cut algorithm.`,link:"https://github.com/bkedwards/hierarchical-splats-unity",skills:"Unity, C#, HLSL, Python, Bash"},{title:"Study Buddy AI",image:"assets/projects/studybuddy.png",description:`Developed a GPT-4 powered Study Buddy for the UNC CSXL Website. 
                    Able to analyze a student's notes and generate practice quizzes,
                    providing detailed feedback and quiz submission statistics for 
                    users.`,link:"https://github.com/unc-csxl/csxl.unc.edu",skills:"Angular, PostgreSQL, Node.js"}];selectedIndex=0;isTransitioning=!1;getIndex(e){let t=this.projects.length,i=e-this.currentIndex,r=Math.floor(t/2);return i>r?i-t:i<-r?i+t:i}get currentIndex(){return(this.selectedIndex%this.projects.length+this.projects.length)%this.projects.length}showPrev(e){this.isTransitioning||(this.isTransitioning=!0,this.selectedIndex--,setTimeout(()=>this.isTransitioning=!1,250))}showNext(e){this.isTransitioning||(this.isTransitioning=!0,this.selectedIndex++,setTimeout(()=>this.isTransitioning=!1,250))}goTo(e){this.selectedIndex=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-projects"]],decls:12,vars:1,consts:[[1,"container"],[1,"slider-container"],[1,"left-arrow",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","96","height","96","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","lucide-chevron-left-icon","lucide-chevron-left"],["d","m15 18-6-6 6-6"],[1,"slider-item",3,"ngClass"],[1,"right-arrow",3,"click"],[1,"pagination"],[3,"active","click",4,"ngFor","ngForOf"],[1,"slider-card",3,"panright","panleft"],["alt","Project Photo",1,"slider-image",3,"src"],[1,"slider-title"],[1,"slider-description"],[1,"project-skills-container"],[1,"fa-solid","fa-gears","experience-skills-icon"],[1,"project-skills"],["target","_blank",1,"slider-button",3,"href"],[3,"click"]],template:function(t,i){t&1&&(Re(0,"div",0)(1,"div",1)(2,"div",2),Kn("click",function(){return i.showPrev(i.selectedIndex)}),Pm(),Re(3,"svg",3),bt(4,"path",4),Fe()(),Yr(5,tN,14,14,"div",5,eN),Nm(),Re(7,"div",6),Kn("click",function(){return i.showNext(i.selectedIndex)}),Pm(),Re(8,"svg",3),bt(9,"path",4),Fe()()(),Nm(),Re(10,"div",7),hr(11,nN,1,2,"button",8),Fe()()),t&2&&(yt(5),Zr(i.projects),yt(6),bn("ngForOf",i.projects))},dependencies:[Sc,Vo,eE,fd],styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{width:100%;padding-block:10vh;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.slider-container[_ngcontent-%COMP%]{display:flex;position:relative;color:#fff;width:25vw;height:75vh;height:clamp(600px,75vh,80vh);margin:0 auto}.slider-container[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]{position:absolute;z-index:0;left:0;right:0;width:100%;height:100%;transition:z-index .25s}.slider-container[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{position:relative;left:0;top:0;width:100%;height:100%;box-shadow:0 10px 40px #0009;transition:transform .5s cubic-bezier(.17,.67,.55,1.43),opacity .5s cubic-bezier(.17,.67,.55,1.43),filter .3s ease,border .15s ease-in-out;background:var(--color-primary);color:var(--color-secondary);padding:2rem;transform:scale(0);opacity:0;border-radius:15px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 1rem 2rem #000000b3,0 1rem 2rem #000000b3;overflow:auto}.slider-container[_ngcontent-%COMP%]   .slider-item.hideLeft[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{transform:translate(-100%) scale(0)}.slider-container[_ngcontent-%COMP%]   .slider-item.prev2[_ngcontent-%COMP%]{z-index:1}.slider-container[_ngcontent-%COMP%]   .slider-item.prev2[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{opacity:.6;transform:translate(-75%) scale(.6);filter:brightness(50%)}.slider-container[_ngcontent-%COMP%]   .slider-item.prev[_ngcontent-%COMP%]{z-index:2}.slider-container[_ngcontent-%COMP%]   .slider-item.prev[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{opacity:.95;transform:translate(-50%) scale(.8);filter:brightness(70%)}.slider-container[_ngcontent-%COMP%]   .slider-item.selected[_ngcontent-%COMP%]{z-index:3}.slider-container[_ngcontent-%COMP%]   .slider-item.selected[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{opacity:1;transform:translate(0) scale(1);cursor:grab;filter:brightness(90%)}.slider-container[_ngcontent-%COMP%]   .slider-item.selected[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]:hover{filter:brightness(100%)}.slider-container[_ngcontent-%COMP%]   .slider-item.next[_ngcontent-%COMP%]{z-index:2}.slider-container[_ngcontent-%COMP%]   .slider-item.next[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{opacity:.95;transform:translate(50%) scale(.8);filter:brightness(70%)}.slider-container[_ngcontent-%COMP%]   .slider-item.next2[_ngcontent-%COMP%]{z-index:1}.slider-container[_ngcontent-%COMP%]   .slider-item.next2[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{opacity:.6;transform:translate(75%) scale(.6);filter:brightness(50%)}.slider-container[_ngcontent-%COMP%]   .slider-item.hideRight[_ngcontent-%COMP%]   .slider-card[_ngcontent-%COMP%]{transform:translate(100%) scale(0)}.slider-image[_ngcontent-%COMP%]{width:100%;border-radius:10px}.slider-title[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,2rem);margin:1rem 0 0rem}.slider-description[_ngcontent-%COMP%]{font-size:clamp(.75rem,1.35vw,1.35rem);margin:1rem 0;color:var(--color-text)}.slider-button[_ngcontent-%COMP%]{align-self:flex-start;background:var(--color-tertiary);border-radius:50px;justify-content:center;text-decoration:none;color:#fff;padding:.5rem 1rem;font-size:clamp(.75rem,1.35vw,1.35rem)}.slider-button[_ngcontent-%COMP%]:hover{background-color:var(--color-tertiary-highlight)}.left-arrow[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]{position:absolute;top:50%;color:#fff;cursor:pointer;z-index:10;width:3rem;height:3rem}.left-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:filter .2s ease}.left-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover, .right-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{filter:drop-shadow(0 0 25px rgba(0,255,255,.8)) drop-shadow(0 0 50px rgba(0,255,255,.6))}.left-arrow[_ngcontent-%COMP%]{transform:translateY(-50%);left:-30rem}.right-arrow[_ngcontent-%COMP%]{right:-30rem;transform:translateY(-50%) scaleX(-1)}.project-skills-container[_ngcontent-%COMP%]{color:var(--color-text);display:flex;flex-direction:row;margin-top:.5rem;margin-bottom:1rem}.project-skills[_ngcontent-%COMP%]{margin-left:.5rem;font-size:clamp(.8rem,1.5vw,1.5rem);font-weight:bolder}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2rem;gap:.5rem}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;border:none;background-color:#fff;opacity:.7;transition:opacity .2s ease,transform .2s ease;cursor:pointer}.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{opacity:1;transform:scale(1.5);background-color:var(--color-secondary)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.9}.slider-card[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.slider-card[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.slider-card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--color-secondary);border-radius:8px;border:2px solid transparent;background-clip:content-box}.slider-card[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--color-secondary) transparent}']})};var Df="176";var Db=0,Xv=1,Ib=2;var Yv=1,Ab=2,Zi=3,Cr=0,Nn=1,hi=2,Pr=0,Ii=1,Zv=2,Jv=3,Qv=4,Rb=5,ss=100,Pb=101,Nb=102,Ob=103,Lb=104,Fb=200,kb=201,Ub=202,Bb=203,rf=204,sf=205,Vb=206,zb=207,Hb=208,Gb=209,jb=210,Wb=211,$b=212,qb=213,Xb=214,If=0,Af=1,Rf=2,js=3,Pf=4,Nf=5,Of=6,Lf=7,Ff=0,Yb=1,Zb=2,Nr=0,Jb=1,Qb=2,Kb=3,kf=4,eS=5,tS=6,nS=7;var Fv=300,Js=301,Qs=302,Uf=303,Bf=304,_l=306,of=1e3,rs=1001,af=1002,Qt=1003,iS=1004;var xl=1005;var Ai=1006,Vf=1007;var ds=1008;var Ni=1009,Kv=1010,ey=1011,ba=1012,zf=1013,fs=1014,nn=1015,Sa=1016,Hf=1017,Gf=1018,wa=1020,ty=35902,ny=1021,iy=1022,Yt=1023,ha=1026,Ta=1027,ry=1028,jf=1029,sy=1030,Wf=1031;var $f=1033,Ml=33776,El=33777,bl=33778,Sl=33779,qf=35840,Xf=35841,Yf=35842,Zf=35843,Jf=36196,Qf=37492,Kf=37496,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,ch=37816,lh=37817,uh=37818,dh=37819,fh=37820,hh=37821,wl=36492,ph=36494,mh=36495,oy=36283,gh=36284,vh=36285,yh=36286;var Kc=2300,cf=2301,nf=2302,kv=2400,Uv=2401,Bv=2402;var rS=3200,sS=3201;var _h=0,oS=1,Or="",Rn="srgb",Ws="srgb-linear",el="linear",Dt="srgb";var Gs=7680;var Vv=519,aS=512,cS=513,lS=514,ay=515,uS=516,dS=517,fS=518,hS=519,zv=35044;var cy="300 es",Xi=2e3,tl=2001;var Dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eb=1234567,da=Math.PI/180,pa=180/Math.PI;function Ca(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function ly(n,e){return(n%e+e)%e}function iN(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rN(n,e,t){return n!==e?(t-n)/(e-n):0}function Qc(n,e,t){return(1-t)*n+t*e}function sN(n,e,t,i){return Qc(n,e,1-Math.exp(-t*i))}function oN(n,e=1){return e-Math.abs(ly(n,e*2)-e)}function aN(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cN(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lN(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uN(n,e){return n+Math.random()*(e-n)}function dN(n){return n*(.5-Math.random())}function fN(n){n!==void 0&&(eb=n);let e=eb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hN(n){return n*da}function pN(n){return n*pa}function mN(n){return(n&n-1)===0&&n!==0}function gN(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vN(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yN(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var uy={DEG2RAD:da,RAD2DEG:pa,generateUUID:Ca,clamp:ft,euclideanModulo:ly,mapLinear:iN,inverseLerp:rN,lerp:Qc,damp:sN,pingpong:oN,smoothstep:aN,smootherstep:cN,randInt:lN,randFloat:uN,randFloatSpread:dN,seededRandom:fN,degToRad:hN,radToDeg:pN,isPowerOfTwo:mN,ceilPowerOfTwo:gN,floorPowerOfTwo:vN,setQuaternionFromProperEuler:yN,normalize:An,denormalize:ua},lt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],T=r[1],C=r[4],b=r[7],N=r[2],I=r[5],A=r[8];return s[0]=o*v+a*T+c*N,s[3]=o*m+a*C+c*I,s[6]=o*p+a*b+c*A,s[1]=l*v+u*T+d*N,s[4]=l*m+u*C+d*I,s[7]=l*p+u*b+d*A,s[2]=f*v+h*T+g*N,s[5]=f*m+h*C+g*I,s[8]=f*p+h*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hv.makeScale(e,t)),this}rotate(e){return this.premultiply(hv.makeRotation(-e)),this}translate(e,t){return this.premultiply(hv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hv=new Je;function dy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pS(){let n=ma("canvas");return n.style.display="block",n}var tb={};function Tl(n){n in tb||(tb[n]=!0,console.warn(n))}function mS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gS(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vS(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nb=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ib=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _N(){let n={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=fa(r.r),r.g=fa(r.g),r.b=fa(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Or?el:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ws]:{primaries:e,whitePoint:i,transfer:el,toXYZ:nb,fromXYZ:ib,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:nb,fromXYZ:ib,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}var _t=_N();function Tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qo,lf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qo===void 0&&(Qo=ma("canvas")),Qo.width=e.width,Qo.height=e.height;let r=Qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xN=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xN++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pv(r[o].image)):s.push(pv(r[o]))}else s=pv(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function pv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var MN=0,Ji=(()=>{class n extends Dr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=rs,s=rs,o=Ai,a=ds,c=Yt,l=Ni,u=n.DEFAULT_ANISOTROPY,d=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MN++}),this.uuid=Ca(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case of:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case of:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Fv,n.DEFAULT_ANISOTROPY=1,n})(),Gt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,b=(h+1)/2,N=(p+1)/2,I=(u+f)/4,A=(d+v)/4,O=(g+m)/4;return C>b&&C>N?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=I/i,s=A/i):b>N?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=I/r,s=O/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uf=class extends Dr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);let r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);let s=new Ji(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nl=class extends Ji{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var df=class extends Ji{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*v,T=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){let N=Math.sqrt(C),I=Math.atan2(N,p*T);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}let b=a*T;if(c=c*m+f*b,l=l*m+h*b,u=u*m+g*b,d=d*m+v*b,m===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mv.copy(this).projectOnVector(e),this.sub(mv)}reflect(e){return this.sub(mv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mv=new F,rb=new Ir,os=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rd.copy(i.boundingBox)),Rd.applyMatrix4(e.matrixWorld),this.union(Rd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qc),Pd.subVectors(this.max,qc),Ko.subVectors(e.a,qc),ea.subVectors(e.b,qc),ta.subVectors(e.c,qc),Qr.subVectors(ea,Ko),Kr.subVectors(ta,ea),Bs.subVectors(Ko,ta);let t=[0,-Qr.z,Qr.y,0,-Kr.z,Kr.y,0,-Bs.z,Bs.y,Qr.z,0,-Qr.x,Kr.z,0,-Kr.x,Bs.z,0,-Bs.x,-Qr.y,Qr.x,0,-Kr.y,Kr.x,0,-Bs.y,Bs.x,0];return!gv(t,Ko,ea,ta,Pd)||(t=[1,0,0,0,1,0,0,0,1],!gv(t,Ko,ea,ta,Pd))?!1:(Nd.crossVectors(Qr,Kr),t=[Nd.x,Nd.y,Nd.z],gv(t,Ko,ea,ta,Pd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_r=[new F,new F,new F,new F,new F,new F,new F,new F],wi=new F,Rd=new os,Ko=new F,ea=new F,ta=new F,Qr=new F,Kr=new F,Bs=new F,qc=new F,Pd=new F,Nd=new F,Vs=new F;function gv(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vs.fromArray(n,s);let a=r.x*Math.abs(Vs.x)+r.y*Math.abs(Vs.y)+r.z*Math.abs(Vs.z),c=e.dot(Vs),l=t.dot(Vs),u=i.dot(Vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var EN=new os,Xc=new F,vv=new F,as=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):EN.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xc.subVectors(e,this.center);let t=Xc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xc.copy(e.center).add(vv)),this.expandByPoint(Xc.copy(e.center).sub(vv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xr=new F,yv=new F,Od=new F,es=new F,_v=new F,Ld=new F,xv=new F,$s=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yv.copy(e).add(t).multiplyScalar(.5),Od.copy(t).sub(e).normalize(),es.copy(this.origin).sub(yv);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Od),a=es.dot(this.direction),c=-es.dot(Od),l=es.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yv).addScaledVector(Od,f),h}intersectSphere(e,t){xr.subVectors(e.center,this.origin);let i=xr.dot(this.direction),r=xr.dot(xr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,r,s){_v.subVectors(t,e),Ld.subVectors(i,e),xv.crossVectors(_v,Ld);let o=this.direction.dot(xv),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let c=a*this.direction.dot(Ld.crossVectors(es,Ld));if(c<0)return null;let l=a*this.direction.dot(_v.cross(es));if(l<0||c+l>o)return null;let u=-a*es.dot(xv);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),o=1/na.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bN,e,SN)}lookAt(e,t,i){let r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ts.crossVectors(i,ni),ts.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ts.crossVectors(i,ni)),ts.normalize(),Fd.crossVectors(ni,ts),r[0]=ts.x,r[4]=Fd.x,r[8]=ni.x,r[1]=ts.y,r[5]=Fd.y,r[9]=ni.y,r[2]=ts.z,r[6]=Fd.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],C=i[7],b=i[11],N=i[15],I=r[0],A=r[4],O=r[8],S=r[12],E=r[1],P=r[5],j=r[9],G=r[13],Y=r[2],K=r[6],X=r[10],ne=r[14],$=r[3],he=r[7],Me=r[11],Te=r[15];return s[0]=o*I+a*E+c*Y+l*$,s[4]=o*A+a*P+c*K+l*he,s[8]=o*O+a*j+c*X+l*Me,s[12]=o*S+a*G+c*ne+l*Te,s[1]=u*I+d*E+f*Y+h*$,s[5]=u*A+d*P+f*K+h*he,s[9]=u*O+d*j+f*X+h*Me,s[13]=u*S+d*G+f*ne+h*Te,s[2]=g*I+v*E+m*Y+p*$,s[6]=g*A+v*P+m*K+p*he,s[10]=g*O+v*j+m*X+p*Me,s[14]=g*S+v*G+m*ne+p*Te,s[3]=T*I+C*E+b*Y+N*$,s[7]=T*A+C*P+b*K+N*he,s[11]=T*O+C*j+b*X+N*Me,s[15]=T*S+C*G+b*ne+N*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*l-v*f*l+v*c*h-a*m*h-d*c*p+a*f*p,C=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,b=u*v*l-g*d*l+g*a*h-o*v*h-u*a*p+o*d*p,N=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,I=t*T+i*C+r*b+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/I;return e[0]=T*A,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*A,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*A,e[4]=C*A,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*A,e[8]=b*A,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*A,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*A,e[12]=N*A,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,m=o*d,p=a*d,T=c*l,C=c*u,b=c*d,N=i.x,I=i.y,A=i.z;return r[0]=(1-(v+p))*N,r[1]=(h+b)*N,r[2]=(g-C)*N,r[3]=0,r[4]=(h-b)*I,r[5]=(1-(f+p))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(g+C)*A,r[9]=(m-T)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=na.set(r[0],r[1],r[2]).length(),o=na.set(r[4],r[5],r[6]).length(),a=na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ti.copy(this);let l=1/s,u=1/o,d=1/a;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===Xi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===tl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,v;if(a===Xi)g=(o+s)*d,v=-2*d;else if(a===tl)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},na=new F,Ti=new Rt,bN=new F(0,0,0),SN=new F(1,1,1),ts=new F,Fd=new F,ni=new F,sb=new Rt,ob=new Ir,qn=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sb,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ob.setFromEuler(this),this.setFromQuaternion(ob,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wN=0,ab=new F,ia=new Ir,Mr=new Rt,kd=new F,Yc=new F,TN=new F,CN=new Ir,cb=new F(1,0,0),lb=new F(0,1,0),ub=new F(0,0,1),db={type:"added"},DN={type:"removed"},ra={type:"childadded",child:null},Mv={type:"childremoved",child:null},Pn=(()=>{class n extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wN++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new qn,r=new Ir,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Je}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ia.setFromAxisAngle(t,i),this.quaternion.multiply(ia),this}rotateOnWorldAxis(t,i){return ia.setFromAxisAngle(t,i),this.quaternion.premultiply(ia),this}rotateX(t){return this.rotateOnAxis(cb,t)}rotateY(t){return this.rotateOnAxis(lb,t)}rotateZ(t){return this.rotateOnAxis(ub,t)}translateOnAxis(t,i){return ab.copy(t).applyQuaternion(this.quaternion),this.position.add(ab.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cb,t)}translateY(t){return this.translateOnAxis(lb,t)}translateZ(t){return this.translateOnAxis(ub,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?kd.copy(t):kd.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Yc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Yc,kd,this.up):Mr.lookAt(kd,Yc,this.up),this.quaternion.setFromRotationMatrix(Mr),s&&(Mr.extractRotation(s.matrixWorld),ia.setFromRotationMatrix(Mr),this.quaternion.premultiply(ia.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(db),ra.child=t,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(DN),Mv.child=t,this.dispatchEvent(Mv),Mv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(db),ra.child=t,this.dispatchEvent(ra),ra.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,t,TN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,CN,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Ft(Se({},c),{boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>Se({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Ci=new F,Er=new F,Ev=new F,br=new F,sa=new F,oa=new F,fb=new F,bv=new F,Sv=new F,wv=new F,Tv=new Gt,Cv=new Gt,Dv=new Gt,wr=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ci.subVectors(e,t),r.cross(Ci);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ci.subVectors(r,t),Er.subVectors(i,t),Ev.subVectors(e,t);let o=Ci.dot(Ci),a=Ci.dot(Er),c=Ci.dot(Ev),l=Er.dot(Er),u=Er.dot(Ev),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,br)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,br.x),c.addScaledVector(o,br.y),c.addScaledVector(a,br.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Tv.setScalar(0),Cv.setScalar(0),Dv.setScalar(0),Tv.fromBufferAttribute(e,t),Cv.fromBufferAttribute(e,i),Dv.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tv,s.x),o.addScaledVector(Cv,s.y),o.addScaledVector(Dv,s.z),o}static isFrontFacing(e,t,i,r){return Ci.subVectors(i,t),Er.subVectors(e,t),Ci.cross(Er).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Ci.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;sa.subVectors(r,i),oa.subVectors(s,i),bv.subVectors(e,i);let c=sa.dot(bv),l=oa.dot(bv);if(c<=0&&l<=0)return t.copy(i);Sv.subVectors(e,r);let u=sa.dot(Sv),d=oa.dot(Sv);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(sa,o);wv.subVectors(e,s);let h=sa.dot(wv),g=oa.dot(wv);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(oa,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return fb.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(fb,a);let p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ud={h:0,s:0,l:0};function Iv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=ly(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Iv(o,s,e+1/3),this.g=Iv(o,s,e),this.b=Iv(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let i=yS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return _t.fromWorkingColorSpace(wn.copy(this),e),Math.round(ft(wn.r*255,0,255))*65536+Math.round(ft(wn.g*255,0,255))*256+Math.round(ft(wn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(wn.copy(this),t);let i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Rn){_t.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,r=wn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ud);let i=Qc(ns.h,Ud.h,t),r=Qc(ns.s,Ud.s,t),s=Qc(ns.l,Ud.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new We;We.NAMES=yS;var IN=0,Xn=class extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IN++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Ii,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qs=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new F,Bd=new lt,AN=0,Bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AN++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zv,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bd.fromBufferAttribute(this,t),Bd.applyMatrix3(e),this.setXY(t,Bd.x,Bd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zv&&(e.usage=this.usage),e}};var il=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var rl=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},RN=0,di=new Rt,Av=new Pn,aa=new F,ii=new os,Zc=new os,ln=new F,Xt=class n extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RN++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dy(e)?rl:il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Av.lookAt(e),Av.updateMatrix(),this.applyMatrix4(Av.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Zc.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ii.min,Zc.min),ii.expandByPoint(ln),ln.addVectors(ii.max,Zc.max),ii.expandByPoint(ln)):(ii.expandByPoint(Zc.min),ii.expandByPoint(Zc.max))}ii.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ln.fromBufferAttribute(a,l),c&&(aa.fromBufferAttribute(e,l),ln.add(aa)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new F,c[O]=new F;let l=new F,u=new F,d=new F,f=new lt,h=new lt,g=new lt,v=new F,m=new F;function p(O,S,E){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,E),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),a[O].add(v),a[S].add(v),a[E].add(v),c[O].add(m),c[S].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,S=T.length;O<S;++O){let E=T[O],P=E.start,j=E.count;for(let G=P,Y=P+j;G<Y;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let C=new F,b=new F,N=new F,I=new F;function A(O){N.fromBufferAttribute(r,O),I.copy(N);let S=a[O];C.copy(S),C.sub(N.multiplyScalar(N.dot(S))).normalize(),b.crossVectors(I,S);let P=b.dot(c[O])<0?-1:1;o.setXYZW(O,C.x,C.y,C.z,P)}for(let O=0,S=T.length;O<S;++O){let E=T[O],P=E.start,j=E.count;for(let G=P,Y=P+j;G<Y;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Bt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hb=new Rt,zs=new $s,Vd=new as,pb=new F,zd=new F,Hd=new F,Gd=new F,Rv=new F,jd=new F,mb=new F,Wd=new F,jt=class extends Pn{constructor(e=new Xt,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){jd.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Rv.fromBufferAttribute(d,e),o?jd.addScaledVector(Rv,u):jd.addScaledVector(Rv.sub(t),u))}t.add(jd)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vd.copy(i.boundingSphere),Vd.applyMatrix4(s),zs.copy(e.ray).recast(e.near),!(Vd.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Vd,pb)===null||zs.origin.distanceToSquared(pb)>(e.far-e.near)**2))&&(hb.copy(s).invert(),zs.copy(e.ray).applyMatrix4(hb),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),C=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=T,N=C;b<N;b+=3){let I=a.getX(b),A=a.getX(b+1),O=a.getX(b+2);r=$d(this,p,e,i,l,u,d,I,A,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=a.getX(m),C=a.getX(m+1),b=a.getX(m+2);r=$d(this,o,e,i,l,u,d,T,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),C=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=T,N=C;b<N;b+=3){let I=b,A=b+1,O=b+2;r=$d(this,p,e,i,l,u,d,I,A,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=m,C=m+1,b=m+2;r=$d(this,o,e,i,l,u,d,T,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function PN(n,e,t,i,r,s,o,a){let c;if(e.side===Nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Cr,a),c===null)return null;Wd.copy(a),Wd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Wd);return l<t.near||l>t.far?null:{distance:l,point:Wd.clone(),object:n}}function $d(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,zd),n.getVertexPosition(c,Hd),n.getVertexPosition(l,Gd);let u=PN(n,e,t,i,zd,Hd,Gd,mb);if(u){let d=new F;wr.getBarycoord(mb,zd,Hd,Gd,d),r&&(u.uv=wr.getInterpolatedAttribute(r,a,c,l,d,new lt)),s&&(u.uv1=wr.getInterpolatedAttribute(s,a,c,l,d,new lt)),o&&(u.normal=wr.getInterpolatedAttribute(o,a,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new F,materialIndex:0};wr.getNormal(zd,Hd,Gd,f.normal),u.face=f,u.barycoord=d}return u}var ya=class n extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(d,2));function g(v,m,p,T,C,b,N,I,A,O,S){let E=b/A,P=N/O,j=b/2,G=N/2,Y=I/2,K=A+1,X=O+1,ne=0,$=0,he=new F;for(let Me=0;Me<X;Me++){let Te=Me*P-G;for(let rt=0;rt<K;rt++){let xt=rt*E-j;he[v]=xt*T,he[m]=Te*C,he[p]=Y,l.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=I>0?1:-1,u.push(he.x,he.y,he.z),d.push(rt/A),d.push(1-Me/O),ne+=1}}for(let Me=0;Me<O;Me++)for(let Te=0;Te<A;Te++){let rt=f+Te+K*Me,xt=f+Te+K*(Me+1),Z=f+(Te+1)+K*(Me+1),oe=f+(Te+1)+K*Me;c.push(rt,xt,oe),c.push(xt,Z,oe),$+=6}a.addGroup(h,$,S),h+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Ks(n[t]);for(let r in i)e[r]=i[r]}return e}function NN(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fy(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var _S={clone:Ks,merge:Tn},ON=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ON,this.fragmentShader=LN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=NN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sl=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new F,gb=new lt,vb=new lt,zt=class extends sl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,gb,vb),t.subVectors(vb,gb)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(da*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ca=-90,la=1,ff=class extends Pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(ca,la,e,t);r.layers=this.layers,this.add(r);let s=new zt(ca,la,e,t);s.layers=this.layers,this.add(s);let o=new zt(ca,la,e,t);o.layers=this.layers,this.add(o);let a=new zt(ca,la,e,t);a.layers=this.layers,this.add(a);let c=new zt(ca,la,e,t);c.layers=this.layers,this.add(c);let l=new zt(ca,la,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ol=class extends Ji{constructor(e=[],t=Js,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hf=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ol(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Pr});s.uniforms.tEquirect.value=t;let o=new jt(r,s),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=Ai),new ff(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Di=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},FN={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ri=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yi=class extends Ji{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Qt,u=Qt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pv=new F,kN=new F,UN=new Je,fi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Pv.subVectors(i,t).cross(kN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Pv),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||UN.getNormalMatrix(e),r=this.coplanarPoint(Pv).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new as,qd=new F,xa=class{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,o=new fi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],T=r[13],C=r[14],b=r[15];if(i[0].setComponents(c-s,f-l,m-h,b-p).normalize(),i[1].setComponents(c+s,f+l,m+h,b+p).normalize(),i[2].setComponents(c+o,f+u,m+g,b+T).normalize(),i[3].setComponents(c-o,f-u,m-g,b-T).normalize(),i[4].setComponents(c-a,f-d,m-v,b-C).normalize(),t===Xi)i[5].setComponents(c+a,f+d,m+v,b+C).normalize();else if(t===tl)i[5].setComponents(a,d,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(qd.x=r.normal.x>0?e.max.x:e.min.x,qd.y=r.normal.y>0?e.max.y:e.min.y,qd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cs=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pf=new F,mf=new F,yb=new Rt,Jc=new $s,Xd=new as,Nv=new F,_b=new F,gf=class extends Pn{constructor(e=new Xt,t=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pf.fromBufferAttribute(t,r-1),mf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pf.distanceTo(mf);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xd.copy(i.boundingSphere),Xd.applyMatrix4(r),Xd.radius+=s,e.ray.intersectsSphere(Xd)===!1)return;yb.copy(r).invert(),Jc.copy(e.ray).applyMatrix4(yb);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){let p=u.getX(v),T=u.getX(v+1),C=Yd(this,e,Jc,c,p,T,v);C&&t.push(C)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(h),p=Yd(this,e,Jc,c,v,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){let p=Yd(this,e,Jc,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Yd(this,e,Jc,c,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yd(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(pf.fromBufferAttribute(a,r),mf.fromBufferAttribute(a,s),t.distanceSqToSegment(pf,mf,Nv,_b)>i)return;Nv.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Nv);if(!(l<e.near||l>e.far))return{distance:l,point:_b.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var xb=new F,Mb=new F,Ma=class extends gf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xb.fromBufferAttribute(t,r),Mb.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xb.distanceTo(Mb);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eb=new Rt,Hv=new $s,Zd=new as,Jd=new F,Pi=class extends Pn{constructor(e=new Xt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zd.copy(i.boundingSphere),Zd.applyMatrix4(r),Zd.radius+=s,e.ray.intersectsSphere(Zd)===!1)return;Eb.copy(r).invert(),Hv.copy(e.ray).applyMatrix4(Eb);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){let m=l.getX(g);Jd.fromBufferAttribute(d,m),bb(Jd,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)Jd.fromBufferAttribute(d,g),bb(Jd,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function bb(n,e,t,i,r,s,o){let a=Hv.distanceSqToPoint(n);if(a<t){let c=new F;Hv.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var al=class extends Ji{constructor(e,t,i=fs,r,s,o,a=Qt,c=Qt,l,u=ha){if(u!==ha&&u!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var cl=class n extends Xt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],g=0,v=[],m=i/2,p=0;T(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(h,2));function T(){let b=new F,N=new F,I=0,A=(t-e)/i;for(let O=0;O<=s;O++){let S=[],E=O/s,P=E*(t-e)+e;for(let j=0;j<=r;j++){let G=j/r,Y=G*c+a,K=Math.sin(Y),X=Math.cos(Y);N.x=P*K,N.y=-E*i+m,N.z=P*X,d.push(N.x,N.y,N.z),b.set(K,A,X).normalize(),f.push(b.x,b.y,b.z),h.push(G,1-E),S.push(g++)}v.push(S)}for(let O=0;O<r;O++)for(let S=0;S<s;S++){let E=v[S][O],P=v[S+1][O],j=v[S+1][O+1],G=v[S][O+1];(e>0||S!==0)&&(u.push(E,P,G),I+=3),(t>0||S!==s-1)&&(u.push(P,j,G),I+=3)}l.addGroup(p,I,0),p+=I}function C(b){let N=g,I=new lt,A=new F,O=0,S=b===!0?e:t,E=b===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,m*E,0),f.push(0,E,0),h.push(.5,.5),g++;let P=g;for(let j=0;j<=r;j++){let Y=j/r*c+a,K=Math.cos(Y),X=Math.sin(Y);A.x=S*X,A.y=m*E,A.z=S*K,d.push(A.x,A.y,A.z),f.push(0,E,0),I.x=K*.5+.5,I.y=X*.5*E+.5,h.push(I.x,I.y),g++}for(let j=0;j<r;j++){let G=N+j,Y=P+j;b===!0?u.push(Y,Y+1,G):u.push(Y+1,Y,G),O+=3}l.addGroup(p,O,b===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qd=new F,Kd=new F,Ov=new F,ef=new wr,ll=class extends Xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(da*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:p}=ef;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ef.getNormal(Ov),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let C=(T+1)%3,b=d[T],N=d[C],I=ef[u[T]],A=ef[u[C]],O=`${b}_${N}`,S=`${N}_${b}`;S in f&&f[S]?(Ov.dot(f[S].normal)<=s&&(h.push(I.x,I.y,I.z),h.push(A.x,A.y,A.z)),f[S]=null):O in f||(f[O]={index0:l[T],index1:l[C],normal:Ov.clone()})}}for(let g in f)if(f[g]){let{index0:v,index1:m}=f[g];Qd.fromBufferAttribute(a,v),Kd.fromBufferAttribute(a,m),h.push(Qd.x,Qd.y,Qd.z),h.push(Kd.x,Kd.y,Kd.z)}this.setAttribute("position",new Ht(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Xs=class n extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let T=p*f-o;for(let C=0;C<l;C++){let b=C*d-s;g.push(b,-T,0),v.push(0,0,1),m.push(C/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let C=T+l*p,b=T+l*(p+1),N=T+1+l*(p+1),I=T+1+l*p;h.push(C,b,I),h.push(b,N,I)}this.setIndex(h),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ul=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var dl=class extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vf=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yf=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tf(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function BN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ys=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_f=class extends Ys{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kv,endingEnd:kv}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uv:s=e,a=2*t-i;break;case Bv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Uv:o=e,c=2*i-t;break;case Bv:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,C=(-1-h)*m+(1.5+h)*v+.5*g,b=h*m-h*v;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+T*o[l+N]+C*o[c+N]+b*o[d+N];return s}},xf=class extends Ys{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Mf=class extends Ys{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tf(t,this.TimeBufferType),this.values=tf(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:tf(e.times,Array),values:tf(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _f(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kc:t=this.InterpolantFactoryMethodDiscrete;break;case cf:t=this.InterpolantFactoryMethodLinear;break;case nf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kc;case this.InterpolantFactoryMethodLinear:return cf;case this.InterpolantFactoryMethodSmooth:return nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&BN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===nf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=cf;var ls=class extends ri{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Kc;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ef=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}};Ef.prototype.ValueTypeName="color";var bf=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}};bf.prototype.ValueTypeName="number";var Sf=class extends Ys{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ir.slerpFlat(s,0,o,l-a,o,l,c);return s}},fl=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Sf(this.times,this.values,this.getValueSize(),e)}};fl.prototype.ValueTypeName="quaternion";fl.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ri{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Kc;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}};wf.prototype.ValueTypeName="vector";var hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ea=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},xS=new Ea,Da=(()=>{class n{constructor(t){this.manager=t!==void 0?t:xS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Sr={},Gv=class extends Error{constructor(e,t){super(e),this.response=t}},pl=class extends Da{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sr[e]!==void 0){Sr[e].push({onLoad:t,onProgress:i,onError:r});return}Sr[e]=[],Sr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Sr[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,v=0,m=new ReadableStream({start(p){T();function T(){d.read().then(({done:C,value:b})=>{if(C)p.close();else{v+=b.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let I=0,A=u.length;I<A;I++){let O=u[I];O.onProgress&&O.onProgress(N)}p.enqueue(b),T()}},C=>{p.error(C)})}}});return new Response(m)}else throw new Gv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{hl.add(e,l);let u=Sr[e];delete Sr[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=Sr[e];if(u===void 0)throw this.manager.itemError(e),l;delete Sr[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Tf=class extends Da{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=hl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ma("img");function c(){u(),hl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var ml=class extends Da{constructor(e){super(e)}load(e,t,i,r){let s=new Ji,o=new Tf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},gl=class extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},vl=class extends gl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lv=new Rt,Sb=new F,wb=new F,jv=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Sb.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sb),wb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wb),t.updateMatrixWorld(),Lv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lv),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Rr=class extends sl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wv=class extends jv{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yl=class extends gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Wv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cf=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hy="\\[\\]\\.:\\/",VN=new RegExp("["+hy+"]","g"),py="[^"+hy+"]",zN="[^"+hy.replace("\\.","")+"]",HN=/((?:WC+[\/:])*)/.source.replace("WC",py),GN=/(WCOD+)?/.source.replace("WCOD",zN),jN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",py),WN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",py),$N=new RegExp("^"+HN+GN+jN+WN+"$"),qN=["material","materials","bones","map"],$v=class{constructor(e,t,i){let r=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VN,"")}static parseTrackName(t){let i=$N.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);qN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=$v,n})();Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uG=new Float32Array(1);var Tb=new Rt,Zs=class{constructor(e,t,i=0,r=1/0){this.ray=new $s(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tb.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tb),this}intersectObject(e,t=!0,i=[]){return qv(e,this,i,t),i.sort(Cb),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qv(e[r],this,i,t);return i.sort(Cb),i}};function Cb(n,e){return n.distance-e.distance}function qv(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)qv(s[o],e,t,!0)}}function my(n,e,t,i){let r=XN(i);switch(t){case ny:return n*e;case ry:return n*e/r.components*r.byteLength;case jf:return n*e/r.components*r.byteLength;case sy:return n*e*2/r.components*r.byteLength;case Wf:return n*e*2/r.components*r.byteLength;case iy:return n*e*3/r.components*r.byteLength;case Yt:return n*e*4/r.components*r.byteLength;case $f:return n*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xf:case Zf:return Math.max(n,16)*Math.max(e,8)/4;case qf:case Yf:return Math.max(n,8)*Math.max(e,8)/2;case Jf:case Qf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wl:case ph:case mh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oy:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XN(n){switch(n){case Ni:case Kv:return{byteLength:1,components:1};case ba:case ey:case Sa:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case fs:case zf:case nn:return{byteLength:4,components:1};case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);function jS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function YN(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ZN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eO=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rO=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sO=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cO=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_O=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TO="gl_FragColor = linearToOutputTexel( gl_FragColor );",CO=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zO=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HO=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$O=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XO=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YO=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QO=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KO=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_L=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ML=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_F=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:ZN,alphahash_pars_fragment:JN,alphamap_fragment:QN,alphamap_pars_fragment:KN,alphatest_fragment:eO,alphatest_pars_fragment:tO,aomap_fragment:nO,aomap_pars_fragment:iO,batching_pars_vertex:rO,batching_vertex:sO,begin_vertex:oO,beginnormal_vertex:aO,bsdfs:cO,iridescence_fragment:lO,bumpmap_pars_fragment:uO,clipping_planes_fragment:dO,clipping_planes_pars_fragment:fO,clipping_planes_pars_vertex:hO,clipping_planes_vertex:pO,color_fragment:mO,color_pars_fragment:gO,color_pars_vertex:vO,color_vertex:yO,common:_O,cube_uv_reflection_fragment:xO,defaultnormal_vertex:MO,displacementmap_pars_vertex:EO,displacementmap_vertex:bO,emissivemap_fragment:SO,emissivemap_pars_fragment:wO,colorspace_fragment:TO,colorspace_pars_fragment:CO,envmap_fragment:DO,envmap_common_pars_fragment:IO,envmap_pars_fragment:AO,envmap_pars_vertex:RO,envmap_physical_pars_fragment:HO,envmap_vertex:PO,fog_vertex:NO,fog_pars_vertex:OO,fog_fragment:LO,fog_pars_fragment:FO,gradientmap_pars_fragment:kO,lightmap_pars_fragment:UO,lights_lambert_fragment:BO,lights_lambert_pars_fragment:VO,lights_pars_begin:zO,lights_toon_fragment:GO,lights_toon_pars_fragment:jO,lights_phong_fragment:WO,lights_phong_pars_fragment:$O,lights_physical_fragment:qO,lights_physical_pars_fragment:XO,lights_fragment_begin:YO,lights_fragment_maps:ZO,lights_fragment_end:JO,logdepthbuf_fragment:QO,logdepthbuf_pars_fragment:KO,logdepthbuf_pars_vertex:eL,logdepthbuf_vertex:tL,map_fragment:nL,map_pars_fragment:iL,map_particle_fragment:rL,map_particle_pars_fragment:sL,metalnessmap_fragment:oL,metalnessmap_pars_fragment:aL,morphinstance_vertex:cL,morphcolor_vertex:lL,morphnormal_vertex:uL,morphtarget_pars_vertex:dL,morphtarget_vertex:fL,normal_fragment_begin:hL,normal_fragment_maps:pL,normal_pars_fragment:mL,normal_pars_vertex:gL,normal_vertex:vL,normalmap_pars_fragment:yL,clearcoat_normal_fragment_begin:_L,clearcoat_normal_fragment_maps:xL,clearcoat_pars_fragment:ML,iridescence_pars_fragment:EL,opaque_fragment:bL,packing:SL,premultiplied_alpha_fragment:wL,project_vertex:TL,dithering_fragment:CL,dithering_pars_fragment:DL,roughnessmap_fragment:IL,roughnessmap_pars_fragment:AL,shadowmap_pars_fragment:RL,shadowmap_pars_vertex:PL,shadowmap_vertex:NL,shadowmask_pars_fragment:OL,skinbase_vertex:LL,skinning_pars_vertex:FL,skinning_vertex:kL,skinnormal_vertex:UL,specularmap_fragment:BL,specularmap_pars_fragment:VL,tonemapping_fragment:zL,tonemapping_pars_fragment:HL,transmission_fragment:GL,transmission_pars_fragment:jL,uv_pars_fragment:WL,uv_pars_vertex:$L,uv_vertex:qL,worldpos_vertex:XL,background_vert:YL,background_frag:ZL,backgroundCube_vert:JL,backgroundCube_frag:QL,cube_vert:KL,cube_frag:eF,depth_vert:tF,depth_frag:nF,distanceRGBA_vert:iF,distanceRGBA_frag:rF,equirect_vert:sF,equirect_frag:oF,linedashed_vert:aF,linedashed_frag:cF,meshbasic_vert:lF,meshbasic_frag:uF,meshlambert_vert:dF,meshlambert_frag:fF,meshmatcap_vert:hF,meshmatcap_frag:pF,meshnormal_vert:mF,meshnormal_frag:gF,meshphong_vert:vF,meshphong_frag:yF,meshphysical_vert:_F,meshphysical_frag:xF,meshtoon_vert:MF,meshtoon_frag:EF,points_vert:bF,points_frag:SF,shadow_vert:wF,shadow_frag:TF,sprite_vert:CF,sprite_frag:DF},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Qi={basic:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Tn([le.points,le.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Tn([le.common,le.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Tn([le.sprite,le.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Tn([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Tn([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Qi.physical={uniforms:Tn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var xh={r:0,b:0,g:0},eo=new qn,IF=new Rt;function AF(n,e,t,i,r,s,o){let a=new We(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function v(C){let b=!1,N=g(C);N===null?p(a,c):N&&N.isColor&&(p(N,1),b=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,b){let N=g(b);N&&(N.isCubeTexture||N.mapping===_l)?(u===void 0&&(u=new jt(new ya(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ks(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),eo.copy(b.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IF.makeRotationFromEuler(eo)),u.material.toneMapped=_t.getTransfer(N.colorSpace)!==Dt,(d!==N||f!==N.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new jt(new Xs(2,2),new gn({name:"BackgroundMaterial",uniforms:Ks(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_t.getTransfer(N.colorSpace)!==Dt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||f!==N.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,f=N.version,h=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function p(C,b){C.getRGB(xh,fy(n)),i.buffers.color.setClear(xh.r,xh.g,xh.b,b,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,b=1){a.set(C),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,p(a,c)},render:v,addToRenderList:m,dispose:T}}function RF(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(E,P,j,G,Y){let K=!1,X=d(G,j,P);s!==X&&(s=X,l(s.object)),K=h(E,G,j,Y),K&&g(E,G,j,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,b(E,P,j,G),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,P,j){let G=j.wireframe===!0,Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let X=K[G];return X===void 0&&(X=f(c()),K[G]=X),X}function f(E){let P=[],j=[],G=[];for(let Y=0;Y<t;Y++)P[Y]=0,j[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:j,attributeDivisors:G,object:E,attributes:{},index:null}}function h(E,P,j,G){let Y=s.attributes,K=P.attributes,X=0,ne=j.getAttributes();for(let $ in ne)if(ne[$].location>=0){let Me=Y[$],Te=K[$];if(Te===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),Me===void 0||Me.attribute!==Te||Te&&Me.data!==Te.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function g(E,P,j,G){let Y={},K=P.attributes,X=0,ne=j.getAttributes();for(let $ in ne)if(ne[$].location>=0){let Me=K[$];Me===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor));let Te={};Te.attribute=Me,Me&&Me.data&&(Te.data=Me.data),Y[$]=Te,X++}s.attributes=Y,s.attributesNum=X,s.index=G}function v(){let E=s.newAttributes;for(let P=0,j=E.length;P<j;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){let j=s.newAttributes,G=s.enabledAttributes,Y=s.attributeDivisors;j[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),Y[E]!==P&&(n.vertexAttribDivisor(E,P),Y[E]=P)}function T(){let E=s.newAttributes,P=s.enabledAttributes;for(let j=0,G=P.length;j<G;j++)P[j]!==E[j]&&(n.disableVertexAttribArray(j),P[j]=0)}function C(E,P,j,G,Y,K,X){X===!0?n.vertexAttribIPointer(E,P,j,Y,K):n.vertexAttribPointer(E,P,j,G,Y,K)}function b(E,P,j,G){v();let Y=G.attributes,K=j.getAttributes(),X=P.defaultAttributeValues;for(let ne in K){let $=K[ne];if($.location>=0){let he=Y[ne];if(he===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){let Me=he.normalized,Te=he.itemSize,rt=e.get(he);if(rt===void 0)continue;let xt=rt.buffer,Z=rt.type,oe=rt.bytesPerElement,ce=Z===n.INT||Z===n.UNSIGNED_INT||he.gpuType===zf;if(he.isInterleavedBufferAttribute){let ae=he.data,ye=ae.stride,ze=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<$.locationSize;Oe++)p($.location+Oe,ae.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<$.locationSize;Oe++)m($.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Oe=0;Oe<$.locationSize;Oe++)C($.location+Oe,Te/$.locationSize,Z,Me,ye*oe,(ze+Te/$.locationSize*Oe)*oe,ce)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)p($.location+ae,he.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<$.locationSize;ae++)m($.location+ae);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let ae=0;ae<$.locationSize;ae++)C($.location+ae,Te/$.locationSize,Z,Me,Te*oe,Te/$.locationSize*ae*oe,ce)}}else if(X!==void 0){let Me=X[ne];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv($.location,Me);break;case 3:n.vertexAttrib3fv($.location,Me);break;case 4:n.vertexAttrib4fv($.location,Me);break;default:n.vertexAttrib1fv($.location,Me)}}}}T()}function N(){O();for(let E in i){let P=i[E];for(let j in P){let G=P[j];for(let Y in G)u(G[Y].object),delete G[Y];delete P[j]}delete i[E]}}function I(E){if(i[E.id]===void 0)return;let P=i[E.id];for(let j in P){let G=P[j];for(let Y in G)u(G[Y].object),delete G[Y];delete P[j]}delete i[E.id]}function A(E){for(let P in i){let j=i[P];if(j[E.id]===void 0)continue;let G=j[E.id];for(let Y in G)u(G[Y].object),delete G[Y];delete j[E.id]}}function O(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function PF(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function NF(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Yt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let O=A===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==nn&&!O)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:N,maxSamples:I}}function OF(n){let e=this,t=null,i=0,r=!1,s=!1,o=new fi,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let T=s?0:i,C=T*4,b=p.clippingState||null;c.value=b,b=u(g,f,C,h);for(let N=0;N!==C;++N)b[N]=t[N];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,b=h;C!==v;++C,b+=4)o.copy(d[C]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function LF(n){let e=new WeakMap;function t(o,a){return a===Uf?o.mapping=Js:a===Bf&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uf||a===Bf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new hf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Aa=4,MS=[.125,.215,.35,.446,.526,.582],io=20,gy=new Rr,ES=new We,vy=null,yy=0,_y=0,xy=!1,no=(1+Math.sqrt(5))/2,Ia=1/no,bS=[new F(-no,Ia,0),new F(no,Ia,0),new F(-Ia,0,no),new F(Ia,0,no),new F(0,no,-Ia),new F(0,no,Ia),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],FF=new F,bh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=FF}=s;vy=this._renderer.getRenderTarget(),yy=this._renderer.getActiveCubeFace(),_y=this._renderer.getActiveMipmapLevel(),xy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=TS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vy,yy,_y),this._renderer.xr.enabled=xy,e.scissorTest=!1,Mh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vy=this._renderer.getRenderTarget(),yy=this._renderer.getActiveCubeFace(),_y=this._renderer.getActiveMipmapLevel(),xy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Sa,format:Yt,colorSpace:Ws,depthBuffer:!1},r=SS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=SS(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kF(s)),this._blurMaterial=UF(s,e,t)}return r}_compileMaterial(e){let t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,gy)}_sceneToCubeUV(e,t,i,r,s){let c=new zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ES),d.toneMapping=Nr,d.autoClear=!1;let g=new qs({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),v=new jt(new ya,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ES),m=!0);for(let T=0;T<6;T++){let C=T%3;C===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):C===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));let b=this._cubeSize;Mh(r,C*b,T>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Js||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=TS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Mh(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,gy)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bS[(r-s-1)%bS.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new jt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*io-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):io;m>io&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${io}`);let p=[],T=0;for(let A=0;A<io;++A){let O=A/v,S=Math.exp(-O*O/2);p.push(S),A===0?T+=S:A<m&&(T+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-i;let b=this._sizeLods[r],N=3*b*(r>C-Aa?r-C+Aa:0),I=4*(this._cubeSize-b);Mh(t,N,I,3*b,2*b),c.setRenderTarget(t),c.render(d,gy)}};function kF(n){let e=[],t=[],i=[],r=n,s=n-Aa+1+MS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Aa?c=MS[o-n+Aa-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*h),C=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let I=0;I<h;I++){let A=I%3*2/3-1,O=I>2?0:-1,S=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];T.set(S,v*g*I),C.set(f,m*g*I);let E=[I,I,I,I,I,I];b.set(E,p*g*I)}let N=new Xt;N.setAttribute("position",new Bt(T,v)),N.setAttribute("uv",new Bt(C,m)),N.setAttribute("faceIndex",new Bt(b,p)),e.push(N),r>Aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function SS(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=_l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function UF(n,e,t){let i=new Float32Array(io),r=new F(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ay(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function wS(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ay(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function TS(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ay(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ay(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BF(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Uf||c===Bf,u=c===Js||c===Qs;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bh(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new bh(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function VF(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zF(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let T=h.array;v=h.version;for(let C=0,b=T.length;C<b;C+=3){let N=T[C+0],I=T[C+1],A=T[C+2];f.push(N,I,I,A,A,N)}}else if(g!==void 0){let T=g.array;v=g.version;for(let C=0,b=T.length/3-1;C<b;C+=3){let N=C+0,I=C+1,A=C+2;f.push(N,I,I,A,A,N)}}else return;let m=new(dy(f)?rl:il)(f,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function HF(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*v[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function GF(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jF(n,e,t){let i=new WeakMap,r=new Gt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var h=E;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let N=a.attributes.position.count*b,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let A=new Float32Array(N*I*4*d),O=new nl(A,N,I,d);O.type=nn,O.needsUpdate=!0;let S=b*4;for(let P=0;P<d;P++){let j=p[P],G=T[P],Y=C[P],K=N*I*4*P;for(let X=0;X<j.count;X++){let ne=X*S;g===!0&&(r.fromBufferAttribute(j,X),A[K+ne+0]=r.x,A[K+ne+1]=r.y,A[K+ne+2]=r.z,A[K+ne+3]=0),v===!0&&(r.fromBufferAttribute(G,X),A[K+ne+4]=r.x,A[K+ne+5]=r.y,A[K+ne+6]=r.z,A[K+ne+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),A[K+ne+8]=r.x,A[K+ne+9]=r.y,A[K+ne+10]=r.z,A[K+ne+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new lt(N,I)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function WF(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var WS=new Ji,CS=new al(1,1),$S=new nl,qS=new df,XS=new ol,DS=[],IS=[],AS=new Float32Array(16),RS=new Float32Array(9),PS=new Float32Array(4);function Pa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=DS[r];if(s===void 0&&(s=new Float32Array(r),DS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sh(n,e){let t=IS[e];t===void 0&&(t=new Int32Array(e),IS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $F(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function XF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function YF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function ZF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;PS.set(i),n.uniformMatrix2fv(this.addr,!1,PS),sn(t,i)}}function JF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;RS.set(i),n.uniformMatrix3fv(this.addr,!1,RS),sn(t,i)}}function QF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;AS.set(i),n.uniformMatrix4fv(this.addr,!1,AS),sn(t,i)}}function KF(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function t2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function n2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function i2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function s2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function o2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function a2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(CS.compareFunction=ay,s=CS):s=WS,t.setTexture2D(e||s,r)}function c2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qS,r)}function l2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||XS,r)}function u2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$S,r)}function d2(n){switch(n){case 5126:return $F;case 35664:return qF;case 35665:return XF;case 35666:return YF;case 35674:return ZF;case 35675:return JF;case 35676:return QF;case 5124:case 35670:return KF;case 35667:case 35671:return e2;case 35668:case 35672:return t2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return r2;case 36295:return s2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return u2}}function f2(n,e){n.uniform1fv(this.addr,e)}function h2(n,e){let t=Pa(e,this.size,2);n.uniform2fv(this.addr,t)}function p2(n,e){let t=Pa(e,this.size,3);n.uniform3fv(this.addr,t)}function m2(n,e){let t=Pa(e,this.size,4);n.uniform4fv(this.addr,t)}function g2(n,e){let t=Pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v2(n,e){let t=Pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y2(n,e){let t=Pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _2(n,e){n.uniform1iv(this.addr,e)}function x2(n,e){n.uniform2iv(this.addr,e)}function M2(n,e){n.uniform3iv(this.addr,e)}function E2(n,e){n.uniform4iv(this.addr,e)}function b2(n,e){n.uniform1uiv(this.addr,e)}function S2(n,e){n.uniform2uiv(this.addr,e)}function w2(n,e){n.uniform3uiv(this.addr,e)}function T2(n,e){n.uniform4uiv(this.addr,e)}function C2(n,e,t){let i=this.cache,r=e.length,s=Sh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||WS,s[o])}function D2(n,e,t){let i=this.cache,r=e.length,s=Sh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qS,s[o])}function I2(n,e,t){let i=this.cache,r=e.length,s=Sh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||XS,s[o])}function A2(n,e,t){let i=this.cache,r=e.length,s=Sh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$S,s[o])}function R2(n){switch(n){case 5126:return f2;case 35664:return h2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return v2;case 35676:return y2;case 5124:case 35670:return _2;case 35667:case 35671:return x2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return b2;case 36294:return S2;case 36295:return w2;case 36296:return T2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return A2}}var Ey=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d2(t.type)}},by=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R2(t.type)}},Sy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},My=/(\w+)(\])?(\[|\.)?/g;function NS(n,e){n.seq.push(e),n.map[e.id]=e}function P2(n,e,t){let i=n.name,r=i.length;for(My.lastIndex=0;;){let s=My.exec(i),o=My.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){NS(t,l===void 0?new Ey(a,n,e):new by(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Sy(a),NS(t,d)),t=d}}}var Ra=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);P2(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function OS(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var N2=37297,O2=0;function L2(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var LS=new Je;function F2(n){_t._getMatrix(LS,_t.workingColorSpace,n);let e=`mat3( ${LS.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case el:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function FS(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+L2(n.getShaderSource(e),o)}else return r}function k2(n,e){let t=F2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U2(n,e){let t;switch(e){case Jb:t="Linear";break;case Qb:t="Reinhard";break;case Kb:t="Cineon";break;case kf:t="ACESFilmic";break;case tS:t="AgX";break;case nS:t="Neutral";break;case eS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eh=new F;function B2(){_t.getLuminanceCoefficients(Eh);let n=Eh.x.toFixed(4),e=Eh.y.toFixed(4),t=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function z2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cl(n){return n!==""}function kS(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function US(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wy(n){return n.replace(G2,W2)}var j2=new Map;function W2(n,e){let t=it[e];if(t===void 0){let i=j2.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wy(t)}var $2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function BS(n){return n.replace($2,q2)}function q2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function VS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ab?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function J2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case Yb:e="ENVMAP_BLENDING_MIX";break;case Zb:e="ENVMAP_BLENDING_ADD";break}return e}function Q2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K2(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=X2(t),l=Y2(t),u=Z2(t),d=J2(t),f=Q2(t),h=V2(t),g=z2(s),v=r.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cl).join(`
`),p.length>0&&(p+=`
`)):(m=[VS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),p=[VS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?it.tonemapping_pars_fragment:"",t.toneMapping!==Nr?U2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,k2("linearToOutputTexel",t.outputColorSpace),B2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cl).join(`
`)),o=wy(o),o=kS(o,t),o=US(o,t),a=wy(a),a=kS(a,t),a=US(a,t),o=BS(o),a=BS(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=T+m+o,b=T+p+a,N=OS(r,r.VERTEX_SHADER,C),I=OS(r,r.FRAGMENT_SHADER,b);r.attachShader(v,N),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){let j=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(I).trim(),K=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,I);else{let ne=FS(r,N,"vertex"),$=FS(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+ne+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||Y==="")&&(X=!1);X&&(P.diagnostics={runnable:K,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(N),r.deleteShader(I),O=new Ra(r,v),S=H2(r,v)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,N2)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=I,this}var ek=0,Ty=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Cy(e),t.set(e,i)),i}},Cy=class{constructor(e){this.id=ek++,this.code=e,this.usedTimes=0}};function tk(n,e,t,i,r,s,o){let a=new va,c=new Ty,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,P,j,G){let Y=j.fog,K=G.geometry,X=S.isMeshStandardMaterial?j.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),$=ne&&ne.mapping===_l?ne.image.height:null,he=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let Me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=Me!==void 0?Me.length:0,rt=0;K.morphAttributes.position!==void 0&&(rt=1),K.morphAttributes.normal!==void 0&&(rt=2),K.morphAttributes.color!==void 0&&(rt=3);let xt,Z,oe,ce;if(he){let Mt=Qi[he];xt=Mt.vertexShader,Z=Mt.fragmentShader}else xt=S.vertexShader,Z=S.fragmentShader,c.update(S),oe=c.getVertexShaderID(S),ce=c.getFragmentShaderID(S);let ae=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,Pt=!!S.map,Tt=!!S.matcap,tt=!!ne,R=!!S.aoMap,Vt=!!S.lightMap,Qe=!!S.bumpMap,at=!!S.normalMap,Ce=!!S.displacementMap,St=!!S.emissiveMap,xe=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,z=S.clearcoat>0,J=S.dispersion>0,ee=S.iridescence>0,q=S.sheen>0,we=S.transmission>0,ue=_&&!!S.anisotropyMap,Pe=z&&!!S.clearcoatMap,Ne=z&&!!S.clearcoatNormalMap,re=z&&!!S.clearcoatRoughnessMap,Ee=ee&&!!S.iridescenceMap,ke=ee&&!!S.iridescenceThicknessMap,Be=q&&!!S.sheenColorMap,be=q&&!!S.sheenRoughnessMap,ut=!!S.specularMap,He=!!S.specularColorMap,It=!!S.specularIntensityMap,L=we&&!!S.transmissionMap,de=we&&!!S.thicknessMap,W=!!S.gradientMap,Q=!!S.alphaMap,ge=S.alphaTest>0,pe=!!S.alphaHash,$e=!!S.extensions,kt=Nr;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(kt=n.toneMapping);let on={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:xt,fragmentShader:Z,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ws,alphaToCoverage:!!S.alphaToCoverage,map:Pt,matcap:Tt,envMap:tt,envMapMode:tt&&ne.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:Vt,bumpMap:Qe,normalMap:at,displacementMap:f&&Ce,emissiveMap:St,normalMapObjectSpace:at&&S.normalMapType===oS,normalMapTangentSpace:at&&S.normalMapType===_h,metalnessMap:xe,roughnessMap:w,anisotropy:_,anisotropyMap:ue,clearcoat:z,clearcoatMap:Pe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:re,dispersion:J,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:q,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:ut,specularColorMap:He,specularIntensityMap:It,transmission:we,transmissionMap:L,thicknessMap:de,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:pe,combine:S.combine,mapUv:Pt&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:Vt&&v(S.lightMap.channel),bumpMapUv:Qe&&v(S.bumpMap.channel),normalMapUv:at&&v(S.normalMap.channel),displacementMapUv:Ce&&v(S.displacementMap.channel),emissiveMapUv:St&&v(S.emissiveMap.channel),metalnessMapUv:xe&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ue&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(S.sheenRoughnessMap.channel),specularMapUv:ut&&v(S.specularMap.channel),specularColorMapUv:He&&v(S.specularColorMap.channel),specularIntensityMapUv:It&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(at||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(Pt||Q),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Pt&&S.map.isVideoTexture===!0&&_t.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&_t.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===Nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(E,S),C(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function C(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){let E=g[S.type],P;if(E){let j=Qi[E];P=_S.clone(j.uniforms)}else P=S.uniforms;return P}function N(S,E){let P;for(let j=0,G=u.length;j<G;j++){let Y=u[j];if(Y.cacheKey===E){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new K2(n,E,S,s),u.push(P)),P}function I(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:N,releaseProgram:I,releaseShaderCache:A,programs:u,dispose:O}}function nk(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ik(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function HS(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||ik),i.length>1&&i.sort(f||zS),r.length>1&&r.sort(f||zS)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function rk(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new HS,n.set(i,[o])):r>=s.length?(o=new HS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sk(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function ok(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ak=0;function ck(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lk(n){let e=new sk,t=ok(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let r=new F,s=new Rt,o=new Rt;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,C=0,b=0,N=0,I=0,A=0;l.sort(ck);for(let S=0,E=l.length;S<E;S++){let P=l[S],j=P.color,G=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=j.r*G,d+=j.g*G,f+=j.b*G;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],G);A++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,$=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.directionalShadow[h]=$,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=P.shadow.matrix,T++}i.directional[h]=X,h++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(j).multiplyScalar(G),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;let ne=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,ne.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[v]=ne.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=K,b++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(j).multiplyScalar(G),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let ne=P.shadow,$=t.get(P);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,$.shadowCameraNear=ne.camera.near,$.shadowCameraFar=ne.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,C++}i.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(G),X.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==C||O.numSpotShadows!==b||O.numSpotMaps!==N||O.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=A,O.directionalLength=h,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=C,O.numSpotShadows=b,O.numSpotMaps=N,O.numLightProbes=A,i.version=ak++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let C=l[p];if(C.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(C.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(C.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(C.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function GS(n){let e=new lk(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function uk(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new GS(n),e.set(r,[a])):s>=o.length?(a=new GS(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var dk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fk=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hk(n,e,t){let i=new xa,r=new lt,s=new lt,o=new Gt,a=new vf({depthPacking:sS}),c=new yf,l={},u=t.maxTextureSize,d={[Cr]:Nn,[Nn]:Cr,[hi]:hi},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:dk,fragmentShader:fk}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let p=this.type;this.render=function(I,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let S=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Pr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let G=p!==Zi&&this.type===Zi,Y=p===Zi&&this.type!==Zi;for(let K=0,X=I.length;K<X;K++){let ne=I[K],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let he=$.getFrameExtents();if(r.multiply(he),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,$.mapSize.y=s.y)),$.map===null||G===!0||Y===!0){let Te=this.type!==Zi?{minFilter:Qt,magFilter:Qt}:{};$.map!==null&&$.map.dispose(),$.map=new $n(r.x,r.y,Te),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let Me=$.getViewportCount();for(let Te=0;Te<Me;Te++){let rt=$.getViewport(Te);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),j.viewport(o),$.updateMatrices(ne,Te),i=$.getFrustum(),b(A,O,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Zi&&T($,O),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,P)};function T(I,A){let O=e.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $n(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(A,null,O,f,v,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(A,null,O,h,v,null)}function C(I,A,O,S){let E=null,P=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)E=P;else if(E=O.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let j=E.uuid,G=A.uuid,Y=l[j];Y===void 0&&(Y={},l[j]=Y);let K=Y[G];K===void 0&&(K=E.clone(),Y[G]=K,A.addEventListener("dispose",N)),E=K}if(E.visible=A.visible,E.wireframe=A.wireframe,S===Zi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let j=n.properties.get(E);j.light=O}return E}function b(I,A,O,S,E){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===Zi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let G=e.update(I),Y=I.material;if(Array.isArray(Y)){let K=G.groups;for(let X=0,ne=K.length;X<ne;X++){let $=K[X],he=Y[$.materialIndex];if(he&&he.visible){let Me=C(I,he,S,E);I.onBeforeShadow(n,I,A,O,G,Me,$),n.renderBufferDirect(O,null,G,Me,I,$),I.onAfterShadow(n,I,A,O,G,Me,$)}}}else if(Y.visible){let K=C(I,Y,S,E);I.onBeforeShadow(n,I,A,O,G,K,null),n.renderBufferDirect(O,null,G,K,I,null),I.onAfterShadow(n,I,A,O,G,K,null)}}let j=I.children;for(let G=0,Y=j.length;G<Y;G++)b(j[G],A,O,S,E)}function N(I){I.target.removeEventListener("dispose",N);for(let O in l){let S=l[O],E=I.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var pk={[If]:Af,[Rf]:Of,[Pf]:Lf,[js]:Nf,[Af]:If,[Of]:Rf,[Lf]:Pf,[Nf]:js};function mk(n,e){function t(){let L=!1,de=new Gt,W=null,Q=new Gt(0,0,0,0);return{setMask:function(ge){W!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),W=ge)},setLocked:function(ge){L=ge},setClear:function(ge,pe,$e,kt,on){on===!0&&(ge*=kt,pe*=kt,$e*=kt),de.set(ge,pe,$e,kt),Q.equals(de)===!1&&(n.clearColor(ge,pe,$e,kt),Q.copy(de))},reset:function(){L=!1,W=null,Q.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,W=null,Q=null,ge=null;return{setReversed:function(pe){if(de!==pe){let $e=e.get("EXT_clip_control");pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),de=pe;let kt=ge;ge=null,this.setClear(kt)}},getReversed:function(){return de},setTest:function(pe){pe?ae(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(pe){W!==pe&&!L&&(n.depthMask(pe),W=pe)},setFunc:function(pe){if(de&&(pe=pk[pe]),Q!==pe){switch(pe){case If:n.depthFunc(n.NEVER);break;case Af:n.depthFunc(n.ALWAYS);break;case Rf:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Pf:n.depthFunc(n.EQUAL);break;case Nf:n.depthFunc(n.GEQUAL);break;case Of:n.depthFunc(n.GREATER);break;case Lf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){L=!1,W=null,Q=null,ge=null,de=!1}}}function r(){let L=!1,de=null,W=null,Q=null,ge=null,pe=null,$e=null,kt=null,on=null;return{setTest:function(Mt){L||(Mt?ae(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Mt){de!==Mt&&!L&&(n.stencilMask(Mt),de=Mt)},setFunc:function(Mt,Yn,On){(W!==Mt||Q!==Yn||ge!==On)&&(n.stencilFunc(Mt,Yn,On),W=Mt,Q=Yn,ge=On)},setOp:function(Mt,Yn,On){(pe!==Mt||$e!==Yn||kt!==On)&&(n.stencilOp(Mt,Yn,On),pe=Mt,$e=Yn,kt=On)},setLocked:function(Mt){L=Mt},setClear:function(Mt){on!==Mt&&(n.clearStencil(Mt),on=Mt)},reset:function(){L=!1,de=null,W=null,Q=null,ge=null,pe=null,$e=null,kt=null,on=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,C=null,b=null,N=null,I=null,A=new We(0,0,0),O=0,S=!1,E=null,P=null,j=null,G=null,Y=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ne>=2);let he=null,Me={},Te=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),xt=new Gt().fromArray(Te),Z=new Gt().fromArray(rt);function oe(L,de,W,Q){let ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(L,pe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<W;$e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}let ce={};ce[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(js),Qe(!1),at(Xv),ae(n.CULL_FACE),R(Pr);function ae(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ye(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function ze(L,de){return d[L]!==de?(n.bindFramebuffer(L,de),d[L]=de,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(L,de){let W=h,Q=!1;if(L){W=f.get(de),W===void 0&&(W=[],f.set(de,W));let ge=L.textures;if(W.length!==ge.length||W[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,$e=ge.length;pe<$e;pe++)W[pe]=n.COLOR_ATTACHMENT0+pe;W.length=ge.length,Q=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Q=!0);Q&&n.drawBuffers(W)}function Pt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Tt={[ss]:n.FUNC_ADD,[Pb]:n.FUNC_SUBTRACT,[Nb]:n.FUNC_REVERSE_SUBTRACT};Tt[Ob]=n.MIN,Tt[Lb]=n.MAX;let tt={[Fb]:n.ZERO,[kb]:n.ONE,[Ub]:n.SRC_COLOR,[rf]:n.SRC_ALPHA,[jb]:n.SRC_ALPHA_SATURATE,[Hb]:n.DST_COLOR,[Vb]:n.DST_ALPHA,[Bb]:n.ONE_MINUS_SRC_COLOR,[sf]:n.ONE_MINUS_SRC_ALPHA,[Gb]:n.ONE_MINUS_DST_COLOR,[zb]:n.ONE_MINUS_DST_ALPHA,[Wb]:n.CONSTANT_COLOR,[$b]:n.ONE_MINUS_CONSTANT_COLOR,[qb]:n.CONSTANT_ALPHA,[Xb]:n.ONE_MINUS_CONSTANT_ALPHA};function R(L,de,W,Q,ge,pe,$e,kt,on,Mt){if(L===Pr){v===!0&&(ye(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),L!==Rb){if(L!==m||Mt!==S){if((p!==ss||b!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,b=ss),Mt)switch(L){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFunc(n.ONE,n.ONE);break;case Jv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,C=null,N=null,I=null,A.set(0,0,0),O=0,m=L,S=Mt}return}ge=ge||de,pe=pe||W,$e=$e||Q,(de!==p||ge!==b)&&(n.blendEquationSeparate(Tt[de],Tt[ge]),p=de,b=ge),(W!==T||Q!==C||pe!==N||$e!==I)&&(n.blendFuncSeparate(tt[W],tt[Q],tt[pe],tt[$e]),T=W,C=Q,N=pe,I=$e),(kt.equals(A)===!1||on!==O)&&(n.blendColor(kt.r,kt.g,kt.b,on),A.copy(kt),O=on),m=L,S=!1}function Vt(L,de){L.side===hi?ye(n.CULL_FACE):ae(n.CULL_FACE);let W=L.side===Nn;de&&(W=!W),Qe(W),L.blending===Ii&&L.transparent===!1?R(Pr):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function at(L){L!==Db?(ae(n.CULL_FACE),L!==P&&(L===Xv?n.cullFace(n.BACK):L===Ib?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),P=L}function Ce(L){L!==j&&(X&&n.lineWidth(L),j=L)}function St(L,de,W){L?(ae(n.POLYGON_OFFSET_FILL),(G!==de||Y!==W)&&(n.polygonOffset(de,W),G=de,Y=W)):ye(n.POLYGON_OFFSET_FILL)}function xe(L){L?ae(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+K-1),he!==L&&(n.activeTexture(L),he=L)}function _(L,de,W){W===void 0&&(he===null?W=n.TEXTURE0+K-1:W=he);let Q=Me[W];Q===void 0&&(Q={type:void 0,texture:void 0},Me[W]=Q),(Q.type!==L||Q.texture!==de)&&(he!==W&&(n.activeTexture(W),he=W),n.bindTexture(L,de||ce[L]),Q.type=L,Q.texture=de)}function z(){let L=Me[he];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){xt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),xt.copy(L))}function be(L){Z.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function ut(L,de){let W=l.get(de);W===void 0&&(W=new WeakMap,l.set(de,W));let Q=W.get(L);Q===void 0&&(Q=n.getUniformBlockIndex(de,L.name),W.set(L,Q))}function He(L,de){let Q=l.get(de).get(L);c.get(de)!==Q&&(n.uniformBlockBinding(de,Q,L.__bindingPointIndex),c.set(de,Q))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,Me={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,C=null,b=null,N=null,I=null,A=new We(0,0,0),O=0,S=!1,E=null,P=null,j=null,G=null,Y=null,xt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:ye,bindFramebuffer:ze,drawBuffers:Oe,useProgram:Pt,setBlending:R,setMaterial:Vt,setFlipSided:Qe,setCullFace:at,setLineWidth:Ce,setPolygonOffset:St,setScissorTest:xe,activeTexture:w,bindTexture:_,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:ke,updateUBOMapping:ut,uniformBlockBinding:He,texStorage2D:Ne,texStorage3D:re,texSubImage2D:q,texSubImage3D:we,compressedTexSubImage2D:ue,compressedTexSubImage3D:Pe,scissor:Be,viewport:be,reset:It}}function gk(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return h?new OffscreenCanvas(w,_):ma("canvas")}function v(w,_,z){let J=1,ee=xe(w);if((ee.width>z||ee.height>z)&&(J=z/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(J*ee.width),we=Math.floor(J*ee.height);d===void 0&&(d=g(q,we));let ue=_?g(q,we):d;return ue.width=q,ue.height=we,ue.getContext("2d").drawImage(w,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+we+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(w,_,z,J,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=_;if(_===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),_===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){let we=ee?el:_t.getTransfer(J);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=we===Dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(w,_){let z;return w?_===null||_===fs||_===wa?z=n.DEPTH24_STENCIL8:_===nn?z=n.DEPTH32F_STENCIL8:_===ba&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fs||_===wa?z=n.DEPTH_COMPONENT24:_===nn?z=n.DEPTH_COMPONENT32F:_===ba&&(z=n.DEPTH_COMPONENT16),z}function N(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qt&&w.minFilter!==Ai?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function I(w){let _=w.target;_.removeEventListener("dispose",I),O(_),_.isVideoTexture&&u.delete(_)}function A(w){let _=w.target;_.removeEventListener("dispose",A),E(_)}function O(w){let _=i.get(w);if(_.__webglInit===void 0)return;let z=w.source,J=f.get(z);if(J){let ee=J[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(w),Object.keys(J).length===0&&f.delete(z)}i.remove(w)}function S(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let z=w.source,J=f.get(z);delete J[_.__cacheKey],o.memory.textures--}function E(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ee=0;ee<_.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)n.deleteFramebuffer(_.__webglFramebuffer[J]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=w.textures;for(let J=0,ee=z.length;J<ee;J++){let q=i.get(z[J]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(w)}let P=0;function j(){P=0}function G(){let w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function Y(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function K(w,_){let z=i.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,w,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function X(w,_){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Z(z,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function ne(w,_){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Z(z,w,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function $(w,_){let z=i.get(w);if(w.version>0&&z.__version!==w.version){oe(z,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let he={[of]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[af]:n.MIRRORED_REPEAT},Me={[Qt]:n.NEAREST,[iS]:n.NEAREST_MIPMAP_NEAREST,[xl]:n.NEAREST_MIPMAP_LINEAR,[Ai]:n.LINEAR,[Vf]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},Te={[aS]:n.NEVER,[hS]:n.ALWAYS,[cS]:n.LESS,[ay]:n.LEQUAL,[lS]:n.EQUAL,[fS]:n.GEQUAL,[uS]:n.GREATER,[dS]:n.NOTEQUAL};function rt(w,_){if(_.type===nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ai||_.magFilter===Vf||_.magFilter===xl||_.magFilter===ds||_.minFilter===Ai||_.minFilter===Vf||_.minFilter===xl||_.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,he[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Me[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==xl&&_.minFilter!==ds||_.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function xt(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",I));let J=_.source,ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));let q=Y(_);if(q!==w.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[q].usedTimes++;let we=ee[w.__cacheKey];we!==void 0&&(ee[w.__cacheKey].usedTimes--,we.usedTimes===0&&S(_)),w.__cacheKey=q,w.__webglTexture=ee[q].texture}return z}function Z(w,_,z){let J=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=n.TEXTURE_3D);let ee=xt(w,_),q=_.source;t.bindTexture(J,w.__webglTexture,n.TEXTURE0+z);let we=i.get(q);if(q.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let ue=_t.getPrimaries(_t.workingColorSpace),Pe=_.colorSpace===Or?null:_t.getPrimaries(_.colorSpace),Ne=_.colorSpace===Or||ue===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let re=v(_.image,!1,r.maxTextureSize);re=St(_,re);let Ee=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),Be=C(_.internalFormat,Ee,ke,_.colorSpace,_.isVideoTexture);rt(J,_);let be,ut=_.mipmaps,He=_.isVideoTexture!==!0,It=we.__version===void 0||ee===!0,L=q.dataReady,de=N(_,re);if(_.isDepthTexture)Be=b(_.format===Ta,_.type),It&&(He?t.texStorage2D(n.TEXTURE_2D,1,Be,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Be,re.width,re.height,0,Ee,ke,null));else if(_.isDataTexture)if(ut.length>0){He&&It&&t.texStorage2D(n.TEXTURE_2D,de,Be,ut[0].width,ut[0].height);for(let W=0,Q=ut.length;W<Q;W++)be=ut[W],He?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,be.width,be.height,Ee,ke,be.data):t.texImage2D(n.TEXTURE_2D,W,Be,be.width,be.height,0,Ee,ke,be.data);_.generateMipmaps=!1}else He?(It&&t.texStorage2D(n.TEXTURE_2D,de,Be,re.width,re.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ee,ke,re.data)):t.texImage2D(n.TEXTURE_2D,0,Be,re.width,re.height,0,Ee,ke,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Be,ut[0].width,ut[0].height,re.depth);for(let W=0,Q=ut.length;W<Q;W++)if(be=ut[W],_.format!==Yt)if(Ee!==null)if(He){if(L)if(_.layerUpdates.size>0){let ge=my(be.width,be.height,_.format,_.type);for(let pe of _.layerUpdates){let $e=be.data.subarray(pe*ge/be.data.BYTES_PER_ELEMENT,(pe+1)*ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,pe,be.width,be.height,1,Ee,$e)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,re.depth,Ee,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Be,be.width,be.height,re.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,re.depth,Ee,ke,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Be,be.width,be.height,re.depth,0,Ee,ke,be.data)}else{He&&It&&t.texStorage2D(n.TEXTURE_2D,de,Be,ut[0].width,ut[0].height);for(let W=0,Q=ut.length;W<Q;W++)be=ut[W],_.format!==Yt?Ee!==null?He?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,be.width,be.height,Ee,ke,be.data):t.texImage2D(n.TEXTURE_2D,W,Be,be.width,be.height,0,Ee,ke,be.data)}else if(_.isDataArrayTexture)if(He){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Be,re.width,re.height,re.depth),L)if(_.layerUpdates.size>0){let W=my(re.width,re.height,_.format,_.type);for(let Q of _.layerUpdates){let ge=re.data.subarray(Q*W/re.data.BYTES_PER_ELEMENT,(Q+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,Ee,ke,ge)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,ke,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,re.width,re.height,re.depth,0,Ee,ke,re.data);else if(_.isData3DTexture)He?(It&&t.texStorage3D(n.TEXTURE_3D,de,Be,re.width,re.height,re.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,ke,re.data)):t.texImage3D(n.TEXTURE_3D,0,Be,re.width,re.height,re.depth,0,Ee,ke,re.data);else if(_.isFramebufferTexture){if(It)if(He)t.texStorage2D(n.TEXTURE_2D,de,Be,re.width,re.height);else{let W=re.width,Q=re.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Be,W,Q,0,Ee,ke,null),W>>=1,Q>>=1}}else if(ut.length>0){if(He&&It){let W=xe(ut[0]);t.texStorage2D(n.TEXTURE_2D,de,Be,W.width,W.height)}for(let W=0,Q=ut.length;W<Q;W++)be=ut[W],He?L&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee,ke,be):t.texImage2D(n.TEXTURE_2D,W,Be,Ee,ke,be);_.generateMipmaps=!1}else if(He){if(It){let W=xe(re);t.texStorage2D(n.TEXTURE_2D,de,Be,W.width,W.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ke,re)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ee,ke,re);m(_)&&p(J),we.__version=q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function oe(w,_,z){if(_.image.length!==6)return;let J=xt(w,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let q=i.get(ee);if(ee.version!==q.__version||J===!0){t.activeTexture(n.TEXTURE0+z);let we=_t.getPrimaries(_t.workingColorSpace),ue=_.colorSpace===Or?null:_t.getPrimaries(_.colorSpace),Pe=_.colorSpace===Or||we===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ne=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let Q=0;Q<6;Q++)!Ne&&!re?Ee[Q]=v(_.image[Q],!0,r.maxCubemapSize):Ee[Q]=re?_.image[Q].image:_.image[Q],Ee[Q]=St(_,Ee[Q]);let ke=Ee[0],Be=s.convert(_.format,_.colorSpace),be=s.convert(_.type),ut=C(_.internalFormat,Be,be,_.colorSpace),He=_.isVideoTexture!==!0,It=q.__version===void 0||J===!0,L=ee.dataReady,de=N(_,ke);rt(n.TEXTURE_CUBE_MAP,_);let W;if(Ne){He&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ut,ke.width,ke.height);for(let Q=0;Q<6;Q++){W=Ee[Q].mipmaps;for(let ge=0;ge<W.length;ge++){let pe=W[ge];_.format!==Yt?Be!==null?He?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Be,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,ut,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Be,be,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,ut,pe.width,pe.height,0,Be,be,pe.data)}}}else{if(W=_.mipmaps,He&&It){W.length>0&&de++;let Q=xe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ut,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee[Q].width,Ee[Q].height,Be,be,Ee[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Ee[Q].width,Ee[Q].height,0,Be,be,Ee[Q].data);for(let ge=0;ge<W.length;ge++){let $e=W[ge].image[Q].image;He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,$e.width,$e.height,Be,be,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,ut,$e.width,$e.height,0,Be,be,$e.data)}}else{He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,be,Ee[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Be,be,Ee[Q]);for(let ge=0;ge<W.length;ge++){let pe=W[ge];He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Be,be,pe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,ut,Be,be,pe.image[Q])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),q.__version=ee.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ce(w,_,z,J,ee,q){let we=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Pe=C(z.internalFormat,we,ue,z.colorSpace),Ne=i.get(_),re=i.get(z);if(re.__renderTarget=_,!Ne.__hasExternalTextures){let Ee=Math.max(1,_.width>>q),ke=Math.max(1,_.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Pe,Ee,ke,_.depth,0,we,ue,null):t.texImage2D(ee,q,Pe,Ee,ke,0,we,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,re.__webglTexture,0,Qe(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,re.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(w,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let J=_.depthTexture,ee=J&&J.isDepthTexture?J.type:null,q=b(_.stencilBuffer,ee),we=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Qe(_);at(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,q,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,w)}else{let J=_.textures;for(let ee=0;ee<J.length;ee++){let q=J[ee],we=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),Pe=C(q.internalFormat,we,ue,q.colorSpace),Ne=Qe(_);z&&at(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Pe,_.width,_.height):at(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let ee=J.__webglTexture,q=Qe(_);if(_.depthTexture.format===ha)at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ta)at(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ze(w){let _=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=J}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=w.texture.mipmaps;J&&J.length>0?ye(_.__webglFramebuffer[0],w):ye(_.__webglFramebuffer,w)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[J],w,!1);else{let ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{let J=w.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,w,!1);else{let ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(w,_,z){let J=i.get(w);_!==void 0&&ce(J.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ze(w)}function Pt(w){let _=w.texture,z=i.get(w),J=i.get(_);w.addEventListener("dispose",A);let ee=w.textures,q=w.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=_.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)z.__webglFramebuffer[ue][Pe]=n.createFramebuffer()}else z.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)z.__webglFramebuffer[ue]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(we)for(let ue=0,Pe=ee.length;ue<Pe;ue++){let Ne=i.get(ee[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&at(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let Pe=ee[ue];z.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);let Ne=s.convert(Pe.format,Pe.colorSpace),re=s.convert(Pe.type),Ee=C(Pe.internalFormat,Ne,re,Pe.colorSpace,w.isXRRenderTarget===!0),ke=Qe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ce(z.__webglFramebuffer[ue][Pe],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe);else ce(z.__webglFramebuffer[ue],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ue=0,Pe=ee.length;ue<Pe;ue++){let Ne=ee[ue],re=i.get(Ne);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),rt(n.TEXTURE_2D,Ne),ce(z.__webglFramebuffer,w,Ne,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),rt(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ce(z.__webglFramebuffer[Pe],w,_,n.COLOR_ATTACHMENT0,ue,Pe);else ce(z.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ue,0);m(_)&&p(ue),t.unbindTexture()}w.depthBuffer&&ze(w)}function Tt(w){let _=w.textures;for(let z=0,J=_.length;z<J;z++){let ee=_[z];if(m(ee)){let q=T(w),we=i.get(ee).__webglTexture;t.bindTexture(q,we),p(q),t.unbindTexture()}}}let tt=[],R=[];function Vt(w){if(w.samples>0){if(at(w)===!1){let _=w.textures,z=w.width,J=w.height,ee=n.COLOR_BUFFER_BIT,q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(w),ue=_.length>1;if(ue)for(let Ne=0;Ne<_.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ne=0;Ne<_.length;Ne++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);let re=i.get(_[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,ee,n.NEAREST),c===!0&&(tt.length=0,R.length=0,tt.push(n.COLOR_ATTACHMENT0+Ne),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(q),R.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ne=0;Ne<_.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);let re=i.get(_[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Qe(w){return Math.min(r.maxSamples,w.samples)}function at(w){let _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function St(w,_){let z=w.colorSpace,J=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Ws&&z!==Or&&(_t.getTransfer(z)===Dt?(J!==Yt||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function xe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=$,this.rebindTextures=Oe,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=at}function vk(n,e){function t(i,r=Or){let s,o=_t.getTransfer(r);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Hf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ty)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kv)return n.BYTE;if(i===ey)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===zf)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===nn)return n.FLOAT;if(i===Sa)return n.HALF_FLOAT;if(i===ny)return n.ALPHA;if(i===iy)return n.RGB;if(i===Yt)return n.RGBA;if(i===ha)return n.DEPTH_COMPONENT;if(i===Ta)return n.DEPTH_STENCIL;if(i===ry)return n.RED;if(i===jf)return n.RED_INTEGER;if(i===sy)return n.RG;if(i===Wf)return n.RG_INTEGER;if(i===$f)return n.RGBA_INTEGER;if(i===Ml||i===El||i===bl||i===Sl)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Xf||i===Yf||i===Zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jf||i===Qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jf||i===Qf)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kf)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===ch||i===lh||i===uh||i===dh||i===fh||i===hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===ph||i===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wl)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oy||i===gh||i===vh||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var yk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_k=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ji,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:yk,fragmentShader:_k,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iy=class extends Dr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=new Dy,m=t.getContextAttributes(),p=null,T=null,C=[],b=[],N=new lt,I=null,A=new zt;A.viewport=new Gt;let O=new zt;O.viewport=new Gt;let S=[A,O],E=new Cf,P=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=C[Z];return oe===void 0&&(oe=new _a,C[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=C[Z];return oe===void 0&&(oe=new _a,C[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=C[Z];return oe===void 0&&(oe=new _a,C[Z]=oe),oe.getHandSpace()};function G(Z){let oe=b.indexOf(Z.inputSource);if(oe===-1)return;let ce=C[oe];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,l||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<C.length;Z++){let oe=b[Z];oe!==null&&(b[Z]=null,C[Z].disconnect(oe))}P=null,j=null,v.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,T=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Z){return kr(this,null,function*(){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ae=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Ta:ha,ae=m.stencil?wa:fs);let ze={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new $n(f.textureWidth,f.textureHeight,{format:Yt,type:Ni,depthTexture:new al(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new $n(h.framebufferWidth,h.framebufferHeight,{format:Yt,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Z){for(let oe=0;oe<Z.removed.length;oe++){let ce=Z.removed[oe],ae=b.indexOf(ce);ae>=0&&(b[ae]=null,C[ae].disconnect(ce))}for(let oe=0;oe<Z.added.length;oe++){let ce=Z.added[oe],ae=b.indexOf(ce);if(ae===-1){for(let ze=0;ze<C.length;ze++)if(ze>=b.length){b.push(ce),ae=ze;break}else if(b[ze]===null){b[ze]=ce,ae=ze;break}if(ae===-1)break}let ye=C[ae];ye&&ye.connect(ce)}}let X=new F,ne=new F;function $(Z,oe,ce){X.setFromMatrixPosition(oe.matrixWorld),ne.setFromMatrixPosition(ce.matrixWorld);let ae=X.distanceTo(ne),ye=oe.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Oe=ye[14]/(ye[10]-1),Pt=ye[14]/(ye[10]+1),Tt=(ye[9]+1)/ye[5],tt=(ye[9]-1)/ye[5],R=(ye[8]-1)/ye[0],Vt=(ze[8]+1)/ze[0],Qe=Oe*R,at=Oe*Vt,Ce=ae/(-R+Vt),St=Ce*-R;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(St),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let xe=Oe+Ce,w=Pt+Ce,_=Qe-St,z=at+(ae-St),J=Tt*Pt/w*xe,ee=tt*Pt/w*xe;Z.projectionMatrix.makePerspective(_,z,J,ee,xe,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,ce=Z.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),E.near=O.near=A.near=oe,E.far=O.far=A.far=ce,(P!==E.near||j!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,j=E.far),A.layers.mask=Z.layers.mask|2,O.layers.mask=Z.layers.mask|4,E.layers.mask=A.layers.mask|O.layers.mask;let ae=Z.parent,ye=E.cameras;he(E,ae);for(let ze=0;ze<ye.length;ze++)he(ye[ze],ae);ye.length===2?$(E,A,O):E.projectionMatrix.copy(A.projectionMatrix),Me(Z,E,ae)};function Me(Z,oe,ce){ce===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let Te=null;function rt(Z,oe){if(u=oe.getViewerPose(l||o),g=oe,u!==null){let ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let ae=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Oe=0;Oe<ce.length;Oe++){let Pt=ce[Oe],Tt=null;if(h!==null)Tt=h.getViewport(Pt);else{let R=d.getViewSubImage(f,Pt);Tt=R.viewport,Oe===0&&(e.setRenderTargetTextures(T,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(T))}let tt=S[Oe];tt===void 0&&(tt=new zt,tt.layers.enable(Oe),tt.viewport=new Gt,S[Oe]=tt),tt.matrix.fromArray(Pt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Pt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Oe===0&&(E.matrix.copy(tt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(tt)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Oe=d.getDepthInformation(ce[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ce=0;ce<C.length;ce++){let ae=b[ce],ye=C[ce];ae!==null&&ye!==void 0&&ye.update(ae,oe,l||o)}Te&&Te(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let xt=new jS;xt.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Te=Z},this.dispose=function(){}}},to=new qn,xk=new Rt;function Mk(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fy(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,C,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,C):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),C=T.envMap,b=T.envMapRotation;C&&(m.envMap.value=C,to.copy(b),to.x*=-1,to.y*=-1,to.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),m.envMapRotation.value.setFromMatrix4(xk.makeRotationFromEuler(to)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ek(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,C){let b=C.program;i.uniformBlockBinding(T,b)}function l(T,C){let b=r[T.id];b===void 0&&(g(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",m));let N=C.program;i.updateUBOMapping(T,N);let I=e.render.frame;s[T.id]!==I&&(f(T),s[T.id]=I)}function u(T){let C=d();T.__bindingPointIndex=C;let b=n.createBuffer(),N=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,b),b}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let C=r[T.id],b=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let I=0,A=b.length;I<A;I++){let O=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,E=O.length;S<E;S++){let P=O[S];if(h(P,I,S,N)===!0){let j=P.__offset,G=Array.isArray(P.value)?P.value:[P.value],Y=0;for(let K=0;K<G.length;K++){let X=G[K],ne=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,j+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,C,b,N){let I=T.value,A=C+"_"+b;if(N[A]===void 0)return typeof I=="number"||typeof I=="boolean"?N[A]=I:N[A]=I.clone(),!0;{let O=N[A];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return N[A]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function g(T){let C=T.uniforms,b=0,N=16;for(let A=0,O=C.length;A<O;A++){let S=Array.isArray(C[A])?C[A]:[C[A]];for(let E=0,P=S.length;E<P;E++){let j=S[E],G=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,K=G.length;Y<K;Y++){let X=G[Y],ne=v(X),$=b%N,he=$%ne.boundary,Me=$+he;b+=he,Me!==0&&N-Me<ne.storage&&(b+=N-Me),j.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=ne.storage}}}let I=b%N;return I>0&&(b+=N-I),T.__size=b,T.__cache={},this}function v(T){let C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function m(T){let C=T.target;C.removeEventListener("dispose",m);let b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(let T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var hs=class{constructor(e={}){let{canvas:t=pS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,N=!1;this._outputColorSpace=Rn;let I=0,A=0,O=null,S=-1,E=null,P=new Gt,j=new Gt,G=null,Y=new We(0),K=0,X=t.width,ne=t.height,$=1,he=null,Me=null,Te=new Gt(0,0,X,ne),rt=new Gt(0,0,X,ne),xt=!1,Z=new xa,oe=!1,ce=!1,ae=new Rt,ye=new Rt,ze=new F,Oe=new Gt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function tt(){return O===null?$:1}let R=i;function Vt(x,U){return t.getContext(x,U)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){let U="webgl2";if(R=Vt(U,x),R===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Qe,at,Ce,St,xe,w,_,z,J,ee,q,we,ue,Pe,Ne,re,Ee,ke,Be,be,ut,He,It,L;function de(){Qe=new VF(R),Qe.init(),He=new vk(R,Qe),at=new NF(R,Qe,e,He),Ce=new mk(R,Qe),at.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),St=new GF(R),xe=new nk,w=new gk(R,Qe,Ce,xe,at,He,St),_=new LF(b),z=new BF(b),J=new YN(R),It=new RF(R,J),ee=new zF(R,J,St,It),q=new WF(R,ee,J,St),Be=new jF(R,at,w),re=new OF(xe),we=new tk(b,_,z,Qe,at,It,re),ue=new Mk(b,xe),Pe=new rk,Ne=new uk(Qe),ke=new AF(b,_,z,Ce,q,h,c),Ee=new hk(b,q,at),L=new Ek(R,St,at,Ce),be=new PF(R,Qe,St),ut=new HF(R,Qe,St),St.programs=we.programs,b.capabilities=at,b.extensions=Qe,b.properties=xe,b.renderLists=Pe,b.shadowMap=Ee,b.state=Ce,b.info=St}de();let W=new Iy(b,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let x=Qe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Qe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(X,ne,!1))},this.getSize=function(x){return x.set(X,ne)},this.setSize=function(x,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,ne=U,t.width=Math.floor(x*$),t.height=Math.floor(U*$),H===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(X*$,ne*$).floor()},this.setDrawingBufferSize=function(x,U,H){X=x,ne=U,$=H,t.width=Math.floor(x*H),t.height=Math.floor(U*H),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,U,H,V){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,U,H,V),Ce.viewport(P.copy(Te).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(rt)},this.setScissor=function(x,U,H,V){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,U,H,V),Ce.scissor(j.copy(rt).multiplyScalar($).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(x){Ce.setScissorTest(xt=x)},this.setOpaqueSort=function(x){he=x},this.setTransparentSort=function(x){Me=x},this.getClearColor=function(x){return x.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,H=!0){let V=0;if(x){let k=!1;if(O!==null){let te=O.texture.format;k=te===$f||te===Wf||te===jf}if(k){let te=O.texture.type,se=te===Ni||te===fs||te===ba||te===wa||te===Hf||te===Gf,ve=ke.getClearColor(),fe=ke.getClearAlpha(),De=ve.r,Ue=ve.g,Ie=ve.b;se?(g[0]=De,g[1]=Ue,g[2]=Ie,g[3]=fe,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=De,v[1]=Ue,v[2]=Ie,v[3]=fe,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}U&&(V|=R.DEPTH_BUFFER_BIT),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ke.dispose(),Pe.dispose(),Ne.dispose(),xe.dispose(),_.dispose(),z.dispose(),q.dispose(),It.dispose(),L.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",Il),W.removeEventListener("sessionend",Al),Oi.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let x=St.autoReset,U=Ee.enabled,H=Ee.autoUpdate,V=Ee.needsUpdate,k=Ee.type;de(),St.autoReset=x,Ee.enabled=U,Ee.autoUpdate=H,Ee.needsUpdate=V,Ee.type=k}function pe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $e(x){let U=x.target;U.removeEventListener("dispose",$e),kt(U)}function kt(x){on(x),xe.remove(x)}function on(x){let U=xe.get(x).programs;U!==void 0&&(U.forEach(function(H){we.releaseProgram(H)}),x.isShaderMaterial&&we.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,H,V,k,te){U===null&&(U=Pt);let se=k.isMesh&&k.matrixWorld.determinant()<0,ve=ka(x,U,H,V,k);Ce.setMaterial(V,se);let fe=H.index,De=1;if(V.wireframe===!0){if(fe=ee.getWireframeAttribute(H),fe===void 0)return;De=2}let Ue=H.drawRange,Ie=H.attributes.position,ot=Ue.start*De,Xe=(Ue.start+Ue.count)*De;te!==null&&(ot=Math.max(ot,te.start*De),Xe=Math.min(Xe,(te.start+te.count)*De)),fe!==null?(ot=Math.max(ot,0),Xe=Math.min(Xe,fe.count)):Ie!=null&&(ot=Math.max(ot,0),Xe=Math.min(Xe,Ie.count));let Ut=Xe-ot;if(Ut<0||Ut===1/0)return;It.setup(k,V,ve,H,fe);let Lt,dt=be;if(fe!==null&&(Lt=J.get(fe),dt=ut,dt.setIndex(Lt)),k.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*tt()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(k.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Ce.setLineWidth(Ae*tt()),k.isLineSegments?dt.setMode(R.LINES):k.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else k.isPoints?dt.setMode(R.POINTS):k.isSprite&&dt.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Tl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ae=k._multiDrawStarts,$t=k._multiDrawCounts,ht=k._multiDrawCount,qt=fe?J.get(fe).bytesPerElement:1,Fr=xe.get(V).currentProgram.getUniforms();for(let vn=0;vn<ht;vn++)Fr.setValue(R,"_gl_DrawID",vn),dt.render(Ae[vn]/qt,$t[vn])}else if(k.isInstancedMesh)dt.renderInstances(ot,Ut,k.count);else if(H.isInstancedBufferGeometry){let Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,$t=Math.min(H.instanceCount,Ae);dt.renderInstances(ot,Ut,$t)}else dt.render(ot,Ut)};function Mt(x,U,H){x.transparent===!0&&x.side===hi&&x.forceSinglePass===!1?(x.side=Nn,x.needsUpdate=!0,ms(x,U,H),x.side=Cr,x.needsUpdate=!0,ms(x,U,H),x.side=hi):ms(x,U,H)}this.compile=function(x,U,H=null){H===null&&(H=x),p=Ne.get(H),p.init(U),C.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let V=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let te=k.material;if(te)if(Array.isArray(te))for(let se=0;se<te.length;se++){let ve=te[se];Mt(ve,H,k),V.add(ve)}else Mt(te,H,k),V.add(te)}),p=C.pop(),V},this.compileAsync=function(x,U,H=null){let V=this.compile(x,U,H);return new Promise(k=>{function te(){if(V.forEach(function(se){xe.get(se).currentProgram.isReady()&&V.delete(se)}),V.size===0){k(x);return}setTimeout(te,10)}Qe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Yn=null;function On(x){Yn&&Yn(x)}function Il(){Oi.stop()}function Al(){Oi.start()}let Oi=new jS;Oi.setAnimationLoop(On),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(x){Yn=x,W.setAnimationLoop(x),x===null?Oi.stop():Oi.start()},W.addEventListener("sessionstart",Il),W.addEventListener("sessionend",Al),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,U,O),p=Ne.get(x,C.length),p.init(U),C.push(p),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,oe=re.init(this.clippingPlanes,ce),m=Pe.get(x,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){let te=b.xr.getDepthSensingMesh();te!==null&&ps(te,U,-1/0,b.sortObjects)}ps(x,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(he,Me),Tt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Tt&&ke.addToRenderList(m,x),this.info.render.frame++,oe===!0&&re.beginShadows();let H=p.state.shadowsArray;Ee.render(H,x,U),oe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,k=m.transmissive;if(p.setupLights(),U.isArrayCamera){let te=U.cameras;if(k.length>0)for(let se=0,ve=te.length;se<ve;se++){let fe=te[se];Na(V,k,x,fe)}Tt&&ke.render(x);for(let se=0,ve=te.length;se<ve;se++){let fe=te[se];Rl(m,x,fe,fe.viewport)}}else k.length>0&&Na(V,k,x,U),Tt&&ke.render(x),Rl(m,x,U);O!==null&&A===0&&(w.updateMultisampleRenderTarget(O),w.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(b,x,U),It.resetDefaultState(),S=-1,E=null,C.pop(),C.length>0?(p=C[C.length-1],oe===!0&&re.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ps(x,U,H,V){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){V&&Oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ye);let se=q.update(x),ve=x.material;ve.visible&&m.push(x,se,ve,H,Oe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){let se=q.update(x),ve=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Oe.copy(x.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Oe.copy(se.boundingSphere.center)),Oe.applyMatrix4(x.matrixWorld).applyMatrix4(ye)),Array.isArray(ve)){let fe=se.groups;for(let De=0,Ue=fe.length;De<Ue;De++){let Ie=fe[De],ot=ve[Ie.materialIndex];ot&&ot.visible&&m.push(x,se,ot,H,Oe.z,Ie)}}else ve.visible&&m.push(x,se,ve,H,Oe.z,null)}}let te=x.children;for(let se=0,ve=te.length;se<ve;se++)ps(te[se],U,H,V)}function Rl(x,U,H,V){let k=x.opaque,te=x.transmissive,se=x.transparent;p.setupLightsView(H),oe===!0&&re.setGlobalState(b.clippingPlanes,H),V&&Ce.viewport(P.copy(V)),k.length>0&&ro(k,U,H),te.length>0&&ro(te,U,H),se.length>0&&ro(se,U,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Na(x,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $n(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Sa:Ni,minFilter:ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let te=p.state.transmissionRenderTarget[V.id],se=V.viewport||P;te.setSize(se.z*b.transmissionResolutionScale,se.w*b.transmissionResolutionScale);let ve=b.getRenderTarget();b.setRenderTarget(te),b.getClearColor(Y),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Tt&&ke.render(H);let fe=b.toneMapping;b.toneMapping=Nr;let De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),oe===!0&&re.setGlobalState(b.clippingPlanes,V),ro(x,H,V),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ie=0,ot=U.length;Ie<ot;Ie++){let Xe=U[Ie],Ut=Xe.object,Lt=Xe.geometry,dt=Xe.material,Ae=Xe.group;if(dt.side===hi&&Ut.layers.test(V.layers)){let $t=dt.side;dt.side=Nn,dt.needsUpdate=!0,Oa(Ut,H,V,Lt,dt,Ae),dt.side=$t,dt.needsUpdate=!0,Ue=!0}}Ue===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}b.setRenderTarget(ve),b.setClearColor(Y,K),De!==void 0&&(V.viewport=De),b.toneMapping=fe}function ro(x,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,te=x.length;k<te;k++){let se=x[k],ve=se.object,fe=se.geometry,De=se.group,Ue=se.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),ve.layers.test(H.layers)&&Oa(ve,U,H,fe,Ue,De)}}function Oa(x,U,H,V,k,te){x.onBeforeRender(b,U,H,V,k,te),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(b,U,H,V,x,te),k.transparent===!0&&k.side===hi&&k.forceSinglePass===!1?(k.side=Nn,k.needsUpdate=!0,b.renderBufferDirect(H,U,V,k,x,te),k.side=Cr,k.needsUpdate=!0,b.renderBufferDirect(H,U,V,k,x,te),k.side=hi):b.renderBufferDirect(H,U,V,k,x,te),x.onAfterRender(b,U,H,V,k,te)}function ms(x,U,H){U.isScene!==!0&&(U=Pt);let V=xe.get(x),k=p.state.lights,te=p.state.shadowsArray,se=k.state.version,ve=we.getParameters(x,k.state,te,U,H),fe=we.getProgramCacheKey(ve),De=V.programs;V.environment=x.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(x.isMeshStandardMaterial?z:_).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,De===void 0&&(x.addEventListener("dispose",$e),De=new Map,V.programs=De);let Ue=De.get(fe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===se)return Fa(x,ve),Ue}else ve.uniforms=we.getUniforms(x),x.onBeforeCompile(ve,b),Ue=we.acquireProgram(ve,fe),De.set(fe,Ue),V.uniforms=ve.uniforms;let Ie=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=re.uniform),Fa(x,ve),V.needsLights=gs(x),V.lightsStateVersion=se,V.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function La(x){if(x.uniformsList===null){let U=x.currentProgram.getUniforms();x.uniformsList=Ra.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Fa(x,U){let H=xe.get(x);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ka(x,U,H,V,k){U.isScene!==!0&&(U=Pt),w.resetTextureUnits();let te=U.fog,se=V.isMeshStandardMaterial?U.environment:null,ve=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ws,fe=(V.isMeshStandardMaterial?z:_).get(V.envMap||se),De=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!H.morphAttributes.position,ot=!!H.morphAttributes.normal,Xe=!!H.morphAttributes.color,Ut=Nr;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ut=b.toneMapping);let Lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=Lt!==void 0?Lt.length:0,Ae=xe.get(V),$t=p.state.lights;if(oe===!0&&(ce===!0||x!==E)){let y=x===E&&V.id===S;re.setState(V,x,y)}let ht=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==$t.state.version||Ae.outputColorSpace!==ve||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==fe||V.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Ue||Ae.morphTargets!==Ie||Ae.morphNormals!==ot||Ae.morphColors!==Xe||Ae.toneMapping!==Ut||Ae.morphTargetsCount!==dt)&&(ht=!0):(ht=!0,Ae.__version=V.version);let qt=Ae.currentProgram;ht===!0&&(qt=ms(V,U,k));let Fr=!1,vn=!1,er=!1,Nt=qt.getUniforms(),Ln=Ae.uniforms;if(Ce.useProgram(qt.program)&&(Fr=!0,vn=!0,er=!0),V.id!==S&&(S=V.id,vn=!0),Fr||E!==x){Ce.buffers.depth.getReversed()?(ae.copy(x.projectionMatrix),gS(ae),vS(ae),Nt.setValue(R,"projectionMatrix",ae)):Nt.setValue(R,"projectionMatrix",x.projectionMatrix),Nt.setValue(R,"viewMatrix",x.matrixWorldInverse);let M=Nt.map.cameraPosition;M!==void 0&&M.setValue(R,ze.setFromMatrixPosition(x.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,vn=!0,er=!0)}if(k.isSkinnedMesh){Nt.setOptional(R,k,"bindMatrix"),Nt.setOptional(R,k,"bindMatrixInverse");let y=k.skeleton;y&&(y.boneTexture===null&&y.computeBoneTexture(),Nt.setValue(R,"boneTexture",y.boneTexture,w))}k.isBatchedMesh&&(Nt.setOptional(R,k,"batchingTexture"),Nt.setValue(R,"batchingTexture",k._matricesTexture,w),Nt.setOptional(R,k,"batchingIdTexture"),Nt.setValue(R,"batchingIdTexture",k._indirectTexture,w),Nt.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Nt.setValue(R,"batchingColorTexture",k._colorsTexture,w));let Fn=H.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Be.update(k,H,qt),(vn||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,Nt.setValue(R,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ln.envMap.value=fe,Ln.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ln.envMapIntensity.value=U.environmentIntensity),vn&&(Nt.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&Ki(Ln,er),te&&V.fog===!0&&ue.refreshFogUniforms(Ln,te),ue.refreshMaterialUniforms(Ln,V,$,ne,p.state.transmissionRenderTarget[x.id]),Ra.upload(R,La(Ae),Ln,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ra.upload(R,La(Ae),Ln,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(R,"center",k.center),Nt.setValue(R,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(R,"normalMatrix",k.normalMatrix),Nt.setValue(R,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let y=V.uniformsGroups;for(let M=0,D=y.length;M<D;M++){let B=y[M];L.update(B,qt),L.bind(B,qt)}}return qt}function Ki(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function gs(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,U,H){let V=xe.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),xe.get(x.texture).__webglTexture=U,xe.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){let H=xe.get(x);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};let vs=R.createFramebuffer();this.setRenderTarget=function(x,U=0,H=0){O=x,I=U,A=H;let V=!0,k=null,te=!1,se=!1;if(x){let fe=xe.get(x);if(fe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(fe.__webglFramebuffer===void 0)w.setupRenderTarget(x);else if(fe.__hasExternalTextures)w.rebindTextures(x,xe.get(x.texture).__webglTexture,xe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ie=x.depthTexture;if(fe.__boundDepthTexture!==Ie){if(Ie!==null&&xe.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(x)}}let De=x.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(se=!0);let Ue=xe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?k=Ue[U][H]:k=Ue[U],te=!0):x.samples>0&&w.useMultisampledRTT(x)===!1?k=xe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[H]:k=Ue,P.copy(x.viewport),j.copy(x.scissor),G=x.scissorTest}else P.copy(Te).multiplyScalar($).floor(),j.copy(rt).multiplyScalar($).floor(),G=xt;if(H!==0&&(k=vs),Ce.bindFramebuffer(R.FRAMEBUFFER,k)&&V&&Ce.drawBuffers(x,k),Ce.viewport(P),Ce.scissor(j),Ce.setScissorTest(G),te){let fe=xe.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,H)}else if(se){let fe=xe.get(x.texture),De=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,fe.__webglTexture,H,De)}else if(x!==null&&H!==0){let fe=xe.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(x,U,H,V,k,te,se){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=xe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(ve=ve[se]),ve){Ce.bindFramebuffer(R.FRAMEBUFFER,ve);try{let fe=x.texture,De=fe.format,Ue=fe.type;if(!at.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-V&&H>=0&&H<=x.height-k&&R.readPixels(U,H,V,k,He.convert(De),He.convert(Ue),te)}finally{let fe=O!==null?xe.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(R.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=function(x,U,H,V,k,te,se){return kr(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=xe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(ve=ve[se]),ve)if(U>=0&&U<=x.width-V&&H>=0&&H<=x.height-k){Ce.bindFramebuffer(R.FRAMEBUFFER,ve);let fe=x.texture,De=fe.format,Ue=fe.type;if(!at.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),R.readPixels(U,H,V,k,He.convert(De),He.convert(Ue),0);let ot=O!==null?xe.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(R.FRAMEBUFFER,ot);let Xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),yield mS(R,Xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(Ie),R.deleteSync(Xe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(x,U=null,H=0){let V=Math.pow(2,-H),k=Math.floor(x.image.width*V),te=Math.floor(x.image.height*V),se=U!==null?U.x:0,ve=U!==null?U.y:0;w.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,se,ve,k,te),Ce.unbindTexture()};let so=R.createFramebuffer(),Ua=R.createFramebuffer();this.copyTextureToTexture=function(x,U,H=null,V=null,k=0,te=null){te===null&&(k!==0?(Tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=k,k=0):te=0);let se,ve,fe,De,Ue,Ie,ot,Xe,Ut,Lt=x.isCompressedTexture?x.mipmaps[te]:x.image;if(H!==null)se=H.max.x-H.min.x,ve=H.max.y-H.min.y,fe=H.isBox3?H.max.z-H.min.z:1,De=H.min.x,Ue=H.min.y,Ie=H.isBox3?H.min.z:0;else{let Fn=Math.pow(2,-k);se=Math.floor(Lt.width*Fn),ve=Math.floor(Lt.height*Fn),x.isDataArrayTexture?fe=Lt.depth:x.isData3DTexture?fe=Math.floor(Lt.depth*Fn):fe=1,De=0,Ue=0,Ie=0}V!==null?(ot=V.x,Xe=V.y,Ut=V.z):(ot=0,Xe=0,Ut=0);let dt=He.convert(U.format),Ae=He.convert(U.type),$t;U.isData3DTexture?(w.setTexture3D(U,0),$t=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),$t=R.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),$t=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);let ht=R.getParameter(R.UNPACK_ROW_LENGTH),qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Fr=R.getParameter(R.UNPACK_SKIP_PIXELS),vn=R.getParameter(R.UNPACK_SKIP_ROWS),er=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,De),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ie);let Nt=x.isDataArrayTexture||x.isData3DTexture,Ln=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){let Fn=xe.get(x),y=xe.get(U),M=xe.get(Fn.__renderTarget),D=xe.get(y.__renderTarget);Ce.bindFramebuffer(R.READ_FRAMEBUFFER,M.__webglFramebuffer),Ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let B=0;B<fe;B++)Nt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(x).__webglTexture,k,Ie+B),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,te,Ut+B)),R.blitFramebuffer(De,Ue,se,ve,ot,Xe,se,ve,R.DEPTH_BUFFER_BIT,R.NEAREST);Ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||xe.has(x)){let Fn=xe.get(x),y=xe.get(U);Ce.bindFramebuffer(R.READ_FRAMEBUFFER,so),Ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ua);for(let M=0;M<fe;M++)Nt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fn.__webglTexture,k,Ie+M):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fn.__webglTexture,k),Ln?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.__webglTexture,te,Ut+M):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,y.__webglTexture,te),k!==0?R.blitFramebuffer(De,Ue,se,ve,ot,Xe,se,ve,R.COLOR_BUFFER_BIT,R.NEAREST):Ln?R.copyTexSubImage3D($t,te,ot,Xe,Ut+M,De,Ue,se,ve):R.copyTexSubImage2D($t,te,ot,Xe,De,Ue,se,ve);Ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ln?x.isDataTexture||x.isData3DTexture?R.texSubImage3D($t,te,ot,Xe,Ut,se,ve,fe,dt,Ae,Lt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D($t,te,ot,Xe,Ut,se,ve,fe,dt,Lt.data):R.texSubImage3D($t,te,ot,Xe,Ut,se,ve,fe,dt,Ae,Lt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,ot,Xe,se,ve,dt,Ae,Lt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,ot,Xe,Lt.width,Lt.height,dt,Lt.data):R.texSubImage2D(R.TEXTURE_2D,te,ot,Xe,se,ve,dt,Ae,Lt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fr),R.pixelStorei(R.UNPACK_SKIP_ROWS,vn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,er),te===0&&U.generateMipmaps&&R.generateMipmap($t),Ce.unbindTexture()},this.copyTextureToTexture3D=function(x,U,H=null,V=null,k=0){return Tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,H,V,k)},this.initRenderTarget=function(x){xe.get(x).__webglFramebuffer===void 0&&w.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),Ce.unbindTexture()},this.resetState=function(){I=0,A=0,O=null,Ce.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var bk=["canvas"],Sk=["container"],wh=class n{skills=[{icon:"/assets/skills/csharp.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/cplusplus.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/angular.webp",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/typescript.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/html.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/css.svg",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/python.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0},{icon:"/assets/skills/psql.png",hoverRotation:0,isHovered:!1,idleRotationY:0,spinRotationY:0,spinRemaining:0,baseY:0}];ngAfterViewInit(){this.initSkills(),this.canvasRef.nativeElement.addEventListener("pointermove",this.onPointerMove),this.raycaster=new Zs,this.pointer=new lt,window.addEventListener("resize",this.onResize)}ngOnDestroy(){cancelAnimationFrame(this.frameId),window.removeEventListener("resize",this.onResize),this.renderer.dispose()}canvasRef;containerRef;skillsVisible=!1;skillsObserver;frameId=0;renderer;scene;camera;decals=new Map;raycaster;pointer;sectionVisible=!1;sectionObserver;preloadTextures(){let e=new ml,t=this.skills.map(i=>new Promise(r=>{e.load(i.icon,s=>{this.decals.set(i.icon,s),r()})}));return Promise.all(t).then(()=>{})}createCoinWithDecal(e,t){let i=new Di,r=new ul({color:1118481,metalness:0,roughness:.1}),s=new jt(new cl(.6,.6,.1,24),r);s.rotation.x=Math.PI/2,i.add(s);let o=e.image.width/e.image.height,a=.8,c=new jt(new Xs(a*o,a),new qs({map:e,color:new We(1.5,1.5,1.5),transparent:!0,side:hi,toneMapped:!1}));c.position.set(0,0,.1),i.add(c);let l=c.clone();return l.rotation.y=Math.PI,l.position.set(0,0,-.1),i.add(l),i.position.copy(t),i.rotation.y=Math.PI/10,i}onPointerMove=e=>{let t=this.canvasRef.nativeElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let i=this.raycaster.intersectObjects(this.skills.map(r=>r.mesh).filter(r=>r!==void 0),!0);this.skills.forEach(r=>{i.find(s=>s.object.parent===r.mesh)&&(r.isHovered||r.spinRemaining<=0&&(r.spinRemaining=Math.PI*2))})};initSkills(){return kr(this,null,function*(){this.skillsObserver=new IntersectionObserver(([s])=>{this.skillsVisible=s.isIntersecting,s.isIntersecting?this.animateSkills():cancelAnimationFrame(this.frameId)},{threshold:.2}),this.skillsObserver.observe(this.containerRef.nativeElement);let e=this.canvasRef.nativeElement;this.renderer=new hs({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.renderer.toneMapping=kf,this.renderer.toneMappingExposure=1,this.camera=new zt(25,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,0,25),this.onResize(),this.scene=new Ri;let t=new vl(16777215,4473924,5);t.position.set(0,20,0),this.scene.add(t);let i=new yl(16777215,100);i.position.set(5,10,7.5),this.scene.add(i),this.renderer.shadowMap.enabled=!1,yield this.preloadTextures();let r=0;this.skills.forEach((s,o)=>{r+=2*Math.PI/this.skills.length;let a=2*(o-(this.skills.length-1)/2),c=0,l=this.decals.get(s.icon);if(l){let u=this.createCoinWithDecal(l,new F(a,c,0));this.scene.add(u),s.mesh=u,s.baseY=s.mesh.position.y,s.hoverRotation=0,s.isHovered=!1}}),this.animateSkills()})}animateSkills=()=>{let e=performance.now()*.001;this.skills.forEach(t=>{t.mesh&&(t.spinRemaining>0?(t.spinRotationY+=.1,t.spinRemaining-=.1,t.hoverRotation+=.1):t.hoverRotation>0&&(t.hoverRotation=0,t.spinRotationY=0,t.isHovered=!1),t.mesh.rotation.y=t.idleRotationY+t.spinRotationY)}),this.renderer.render(this.scene,this.camera),(this.skillsVisible||this.skills.some(t=>t.spinRemaining>0))&&(this.frameId=requestAnimationFrame(this.animateSkills))};onResize=()=>{let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera instanceof zt&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix())};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-skills"]],viewQuery:function(t,i){if(t&1&&(Gn(bk,7),Gn(Sk,7)),t&2){let r;Dn(r=In())&&(i.canvasRef=r.first),Dn(r=In())&&(i.containerRef=r.first)}},decls:5,vars:0,consts:[["container",""],["canvas",""],[1,"container"],[1,"canvas-container"]],template:function(t,i){t&1&&(Re(0,"div",2,0)(2,"div",3),bt(3,"canvas",null,1),Fe()())},styles:[".canvas-container[_ngcontent-%COMP%]{display:flex;height:25vh;width:100%;align-items:center;justify-content:center;overflow:hidden}canvas[_ngcontent-%COMP%]{width:auto;height:auto;align-items:center;justify-content:center}"],changeDetection:0})};var wk=["container"],Tk=["date"],Ck=(n,e)=>e.position;function Dk(n,e){if(n&1&&(Re(0,"div",4)(1,"div",5,0),bt(3,"img",6),Re(4,"div",7)(5,"h2",8),Ct(6),Fe(),Re(7,"small",9),Ct(8),Fe(),Re(9,"small",9)(10,"em"),Ct(11),Fe()(),Re(12,"p",10),Ct(13),Fe(),Re(14,"div",11),bt(15,"i",12),Re(16,"span",13)(17,"strong"),Ct(18),Fe()()()()(),Re(19,"span",14,1),Ct(21),Fe()()),n&2){let t=e.$implicit;yt(),bn("ngClass",t.alignment),yt(2),bn("src",t.icon,mc),yt(3),jn(t.position),yt(2),jn(t.company),yt(3),jn(t.location),yt(2),jn(t.description),yt(5),jn(t.skills),yt(),bn("ngClass",t.alignment),yt(2),jn(t.date)}}var Th=class n{containers;dates;experiences=[{icon:"assets/work/db.png",date:"June 2025 - Present",position:"Technology & Data Intern",company:"Deutsche Bank",description:"I am an incoming TDI Investment Banking intern at Deutsche Bank for Summer 2025. I will be working in the IB Tech division with Client 360 Technologies.",skills:"Java/Spring, React, Kubernetes, OpenShift",location:"Cary, NC",alignment:"right"},{icon:"assets/work/unc.jpg",date:"May 2024 - Present",position:"Undergraduate Research Assistant",company:"Experimental Engineering Lab (EEL)",description:"Under the direction of Dr. Roni Sengupta, I am developing an AR/VR app for visualization of Hierarchical 3D Gaussians and an image processing pipeline to optimize COLMAP and photogrammetry software.",skills:"Python, CUDA, Bash, Unity, C#, HLSL",location:"Chapel Hill, NC",alignment:"left"},{icon:"assets/work/unchockey.png",date:"August 2022 - May 2025",position:"President of Operations",company:"UNC Ice Hockey",description:"As President, I worked directly with Student Government and UNC Club Sports to secure program funding. I also coordinated hotels, ice time, transportation, negotiated sponsorships, and facilitated the hiring of a new coach.",skills:"Leadership, Fundraising, Financial Planning",location:"Chapel Hill, NC",alignment:"right"},{icon:"assets/work/corvid.png",date:"May 2024 - August 2024",position:"Extended Reality Intern",company:"Corvid Technologies",description:"In the summer of 2024, I created a Mixed Reality application using Unreal Engine and C++ for the Hololens 2 to visualize simulated physics of internal detonations inside of and around a stiffened steel structure.",skills:"Python, C++, VR/AR, Unreal Engine",location:"Mooresville, NC",alignment:"left"}];ngAfterViewInit(){let e=new IntersectionObserver(t=>{t.forEach(i=>{if(i.isIntersecting){let r=i.target;r.classList.add("in-view"),e.unobserve(r)}})},{threshold:.3});this.containers.forEach(t=>{e.observe(t.nativeElement)}),this.dates.forEach(t=>{e.observe(t.nativeElement)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-work"]],viewQuery:function(t,i){if(t&1&&(Gn(wk,5),Gn(Tk,5)),t&2){let r;Dn(r=In())&&(i.containers=r),Dn(r=In())&&(i.dates=r)}},decls:4,vars:0,consts:[["container",""],["date",""],[1,"container"],[1,"timeline"],[1,"time-line-event"],[1,"experience-container",3,"ngClass"],[1,"experience-img",3,"src"],[1,"experience-card"],[1,"experience-position"],[1,"experience-company"],[1,"experience-description"],[1,"experience-skills-container"],[1,"fa-solid","fa-gears","experience-skills-icon"],[1,"experience-skills"],[1,"experience-date",3,"ngClass"]],template:function(t,i){t&1&&(Re(0,"div",2)(1,"div",3),Yr(2,Dk,22,9,"div",4,Ck),Fe()()),t&2&&(yt(2),Zr(i.experiences))},dependencies:[Vo],styles:['.container[_ngcontent-%COMP%]{color:#fff;margin-top:2rem;margin-bottom:2rem;padding:0;box-sizing:border-box;width:100%;height:100%}.timeline[_ngcontent-%COMP%]{position:relative;margin:10rem auto}.experience-card[_ngcontent-%COMP%]{background:var(--color-primary);padding:1rem 2rem;position:relative;border-radius:.5rem;font-size:1rem;transition:transform .3s ease;top:-1.25rem;display:flex;flex-direction:column;box-shadow:0 1rem 2rem #000000b3,0 1rem 2rem #000000b3}.experience-position[_ngcontent-%COMP%]{font-size:clamp(1.1rem,1.5vw,1.5rem);color:var(--color-secondary)}.experience-container[_ngcontent-%COMP%]{padding:2.5rem 5rem;position:relative;width:50%;opacity:1;filter:brightness(90%);max-width:100%}.experience-container[_ngcontent-%COMP%]:hover{filter:brightness(100%)}@keyframes _ngcontent-%COMP%_moveright{0%{opacity:0;transform:translate(-30rem)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_moveleft{0%{opacity:0;transform:translate(30rem)}to{opacity:1;transform:translate(0)}}.experience-container.left[_ngcontent-%COMP%]{left:0;padding-left:20rem}.experience-container.left[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{opacity:0;transform:translate(-30rem)}.experience-container.right[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{opacity:0;transform:translate(30rem)}.experience-container.left.in-view[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveright 1s linear forwards}.experience-container.right.in-view[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveleft 1s linear forwards}.experience-container.right[_ngcontent-%COMP%]{left:50%;padding-right:20rem}.experience-container[_ngcontent-%COMP%]   .experience-img[_ngcontent-%COMP%]{position:absolute;width:5rem;height:5rem;right:-2.5rem;top:1rem;border-radius:50%;background:#fff;border:4px solid var(--color-accent)}.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{left:-2.5rem}.timeline[_ngcontent-%COMP%]:after{content:"";position:absolute;width:.75rem;height:100%;background:var(--color-accent);top:5%;left:50%;margin-left:-.375rem;z-index:-1;border-radius:.5rem}.experience-company[_ngcontent-%COMP%]{font-size:clamp(.75rem,1.25vw,1.25rem);margin-top:.1rem}.experience-description[_ngcontent-%COMP%]{margin-top:1rem;font-size:clamp(.75rem,1.25vw,1.25rem)}.experience-skills-icon[_ngcontent-%COMP%]{font-size:clamp(1rem,1.5vw,1.5rem);margin-top:1.5rem}.experience-skills[_ngcontent-%COMP%]{margin-top:1.5rem;margin-left:.5rem;font-size:clamp(.75rem,1.25vw,1.25rem);font-weight:700}.experience-skills-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.experience-date[_ngcontent-%COMP%]{position:relative;top:1rem;padding:1.5rem 5rem;width:50%;font-size:clamp(1rem,1.5vw,1.5rem);font-style:italic;opacity:0}.experience-date.right[_ngcontent-%COMP%]{left:-50%;text-align:right}.experience-date.left[_ngcontent-%COMP%]{left:0%}.experience-date.left.in-view[_ngcontent-%COMP%], .experience-date.right.in-view[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appear 2s ease forwards}@keyframes _ngcontent-%COMP%_appear{0%{opacity:0}to{opacity:1}}.time-line-event[_ngcontent-%COMP%]{display:flex;position:relative;margin-bottom:2rem}@media screen and (max-width: 400px){.timeline[_ngcontent-%COMP%]{margin:.5rem auto}.timeline[_ngcontent-%COMP%]:after{left:.5rem}.experience-container[_ngcontent-%COMP%]{width:100%;padding-left:3rem;padding-right:1rem}.experience-card[_ngcontent-%COMP%]{font-size:13px}.experience-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-bottom:.5rem}.right[_ngcontent-%COMP%]{left:0}}']})};var Ik=/^[og]\s*(.+)?/,Ak=/^mtllib /,Rk=/^usemtl /,Pk=/^usemap /,YS=/\s+/,ZS=new F,Py=new F,JS=new F,QS=new F,pi=new F,Ch=new We;function Nk(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){let r=this.vertices,s=this.object.geometry.normals;ZS.fromArray(r,e),Py.fromArray(r,t),JS.fromArray(r,i),pi.subVectors(JS,Py),QS.subVectors(ZS,Py),pi.cross(QS),pi.normalize(),s.push(pi.x,pi.y,pi.z),s.push(pi.x,pi.y,pi.z),s.push(pi.x,pi.y,pi.z)},addColor:function(e,t,i){let r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,c,l){let u=this.vertices.length,d=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(i,u);if(this.addVertex(d,f,h),this.addColor(d,f,h),a!==void 0&&a!==""){let g=this.normals.length;d=this.parseNormalIndex(a,g),f=this.parseNormalIndex(c,g),h=this.parseNormalIndex(l,g),this.addNormal(d,f,h)}else this.addFaceNormal(d,f,h);if(r!==void 0&&r!==""){let g=this.uvs.length;d=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),h=this.parseUVIndex(o,g),this.addUV(d,f,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){let s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}var Dh=class extends Da{constructor(e){super(e),this.materials=null}load(e,t,i,r){let s=this,o=new pl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new Nk;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),r=[];for(let a=0,c=i.length;a<c;a++){let l=i[a].trimStart();if(l.length===0)continue;let u=l.charAt(0);if(u!=="#")if(u==="v"){let d=l.split(YS);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Ch.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Rn),t.colors.push(Ch.r,Ch.g,Ch.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){let f=l.slice(1).trim().split(YS),h=[];for(let v=0,m=f.length;v<m;v++){let p=f[v];if(p.length>0){let T=p.split("/");h.push(T)}}let g=h[0];for(let v=1,m=h.length-1;v<m;v++){let p=h[v],T=h[v+1];t.addFace(g[0],p[0],T[0],g[1],p[1],T[1],g[2],p[2],T[2])}}else if(u==="l"){let d=l.substring(1).trim().split(" "),f=[],h=[];if(l.indexOf("/")===-1)f=d;else for(let g=0,v=d.length;g<v;g++){let m=d[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&h.push(m[1])}t.addLineGeometry(f,h)}else if(u==="p"){let f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((r=Ik.exec(l))!==null){let d=(" "+r[0].slice(1).trim()).slice(1);t.startObject(d)}else if(Rk.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Ak.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Pk.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){let f=r[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let s=new Di;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],u=l.geometry,d=l.materials,f=u.type==="Line",h=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let v=new Xt;v.setAttribute("position",new Ht(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new Ht(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new Ht(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new Ht(u.uvs,2));let m=[];for(let T=0,C=d.length;T<C;T++){let b=d[T],N=b.name+"_"+b.smooth+"_"+g,I=t.materials[N];if(this.materials!==null){if(I=this.materials.create(b.name),f&&I&&!(I instanceof cs)){let A=new cs;Xn.prototype.copy.call(A,I),A.color.copy(I.color),I=A}else if(h&&I&&!(I instanceof Ar)){let A=new Ar({size:10,sizeAttenuation:!1});Xn.prototype.copy.call(A,I),A.color.copy(I.color),A.map=I.map,I=A}}I===void 0&&(f?I=new cs:h?I=new Ar({size:1,sizeAttenuation:!1}):I=new dl,I.name=b.name,I.flatShading=!b.smooth,I.vertexColors=g,t.materials[N]=I),m.push(I)}let p;if(m.length>1){for(let T=0,C=d.length;T<C;T++){let b=d[T];v.addGroup(b.groupStart,b.groupCount,T)}f?p=new Ma(v,m):h?p=new Pi(v,m):p=new jt(v,m)}else f?p=new Ma(v,m[0]):h?p=new Pi(v,m[0]):p=new jt(v,m[0]);p.name=l.name,s.add(p)}else if(t.vertices.length>0){let a=new Ar({size:1,sizeAttenuation:!1}),c=new Xt;c.setAttribute("position",new Ht(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ht(t.colors,3)),a.vertexColors=!0);let l=new Pi(c,a);s.add(l)}return s}};var Ok=["canvas"],Lk=["about"],Fk=n=>({active:n}),kk=(n,e)=>e.name;function Uk(n,e){if(n&1){let t=pr();Re(0,"div",13),Kn("click",function(){let r=Hi(t).$index,s=Hn();return Gi(s.changeSection(r))}),Ct(1),Fe()}if(n&2){let t=e.$implicit,i=Hn();bn("ngClass",LM(2,Fk,t.name===i.currentSectionName())),yt(),_c(" ",t.name," ")}}function Bk(n,e){if(n&1&&(Re(0,"div",12)(1,"label"),Ct(2),UM(3,"number"),Fe(),bt(4,"progress",14),Fe()),n&2){let t=Hn();yt(2),_c(" Loading... (",BM(3,2,t.loadingProgress(),"1.0-0"),"%)"),yt(2),bn("value",t.loadingProgress())}}var Ih=class n{sections=[{name:"Introduction",paragraph:`I'm an engineer and innovator passionate about shaping the future of technology. 
                  My work spans the intersection of artificial intelligence, computer graphics, finance,
                  and more. 
                  <br><br>
                  Whether developing geospatial localization without GPS for my college campus at UNC or 
                  building advanced VR/AR visualizations using hierarchical 3D Gaussians, I'm always 
                  trying to push the boundaries and devise unique solutions.`},{name:"About Me",paragraph:`I'm currently a senior at the University of North Carolina at Chapel Hill, Class of 2026, and pursuing 
                  a dual degree in Computer Science and Mathematics with a 3.96 GPA. I'm actively involved 
                  in several student organizations, including the Carolina Analytics & Data Science (CADS) 
                  club, the Carolina Augmented and Virtual Reality (CARVR) group, and the Sustainable 
                  Business Club. <br><br>
                  
                  These experiences reflect my passion for technology, data-driven innovation, and visualization.`},{name:"Passions",paragraph:`I'm passionate about building new worlds, on and off the cloud. I love building innovative
                  solutions using creative design. I enjoy exploring unique and difficult approaches to push myself and 
                  the code I develop. <br><br>

                  My interests span computer graphics, financial modeling, and data visualizations\u2014areas 
                  where I combine analytical thinking with stunning visuals to form insightful and 
                  impactful experiences.`},{name:"Hobbies",paragraph:`Outside of academics, I enjoy drawing and painting, and spending time with friends and family. 
                  <br><br>
                  
                  A lifelong hockey fan, I love both playing the game and watching my favorite team, the 
                  Carolina Hurricanes. From 2022 to 2025, I was a member of the UNC Ice Hockey team, 
                  serving as Fundraising Chair from 2023-2024 and President of Operations from 2024 - 2025`}];paths=[{path:"assets/about/globe.obj",transform:this.composeTransform(new F(0,0,0),new qn(0,0,0),new F(1,1,1))},{path:"assets/about/old-well.obj",transform:this.composeTransform(new F(0,-.2,0),new qn(0,0,0),new F(.8,.8,.8))},{path:"assets/about/code.obj",transform:this.composeTransform(new F(0,0,0),new qn(0,0,0),new F(.03,.03,.03))},{path:"assets/about/helmet.obj",transform:this.composeTransform(new F(.25,-.2,0),new qn(0,0,0),new F(.75,.75,.75))}];canvasRef;aboutRef;currentSection="";currentSectionName=dr("");renderer;scene;camera;points;frameId=0;aboutObserver;aboutVisible=!1;isFadingOut=dr(!1);simScene;simCamera;simMaterial;simRenderTarget;pointsMaterial;simSize=512;uProgress=0;positionsTexture;globeTexture;uncTexture;helmetTexture;codingTexture;loadingManager=new Ea;loadingProgress=dr(0);isLoading=dr(!0);objLoader=new Dh(this.loadingManager);constructor(){this.loadingManager.onProgress=(e,t,i)=>{this.loadingProgress.set(t/i*100)},this.loadingManager.onLoad=()=>{this.isLoading.set(!1)}}ngOnInit(){this.currentSection=this.sections[0].paragraph,this.currentSectionName.set(this.sections[0].name)}ngAfterViewInit(){this.initAbout(),window.addEventListener("resize",this.onResize)}ngOnDestroy(){cancelAnimationFrame(this.frameId),window.removeEventListener("resize",this.onResize),this.renderer.dispose()}changeSection(e){let t=this.sections[e];t.name!==this.currentSectionName()&&(t.name==="Introduction"?this.simMaterial.uniforms.targetPositions.value=this.globeTexture:t.name==="About Me"?this.simMaterial.uniforms.targetPositions.value=this.uncTexture:t.name==="Hobbies"?this.simMaterial.uniforms.targetPositions.value=this.helmetTexture:t.name==="Passions"&&(this.simMaterial.uniforms.targetPositions.value=this.codingTexture),this.isFadingOut.set(!0),this.currentSectionName.set(t.name),setTimeout(()=>{this.currentSection=t.paragraph,this.currentSectionName.set(t.name),this.isFadingOut.set(!1)},500),this.morphObject(t.name))}morphObject(e){this.simMaterial.uniforms.isMorphing.value=!0,this.uProgress=0;let t=()=>{this.uProgress+=.01,this.simMaterial.uniforms.uProgress.value=Math.min(this.uProgress,1),this.uProgress<1?requestAnimationFrame(t):(e==="Introduction"?this.simRenderTarget.texture=this.globeTexture:e==="About Me"?this.simRenderTarget.texture=this.uncTexture:e==="Hobbies"?this.simRenderTarget.texture=this.helmetTexture:e==="Passions"&&(this.simRenderTarget.texture=this.codingTexture),this.simRenderTarget.texture.needsUpdate=!0,this.simMaterial.uniforms.positions.value=this.simRenderTarget.texture,this.simMaterial.uniforms.isMorphing.value=!1)};t()}composeTransform(e,t,i){let r=new Rt,s=new Pn;return e&&s.position.copy(e),t&&s.rotation.copy(t),i&&s.scale.copy(i),s.updateMatrix(),s.matrix.clone()}initAbout(){this.aboutObserver=new IntersectionObserver(o=>{this.aboutVisible=o[0].isIntersecting},{threshold:.2}),this.aboutObserver.observe(this.aboutRef.nativeElement);let e=this.canvasRef.nativeElement;this.renderer=new hs({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(2),this.renderer.setClearColor(0,0),this.camera=new zt(25,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,0,6),this.onResize(),this.scene=new Ri,this.simCamera=new Rr(-1,1,1,-1,1/Math.pow(2,53),1);let t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),i=new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),r=new Float32Array(this.simSize*this.simSize*3);for(let o=0;o<this.simSize*this.simSize;o++)r[o*3+0]=o%this.simSize/this.simSize,r[o*3+1]=o/this.simSize/this.simSize;this.simRenderTarget=new $n(this.simSize,this.simSize,{minFilter:Qt,magFilter:Qt,format:Yt,type:nn,depthBuffer:!1});let s=new Xt;s.setAttribute("position",new Bt(t,3)),s.setAttribute("uv",new Bt(i,2)),this.simScene=new Ri,Promise.all(this.paths.map(({path:o,transform:a})=>this.createObjTexture(o,this.simSize*this.simSize,a))).then(([o,a,c,l])=>{this.globeTexture=new Yi(o,this.simSize,this.simSize,Yt,nn),this.uncTexture=new Yi(a,this.simSize,this.simSize,Yt,nn),this.codingTexture=new Yi(c,this.simSize,this.simSize,Yt,nn),this.helmetTexture=new Yi(l,this.simSize,this.simSize,Yt,nn),this.globeTexture.needsUpdate=!0,this.uncTexture.needsUpdate=!0,this.helmetTexture.needsUpdate=!0,this.codingTexture.needsUpdate=!0,this.positionsTexture=this.globeTexture,this.positionsTexture.needsUpdate=!0,this.simMaterial=this.getSimMaterial(this.positionsTexture);let u=new jt(s,this.simMaterial);this.simScene.add(u);let d=new Xt,f=this.getColorArray();d.setAttribute("color",new Bt(f,3)),d.setAttribute("position",new Bt(r,3));let h=new Float32Array(this.simSize*this.simSize*2);for(let g=0;g<this.simSize*this.simSize;g++)h[g*2+0]=g%this.simSize/this.simSize,h[g*2+1]=Math.floor(g/this.simSize)/this.simSize;d.setAttribute("uv",new Bt(h,2)),this.pointsMaterial=this.getPointsMaterial(),this.points=new Pi(d,this.pointsMaterial),this.scene.add(this.points),this.animate()})}getSimMaterial(e){return new gn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D positions;
      uniform sampler2D targetPositions;
      uniform float uProgress;
      uniform bool isMorphing;

      void main() {
        vec2 uv = gl_FragCoord.xy / vec2(textureSize(positions, 0));
        vec3 pos = texture2D(positions, uv).rgb;
        vec3 target = texture2D(targetPositions, uv).rgb;
        vec3 finalPos = isMorphing ? mix(pos, target, uProgress) : pos;
        gl_FragColor = vec4(finalPos, 1.0);
      }
    `,uniforms:{positions:{value:e},uProgress:{value:0},targetPositions:{value:e},isMorphing:{value:!1}}})}getPointsMaterial(){return new gn({uniforms:{positions:{value:this.simRenderTarget.texture}},blending:Ii,depthWrite:!1,transparent:!0,vertexColors:!0,vertexShader:`
          uniform sampler2D positions;

          varying vec3 vColor;

          void main() {
            vec3 pos = texture2D(positions, uv).xyz;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            gl_PointSize = 2.0;
            vColor = color;
          }`,fragmentShader:`
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(1.0,1.0,1.0, 1.0);
          }`})}getColorArray(){let e=new Float32Array(this.simSize*this.simSize*3);for(let t=0;t<this.simSize*this.simSize;t++){let i=t*3;Math.random()<.25?(e[i+0]=0,e[i+1]=1,e[i+2]=1):(e[i+0]=1,e[i+1]=1,e[i+2]=1)}return e}createObjTexture(e,t,i){return new Promise((r,s)=>{let o=new Float32Array(t*4),a=[];this.objLoader.load(e,c=>{c.traverse(h=>{if(h instanceof jt){h.geometry.computeBoundingBox(),h.geometry.applyMatrix4(new Rt().makeScale(1.4,1.4,1.4));let m=new ll(h.geometry,1).attributes.position.array;for(let p=0;p<m.length;p+=6){let T=new F(m[p],m[p+1],m[p+2]),C=new F(m[p+3],m[p+4],m[p+5]);a.push([T,C])}}});let l=[];for(let h=a.length-1;h>0;h--){let g=Math.floor(Math.random()*(h+1));[a[h],a[g]]=[a[g],a[h]]}let u=a.length,d=Math.max(1,Math.floor(t/u)),f=0;for(let[h,g]of a){let v=Math.min(d,t-f);for(let m=0;m<v;m++){let p=Math.random(),T=new F().lerpVectors(h,g,p);if(i&&T.applyMatrix4(i),l.push(T.x,T.y,T.z),f++,f>=t)break}if(f>=t)break}for(let h=0;h<f;h++)o[h*4+0]=l[h*3+0],o[h*4+1]=l[h*3+1],o[h*4+2]=l[h*3+2],o[h*4+3]=1;r(o)})})}animate=()=>{if(this.frameId=requestAnimationFrame(this.animate),!this.aboutVisible)return;let e=performance.now()*.001;this.points&&(this.points.rotation.y+=.002),this.renderer.setRenderTarget(this.simRenderTarget),this.renderer.render(this.simScene,this.simCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)};onResize=()=>{let e=this.canvasRef.nativeElement,t=e.clientWidth,i=e.clientHeight;this.renderer.setSize(t,i,!1),this.camera instanceof zt&&(this.camera.aspect=t/i,this.camera.updateProjectionMatrix())};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-about"]],viewQuery:function(t,i){if(t&1&&(Gn(Ok,7),Gn(Lk,5)),t&2){let r;Dn(r=In())&&(i.canvasRef=r.first),Dn(r=In())&&(i.aboutRef=r.first)}},decls:18,vars:4,consts:[["about",""],["canvas",""],[1,"container"],[1,"about-container"],[1,"about-card"],[1,"about-headers"],[1,"top-header"],[1,"bottom-header"],[1,"about-content",3,"innerHTML"],[1,"about-button-container"],[1,"about-button",3,"ngClass"],[1,"canvas-container"],[1,"progress-bar-container"],[1,"about-button",3,"click","ngClass"],["id","progress-bar","max","100",3,"value"]],template:function(t,i){t&1&&(Re(0,"div",2,0)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h1",6),Ct(6,"Hello!"),Fe(),Re(7,"h2",7),Ct(8,"I'm Ben."),Fe()(),bt(9,"div",8),Ct(10," Learn more about me here: "),Re(11,"div",9),Yr(12,Uk,2,4,"div",10,kk),Fe()()(),Re(14,"div",11),hr(15,Bk,5,5,"div",12),bt(16,"canvas",null,1),Fe()()),t&2&&(yt(9),Os("fade-out",i.isFadingOut()),bn("innerHTML",i.currentSection,jx),yt(3),Zr(i.sections),yt(3),Fo(i.isLoading()?15:-1))},dependencies:[Vo,Sc,tE],styles:[".container[_ngcontent-%COMP%]{width:100vw;height:100vh;overflow-x:hidden;display:flex;color:var(--color-text)}.about-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:45vw;height:auto;font-size:clamp(1rem,1.5vw,1.5rem);justify-content:center;align-items:center}.about-card[_ngcontent-%COMP%]{width:80%;margin-left:25%;height:auto}.about-card[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]{height:22rem;overflow-x:hidden;margin-top:1rem;transition:opacity .4s ease}.about-card[_ngcontent-%COMP%]   .about-content.fade-out[_ngcontent-%COMP%]{opacity:0}.about-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.about-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.about-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--color-secondary);border-radius:8px;border:2px solid transparent;background-clip:content-box}.about-content[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--color-secondary) transparent}.about-headers[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]{font-size:clamp(3rem,5vw,5rem)}.about-headers[_ngcontent-%COMP%]   .bottom-header[_ngcontent-%COMP%]{color:var(--color-secondary);font-size:clamp(3.5rem,6vw,6rem)}.about-button-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;position:relative;bottom:0%}.about-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:var(--color-secondary);padding:clamp(.6em,2vh,1.2em) 1.1em;border:2px solid var(--color-accent);border-radius:3rem;margin-top:2rem;transform:background .5s ease}.about-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:clamp(.4em,.8vh,.6em) 1.1em;line-height:1;vertical-align:middle}.about-button.active[_ngcontent-%COMP%]{color:var(--color-text);background:var(--color-tertiary-highlight)}.canvas-container[_ngcontent-%COMP%]{display:flex;width:55vw;height:auto;margin:0 auto}.progress-bar-container[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;width:auto;transform:translate(-50%,-50%);align-items:center;justify-content:center;display:flex;flex-direction:column;padding:1rem;border-radius:8px;z-index:10;color:var(--color-text)}.progress-bar-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.5rem}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#00fff9}progress[_ngcontent-%COMP%]{width:200px;height:12px;margin:1rem;border-radius:6px;overflow:hidden;appearance:none}canvas[_ngcontent-%COMP%]{width:min(100vw,100vh);height:min(100vh,100vh);aspect-ratio:1;display:block;background:transparent}"],changeDetection:0})};var Lr={_origin:"https://api.emailjs.com"};var KS=(n,e="https://api.emailjs.com")=>{Lr._userID=n,Lr._origin=e};var Ah=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var Dl=class{constructor(e){this.status=e.status,this.text=e.responseText}};var Rh=(n,e,t={})=>new Promise((i,r)=>{let s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{let a=new Dl(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new Dl(o))}),s.open("POST",Lr._origin+n,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)});var ew=(n,e,t,i)=>{let r=i||Lr._userID;return Ah(r,n,e),Rh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})};var Vk=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},tw=(n,e,t,i)=>{let r=i||Lr._userID,s=Vk(t);Ah(r,n,e);let o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",n),o.append("template_id",e),o.append("user_id",r),Rh("/api/v1.0/email/send-form",o)};var nw={init:KS,send:ew,sendForm:tw};var zk=["canvas"],Hk=["contact"];function Gk(n,e){n&1&&bt(0,"span",15)}function jk(n,e){n&1&&Ct(0," Send ")}function Wk(n,e){n&1&&(Re(0,"div",18),Ct(1,"Message Sent!"),Fe())}function $k(n,e){n&1&&(Re(0,"span",19),Ct(1,"Error Sending!"),Fe())}function qk(n,e){if(n&1&&hr(0,Wk,2,0,"div",18)(1,$k,2,0,"span",19),n&2){let t=Hn();Fo(t.emailSuccess()?0:1)}}var Ph=class n{ngAfterViewInit(){this.initContact(),window.addEventListener("mousemove",this.updateMousePosition),window.addEventListener("resize",this.onResize)}ngOnDestroy(){cancelAnimationFrame(this.frameId),window.removeEventListener("resize",this.onResize),window.removeEventListener("mousemove",this.updateMousePosition),this.renderer.dispose()}sendEmailTriggered=dr(!1);emailSuccess=dr(!1);isSending=dr(!1);sendEmail(e){e.preventDefault(),this.isSending.set(!0),nw.sendForm("service_4wl205l","template_g2rnp8p",e.target,"SQCU20t7kVZpEjRV-").then(()=>{this.sendEmailTriggered.set(!0),this.emailSuccess.set(!0),this.isSending.set(!1)},t=>{this.sendEmailTriggered.set(!0),this.isSending.set(!1),alert("Failed to send email. Please try again.")})}canvasRef;contactRef;renderer;scene;camera;frameId=0;contactObserver;contactVisible=!1;points;simScene;simCamera;simMaterial;simRenderTarget;pointsMaterial;simSize=256;getPoint(e,t,i,r){return e.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),e.length()>1?this.getPoint(e,t,i,r):e.normalize().multiplyScalar(t).toArray(i,r)}getSphere(e,t){let i=new Float32Array(e*4),r=new F;for(let s=0;s<e*4;s+=4)this.getPoint(r,t,i,s);return i}getSimMaterial(e){return new gn({vertexShader:`varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,fragmentShader:`
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uCurlFreq;
        varying vec2 vUv;
        uniform vec3 uMouseRayOrigin;
        uniform float uMouseRadius; 
        uniform vec3 uMouseRayDir;    
        
  
        vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
  
        vec4 mod289(vec4 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
  
        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }
  
        vec4 taylorInvSqrt(vec4 r)
        {
          return 1.79284291400159 - 0.85373472095314 * r;
        }
  
        float snoise(vec3 v)
          {
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
        // First corner
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 =   v - i + dot(i, C.xxx) ;
  
        // Other corners
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
  
          //   x0 = x0 - 0.0 + 0.0 * C.xxx;
          //   x1 = x0 - i1  + 1.0 * C.xxx;
          //   x2 = x0 - i2  + 2.0 * C.xxx;
          //   x3 = x0 - 1.0 + 3.0 * C.xxx;
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
          vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  
        // Permutations
          i = mod289(i);
          vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
          float n_ = 0.142857142857; // 1.0/7.0
          vec3  ns = n_ * D.wyz - D.xzx;
  
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
  
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
  
          //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
          //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
  
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
  
        //Normalise gradients
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
  
        // Mix final noise value
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                        dot(p2,x2), dot(p3,x3) ) );
          }
  
        vec3 fade(vec3 t) {
          return t*t*t*(t*(t*6.0-15.0)+10.0);
        }
  
        // Classic Perlin noise
        float cnoise(vec3 P)
        {
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod289(Pi0);
          Pi1 = mod289(Pi1);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;
  
          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);
  
          vec4 gx0 = ixy0 * (1.0 / 7.0);
          vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
          vec4 gx1 = ixy1 * (1.0 / 7.0);
          vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;
  
          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);
  
          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
          return 2.2 * n_xyz;
        }
          
        vec3 snoiseVec3(vec3 x) {
            float s  = snoise(x);
            float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
            float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
            return vec3(s, s1, s2);
          }
          
        vec3 curl(vec3 p) {
          float e = 0.1;
          vec3 dx = vec3(e, 0.0, 0.0);
          vec3 dy = vec3(0.0, e, 0.0);
          vec3 dz = vec3(0.0, 0.0, e);
  
          vec3 p_x0 = snoiseVec3(p - dx);
          vec3 p_x1 = snoiseVec3(p + dx);
          vec3 p_y0 = snoiseVec3(p - dy);
          vec3 p_y1 = snoiseVec3(p + dy);
          vec3 p_z0 = snoiseVec3(p - dz);
          vec3 p_z1 = snoiseVec3(p + dz);
  
          float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
          float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
          float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
  
          return normalize(vec3(x, y, z) / (2.0 * e));
        }
            
        void main() {
          float t = uTime * 0.015;
          vec3 pos = texture2D(positions, vUv).rgb; // basic simulation: displays the particles in place.
          vec3 curlPos = texture2D(positions, vUv).rgb;
          pos = curl(pos * uCurlFreq + t);
          curlPos = curl(curlPos * uCurlFreq + t);
          curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
          curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
          curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
          curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
          
          vec3 morphBase = mix(pos, curlPos, cnoise(pos + t));
          // Shortest distance from point to ray
          vec3 p = morphBase;
          vec3 o = uMouseRayOrigin;
          vec3 d = normalize(uMouseRayDir);

          vec3 v = p - o;

          float rayT = dot(v, d);
          vec3 closest = o + d * rayT;

          vec3 delta = p - closest;
          float distSq = dot(delta, delta);
          float threshold = uMouseRadius * uMouseRadius;

          if (distSq < threshold && morphBase.z > -1.0) {
            float strength = smoothstep(uMouseRadius * uMouseRadius, 0.0, distSq); // 0 \u2192 1 as particle gets close
            vec3 offset = normalize(delta) * strength * 0.15; // scale down for subtle effect
            morphBase += offset;
          }
          vec3 translate = vec3(0,0.0,0.0);
          morphBase += translate;

          gl_FragColor = vec4(morphBase, 1.0);
        }
        `,uniforms:{positions:{value:e},uTime:{value:0},uCurlFreq:{value:.31},uMouseRayOrigin:{value:new F},uMouseRayDir:{value:new F},uMouseRadius:{value:.15}}})}getColorArray(){let e=new Float32Array(this.simSize*this.simSize*3);for(let t=0;t<this.simSize*this.simSize;t++){let i=t*3;Math.random()<.25?(e[i+0]=0,e[i+1]=1,e[i+2]=1):(e[i+0]=1,e[i+1]=1,e[i+2]=1)}return e}getPointsMaterial(){return new gn({uniforms:{positions:{value:this.simRenderTarget.texture},uTime:{value:0},uFocus:{value:7},uFov:{value:14},uBlur:{value:8.1}},blending:Ii,depthWrite:!1,transparent:!0,vertexColors:!0,vertexShader:`
          uniform sampler2D positions;
          uniform float uTime;
          uniform float uFocus;
          uniform float uFov;
          uniform float uBlur;
          varying float vDistance;
          varying vec3 vColor;
          void main() { 
            vec3 pos = texture2D(positions, position.xy).xyz;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vDistance = abs(uFocus - -mvPosition.z);
            float factor = (step(1.0 - (1.0 / uFov), position.x));
            gl_PointSize = factor * vDistance * uBlur * 3.0;
            vColor = color;
          }`,fragmentShader:`uniform float uOpacity;
          varying float vDistance;
          varying vec3 vColor;
          void main() {
            vec2 cxy = 2.0 * gl_PointCoord - 1.0;
            if (dot(cxy, cxy) > 1.0) discard;
            gl_FragColor = vec4(vColor, (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
          }`})}raycaster=new Zs;mouse=new lt;mouse3D=new F;mousePlane=new fi(new F(0,0,1),-1);mouseRayOrigin=new F;mouseRayDirection=new F;updateMousePosition=e=>{if(!this.contactVisible)return;let t=this.canvasRef.nativeElement.getBoundingClientRect();e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom||(this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.mouseRayOrigin.copy(this.raycaster.ray.origin),this.mouseRayDirection.copy(this.raycaster.ray.direction),this.simMaterial.uniforms.uMouseRayOrigin.value.copy(this.mouseRayOrigin),this.simMaterial.uniforms.uMouseRayDir.value.copy(this.mouseRayDirection))};initContact(){this.contactObserver=new IntersectionObserver(h=>{this.contactVisible=h[0].isIntersecting},{threshold:.1}),this.contactObserver.observe(this.contactRef.nativeElement);let e=this.canvasRef.nativeElement;this.renderer=new hs({canvas:e,antialias:!1,alpha:!0});let t=window.devicePixelRatio;this.renderer.setPixelRatio(Math.min(t,1)),this.renderer.setClearColor(0,0),this.camera=new zt(25,e.clientWidth/e.clientHeight,.1,1e3);let i=e.clientWidth/e.clientHeight;this.camera.position.set(0,0,this.getAdaptiveZ(i)),this.onResize(),this.scene=new Ri,this.simCamera=new Rr(-1,1,1,-1,1/Math.pow(2,53),1);let r=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),s=new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),o=new Float32Array(this.simSize*this.simSize*3);for(let h=0;h<this.simSize*this.simSize;h++)o[h*3+0]=h%this.simSize/this.simSize,o[h*3+1]=h/this.simSize/this.simSize;this.simRenderTarget=new $n(this.simSize,this.simSize,{minFilter:Qt,magFilter:Qt,format:Yt,type:nn,depthBuffer:!1});let a=new Xt;a.setAttribute("position",new Bt(r,3)),a.setAttribute("uv",new Bt(s,2)),this.simScene=new Ri;let c=this.getSphere(this.simSize*this.simSize,this.simSize/4),l=new Yi(c,this.simSize,this.simSize,Yt,nn);l.needsUpdate=!0,this.simMaterial=this.getSimMaterial(l);let u=new jt(a,this.simMaterial);this.simScene.add(u);let d=new Xt,f=this.getColorArray();d.setAttribute("color",new Bt(f,3)),d.setAttribute("position",new Bt(o,3)),this.pointsMaterial=this.getPointsMaterial(),this.points=new Pi(d,this.pointsMaterial),this.scene.add(this.points),this.animate()}getAdaptiveZ(e){return uy.clamp(6/e,6,10)}animate=()=>{if(this.frameId=requestAnimationFrame(this.animate),!this.contactVisible)return;let e=performance.now()*.001;this.simMaterial.uniforms.uTime.value=e*.2,this.pointsMaterial.uniforms.uTime.value=e*1,this.renderer.setRenderTarget(this.simRenderTarget),this.renderer.render(this.simScene,this.simCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)};onResize=()=>{let e=this.canvasRef.nativeElement,t=e.clientWidth,i=e.clientHeight;if(this.renderer.setSize(t,i,!1),this.camera instanceof zt){let r=t/i;this.camera.aspect=r,this.camera.updateProjectionMatrix(),this.camera.position.z=this.getAdaptiveZ(r)}};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-contact"]],viewQuery:function(t,i){if(t&1&&(Gn(zk,7),Gn(Hk,5)),t&2){let r;Dn(r=In())&&(i.canvasRef=r.first),Dn(r=In())&&(i.contactRef=r.first)}},decls:27,vars:3,consts:[["contact",""],["canvas",""],[1,"layout"],[1,"contact-side"],[1,"contact-box"],[1,"headers"],[3,"submit"],["for","name"],["type","text","id","name","name","name","rows","1","required","","placeholder","What's a good name for you?"],["for","email"],["type","email","id","email","name","email","rows","1","required","","placeholder","What's a good email for you?"],["for","message"],["id","message","name","message","rows","8","required","","placeholder","What would you like to send me?"],[1,"button-error-container"],["type","submit",3,"disabled"],[1,"spinner"],[1,"canvas-side"],["id","three-canvas"],[1,"email-success"],[1,"email-error"]],template:function(t,i){if(t&1){let r=pr();Re(0,"div",2,0)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h3"),Ct(6,"Get in Touch"),Fe(),Re(7,"h2"),Ct(8,"Contact Me!"),Fe()(),Re(9,"form",6),Kn("submit",function(o){return Hi(r),Gi(i.sendEmail(o))}),Re(10,"label",7),Ct(11,"Name"),Fe(),bt(12,"textarea",8),Re(13,"label",9),Ct(14,"Email"),Fe(),bt(15,"textarea",10),Re(16,"label",11),Ct(17,"Message"),Fe(),bt(18,"textarea",12),Re(19,"div",13)(20,"button",14),hr(21,Gk,1,0,"span",15)(22,jk,1,0),Fe(),hr(23,qk,2,1),Fe()()()(),Re(24,"div",16),bt(25,"canvas",17,1),Fe()()}t&2&&(yt(20),bn("disabled",i.isSending()),yt(),Fo(i.isSending()?21:22),yt(2),Fo(i.sendEmailTriggered()?23:-1))},styles:[".layout[_ngcontent-%COMP%]{display:flex;height:auto;width:100vw;color:var(--color-text)}.contact-side[_ngcontent-%COMP%]{width:40%;height:100%;min-height:100vh;display:flex;align-items:center;justify-content:flex-end}.contact-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;right:0;width:65%;height:auto;padding:2rem;border-radius:2rem;background:var(--color-primary);box-shadow:0 1rem 2rem #000000b3,0 1rem 2rem #000000b3;filter:brightness(90%);justify-content:flex-start;gap:1rem;overflow:auto}.headers[_ngcontent-%COMP%]{gap:1rem}.contact-box[_ngcontent-%COMP%]:hover{filter:brightness(100%)}.contact-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,2rem);color:var(--color-secondary)}.contact-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(.75rem,1.25vw,1.25rem);color:var(--color-primary-highlight)}.contact-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.contact-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:clamp(.75rem,1.25vw,1.25rem)}.contact-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none;padding:.75rem;border-radius:.5rem;font-size:clamp(.75rem,1.25vw,1.25rem);font-family:-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:var(--color-primary-highlight);color:var(--color-text);resize:none;box-shadow:0 .5rem 1rem #0003,0 .5rem 1rem #0003}textarea[_ngcontent-%COMP%]::placeholder, input[_ngcontent-%COMP%]::placeholder{color:var(--color-text);opacity:.7}.button-error-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.button-error-container[_ngcontent-%COMP%]   .email-success[_ngcontent-%COMP%]{padding:.75rem 3rem;font-size:clamp(.75rem,1.25vw,1.25rem);margin-top:1rem;margin-left:0;margin-right:auto;align-self:flex-start;justify-content:center;color:var(--color-secondary);border-radius:1rem;transition:background-color .2s ease;border:none}.button-error-container[_ngcontent-%COMP%]   .email-error[_ngcontent-%COMP%]{padding:.75rem 3rem;font-size:clamp(.75rem,1.25vw,1.25rem);margin-top:1rem;margin-left:0;margin-right:auto;align-self:flex-start;justify-content:center;color:red;border-radius:1rem;transition:background-color .2s ease;border:none}.spinner[_ngcontent-%COMP%]{display:inline-block;width:clamp(.75rem,1.25vw,1.25rem);height:clamp(.75rem,1.25vw,1.25rem);border:3px solid rgba(255,255,255,.3);border-top:3px solid white;border-radius:50%;animation:_ngcontent-%COMP%_spin .6s linear infinite;vertical-align:middle}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.contact-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem 3rem;font-size:clamp(.75rem,1.25vw,1.25rem);margin-top:1rem;margin-left:0;margin-right:auto;align-self:flex-start;background-color:var(--color-tertiary);color:var(--color-text);border-radius:1rem;cursor:pointer;transition:background-color .2s ease;border:none;min-width:4rem;box-shadow:0 .5rem 1rem #0003,0 .5rem 1rem #0003}.contact-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--color-tertiary-highlight)}.canvas-side[_ngcontent-%COMP%]{width:60%;height:auto;right:0;position:absolute;justify-content:center;align-items:center;display:flex}#three-canvas[_ngcontent-%COMP%]{width:min(100vw,100vh);height:min(100vh,100vh);aspect-ratio:1;display:block}"]})};var Xk=["section"],Yk=(n,e)=>e.name;function Zk(n,e){if(n&1){let t=pr();Re(0,"a",9),Kn("click",function(){let r=Hi(t).$implicit,s=Hn();return Gi(s.scrollToSection(r.name))}),Ct(1),Fe()}if(n&2){let t=e.$implicit;Os("active",t.active),yt(),jn(t.name)}}var Nh=class n{sections=[{name:"About",active:!1},{name:"Work",active:!1},{name:"Projects",active:!1},{name:"Skills",active:!1},{name:"Contact",active:!1}];sectionRefs;scrollToSection(e){e=e.toLowerCase();let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"center"})}updateActiveSection(){let t=this.sectionRefs.toArray(),i=-1,r=Number.MAX_VALUE;for(let s=0;s<t.length;s++){let a=t[s].nativeElement.getBoundingClientRect(),c=Math.abs(a.top-100);a.top<window.innerHeight&&a.bottom>0&&c<r&&(r=c,i=s)}this.sections.forEach((s,o)=>s.active=o===i)}ngAfterViewInit(){window.addEventListener("scroll",this.updateActiveSection.bind(this)),this.updateActiveSection()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=En({type:n,selectors:[["app-home"]],viewQuery:function(t,i){if(t&1&&Gn(Xk,5),t&2){let r;Dn(r=In())&&(i.sectionRefs=r)}},decls:19,vars:0,consts:[["about","","section",""],["section",""],[1,"navigation-header"],[3,"active"],["id","about",1,"page-section"],["id","work",1,"page-section"],["id","projects",1,"page-section"],["id","skills",1,"page-section"],["id","contact",1,"page-section"],[3,"click"]],template:function(t,i){t&1&&(Re(0,"div",2),Yr(1,Zk,2,3,"a",3,Yk),Fe(),Re(3,"section",4,0),bt(6,"app-about"),Fe(),Re(7,"section",5,1),bt(9,"app-work"),Fe(),Re(10,"section",6,1),bt(12,"app-projects"),Fe(),Re(13,"section",7,1),bt(15,"app-skills"),Fe(),Re(16,"section",8,1),bt(18,"app-contact"),Fe()),t&2&&(yt(),Zr(i.sections))},dependencies:[Ad,wh,Th,Ih,Ph],styles:["*[_ngcontent-%COMP%]{overflow-x:hidden}.navigation-header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;padding:1rem;margin-left:.5rem;color:var(--color-text-dark);display:flex;flex-direction:column;gap:.5rem;z-index:1000;font-size:clamp(.5rem,1.5vw,1.5rem);border:1px solid var(--color-text-dark)}.navigation-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-text-dark);text-decoration:none;font-weight:700;transition:color .2s}.navigation-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navigation-header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#00fff9}"]})};var iw=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Nh},{path:"**",redirectTo:"home"}];hE(Id,{providers:[QE(iw,KE()),_m(fd)]}).catch(n=>console.error(n));
