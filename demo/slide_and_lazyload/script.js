/**
 * flipsnap.js
 *
 * @version  0.6.0
 * @url http://pxgrid.github.com/js-flipsnap/
 *
 * Copyright 2011 PixelGrid, Inc.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(e,t,n){function l(e,t){return this instanceof l?this.init(e,t):new l(e,t)}function c(e,t){return e.changedTouches?e.changedTouches[0][t]:e[t]}function h(e){return m(e,function(e){return r.style[e]!==n})}function p(e,t,r){var o=s[t];o?e[o]=r:e[t]!==n?(s[t]=t,e[t]=r):m(i,function(i){var o=v(i)+v(t);if(e[o]!==n)return s[t]=o,e[o]=r,!0})}function d(e){if(r.style[e]!==n)return e;var t;return m(i,function(i){var s=v(i)+v(e);if(r.style[s]!==n)return t="-"+i+"-"+e,!0}),t}function v(e){return e.charAt(0).toUpperCase()+e.substr(1)}function m(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0;return!1}var r=t.createElement("div"),i=["webkit","moz","o","ms"],s={},o=l.support={},u=!1;o.transform3d=h(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),o.transform=h(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]),o.transition=h(["transitionProperty","WebkitTransitionProperty","MozTransitionProperty","OTransitionProperty","msTransitionProperty"]),o.addEventListener="addEventListener"in e,o.mspointer=e.navigator.msPointerEnabled,o.cssAnimation=(o.transform3d||o.transform)&&o.transition;var a=["touch","mouse"],f={start:{touch:"touchstart",mouse:"mousedown"},move:{touch:"touchmove",mouse:"mousemove"},end:{touch:"touchend",mouse:"mouseup"}};o.addEventListener&&(t.addEventListener("gesturestart",function(){u=!0}),t.addEventListener("gestureend",function(){u=!1})),l.prototype.init=function(e,r){var i=this;i.element=e,typeof e=="string"&&(i.element=t.querySelector(e));if(!i.element)throw new Error("element not found");return o.mspointer&&(i.element.style.msTouchAction="pan-y"),r=r||{},i.distance=r.distance,i.maxPoint=r.maxPoint,i.disableTouch=r.disableTouch===n?!1:r.disableTouch,i.disable3d=r.disable3d===n?!1:r.disable3d,i.transitionDuration=r.transitionDuration===n?"350ms":r.transitionDuration+"ms",i.currentPoint=0,i.currentX=0,i.animation=!1,i.use3d=o.transform3d,i.disable3d===!0&&(i.use3d=!1),o.cssAnimation?i._setStyle({transitionProperty:d("transform"),transitionTimingFunction:"cubic-bezier(0,0,0.25,1)",transitionDuration:"0ms",transform:i._getTranslate(0)}):i._setStyle({position:"relative",left:"0px"}),i.refresh(),a.forEach(function(e){i.element.addEventListener(f.start[e],i,!1)}),i},l.prototype.handleEvent=function(e){var t=this;switch(e.type){case f.start.touch:case f.start.mouse:t._touchStart(e);break;case f.move.touch:case f.move.mouse:t._touchMove(e);break;case f.end.touch:case f.end.mouse:t._touchEnd(e);break;case"click":t._click(e)}},l.prototype.refresh=function(){var e=this;e._maxPoint=e.maxPoint===n?function(){var t=e.element.childNodes,n=-1,r=0,i=t.length,s;for(;r<i;r++)s=t[r],s.nodeType===1&&n++;return n}():e.maxPoint,e.distance===n?e._maxPoint<0?e._distance=0:e._distance=e.element.scrollWidth/(e._maxPoint+1):e._distance=e.distance,e._maxX=-e._distance*e._maxPoint,e.moveToPoint()},l.prototype.hasNext=function(){var e=this;return e.currentPoint<e._maxPoint},l.prototype.hasPrev=function(){var e=this;return e.currentPoint>0},l.prototype.toNext=function(e){var t=this;if(!t.hasNext())return;t.moveToPoint(t.currentPoint+1,e)},l.prototype.toPrev=function(e){var t=this;if(!t.hasPrev())return;t.moveToPoint(t.currentPoint-1,e)},l.prototype.moveToPoint=function(e,t){var r=this;t=t===n?r.transitionDuration:t+"ms";var i=r.currentPoint;e===n&&(e=r.currentPoint),e<0?r.currentPoint=0:e>r._maxPoint?r.currentPoint=r._maxPoint:r.currentPoint=parseInt(e,10),o.cssAnimation?r._setStyle({transitionDuration:t}):r.animation=!0,r._setX(-r.currentPoint*r._distance,t),i!==r.currentPoint&&(r._triggerEvent("fsmoveend",!0,!1),r._triggerEvent("fspointmove",!0,!1))},l.prototype._setX=function(e,t){var n=this;n.currentX=e,o.cssAnimation?n.element.style[s.transform]=n._getTranslate(e):n.animation?n._animate(e,t||n.transitionDuration):n.element.style.left=e+"px"},l.prototype._touchStart=function(e){var n=this;if(n.disableTouch||n._eventType||u)return;m(a,function(t){if(e.type===f.start[t])return n._eventType=t,!0}),n.element.addEventListener(f.move[n._eventType],n,!1),t.addEventListener(f.end[n._eventType],n,!1);var r=e.target.tagName;n._eventType==="mouse"&&r!=="SELECT"&&r!=="INPUT"&&r!=="TEXTAREA"&&r!=="BUTTON"&&e.preventDefault(),o.cssAnimation?n._setStyle({transitionDuration:"0ms"}):n.animation=!1,n.scrolling=!0,n.moveReady=!1,n.startPageX=c(e,"pageX"),n.startPageY=c(e,"pageY"),n.basePageX=n.startPageX,n.directionX=0,n.startTime=e.timeStamp,n._triggerEvent("fstouchstart",!0,!1)},l.prototype._touchMove=function(e){var t=this;if(!t.scrolling||u)return;var n=c(e,"pageX"),r=c(e,"pageY"),i,s,o,a;if(t.moveReady){e.preventDefault(),e.stopPropagation(),i=n-t.basePageX,s=t.currentX+i;if(s>=0||s<t._maxX)s=Math.round(t.currentX+i/3);t.directionX=i===0?t.directionX:i>0?-1:1;var f=!t._triggerEvent("fstouchmove",!0,!0,{delta:i,direction:t.directionX});f?t._touchAfter({moved:!1,originalPoint:t.currentPoint,newPoint:t.currentPoint,cancelled:!0}):t._setX(s)}else o=Math.abs(n-t.startPageX),a=Math.abs(r-t.startPageY),o>5?(e.preventDefault(),e.stopPropagation(),t.moveReady=!0,t.element.addEventListener("click",t,!0)):a>5&&(t.scrolling=!1);t.basePageX=n},l.prototype._touchEnd=function(e){var n=this;n.element.removeEventListener(f.move[n._eventType],n,!1),t.removeEventListener(f.end[n._eventType],n,!1),n._eventType=null;if(!n.scrolling)return;var r=-n.currentX/n._distance;r=n.directionX>0?Math.ceil(r):n.directionX<0?Math.floor(r):Math.round(r),r<0?r=0:r>n._maxPoint&&(r=n._maxPoint),n._touchAfter({moved:r!==n.currentPoint,originalPoint:n.currentPoint,newPoint:r,cancelled:!1}),n.moveToPoint(r)},l.prototype._click=function(e){var t=this;e.stopPropagation(),e.preventDefault()},l.prototype._touchAfter=function(e){var t=this;t.scrolling=!1,t.moveReady=!1,setTimeout(function(){t.element.removeEventListener("click",t,!0)},200),t._triggerEvent("fstouchend",!0,!1,e)},l.prototype._setStyle=function(e){var t=this,n=t.element.style;for(var r in e)p(n,r,e[r])},l.prototype._animate=function(e,t){var n=this,r=n.element,i=+(new Date),s=parseInt(r.style.left,10),o=e,u=parseInt(t,10),a=function(e,t){return-(e/=t)*(e-2)},f=setInterval(function(){var e=new Date-i,t,n;e>u?(clearInterval(f),n=o):(t=a(e,u),n=t*(o-s)+s),r.style.left=n+"px"},10)},l.prototype.destroy=function(){var e=this;a.forEach(function(t){e.element.removeEventListener(f.start[t],e,!1)})},l.prototype._getTranslate=function(e){var t=this;return t.use3d?"translate3d("+e+"px, 0, 0)":"translate("+e+"px, 0)"},l.prototype._triggerEvent=function(e,n,r,i){var s=this,o=t.createEvent("Event");o.initEvent(e,n,r);if(i)for(var u in i)i.hasOwnProperty(u)&&(o[u]=i[u]);return s.element.dispatchEvent(o)},typeof exports=="object"?module.exports=l:typeof define=="function"&&define.amd?define(function(){return l}):e.Flipsnap=l})(window,window.document);
KISSY.ready(function(){

    var isLocal = (location.host.indexOf('test.') >= 0);

    KISSY.config({
        debug: true,
        packages: [
            {
                name: "mods",
                path: "./"
            }
        ]
    });

    var modList = [
        "./mods/of-slide/",
        "./mods/ofa-titlelist/",
        "./mods/ofa-nowpos/"
    ];


    KISSY.use(modList, function(){
        var mods = [].slice.call(arguments, 1);
        [].forEach.call(mods, function(mod, key){
            if(mod.cselector) {
                var els = document.getElementsByClassName(mod.cselector);
                [].forEach.call(els, function(el, index){
                    new mod(el);
                });
            }
        });
    });

});
